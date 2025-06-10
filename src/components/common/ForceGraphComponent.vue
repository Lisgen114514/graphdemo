<template>
  <!--  力导向图-->
  <div ref="graph" class="tree-graph" id="forceGraph"></div>
</template>

<script setup lang="ts">
import * as d3 from 'd3';
import {ref, watch, nextTick} from 'vue';
import {GRAPH_TYPE} from "@/assets/dictionarys/graphType";
import {toggleCollapse} from "@/assets/scripts/graphUtils";

const graphData = defineModel('graphData')

const selectdNode = defineModel('selectedNode')

//图的类型（树图还是力导向图等）
const props = defineProps({
  selectedType: {
    type: String,
  }
});
const chartDom = ref(null)

//初始默认高度，必须有，否则极易为0
let height = 800;
let width = 600;

const graph = ref(null);
let simulation;


// 将树形结构转换为扁平化的 nodes 和 links
const flattenTree = (data) => {
  const nodes = [];
  const links = [];

  const traverse = (node, parent = null) => {
    nodes.push({
      id: node.id,
      name: node.name,
      description: node.description,
      collapsed: node.collapsed || false,
      children: node.children || [],
      show_id: node.show_id,
    });

    if (parent) {
      // links.push({source: parent.id, target: node.id});
      links.push({source: parent.show_id, target: node.show_id});
    }

    if (!node.collapsed && node.children && node.children.length) {
      node.children.forEach((child) => traverse(child, node));
    }
  };
  traverse(data);
  return {nodes, links};
};

// 绘制力导向图
const drawGraph = () => {
  let flattenedData = flattenTree(graphData.value); // 转换数据
  const {nodes, links} = flattenedData;
  // console.log(width, height);
  // 清空之前的图表
  d3.select(graph.value).selectAll('*').remove();

  // 初始化 SVG 容器
  const svg = d3
          .select(graph.value)
          .append('svg')
          .attr('width', width)
          .attr('height', height)
      // .style('background-color', '#f0f8ff')
  ;

  // 力导向图布局
  simulation = d3
      .forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.show_id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
  // 绘制连线
  const link = svg
      .append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', 'black')
      .attr('stroke-width', 2);

  // 绘制节点
  const node = svg
      .append('g')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', 10)
      .attr('fill', d => (d.collapsed ? 'orange' : 'steelblue')) // 根据 collapsed 状态设置颜色
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .call(
          d3
              .drag()
              .on('start', dragStarted)
              .on('drag', dragged)
              .on('end', dragEnded)
      )
      .on('click', (event, d) => handleNodeClick(d)); // 监听点击事件

  // 节点标签
  const labels = svg
      .append('g')
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('x', 12)
      .attr('y', 5)
      .text(d => d.name)
      .style('font-size', '12px')
      .style('fill', '#303133');
  // 力导向图更新位置
  simulation.on('tick', () => {
    link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

    // node.attr('cx', d => d.x).attr('cy', d => d.y);
    //限制位置范围

    node
        .attr("cx", d => d.x = Math.max(30, d.x))
        .attr("cy", d => d.y = Math.max(30, d.y));
    labels.attr('x', d => d.x + 12).attr('y', d => d.y + 5);
    autoResizeCanvas(svg, simulation, nodes)
  });

  //重设画布大小
  function autoResizeCanvas(svg, simulation, nodes, padding = 100, minSize = 600) {
    // 如果还没 tick，x/y 可能是 undefined
    if (nodes.length === 0 || !nodes[0].x) return;

    // 计算节点分布边界
    const extentX = d3.extent(nodes, d => d.x);
    const extentY = d3.extent(nodes, d => d.y);

    // 计算所需画布大小
    const neededWidth = Math.max(minSize, extentX[1] - extentX[0] + padding * 2 + 200);
    const neededHeight = Math.max(minSize, extentY[1] - extentY[0] + padding * 2 + 200);

    // 设置 SVG 尺寸
    svg.attr("width", neededWidth).attr("height", neededHeight);

    // 更新力中心
    simulation.force("center", d3.forceCenter(neededWidth / 2, neededHeight / 2));
  }


  // 拖拽事件处理
  function dragStarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragEnded(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }


  // 处理节点点击事件
  const handleNodeClick = (nodeData) => {
    toggleCollapse(graphData.value, nodeData.show_id); // 切换节点的收缩状态
    drawGraph(); // 重新绘制图表
    selectdNode.value = nodeData
  };
};


// 监听graphData 变化，重新渲染图表
watch(
    () => graphData.value,
    () => {
      nextTick(
          () => {
            if (!chartDom.value) {
              chartDom.value = document.getElementById('forceGraph');
            }
            height = chartDom.value.offsetHeight;
            width = chartDom.value.offsetWidth;
            drawGraph();
          }
      )

    }, {deep: true}
);

watch(() => props.selectedType,
    () => {
      if (GRAPH_TYPE.FORCE_GRAPH === props.selectedType) {
        nextTick(
            () => {
              if (!chartDom.value) {
                chartDom.value = document.getElementById('forceGraph');
              }
              height = chartDom.value.offsetHeight;
              width = chartDom.value.offsetWidth;
              drawGraph();
            }
        )
      }
    }
)

</script>

<style scoped>
</style>

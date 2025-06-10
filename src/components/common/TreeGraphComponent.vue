<template>
  <div ref="graph" class="tree-graph" id="treeGraph"></div>
</template>

<script setup lang="ts">
import {nextTick, ref, shallowRef, watch} from 'vue';
import * as echarts from 'echarts';
import {calcHeightByNode} from "@/assets/scripts/treeUtils";
import {getDefaultChartOption} from "@/assets/graphJSON/mainPatientChartOption";
import {GRAPH_TYPE} from "@/assets/dictionarys/graphType";
import {toggleCollapse} from "@/assets/scripts/graphUtils";


//图的类型（树图还是力导向图等）
const props = defineProps({
  // 图是树图还是力导向图，父组件只展示树图可不传
  selectedType: {
    type: String,
  },

  // 图的名称，比如专家图谱还是患者图谱，父组件只展示其中一种可不传
  selectedOption: {
    type: String
  }
});
// 为了力导向图和树图可视化数据相同，使用model绑定父子组件，必须传
const graphData = defineModel('graphData', {
  type: Object,
  required: true,
})
//图中选择的节点
const selectedNode = defineModel('selectedNode')


// 用于存储被点击的节点信息
const chartDom = ref(null)

let myChart = shallowRef(null);
//默认高度必须有，否则会导致0
const height = 600;

//比较粗略计算新图需要多少高度
function resetHeight() {
  chartDom.value.style.height = calcHeightByNode(myChart._chartsViews[0]._data._graphicEls, height) + 'px';
  // console.log(chartDom.value.style.height)
  myChart.resize();
}

//更新图
function updateChart(data) {
  // console.log('Initializing chart with provided data:', data);
  // console.log(chartDom.value)
  if (!chartDom.value) {
    chartDom.value = document.getElementById('treeGraph');
    // console.log(chartDom.value)
    if (!myChart.value) {
      myChart = echarts.init(chartDom.value);
      // 设置节点点击事件监听
      myChart.on('click', (params) => {
        // console.log('Tree点击了:', params.data)
        if (params.data) {
          selectedNode.value = params.data;
          //收起或张开节点
          toggleCollapse(graphData.value, params.data.show_id)
        }
        resetHeight();
      });
    }
  }
  myChart.showLoading();
  const option = getDefaultChartOption()
  if (data) {
    option.series[0].data = [data]
  } else {
    option.series[0].data = []
  }
  myChart.setOption(option);
  window.addEventListener('resize', () => {
    myChart.resize();
  });
  myChart.hideLoading();
  resetHeight();

}


watch(() => graphData.value,
    (newGraphData) => {
      console.log("Tree watch 图谱数据", graphData.value)
      nextTick(() => {
        updateChart(newGraphData);
      })
    }, {deep: true} // 如果 graphData 是复杂对象，需要 deep: true 监听内部变化
)

watch(() => props.selectedType,
    () => {
      if (GRAPH_TYPE.TREE_GRAPH === props.selectedType) {
        nextTick(() => {
          resetHeight();
        })
      }
    }
)

watch(() => props.selectedOption,
    () => {
      nextTick(() => {
        resetHeight();
      })
    }
)
</script>

<style scoped lang="scss">
@use "@/assets/styles/graph";
</style>

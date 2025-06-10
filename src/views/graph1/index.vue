<template>
  <el-container class="main-container">
    <el-container class="graph-main">
      <el-header class="header">
        <el-text size="large" style="color: white">人工智能</el-text>
      </el-header>
      <el-main class="graph-container" :style="overflowStyle">
        <KnowledgeGraph v-model:graph-data="graphData" v-model:selected-node="selectedNode"
                        :selected-type="selectedGraph" @node-clicked="updateNodeInfo"
                        v-show="GRAPH_TYPE.FORCE_GRAPH===selectedGraph">
        </KnowledgeGraph>
        <TreeGraphComponent v-model:graph-data="graphData" v-model:selected-node="selectedNode"
                            :selected-type="selectedGraph" @click-node="updateNodeInfo"
                            v-show="GRAPH_TYPE.TREE_GRAPH===selectedGraph"></TreeGraphComponent>
      </el-main>
    </el-container>
    <el-divider direction="vertical" style="height: calc(100% - 20px);border-color: black"></el-divider>
    <el-aside class="graph-aside">
      <el-header class="header">
        <el-text size="large" style="color: white">结点信息</el-text>
      </el-header>
      <NodeInfoComponent :selected-node="selectedNode" class="half-container"></NodeInfoComponent>
      <div class="half-container">
          <!-- 新增按钮区域 -->
          <div class="view-buttons">
            <el-button type="primary" size="large" @click="showGraphStructure">力导向图显示</el-button>
            <el-button type="primary" size="large" @click="showTreeStructure">知识树显示</el-button>
          </div>
        </div>

    </el-aside>

  </el-container>
</template>

<script setup lang="ts">
import KnowledgeGraph from '@/components/common/ForceGraphComponent.vue'; // 图结构组件
// 树结构组件
import {type CSSProperties, onMounted, ref} from 'vue';
import {GRAPH_TYPE} from "@/assets/dictionarys/graphType";
import NodeInfoComponent from "@/components/common/NodeInfoComponent.vue";
import TreeGraphComponent from "@/components/common/TreeGraphComponent.vue";
import {collapseAllNodes, setTreeNodeIds} from "@/assets/scripts/graphUtils";
import {getDemoKnowledgeGraph} from "@/assets/graphJSON/demoGraph1.ts";

const graphContainer = ref(null);
const selectedNode = ref<Node | null>(null);
const graphData = ref({});
const selectedGraph = ref("")
selectedGraph.value = GRAPH_TYPE.FORCE_GRAPH;
const overflowStyle = ref({
  overflowX: 'auto',
  overflowY: 'auto',
} as CSSProperties)


// Lifecycle hook
onMounted(() => {
  fetchGraphData(); // Default to graph structure
});

const updateNodeInfo = (node: Node) => {
  selectedNode.value = node
}

// Fetch graph data
const fetchGraphData = async () => {
  //获取图谱数据，实际使用时需要向后端服务器请求
  let resGraphData = getDemoKnowledgeGraph()
  // 为所有节点设置show_id，以便控制
  setTreeNodeIds(resGraphData);
  // 初始化时收缩所有节点
  collapseAllNodes(resGraphData);
  graphData.value = resGraphData;
  //使根节点展开
  graphData.value.collapsed = false;
  console.log("获取的图谱数据：", graphData.value);
  selectedGraph.value = GRAPH_TYPE.FORCE_GRAPH;
  overflowStyle.value.overflowX = 'auto';
  if (graphContainer.value) {
    showGraphStructure();
  }
};

//显示力导向图
const showGraphStructure = () => {
  selectedGraph.value = GRAPH_TYPE.FORCE_GRAPH;
  //允许所有滚动条
  overflowStyle.value.overflowX = 'auto';
};


//显示树图
const showTreeStructure = () => {
  selectedGraph.value = GRAPH_TYPE.TREE_GRAPH
  //不允许横向滚动条
  overflowStyle.value.overflowX = 'hidden';
};

</script>

<style scoped lang="scss">
@use "@/assets/styles/index.scss";


.search-container {
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
}

.large-select {
  width: 80%;
  padding: 12px;
  font-size: 18px;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-right: 10px;
}

.view-buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}

.divider-horizontal {
  width: 100%;
  height: 2px;
  background: #757575;
  margin: 10px 0;

}
</style>

<template>
  <div class="main-container"
       style="flex-direction: column;gap: 10px;">
    <el-card style="min-height: 90px">
      <el-space wrap :size="30" style="width: 100%">
        <!--    放置图谱单选框和步骤按钮-->
        <el-row style="width: 60%;flex-direction: row;gap: 20px;">
          <!-- 描述文字放在 span 标签里 -->
          <span class="options-label">选择图谱：</span>
          <!-- 单选按钮组 -->
          <el-radio-group v-model="activeGraphKey">
            <el-radio
                v-for="(label, id) in GRAPH_LABELS"
                :key="id"
                :label="id"
            >
              {{ label }}
            </el-radio>
          </el-radio-group>
        </el-row>

        <!-- 图谱选择框：遍历所有图谱类型 -->
        <el-row
            v-for="(graphList, graphKey) in graphStore"
            :key="graphKey"
            style="overflow-x: auto; width: 38%; margin-bottom: 20px"
        >
          <!-- 图谱内的条目按钮 -->
          <el-space :size="30" wrap v-if="graphKey=== activeGraphKey">
            <div
                v-for="(graph, index) in graphList"
                :key="index"
            >
              <el-button type="primary" size="large" :disabled="!graph.graph" @click="handleGraphButtonClick(index)">
                {{ graph.name }}-{{ GRAPH_LABELS[activeGraphKey] }}
              </el-button>
            </div>
          </el-space>
        </el-row>
      </el-space>
    </el-card>
    <!-- 图谱选择和展示框 -->
    <div class="main-container" style="height: calc(100% - 140px)">
      <el-container style="height: 100%; overflow: hidden">
        <el-main class="graph-container" style="margin: 0 0 20px 10px;height: calc(100% - 20px)">
          <TreeGraphComponent :selected-option="activeGraphKey"
                              v-model:graph-data="graphs[activeGraphKey]"
                              v-model:selected-node="selectedNodes[activeGraphKey]"
                              class="tree-graph"></TreeGraphComponent>

        </el-main>
        <el-divider direction="vertical" style="height: calc(100% - 20px);border-color: black"></el-divider>
        <el-aside width="20%" class="graph-aside"
                  style="margin: 0 10px 20px 0;height: calc(100% - 20px);box-shadow: var(--el-box-shadow);">
          <el-header class="header">
            <el-text size="large" style="color: white">结点信息</el-text>
          </el-header>
          <!-- 新增专家图谱节点信息框 -->
          <NodeInfoComponent :selected-node="selectedNodes[activeGraphKey]" class="half-container"
                             style="height: 100%"></NodeInfoComponent>
        </el-aside>
      </el-container>

    </div>
  </div>
</template>


<script setup lang="ts">
import {onMounted, reactive, ref} from 'vue';
import TreeGraphComponent from "@/components/common/TreeGraphComponent.vue";
import {GRAPH_DICTIONARY, GRAPH_LABELS, type GraphKey} from "@/assets/dictionarys/graphDictionary";
import NodeInfoComponent from "@/components/common/NodeInfoComponent.vue";
import {getDemoGraphs} from "@/assets/graphJSON/demoGraphs.ts";


//初始化图库
const graphs = reactive<Record<string, Object>>({});
//初始化活动图
const activeGraphKey = ref<GraphKey>(GRAPH_DICTIONARY.KNOWLEDGE_GRAPH);

const selectedNodes = reactive<Record<string, Object | null>>({});

const graphStore=reactive<Record<GraphKey, Object>>(getDemoGraphs())

const handleGraphButtonClick = (id: number) => {
  graphs[activeGraphKey.value] = JSON.parse(JSON.stringify(graphStore[activeGraphKey.value][id].graph));
  graphs[activeGraphKey.value].collapsed = false;
  selectedNodes[activeGraphKey.value] = graphs[activeGraphKey.value];
}

onMounted(() => {
  // 初始化每个 key 对应的激活索引（可选，设默认激活第一项）
  for (const key in graphStore) {
    let resGraphData = JSON.parse(JSON.stringify(graphStore[key][0].graph));
    resGraphData.collapsed = false;
    graphs[key] = resGraphData;
    selectedNodes[key] = resGraphData;
  }
})

</script>

<style scoped lang="scss">
@use "@/assets/styles/index.scss";

/* 单选按钮组的基本样式 */
.radio-group {
  display: flex;
  align-items: center;
}

.radio-group input[type="radio"] {
  margin-right: 5px;
  width: 17px;
  height: 17px;
  cursor: pointer;
}

/* 单选按钮标签文字样式 */
.radio-group label {
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap; /* 防止文字换行 */
  color: #303133; /* 选项文字颜色 */
}

</style>


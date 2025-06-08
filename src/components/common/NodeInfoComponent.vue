<script setup lang="ts">
defineProps(['selectedNode'])
</script>

<template>
  <div>
    <div class="half-main">
      <el-space wrap :fill="true" style="width: 100%">
        <el-text v-if="selectedNode">Name: {{ selectedNode.name }}</el-text>
        <el-divider v-if="selectedNode && selectedNode.description" style="margin: 8px 0"></el-divider>
        <el-text v-if="selectedNode && selectedNode.description">Description: {{
            selectedNode.description
          }}
        </el-text>
        <el-text v-if="!selectedNode">点击结点查看详细信息</el-text>
      </el-space>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/index";

.half-main {
  overflow-y: auto;
  overflow-x: hidden;

  .el-text {
    font-size: 22px;
  }
}
</style>
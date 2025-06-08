// 初始化时设置所有节点收缩
export function collapseAllNodes(node) {
    if (!node) return;
    // console.log(node);
    node.collapsed = true; // 默认设置为收缩状态
    if (node.children && node.children.length) {
        node.children.forEach(collapseAllNodes);
    }
}

/**
 * 递归地在树结构中根据 ID 查找节点，并切换其 'collapsed' 状态。
 *
 * @param {object} node - 当前要搜索的树节点。
 * @param {string | number} nodeId - 目标节点的 ID。
 * @returns {boolean} - 如果找到并切换了节点，则返回 `true`，否则返回 `false`。
 */
export function toggleCollapse(node, nodeId) {
    // 检查当前节点是否为目标节点。
    if (node.show_id === nodeId) {
        // 切换其折叠状态。
        node.collapsed = !node.collapsed;
        // 返回 true 表示已找到节点，这将终止后续的递归搜索。
        return true;
    }

    // 如果节点有子节点，则递归搜索子节点。
    if (node.children && node.children.length > 0) {
        // 使用 .some() 方法进行遍历。它会在回调函数返回 `true` 后立即停止整个遍历。
        return node.children.some(child => toggleCollapse(child, nodeId));
    }

    // 如果在此分支中未找到节点，则返回 false。
    return false;
}

//每个节点设置id，用于一些功能
export function setTreeNodeIds(rootNode) {
    if (!rootNode) return;
    let idCounter = 1;

    function assignIds(node) {
        node.show_id = idCounter++;
        if (node.children && Array.isArray(node.children)) {
            node.children.forEach(child => assignIds(child));
        }
    }

    assignIds(rootNode);
}
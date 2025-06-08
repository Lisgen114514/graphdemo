export function calcHeightByNode(nodes, height) {
    let allNode = 0;
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node === undefined)
            continue;
        allNode++;
    }
    const currentHeight = 70 * allNode;
    return Math.max(currentHeight, height);

}


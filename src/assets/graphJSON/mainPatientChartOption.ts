export function getDefaultChartOption() {
    return {
        backgroundColor: '', // 设置图表背景颜色为浅蓝色
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            textStyle: {
                fontSize: 24,  // 增加 tooltip 字体大小
            },
        },
        series: [
            {
                type: 'tree',
                data: [],
                left: '2%',    // 增加左右边距
                right: '150px',
                top: '10%',     // 调整顶部位置
                bottom: '10%',  // 调整底部位置
                symbol: 'emptyCircle',
                orient: 'horizontal',  // 设置为横向布局
                nodePadding: [50, 5],
                expandAndCollapse: true,
                initialTreeDepth: 1,//lrt设置初始展开层级
                symbolSize: 8,  // 增大节点的大小
                label: {
                    position: 'top',
                    rotate: 0,
                    verticalAlign: 'middle',
                    align: 'left',
                    fontSize: 20,  // 增加标签字体大小
                    color: '#303133', // 设置标签字体颜色为黑色
                },
                lineStyle: {
                    width: 1,
                    color: '#555',
                },
                leaves: {
                    label: {
                        position: 'bottom',
                        rotate: 0,
                        verticalAlign: 'middle',
                        align: 'left',
                        fontSize: 16, // 增加叶子标签字体大小
                        color: '#303133', // 设置叶子字体颜色为黑色
                        overflow: 'break',
                        width: 100,
                        lineHeight: 20
                    },
                    /*                    leaves: {
                                            itemStyle: {
                                                nodePadding: 10
                                            }
                                        }*/
                },
                animationDurationUpdate: 750,
            },
        ],
    }
        ;
}

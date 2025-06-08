export function getDiseaseList() {
    return [
        {
            id: '001',
            name: '高原肺水肿',
            checks: [
                {
                    name: '胸部X射线：可见以肺门为中心向单侧或两侧肺野呈点片状或云絮状浸润阴影，常呈弥漫性、不规则性分布，亦可融合成大片状阴影。心影多正常，但亦可见肺动脉高压及右心增大征象。',
                    checked: false
                }
            ]
        },
        {
            id: '010',
            name: '高原脑水肿',
            checks: [
                {name: 'CT诊断：CT可见脑室和脑池轻度压缩，指示脑水肿的存在', checked: false},
                {name: 'MRI诊断：MRI显示出典型的胼胝体后部出现T2信号密度增高是HACE的重要指征', checked: false}
            ]
        },
        {
            id: '011',
            name: '高原心脏病',
            checks: [
                {name: '心电图：心电轴右偏及明显右心室肥厚', checked: false},
                {name: '超声心动图：右室流出道≥33mm，右室内径≥23mm', checked: false},
                {name: 'X射线胸片：右肺下动脉干横径≥17mm及/或右肺下动脉干横径与气管横径比值≥1.10', checked: false},
                {name: '心导管：肺动脉平均压≥3.3kPa，即25mmHg', checked: false}
            ]
        }
    ]
}
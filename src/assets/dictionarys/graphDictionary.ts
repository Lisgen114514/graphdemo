// 用来区分专家图谱还是患者图谱
export const GRAPH_DICTIONARY = {
    KNOWLEDGE_GRAPH: 'knowledgeGraph',
    PATIENT_GRAPH: 'patientGraph'
} as const;

// 从 GRAPH_DICTIONARY 提取所有值的联合类型
export type GraphKey = typeof GRAPH_DICTIONARY[keyof typeof GRAPH_DICTIONARY];

// constants.ts 或 graphConstants.ts
export const GRAPH_LABELS: Record<GraphKey, string> = {
    knowledgeGraph: '专家图谱',
    patientGraph: '患者图谱',
};
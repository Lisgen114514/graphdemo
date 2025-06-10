export function getDemoKnowledgeGraph(): object {
    return{
        "name": "人工智能 (AI)",
        "description": "通过机器（特别是计算机系统）模拟人类智能过程。",
        "children": [
            {
                "name": "机器学习 (ML)",
                "description": "人工智能的一个子集，使系统能够在没有明确编程的情况下从数据中学习。",
                "children": [
                    {
                        "name": "监督学习",
                        "description": "从标记数据中学习；包括分类和回归。",
                        "children": [
                            {
                                "name": "回归",
                                "description": "预测连续值（例如，房价）。"
                            },
                            {
                                "name": "分类",
                                "description": "将数据分类到不同的类别（例如，垃圾邮件检测）。"
                            }
                        ]
                    },
                    {
                        "name": "无监督学习",
                        "description": "从无标记数据中学习以发现隐藏模式。",
                        "children": [
                            {
                                "name": "聚类",
                                "description": "将相似的数据点分组在一起。"
                            },
                            {
                                "name": "降维",
                                "description": "减少考虑的随机变量的数量。"
                            }
                        ]
                    },
                    {
                        "name": "强化学习",
                        "description": "通过奖励和惩罚进行试错学习。",
                        "children": [
                            {
                                "name": "智能体",
                                "description": "感知环境并对其采取行动的实体。"
                            },
                            {
                                "name": "奖励",
                                "description": "对期望行为的积极反馈。"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "深度学习 (DL)",
                "description": "机器学习的一个子领域，使用多层神经网络。",
                "children": [
                    {
                        "name": "神经网络",
                        "description": "受人脑启发，用于模式识别。"
                    },
                    {
                        "name": "卷积神经网络 (CNNs)",
                        "description": "非常适合图像识别和计算机视觉任务。"
                    },
                    {
                        "name": "循环神经网络 (RNNs)",
                        "description": "适用于自然语言和时间序列等序列数据。"
                    }
                ]
            },
            {
                "name": "自然语言处理 (NLP)",
                "description": "使计算机能够理解、解释和生成人类语言。",
                "children": [
                    {
                        "name": "文本分类",
                        "description": "将文本分类到预定义的类别（例如，情感分析）。"
                    },
                    {
                        "name": "机器翻译",
                        "description": "将文本或语音从一种语言自动翻译成另一种语言。"
                    },
                    {
                        "name": "情感分析",
                        "description": "确定一段文本背后的情感倾向。"
                    }
                ]
            },
            {
                "name": "计算机视觉",
                "description": "使计算机能够看到、识别和处理图像和视频。",
                "children": [
                    {
                        "name": "目标检测",
                        "description": "识别和定位图像或视频中的对象。"
                    },
                    {
                        "name": "图像分割",
                        "description": "将图像分成多个区域或对象。"
                    },
                    {
                        "name": "人脸识别",
                        "description": "从数字图像或视频帧中识别或验证一个人。"
                    }
                ]
            },
            {
                "name": "机器人学",
                "description": "机器人的设计、建造、操作和使用。",
                "children": [
                    {
                        "name": "自主导航",
                        "description": "机器人在没有人为干预的情况下独立移动。"
                    },
                    {
                        "name": "人机交互",
                        "description": "研究人类与机器人之间的互动。"
                    }
                ]
            }
        ]
    }
}

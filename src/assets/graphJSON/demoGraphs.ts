import {GRAPH_DICTIONARY} from "@/assets/dictionarys/graphDictionary.ts";

export function getDemoGraphs():object{
    return {
        [GRAPH_DICTIONARY.KNOWLEDGE_GRAPH] :[
            {
                "graph": {
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
                },
                "name": "人工智能"
            },
            {
                "graph": {
                    "name": "生物信息学 (Bioinformatics)",
                    "description": "结合生物学、计算机科学和统计学，用于分析和解释生物数据。",
                    "children": [
                        {
                            "name": "基因组学 (Genomics)",
                            "description": "研究生物体的全部基因组，包括基因、基因间序列和基因组结构。",
                            "children": [
                                {
                                    "name": "基因组测序",
                                    "description": "确定DNA或RNA分子中核苷酸的精确顺序。",
                                    "children": [
                                        {
                                            "name": "下一代测序 (NGS)",
                                            "description": "高通量测序技术，能快速且低成本地测序大量DNA。"
                                        },
                                        {
                                            "name": "从头测序 (De Novo Sequencing)",
                                            "description": "在没有参考基因组的情况下，组装新的基因组序列。"
                                        }
                                    ]
                                },
                                {
                                    "name": "基因组组装",
                                    "description": "将短的DNA测序片段拼接成完整的基因组序列。",
                                    "children": [
                                        {
                                            "name": "短读长组装",
                                            "description": "使用短测序读长进行基因组组装，计算复杂但成本较低。"
                                        },
                                        {
                                            "name": "长读长组装",
                                            "description": "使用长测序读长进行基因组组装，能更好地解决重复区域问题。"
                                        }
                                    ]
                                },
                                {
                                    "name": "基因注释",
                                    "description": "识别基因组中的基因、非编码RNA、调控元件等生物学特征，并赋予功能信息。"
                                }
                            ]
                        },
                        {
                            "name": "蛋白质组学 (Proteomics)",
                            "description": "对蛋白质进行大规模研究，包括蛋白质的结构、功能和相互作用。",
                            "children": [
                                {
                                    "name": "蛋白质鉴定",
                                    "description": "通过质谱等技术识别样品中的蛋白质。",
                                    "children": [
                                        {
                                            "name": "肽段质量指纹 (PMF)",
                                            "description": "利用蛋白水解酶消化产生的肽段质量来鉴定蛋白质。"
                                        },
                                        {
                                            "name": "串联质谱 (MS/MS)",
                                            "description": "对预选离子进行二次碎裂，获得碎片离子谱以鉴定蛋白质。"
                                        }
                                    ]
                                },
                                {
                                    "name": "蛋白质相互作用网络",
                                    "description": "分析蛋白质之间形成的复杂网络，揭示细胞功能和疾病机制。",
                                    "children": [
                                        {
                                            "name": "酵母双杂交",
                                            "description": "一种体外筛选蛋白质相互作用的方法。"
                                        },
                                        {
                                            "name": "共免疫沉淀 (Co-IP)",
                                            "description": "一种体内验证蛋白质相互作用的方法。"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "转录组学 (Transcriptomics)",
                            "description": "研究在特定时间点或特定条件下，细胞或组织中所有RNA分子的集合。",
                            "children": [
                                {
                                    "name": "RNA测序 (RNA-Seq)",
                                    "description": "利用高通量测序技术对RNA进行测序，以量化基因表达和发现新的转录本。"
                                },
                                {
                                    "name": "差异表达分析",
                                    "description": "比较不同条件下基因表达水平的变化，找出在疾病或处理中起作用的基因。"
                                }
                            ]
                        },
                        {
                            "name": "系统生物学 (Systems Biology)",
                            "description": "从整体和动态角度研究生物系统，整合多层次数据来理解生物复杂性。",
                            "children": [
                                {
                                    "name": "代谢通路分析",
                                    "description": "研究细胞内生化反应的序列，揭示物质转化和能量流动。"
                                },
                                {
                                    "name": "网络建模",
                                    "description": "构建和分析生物分子网络，以理解生物过程的调控机制。"
                                }
                            ]
                        }
                    ]
                },
                "name": "生物信息学"
            }
        ],
        [GRAPH_DICTIONARY.PATIENT_GRAPH]: [
            {
                "name": "经济学",
                "graph": {
                    "name": "经济学 (Economics)",
                    "description": "研究稀缺资源如何被社会用于生产、分配和消费商品与服务的学科。",
                    "children": [
                        {
                            "name": "微观经济学 (Microeconomics)",
                            "description": "研究个体经济单位（如消费者、生产者、企业）的行为以及它们如何在市场中相互作用。",
                            "children": [
                                {
                                    "name": "消费者行为理论",
                                    "description": "分析消费者如何做出购买决策，以最大化其满足感或效用。",
                                    "children": [
                                        {
                                            "name": "需求与供给",
                                            "description": "研究商品和服务的价格如何由消费者需求和生产者供给的相互作用决定。"
                                        },
                                        {
                                            "name": "效用理论",
                                            "description": "分析消费者如何衡量和选择不同商品组合的满足程度。"
                                        },
                                        {
                                            "name": "边际效用递减规律",
                                            "description": "随着商品消费量的增加，每增加一单位商品所带来的额外效用逐渐减少。"
                                        }
                                    ]
                                },
                                {
                                    "name": "生产者行为理论",
                                    "description": "分析企业如何做出生产决策，以最小化成本和最大化利润。",
                                    "children": [
                                        {
                                            "name": "成本理论",
                                            "description": "研究企业在生产过程中所面临的各种成本，包括固定成本和可变成本。"
                                        },
                                        {
                                            "name": "生产函数",
                                            "description": "描述投入品（如劳动力、资本）与产出之间的技术关系。"
                                        },
                                        {
                                            "name": "利润最大化",
                                            "description": "企业通过调整产出和投入组合来达到利润最高点。"
                                        }
                                    ]
                                },
                                {
                                    "name": "市场结构",
                                    "description": "研究不同市场类型中企业之间的竞争关系。",
                                    "children": [
                                        {
                                            "name": "完全竞争",
                                            "description": "市场中有大量买家和卖家，产品同质，进出市场自由。"
                                        },
                                        {
                                            "name": "垄断",
                                            "description": "市场上只有一个卖方，拥有定价权。"
                                        },
                                        {
                                            "name": "寡头垄断",
                                            "description": "市场上少数几家大型企业主导，相互之间存在策略互动。"
                                        },
                                        {
                                            "name": "垄断竞争",
                                            "description": "市场上有很多企业，产品有差异化，但存在一定程度的替代性。"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "宏观经济学 (Macroeconomics)",
                            "description": "研究国民经济的总体表现，包括经济增长、通货膨胀、失业和国际贸易。",
                            "children": [
                                {
                                    "name": "国民收入核算",
                                    "description": "衡量一个国家在一定时期内生产的所有最终产品和服务的总价值（如GDP）。",
                                    "children": [
                                        {
                                            "name": "国内生产总值 (GDP)",
                                            "description": "衡量一个国家经济活动的总体指标。"
                                        },
                                        {
                                            "name": "国民生产总值 (GNP)",
                                            "description": "衡量一国国民在国内外生产的所有最终产品和服务的总价值。"
                                        }
                                    ]
                                },
                                {
                                    "name": "宏观经济政策",
                                    "description": "政府和中央银行用于影响整体经济表现的工具。",
                                    "children": [
                                        {
                                            "name": "财政政策",
                                            "description": "政府通过调整税收和支出水平来影响经济活动。"
                                        },
                                        {
                                            "name": "货币政策",
                                            "description": "中央银行通过控制货币供应量和利率来影响经济活动。"
                                        }
                                    ]
                                },
                                {
                                    "name": "经济波动",
                                    "description": "研究经济周期中的扩张和收缩阶段。",
                                    "children": [
                                        {
                                            "name": "通货膨胀",
                                            "description": "物价总水平持续上涨的现象。"
                                        },
                                        {
                                            "name": "失业",
                                            "description": "有劳动能力并愿意工作的人未能找到工作的状态。"
                                        },
                                        {
                                            "name": "经济增长",
                                            "description": "一个国家在一定时期内商品和服务生产能力的增长。"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "计量经济学 (Econometrics)",
                            "description": "结合经济理论、数学和统计学，用于实证分析经济现象和验证经济理论。",
                            "children": [
                                {
                                    "name": "回归分析",
                                    "description": "研究变量之间统计关系的一种常用方法。"
                                },
                                {
                                    "name": "时间序列分析",
                                    "description": "分析随时间变化的数据，用于预测和理解动态经济过程。"
                                }
                            ]
                        },
                        {
                            "name": "发展经济学 (Development Economics)",
                            "description": "关注发展中国家的经济增长、结构转型和贫困问题。",
                            "children": [
                                {
                                    "name": "贫困与不平等",
                                    "description": "分析贫困的成因、衡量方法以及如何减少社会经济不平等。"
                                },
                                {
                                    "name": "经济发展模式",
                                    "description": "探讨不同国家实现经济增长和结构转型的路径和策略。"
                                }
                            ]
                        },
                        {
                            "name": "国际经济学 (International Economics)",
                            "description": "研究国家之间商品、服务和资本的流动以及国际经济政策。",
                            "children": [
                                {
                                    "name": "国际贸易理论",
                                    "description": "解释国家之间贸易模式和利益的理论（如比较优势理论）。"
                                },
                                {
                                    "name": "国际金融",
                                    "description": "研究国际货币体系、汇率和资本流动。"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "name": "无数据",
                "graph": null
            }
        ]
    }
}

export function getDemoGraphs():object{
    return {
        "knowledgeGraph": [
            {
                "graph": {
                    "id": "1",
                    "labels": [
                        "Disease"
                    ],
                    "name": "高原肺水肿",
                    "description": "分为两型：初入型HAPE（ I型）和再入型HAPE（2型）。1型发生于进入海拔300Om以上高原的低海拔居民。2型则发生于久居高原，在平原逗留7天以上后重返3500m以上高原的高原移居者或世居者。再次进入高原者似乎更易患HAPE。",
                    "children": [
                        {
                            "id": "HAS_SYMPTOM1",
                            "name": "症状",
                            "labels": "temp",
                            "description": null,
                            "children": [
                                {
                                    "id": "18",
                                    "labels": [
                                        "Symptom"
                                    ],
                                    "name": "呼吸过速，心动过速",
                                    "description": null,
                                    "show_id": 3,
                                    "collapsed": true
                                },
                                {
                                    "id": "17",
                                    "labels": [
                                        "Symptom"
                                    ],
                                    "name": "肺部湿性啰音",
                                    "description": null,
                                    "show_id": 4,
                                    "collapsed": true
                                },
                                {
                                    "id": "16",
                                    "labels": [
                                        "Symptom"
                                    ],
                                    "name": "中央性紫绀",
                                    "description": null,
                                    "show_id": 5,
                                    "collapsed": true
                                },
                                {
                                    "id": "15",
                                    "labels": [
                                        "Symptom"
                                    ],
                                    "name": "无力或活动能力减低",
                                    "description": null,
                                    "show_id": 6,
                                    "collapsed": true
                                },
                                {
                                    "id": "14",
                                    "labels": [
                                        "Symptom"
                                    ],
                                    "name": "咳白色或粉红色泡沫状痰",
                                    "description": null,
                                    "show_id": 7,
                                    "collapsed": true
                                },
                                {
                                    "id": "13",
                                    "labels": [
                                        "Symptom"
                                    ],
                                    "name": "咳嗽",
                                    "description": null,
                                    "show_id": 8,
                                    "collapsed": true
                                },
                                {
                                    "id": "12",
                                    "labels": [
                                        "Symptom"
                                    ],
                                    "name": "胸闷压塞感",
                                    "description": null,
                                    "show_id": 9,
                                    "collapsed": true
                                },
                                {
                                    "id": "11",
                                    "labels": [
                                        "Symptom"
                                    ],
                                    "name": "静息时呼吸困难",
                                    "description": null,
                                    "show_id": 10,
                                    "collapsed": true
                                },
                                {
                                    "id": "10",
                                    "labels": [
                                        "Symptom"
                                    ],
                                    "name": "高发人群",
                                    "description": "近期抵达高原（一般在海拔3000m以上）",
                                    "show_id": 11,
                                    "collapsed": true
                                }
                            ],
                            "show_id": 2,
                            "collapsed": true
                        },
                        {
                            "id": "HAS_TEST1",
                            "name": "检查项目",
                            "labels": "temp",
                            "description": null,
                            "children": [
                                {
                                    "id": "36",
                                    "labels": [
                                        "Test"
                                    ],
                                    "name": "胸部X射线",
                                    "description": null,
                                    "children": [
                                        {
                                            "id": "HAS_RESULT36",
                                            "name": "检查结果",
                                            "labels": "temp",
                                            "description": null,
                                            "children": [
                                                {
                                                    "id": "43",
                                                    "labels": [
                                                        "Test_Result"
                                                    ],
                                                    "name": "肺门与心影",
                                                    "description": "以肺门为中心向单侧或两侧肺野呈点片状或云絮状浸润阴影，常呈弥漫性、不规则性分布，亦可融合成大片状阴影。心影多正常，但亦可见肺动脉高压及右心增大征象。",
                                                    "show_id": 15,
                                                    "collapsed": true
                                                }
                                            ],
                                            "show_id": 14,
                                            "collapsed": true
                                        }
                                    ],
                                    "show_id": 13,
                                    "collapsed": true
                                }
                            ],
                            "show_id": 12,
                            "collapsed": true
                        },
                        {
                            "id": "HAS_EXCLUSION1",
                            "name": "排除项",
                            "labels": "temp",
                            "description": null,
                            "children": [
                                {
                                    "id": "54",
                                    "labels": [
                                        "Exclusion"
                                    ],
                                    "name": "支气管痉挛",
                                    "description": null,
                                    "show_id": 17,
                                    "collapsed": true
                                },
                                {
                                    "id": "53",
                                    "labels": [
                                        "Exclusion"
                                    ],
                                    "name": "病毒性上呼吸道感染",
                                    "description": null,
                                    "show_id": 18,
                                    "collapsed": true
                                },
                                {
                                    "id": "52",
                                    "labels": [
                                        "Exclusion"
                                    ],
                                    "name": "肺炎",
                                    "description": null,
                                    "show_id": 19,
                                    "collapsed": true
                                },
                                {
                                    "id": "51",
                                    "labels": [
                                        "Exclusion"
                                    ],
                                    "name": "心力衰竭",
                                    "description": null,
                                    "show_id": 20,
                                    "collapsed": true
                                },
                                {
                                    "id": "50",
                                    "labels": [
                                        "Exclusion"
                                    ],
                                    "name": "心肌梗死",
                                    "description": null,
                                    "show_id": 21,
                                    "collapsed": true
                                }
                            ],
                            "show_id": 16,
                            "collapsed": true
                        },
                        {
                            "id": "HAS_RECOMMENDATION1",
                            "name": "治疗建议",
                            "labels": "temp",
                            "description": null,
                            "children": [
                                {
                                    "id": "98",
                                    "labels": [
                                        "Recommendation"
                                    ],
                                    "name": "高原肺水肿治疗方法建议",
                                    "description": "进行治疗前，必须仔细排除可导致呼吸道症状的在高原可能罹患的其他疾病，诸如肺炎、病毒性上呼吸道感染、支气管痉挛或心肌梗死。对HAPE患者的治疗，首选低转。如因条件所限而使低转不可行，则应给氧或使用便携式压力袋。已接受氧疗（例如在医院或高原诊所）的患者也可以在原地继续治疗而不必低转。在医疗资源有限的野外，风险较小的情况下，可在给氧或使用便携式压力袋治疗的同时使用尼福地平。单纯的尼福地平治疗仅限于在其他方法不可得的情况下使用。如无尼福地平，则可选用磷酸二酯酶抑制剂，但并不推荐联用复合肺血管扩张剂。如果是在医院，在给氧的同时可使用CPAP（持续正压通气）；如患者对氧疗反应欠佳，则可加用尼福地平。对良好精选（获得家庭或亲友的充分支持.住宿条件良好）的患者，与其住在监护设施下，还不如从监护设施中解脱出来吸氧。乙酰唑胺、B-受体激动剂或利尿剂在HAPE治疗中尚无已确立的明确作用。患了 HAPE的个体只有在症状消失、在休息时能获得稳定的供氧、在不吸氧和/或不用血管扩张剂的情况下能从事轻微活动的状况下，才可考虑继续上升或重返高原参加他们的活动。在重新上升时可斟酌予以尼福地平或其他肺血管扩张剂。",
                                    "show_id": 23,
                                    "collapsed": true
                                }
                            ],
                            "show_id": 22,
                            "collapsed": true
                        },
                        {
                            "id": "HAS_TREATMENT1",
                            "name": "治疗方法",
                            "labels": "temp",
                            "description": null,
                            "children": [
                                {
                                    "id": "86",
                                    "labels": [
                                        "Treatment"
                                    ],
                                    "name": "利尿剂",
                                    "description": "尽管利尿剂的使用已有文献记载，但其在HAPE治疗中并没有作用，尤其是许多HAPE高山肺水肿患者并发血容量损耗。推荐评级：2C。",
                                    "show_id": 25,
                                    "collapsed": true
                                },
                                {
                                    "id": "85",
                                    "labels": [
                                        "Treatment"
                                    ],
                                    "name": "持续呼吸道正压",
                                    "description": "该法使用一种面罩装置系统，仅在呼气相增加气道压力，从而改善HAPE患者的气体交换。然而.这种模式也好，或者应用更为广泛的在整个呼吸周期均保持气道正压的持续气道正压通气（CPAP）模式也好，它们是否改善患者预后，这方面的研究尚未设立。作为一种低风险疗法，它可以在医院与给氧一起使用，提供给精神状态完好但能适应面罩的患者。该法在野外一般不可行，所需的压力水平也还没有设立。推荐评级：2B。",
                                    "show_id": 26,
                                    "collapsed": true
                                },
                                {
                                    "id": "84",
                                    "labels": [
                                        "Treatment"
                                    ],
                                    "name": "磷酸二酯酶抑制剂",
                                    "description": "磷酸二酯酶抑制剂具有舒张肺血管、降低肺动脉压的优点，将之用于HAPE的治疗有很强的生理合理性。虽然有应用该类药治疗HAPE的报告，然而与他达拉非和西地那非一样，对这类药在HAPE治疗中的作用尚无系统的研究加以验证。推荐评级：2C。",
                                    "show_id": 27,
                                    "collapsed": true
                                },
                                {
                                    "id": "83",
                                    "labels": [
                                        "Treatment"
                                    ],
                                    "name": "B-受体激动剂",
                                    "description": "尽管有β-受体激动剂用于治疗HAPE的报道，却没有资料显示HAPE患者受益于沙美特罗（SalmeteroI）和沙丁胺醇（Albulerol）。推荐评级：2C。",
                                    "show_id": 28,
                                    "collapsed": true
                                },
                                {
                                    "id": "82",
                                    "labels": [
                                        "Treatment"
                                    ],
                                    "name": "尼福地平",
                                    "description": "一项非随机非双盲的单项研究展示了当给氧和下撤均不可行的情况下以尼福地平用于HAPE治疗。此外，尚无其他有关治疗的研究可资介绍，但该药与给氧和下撤同用的临床经验则很广泛。该药缓释剂60mg∕d，分次服，不用负荷量。除非下撤不可行，给氧和便携式压力袋亦不可得，否则不得单靠该药进行治疗。推荐评级：1 C（作为合并使用的治疗方法）。",
                                    "show_id": 29,
                                    "collapsed": true
                                },
                                {
                                    "id": "81",
                                    "labels": [
                                        "Treatment"
                                    ],
                                    "name": "便携式压力袋",
                                    "description": "便携式压力袋可用于HAPE治疗。如条件允许，即使用了便携式压力袋也不可耽误下撤。推荐评级：1B。",
                                    "show_id": 30,
                                    "collapsed": true
                                },
                                {
                                    "id": "80",
                                    "labels": [
                                        "Treatment"
                                    ],
                                    "name": "给氧",
                                    "description": "鼻导管或面罩足够流量给氧，使动脉血氧饱和度保持在90%以上，此乃合适的可替代下撤的方法，尤其在医疗设施完备、可以密切监护的情况下使用。推荐评级：1B。",
                                    "show_id": 31,
                                    "collapsed": true
                                },
                                {
                                    "id": "79",
                                    "labels": [
                                        "Treatment"
                                    ],
                                    "name": "低转",
                                    "description": "低转是HAPE的最佳治疗方法，但也不必用于所有患者。患者应至少下撤1000m或直至症状缓解。低转者下撤途中要尽量减少自我行动（例如离开群体或不使用畜力交通工具），因为自我行动会进一步增高肺动脉压，从而加重肺水肿。推荐评级：1A。",
                                    "show_id": 32,
                                    "collapsed": true
                                }
                            ],
                            "show_id": 24,
                            "collapsed": true
                        },
                        {
                            "id": "HAS_PRECAUTION1",
                            "name": "预防",
                            "labels": "temp",
                            "description": null,
                            "children": [
                                {
                                    "id": "71",
                                    "labels": [
                                        "Precaution"
                                    ],
                                    "name": "乙酰唑胺",
                                    "description": "因为乙酰唑胺可促进对高原的习服，故对各型高原病的预防也应该是有效的。该药能钝化低氧性肺血管收缩。临床观察显示，乙酰唑胺可预防再入性HAPE。再入性HAPE是一种见于世居高原儿童的疾病，当他们到平原旅行后快速返回高原居住地时易患HAPE。推荐评级：2C。",
                                    "show_id": 34,
                                    "collapsed": true
                                },
                                {
                                    "id": "70",
                                    "labels": [
                                        "Precaution"
                                    ],
                                    "name": "地塞米松",
                                    "description": "地塞米松（16 mg∕d，分次给药）亦显示出对HAPE易感者发病具有预防作用。推荐评级：1C。",
                                    "show_id": 35,
                                    "collapsed": true
                                },
                                {
                                    "id": "69",
                                    "labels": [
                                        "Precaution"
                                    ],
                                    "name": "他达拉非",
                                    "description": "使用他达拉非10mg每日2次可有效预防HAPE易感者发病。该研究样本小，用药试验缺乏与尼福地平的对照。推荐评级：1C。",
                                    "show_id": 36,
                                    "collapsed": true
                                },
                                {
                                    "id": "68",
                                    "labels": [
                                        "Precaution"
                                    ],
                                    "name": "沙美特罗",
                                    "description": "大剂量（125 μg，每日2次）应用该药常常伴随着副作用。该药在高原的用药经验有限。因此，沙美特罗未被推荐为单个预防用药，但可考虑作为尼福地平的补充用药。推荐评级：2B。",
                                    "show_id": 37,
                                    "collapsed": true
                                },
                                {
                                    "id": "67",
                                    "labels": [
                                        "Precaution"
                                    ],
                                    "name": "尼福地平",
                                    "description": "推荐剂量为尼福地平缓释剂60 mg，日服一次。推荐评级1A。",
                                    "show_id": 38,
                                    "collapsed": true
                                },
                                {
                                    "id": "66",
                                    "labels": [
                                        "Precaution"
                                    ],
                                    "name": "逐步上升",
                                    "description": "上升速率与发病率之间显然是有关联的。推荐评级：1C。",
                                    "show_id": 39,
                                    "collapsed": true
                                }
                            ],
                            "show_id": 33,
                            "collapsed": true
                        }
                    ],
                    "show_id": 1,
                    "collapsed": true
                },
                "name": "高原肺水肿"
            },
            {
                "graph": {
                    "id": "0",
                    "labels": [
                        "Disease"
                    ],
                    "name": "急性轻症高原病",
                    "description": "是一种病情较轻的，即“轻症”的急性高山病（AMS）或“良性” AMS，通常发生于由低海拔地区快速进入海拔2200~2500 m以上高原者。",
                    "children": [
                        {
                            "id": "HAS_SYMPTOM0",
                            "name": "症状",
                            "labels": "temp",
                            "description": null,
                            "children": [
                                {
                                    "id": "9",
                                    "labels": [
                                        "Symptom"
                                    ],
                                    "name": "其他症状",
                                    "description": "头昏、恶心、心慌、气短、胸闷、眼花、食欲减退、腹胀、腹泻、便秘、口唇发绀、嗜睡、手足发麻",
                                    "show_id": 3,
                                    "collapsed": true
                                },
                                {
                                    "id": "8",
                                    "labels": [
                                        "Symptom"
                                    ],
                                    "name": "呕吐",
                                    "description": null,
                                    "show_id": 4,
                                    "collapsed": true
                                },
                                {
                                    "id": "7",
                                    "labels": [
                                        "Symptom"
                                    ],
                                    "name": "头痛",
                                    "description": null,
                                    "show_id": 5,
                                    "collapsed": true
                                }
                            ],
                            "show_id": 2,
                            "collapsed": true
                        }
                    ],
                    "show_id": 1,
                    "collapsed": true
                },
                "name": "急性轻症高原病-中度"
            }
        ],
        "patientGraph": [
            {
                "name": "高原性肺水肿",
                "graph": {
                    "name": "高原性肺水肿",
                    "node_type": "ROOT",
                    "children": [
                        {
                            "name": "患者5",
                            "node_type": "PATIENT",
                            "description": {
                                "患者性别": "男性",
                                "患者民族": "汉族",
                                "患者出生日期": "1989-12-20",
                                "患者年龄": 34
                            },
                            "children": [
                                {
                                    "name": "第1次就诊",
                                    "node_type": "VISIT",
                                    "children": [
                                        {
                                            "name": "门诊诊断信息表",
                                            "node_type": "OUTPATIENT_DIAGNOSIS_INF",
                                            "description": {
                                                "患者姓名": "贺*",
                                                "就诊ID": "190503156321",
                                                "诊断科室": "急诊内科（病区）"
                                            },
                                            "show_id": 4,
                                            "collapsed": true
                                        },
                                        {
                                            "name": "门诊医嘱信息表",
                                            "node_type": "OUTPATIENT_ORDER",
                                            "children": [
                                                {
                                                    "name": "处置",
                                                    "node_type": "ORDER",
                                                    "children": [
                                                        {
                                                            "name": "普通门诊诊察费",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e23f2a22ced8081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "普通门诊诊察费",
                                                                "药物数量": "1",
                                                                "医嘱类别": "处置",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:40:46.000",
                                                                "医嘱内容": "普通门诊诊察费"
                                                            },
                                                            "show_id": 7,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "静脉采血",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24f16f2d6f8081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "静脉采血",
                                                                "药物数量": "1",
                                                                "医嘱类别": "处置",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:51.000",
                                                                "医嘱内容": "静脉采血"
                                                            },
                                                            "show_id": 8,
                                                            "collapsed": true
                                                        }
                                                    ],
                                                    "show_id": 6,
                                                    "collapsed": true
                                                },
                                                {
                                                    "name": "检验",
                                                    "node_type": "ORDER",
                                                    "children": [
                                                        {
                                                            "name": "全血细胞计数+5分类检测",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24defc2cf98081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "全血细胞计数+5分类检测",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "全血细胞计数+5分类检测"
                                                            },
                                                            "show_id": 10,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "ABO血型鉴定(正定型)",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24defc2cf98081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "ABO血型鉴定(正定型)",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "ABO血型鉴定(正定型)"
                                                            },
                                                            "show_id": 11,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "ABO血型鉴定(反定型)",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24defc2cf98081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "ABO血型鉴定(反定型)",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "ABO血型鉴定(反定型)"
                                                            },
                                                            "show_id": 12,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "RhD血型鉴定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24defc2cf98081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "RhD血型鉴定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "RhD血型鉴定"
                                                            },
                                                            "show_id": 13,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "凝血酶时间(TT)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df232d028081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "凝血酶时间(TT)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "凝血酶时间(TT)测定"
                                                            },
                                                            "show_id": 14,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "淀粉酶(AMY)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df5d2d238081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "淀粉酶(AMY)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "淀粉酶(AMY)测定"
                                                            },
                                                            "show_id": 15,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "胰淀粉酶(AMS)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df5d2d238081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "胰淀粉酶(AMS)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "胰淀粉酶(AMS)测定"
                                                            },
                                                            "show_id": 16,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "脂肪酶(LPS)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df5d2d238081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "脂肪酶(LPS)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "脂肪酶(LPS)测定"
                                                            },
                                                            "show_id": 17,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "B型钠尿肽(BNP)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df8c2d518081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "B型钠尿肽(BNP)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "B型钠尿肽(BNP)测定"
                                                            },
                                                            "show_id": 18,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "降钙素原(PCT)检测",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24dfad2d578081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "降钙素原(PCT)检测",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "降钙素原(PCT)检测"
                                                            },
                                                            "show_id": 19,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "肌钙蛋白Ⅰ(TnI)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df5a2d218081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "肌钙蛋白Ⅰ(TnI)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "肌钙蛋白Ⅰ(TnI)测定"
                                                            },
                                                            "show_id": 20,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "天门冬氨酸氨基转移酶(AST)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df5a2d218081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "天门冬氨酸氨基转移酶(AST)测定",
                                                                "药物数量": "2",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "天门冬氨酸氨基转移酶(AST)测定"
                                                            },
                                                            "show_id": 21,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "肌酸激酶(CK)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df5a2d218081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "肌酸激酶(CK)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "肌酸激酶(CK)测定"
                                                            },
                                                            "show_id": 22,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "肌酸激酶-MB同工酶活性(CK-MB)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df5a2d218081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "肌酸激酶-MB同工酶活性(CK-MB)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "肌酸激酶-MB同工酶活性(CK-MB)测定"
                                                            },
                                                            "show_id": 23,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "乳酸脱氢酶(LD)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df5a2d218081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "乳酸脱氢酶(LD)测定",
                                                                "药物数量": "2",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "乳酸脱氢酶(LD)测定"
                                                            },
                                                            "show_id": 24,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "α羟基丁酸脱氢酶(α-HBD)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df5a2d218081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "α羟基丁酸脱氢酶(α-HBD)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "α羟基丁酸脱氢酶(α-HBD)测定"
                                                            },
                                                            "show_id": 25,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "钾(K)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df582d1f8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "钾(K)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "钾(K)测定"
                                                            },
                                                            "show_id": 26,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "钠(Na)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df582d1f8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "钠(Na)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "钠(Na)测定"
                                                            },
                                                            "show_id": 27,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "氯(Cl)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df582d1f8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "氯(Cl)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "氯(Cl)测定"
                                                            },
                                                            "show_id": 28,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "镁(Mg)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df582d1f8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "镁(Mg)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "镁(Mg)测定"
                                                            },
                                                            "show_id": 29,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "总钙(Ca)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df582d1f8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "总钙(Ca)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "总钙(Ca)测定"
                                                            },
                                                            "show_id": 30,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "无机磷(P)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df582d1f8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "无机磷(P)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "无机磷(P)测定"
                                                            },
                                                            "show_id": 31,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "β2微球蛋白(β2-MG)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df552d1d8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "β2微球蛋白(β2-MG)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "β2微球蛋白(β2-MG)测定"
                                                            },
                                                            "show_id": 32,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "尿素(Urea)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df552d1d8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "尿素(Urea)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "尿素(Urea)测定"
                                                            },
                                                            "show_id": 33,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "肌酐(Cr)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df552d1d8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "肌酐(Cr)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "肌酐(Cr)测定"
                                                            },
                                                            "show_id": 34,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "尿酸(UA)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df552d1d8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "尿酸(UA)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "尿酸(UA)测定"
                                                            },
                                                            "show_id": 35,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "葡萄糖(Glu)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df552d1d8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "葡萄糖(Glu)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "葡萄糖(Glu)测定"
                                                            },
                                                            "show_id": 36,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "总二氧化碳(TCO2)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df552d1d8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "总二氧化碳(TCO2)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "总二氧化碳(TCO2)测定"
                                                            },
                                                            "show_id": 37,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "腺苷脱氨酶(ADA)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "腺苷脱氨酶(ADA)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "腺苷脱氨酶(ADA)测定"
                                                            },
                                                            "show_id": 38,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "总胆汁酸(TBA)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "总胆汁酸(TBA)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "总胆汁酸(TBA)测定"
                                                            },
                                                            "show_id": 39,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "甘胆酸(CG)检测",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "甘胆酸(CG)检测",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "甘胆酸(CG)检测"
                                                            },
                                                            "show_id": 40,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "总胆红素(T-Bil)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "总胆红素(T-Bil)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "总胆红素(T-Bil)测定"
                                                            },
                                                            "show_id": 41,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "直接胆红素(D-Bil)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "直接胆红素(D-Bil)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "直接胆红素(D-Bil)测定"
                                                            },
                                                            "show_id": 42,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "间接胆红素(I-Bil)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "间接胆红素(I-Bil)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "间接胆红素(I-Bil)测定"
                                                            },
                                                            "show_id": 43,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "γ-谷氨酰基转移酶(GGT)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "γ-谷氨酰基转移酶(GGT)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "γ-谷氨酰基转移酶(GGT)测定"
                                                            },
                                                            "show_id": 44,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "碱性磷酸酶(ALP)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "碱性磷酸酶(ALP)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "碱性磷酸酶(ALP)测定"
                                                            },
                                                            "show_id": 45,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "胆碱脂酶(ChE)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "胆碱脂酶(ChE)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "胆碱脂酶(ChE)测定"
                                                            },
                                                            "show_id": 46,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "单胺氧化酶(MAO)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "单胺氧化酶(MAO)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "单胺氧化酶(MAO)测定"
                                                            },
                                                            "show_id": 47,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "5′核苷酸酶(5′NT)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "5′核苷酸酶(5′NT)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "5′核苷酸酶(5′NT)测定"
                                                            },
                                                            "show_id": 48,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "α-L-岩藻糖苷酶(AFU)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "α-L-岩藻糖苷酶(AFU)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "α-L-岩藻糖苷酶(AFU)测定"
                                                            },
                                                            "show_id": 49,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "离子钙(Ca2+)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df3c2d0d8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "离子钙(Ca2+)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "离子钙(Ca2+)测定"
                                                            },
                                                            "show_id": 50,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "血气分析",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df3c2d0d8081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "血气分析",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "血气分析"
                                                            },
                                                            "show_id": 51,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "总蛋白(TP)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "总蛋白(TP)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "总蛋白(TP)测定"
                                                            },
                                                            "show_id": 52,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "白蛋白(Alb)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "白蛋白(Alb)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "白蛋白(Alb)测定"
                                                            },
                                                            "show_id": 53,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "丙氨酸氨基转移酶(ALT)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "丙氨酸氨基转移酶(ALT)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "丙氨酸氨基转移酶(ALT)测定"
                                                            },
                                                            "show_id": 54,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "天门冬氨酸氨基转移酶(AST)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df532d1b8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "天门冬氨酸氨基转移酶(AST)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "天门冬氨酸氨基转移酶(AST)测定"
                                                            },
                                                            "show_id": 55,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "动脉采血",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df3c2d0d8081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "动脉采血",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "动脉采血"
                                                            },
                                                            "show_id": 56,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "红细胞比积(HCT)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df3c2d0d8081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "红细胞比积(HCT)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "红细胞比积(HCT)测定"
                                                            },
                                                            "show_id": 57,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "葡萄糖(Glu)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df3c2d0d8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "葡萄糖(Glu)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "葡萄糖(Glu)测定"
                                                            },
                                                            "show_id": 58,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "乳酸(LA)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df3c2d0d8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "乳酸(LA)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "乳酸(LA)测定"
                                                            },
                                                            "show_id": 59,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "钾(K)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df3c2d0d8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "钾(K)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "钾(K)测定"
                                                            },
                                                            "show_id": 60,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "钠(Na)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df3c2d0d8081c950",
                                                                "项目规格": "项",
                                                                "医嘱项目": "钠(Na)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "钠(Na)测定"
                                                            },
                                                            "show_id": 61,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "活化部分凝血活酶时间(APTT)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df232d028081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "活化部分凝血活酶时间(APTT)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "活化部分凝血活酶时间(APTT)测定"
                                                            },
                                                            "show_id": 62,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "血浆凝血酶原时间(PT)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df232d028081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "血浆凝血酶原时间(PT)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "血浆凝血酶原时间(PT)测定"
                                                            },
                                                            "show_id": 63,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "血浆纤维蛋白原测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df232d028081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "血浆纤维蛋白原测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "血浆纤维蛋白原测定"
                                                            },
                                                            "show_id": 64,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "纤维蛋白(原)降解产物(FDP)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df232d028081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "纤维蛋白(原)降解产物(FDP)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "纤维蛋白(原)降解产物(FDP)测定"
                                                            },
                                                            "show_id": 65,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "血浆D-二聚体(D-Dimer)测定",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df232d028081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "血浆D-二聚体(D-Dimer)测定",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "血浆D-二聚体(D-Dimer)测定"
                                                            },
                                                            "show_id": 66,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "动脉采血器",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24df3c2d0d8081c950",
                                                                "项目规格": "20G****",
                                                                "医嘱项目": "动脉采血器",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检验",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:46.000",
                                                                "医嘱内容": "动脉采血器"
                                                            },
                                                            "show_id": 67,
                                                            "collapsed": true
                                                        }
                                                    ],
                                                    "show_id": 9,
                                                    "collapsed": true
                                                },
                                                {
                                                    "name": "药品",
                                                    "node_type": "ORDER",
                                                    "children": [
                                                        {
                                                            "name": "0.9%氯化钠注射液（软袋双阀）",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e278de62d9a8081c950",
                                                                "项目规格": "500ml",
                                                                "医嘱项目": "0.9%氯化钠注射液（软袋双阀）",
                                                                "药物数量": "1",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:43:33.000",
                                                                "医嘱内容": "0.9%氯化钠注射液（软袋双阀）"
                                                            },
                                                            "show_id": 69,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "二羟丙茶碱注射液",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e278ff92da88081c950",
                                                                "项目规格": "2ml:0.25g",
                                                                "医嘱项目": "二羟丙茶碱注射液",
                                                                "药物数量": "2",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:42:11.000",
                                                                "医嘱内容": "二羟丙茶碱注射液"
                                                            },
                                                            "show_id": 70,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "地塞米松磷酸钠注射液",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e278ff92da98081c950",
                                                                "项目规格": "1ml:5mg",
                                                                "医嘱项目": "地塞米松磷酸钠注射液",
                                                                "药物数量": "2",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:42:11.000",
                                                                "医嘱内容": "地塞米松磷酸钠注射液"
                                                            },
                                                            "show_id": 71,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "0.9%氯化钠注射液（软袋双阀）",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e278ff92daa8081c950",
                                                                "项目规格": "250ml",
                                                                "医嘱项目": "0.9%氯化钠注射液（软袋双阀）",
                                                                "药物数量": "1",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:42:11.000",
                                                                "医嘱内容": "0.9%氯化钠注射液（软袋双阀）"
                                                            },
                                                            "show_id": 72,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "5%葡萄糖注射液(可立袋)",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e278ff92dab8081c950",
                                                                "项目规格": "250ml",
                                                                "医嘱项目": "5%葡萄糖注射液(可立袋)",
                                                                "药物数量": "1",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:42:11.000",
                                                                "医嘱内容": "5%葡萄糖注射液(可立袋)"
                                                            },
                                                            "show_id": 73,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "注射用磷酸肌酸钠",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e278ff92dac8081c950",
                                                                "项目规格": "1.0g",
                                                                "医嘱项目": "注射用磷酸肌酸钠",
                                                                "药物数量": "1",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:42:11.000",
                                                                "医嘱内容": "注射用磷酸肌酸钠"
                                                            },
                                                            "show_id": 74,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "注射用复合辅酶",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e278c312d8b8081c950",
                                                                "项目规格": "200单位/0.2mg",
                                                                "医嘱项目": "注射用复合辅酶",
                                                                "药物数量": "1",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:44:22.000",
                                                                "医嘱内容": "注射用复合辅酶"
                                                            },
                                                            "show_id": 75,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "氯化钾注射液（塑瓶）",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e278c322d8c8081c950",
                                                                "项目规格": "10ml:1.5g",
                                                                "医嘱项目": "氯化钾注射液（塑瓶）",
                                                                "药物数量": "1",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:44:22.000",
                                                                "医嘱内容": "氯化钾注射液（塑瓶）"
                                                            },
                                                            "show_id": 76,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "注射用呋塞米",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e278de62d968081c950",
                                                                "项目规格": "20mg*10支",
                                                                "医嘱项目": "注射用呋塞米",
                                                                "药物数量": "1",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:43:33.000",
                                                                "医嘱内容": "注射用呋塞米"
                                                            },
                                                            "show_id": 77,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "帕拉米韦氯化钠注射液",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e278de62d978081c950",
                                                                "项目规格": "100ml:0.3g",
                                                                "医嘱项目": "帕拉米韦氯化钠注射液",
                                                                "药物数量": "1",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:43:33.000",
                                                                "医嘱内容": "帕拉米韦氯化钠注射液"
                                                            },
                                                            "show_id": 78,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "0.9%氯化钠注射液（软袋双阀）",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e278de62d988081c950",
                                                                "项目规格": "250ml",
                                                                "医嘱项目": "0.9%氯化钠注射液（软袋双阀）",
                                                                "药物数量": "1",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:43:33.000",
                                                                "医嘱内容": "0.9%氯化钠注射液（软袋双阀）"
                                                            },
                                                            "show_id": 79,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "痰热清注射液",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e278de62d998081c950",
                                                                "项目规格": "10ml",
                                                                "医嘱项目": "痰热清注射液",
                                                                "药物数量": "2",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:43:33.000",
                                                                "医嘱内容": "痰热清注射液"
                                                            },
                                                            "show_id": 80,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "注射用12种复合维生素",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e278c312d8a8081c950",
                                                                "项目规格": "复方*1支",
                                                                "医嘱项目": "注射用12种复合维生素",
                                                                "药物数量": "1",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:44:22.000",
                                                                "医嘱内容": "注射用12种复合维生素"
                                                            },
                                                            "show_id": 81,
                                                            "collapsed": true
                                                        }
                                                    ],
                                                    "show_id": 68,
                                                    "collapsed": true
                                                },
                                                {
                                                    "name": "检查",
                                                    "node_type": "ORDER",
                                                    "children": [
                                                        {
                                                            "name": "胸部X线计算机体层(CT)平扫",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e2529ee2d798081c950",
                                                                "项目规格": "次",
                                                                "医嘱项目": "胸部X线计算机体层(CT)平扫",
                                                                "药物数量": "1",
                                                                "医嘱类别": "检查",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:42:05.000",
                                                                "医嘱内容": "胸部X线计算机体层(CT)平扫"
                                                            },
                                                            "show_id": 83,
                                                            "collapsed": true
                                                        }
                                                    ],
                                                    "show_id": 82,
                                                    "collapsed": true
                                                },
                                                {
                                                    "name": "其它",
                                                    "node_type": "ORDER",
                                                    "children": [
                                                        {
                                                            "name": "采血管",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e24f1612d6b8081c950",
                                                                "项目规格": "个****",
                                                                "医嘱项目": "采血管",
                                                                "药物数量": "5",
                                                                "医嘱类别": "其它",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:41:51.000",
                                                                "医嘱内容": "采血管"
                                                            },
                                                            "show_id": 85,
                                                            "collapsed": true
                                                        }
                                                    ],
                                                    "show_id": 84,
                                                    "collapsed": true
                                                }
                                            ],
                                            "description": {
                                                "医嘱类别": [
                                                    "处置",
                                                    "检验",
                                                    "药品",
                                                    "检查",
                                                    "其它"
                                                ]
                                            },
                                            "show_id": 5,
                                            "collapsed": true
                                        },
                                        {
                                            "name": "检验明细结果表",
                                            "node_type": "LIS_DETAIL_INF",
                                            "description": {
                                                "检验项目种类": [
                                                    "凝血六项",
                                                    "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                    "全血细胞分析+血型",
                                                    "降钙素原",
                                                    "B型 钠尿肽"
                                                ]
                                            },
                                            "children": [
                                                {
                                                    "name": "凝血六项",
                                                    "node_type": "LAB",
                                                    "description": [
                                                        {
                                                            "检验结果": "10.9",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "10.0-14.0",
                                                            "报告编号": "LIS20190503277016762",
                                                            "结果上限": "14.0",
                                                            "结果下限": "10.0",
                                                            "结果单位": "sec"
                                                        },
                                                        {
                                                            "检验结果": "1.61",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "0.0-1.50",
                                                            "报告编号": "LIS20190503277016763",
                                                            "结果上限": "1.50",
                                                            "结果下限": "0.0",
                                                            "结果单位": "μg/ml"
                                                        },
                                                        {
                                                            "检验结果": "3.70",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "0.0-5.0",
                                                            "报告编号": "LIS20190503277016763",
                                                            "结果上限": "5.0",
                                                            "结果下限": "0.0",
                                                            "结果单位": "μg/ml"
                                                        },
                                                        {
                                                            "检验结果": "107.8",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "70.0-175.7",
                                                            "报告编号": "LIS20190503277016762",
                                                            "结果上限": "175.7",
                                                            "结果下限": "70.0",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "0.92",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "0.84-1.40",
                                                            "报告编号": "LIS20190503277016762",
                                                            "结果上限": "1.40",
                                                            "结果下限": "0.84",
                                                            "结果单位": "无数据"
                                                        },
                                                        {
                                                            "检验结果": "22.7",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "22.0-38.0",
                                                            "报告编号": "LIS20190503277016762",
                                                            "结果上限": "38.0",
                                                            "结果下限": "22.0",
                                                            "结果单位": "sec"
                                                        },
                                                        {
                                                            "检验结果": "0.76",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "0.73-1.27",
                                                            "报告编号": "LIS20190503277016762",
                                                            "结果上限": "1.27",
                                                            "结果下限": "0.73",
                                                            "结果单位": "无数据"
                                                        },
                                                        {
                                                            "检验结果": "4.02",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "2.0-4.0",
                                                            "报告编号": "LIS20190503277016762",
                                                            "结果上限": "4.0",
                                                            "结果下限": "2.0",
                                                            "结果单位": "g/L"
                                                        },
                                                        {
                                                            "检验结果": "18.3",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "14.0-21.0",
                                                            "报告编号": "LIS20190503277016762",
                                                            "结果上限": "21.0",
                                                            "结果下限": "14.0",
                                                            "结果单位": "sec"
                                                        }
                                                    ],
                                                    "show_id": 87,
                                                    "collapsed": true
                                                },
                                                {
                                                    "name": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                    "node_type": "LAB",
                                                    "description": [
                                                        {
                                                            "检验结果": "20",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "9-60",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "60",
                                                            "结果下限": "9",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "12",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "15-45",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "45",
                                                            "结果下限": "15",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "0.6",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "无数据",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "无数据",
                                                            "结果下限": "无数据",
                                                            "结果单位": "无数据"
                                                        },
                                                        {
                                                            "检验结果": "8.4",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "5.0-21.0",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "21.0",
                                                            "结果下限": "5.0",
                                                            "结果单位": "μmol/L"
                                                        },
                                                        {
                                                            "检验结果": "3.4",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0-3.4",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "3.4",
                                                            "结果下限": "0",
                                                            "结果单位": "μmol/L"
                                                        },
                                                        {
                                                            "检验结果": "5.0",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "1.3-18.7",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "18.7",
                                                            "结果下限": "1.3",
                                                            "结果单位": "μmol/L"
                                                        },
                                                        {
                                                            "检验结果": "31",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "10-60",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "60",
                                                            "结果下限": "10",
                                                            "结果单位": "IU/L"
                                                        },
                                                        {
                                                            "检验结果": "4.10",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0.50-10.00",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "10.00",
                                                            "结果下限": "0.50",
                                                            "结果单位": "μmol/L"
                                                        },
                                                        {
                                                            "检验结果": "89",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "45-125",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "125",
                                                            "结果下限": "45",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "66.0",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "65.0-85.0",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "85.0",
                                                            "结果下限": "65.0",
                                                            "结果单位": "g/L"
                                                        },
                                                        {
                                                            "检验结果": "41.3",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "40-55",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "55",
                                                            "结果下限": "40",
                                                            "结果单位": "g/L"
                                                        },
                                                        {
                                                            "检验结果": "24.7",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "20-40",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "40",
                                                            "结果下限": "20",
                                                            "结果单位": "g/L"
                                                        },
                                                        {
                                                            "检验结果": "1.7",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "1.2-2.4",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "2.4",
                                                            "结果下限": "1.2",
                                                            "结果单位": "无数据"
                                                        },
                                                        {
                                                            "检验结果": "8167",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "5300-11300",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "11300",
                                                            "结果下限": "5300",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "14.3",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0-12",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "12",
                                                            "结果下限": "0",
                                                            "结果单位": "IU/L"
                                                        },
                                                        {
                                                            "检验结果": "5.8",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "4-24",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "24",
                                                            "结果下限": "4",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "3.0",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0-10",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "10",
                                                            "结果下限": "0",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "45.529",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0-30",
                                                            "报告编号": "LIS20190503277016659",
                                                            "结果上限": "30",
                                                            "结果下限": "0",
                                                            "结果单位": "pg/ml"
                                                        },
                                                        {
                                                            "检验结果": "45.0",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0-40",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "40",
                                                            "结果下限": "0",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "0.1",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0-2.7",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "2.7",
                                                            "结果下限": "0",
                                                            "结果单位": "μg/ml"
                                                        },
                                                        {
                                                            "检验结果": "7.4",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0-18.0",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "18.0",
                                                            "结果下限": "0",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "59",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "38-171",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "171",
                                                            "结果下限": "38",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "28.50",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0.0-25.0",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "25.0",
                                                            "结果下限": "0.0",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "206",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "120-250",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "250",
                                                            "结果下限": "120",
                                                            "结果单位": "IU/L"
                                                        },
                                                        {
                                                            "检验结果": "29",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "15-65",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "65",
                                                            "结果下限": "15",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "142",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "72-182",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "182",
                                                            "结果下限": "72",
                                                            "结果单位": "IU/L"
                                                        },
                                                        {
                                                            "检验结果": "7.45",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "2.8-7.6",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "7.6",
                                                            "结果下限": "2.8",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "28.3",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "20-29",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "29",
                                                            "结果下限": "20",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "102",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "57-97",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "97",
                                                            "结果下限": "57",
                                                            "结果单位": "μmol/L"
                                                        },
                                                        {
                                                            "检验结果": "506",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "208.3-428.4",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "428.4",
                                                            "结果下限": "208.3",
                                                            "结果单位": "μmol/L"
                                                        },
                                                        {
                                                            "检验结果": "7.76",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "3.90-6.10",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "6.10",
                                                            "结果下限": "3.90",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "2.07",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0.80-1.80",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "1.80",
                                                            "结果下限": "0.80",
                                                            "结果单位": "ug/ml"
                                                        },
                                                        {
                                                            "检验结果": "3.43",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "3.50-5.30",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "5.30",
                                                            "结果下限": "3.50",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "141",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "137-147",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "147",
                                                            "结果下限": "137",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "102.4",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "99.0-110.0",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "110.0",
                                                            "结果下限": "99.0",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "2.14",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "2.2-2.7",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "2.7",
                                                            "结果下限": "2.2",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "1.54",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0.85-1.51",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "1.51",
                                                            "结果下限": "0.85",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "0.75",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0.75-1.02",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "1.02",
                                                            "结果下限": "0.75",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "24",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "35-135",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "135",
                                                            "结果下限": "35",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "11",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "15-53",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "53",
                                                            "结果下限": "15",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "10",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "13-60",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "60",
                                                            "结果下限": "13",
                                                            "结果单位": "U/L"
                                                        }
                                                    ],
                                                    "show_id": 88,
                                                    "collapsed": true
                                                },
                                                {
                                                    "name": "全血细胞分析+血型",
                                                    "node_type": "LAB",
                                                    "description": [
                                                        {
                                                            "检验结果": "14.81",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "3.50-9.50",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "9.50",
                                                            "结果下限": "3.50",
                                                            "结果单位": "10^9/L"
                                                        },
                                                        {
                                                            "检验结果": "9.98",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "1.8-6.3",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "6.3",
                                                            "结果下限": "1.8",
                                                            "结果单位": "10^9L"
                                                        },
                                                        {
                                                            "检验结果": "3.70",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "1.1-3.2",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "3.2",
                                                            "结果下限": "1.1",
                                                            "结果单位": "10^9L"
                                                        },
                                                        {
                                                            "检验结果": "0.90",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0.1-0.6",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "0.6",
                                                            "结果下限": "0.1",
                                                            "结果单位": "10^9L"
                                                        },
                                                        {
                                                            "检验结果": "0.08",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0.02-0.52",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "0.52",
                                                            "结果下限": "0.02",
                                                            "结果单位": "10^9L"
                                                        },
                                                        {
                                                            "检验结果": "0.15",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0-0.06",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "0.06",
                                                            "结果下限": "0",
                                                            "结果单位": "10^9L"
                                                        },
                                                        {
                                                            "检验结果": "67.4",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "40-75",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "75",
                                                            "结果下限": "40",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "25.0",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "20-50",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "50",
                                                            "结果下限": "20",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "6.1",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "3-10",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "10",
                                                            "结果下限": "3",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "0.6",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0.4-8.0",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "8.0",
                                                            "结果下限": "0.4",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "1.0",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0-1",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "1",
                                                            "结果下限": "0",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "5.77",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "4.40-6.00",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "6.00",
                                                            "结果下限": "4.40",
                                                            "结果单位": "10^12/L"
                                                        },
                                                        {
                                                            "检验结果": "170",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "138-183",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "183",
                                                            "结果下限": "138",
                                                            "结果单位": "g/L"
                                                        },
                                                        {
                                                            "检验结果": "51.4",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "43.0-56.0",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "56.0",
                                                            "结果下限": "43.0",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "89.1",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "87.0-103.0",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "103.0",
                                                            "结果下限": "87.0",
                                                            "结果单位": "fL"
                                                        },
                                                        {
                                                            "检验结果": "29.4",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "28.0-34.0",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "34.0",
                                                            "结果下限": "28.0",
                                                            "结果单位": "pg"
                                                        },
                                                        {
                                                            "检验结果": "330",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "316-354",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "354",
                                                            "结果下限": "316",
                                                            "结果单位": "g/L"
                                                        },
                                                        {
                                                            "检验结果": "43.3",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "40.34-52.30",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "52.30",
                                                            "结果下限": "40.34",
                                                            "结果单位": "fL"
                                                        },
                                                        {
                                                            "检验结果": "13.9",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "12.09-14.87",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "14.87",
                                                            "结果下限": "12.09",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "344",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "70-300",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "300",
                                                            "结果下限": "70",
                                                            "结果单位": "10^9/L"
                                                        },
                                                        {
                                                            "检验结果": "16.8",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "11.23-23.03",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "23.03",
                                                            "结果下限": "11.23",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "8.8",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "10.1-14.4",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "14.4",
                                                            "结果下限": "10.1",
                                                            "结果单位": "fL"
                                                        },
                                                        {
                                                            "检验结果": "0.30",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0.04-0.28",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "0.28",
                                                            "结果下限": "0.04",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "0.01",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0-0",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "0",
                                                            "结果下限": "0",
                                                            "结果单位": "10^9L"
                                                        },
                                                        {
                                                            "检验结果": "0.1",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0-0",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "0",
                                                            "结果下限": "0",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "O型RH阳性",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "无数据",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "无数据",
                                                            "结果下限": "无数据",
                                                            "结果单位": "无数据"
                                                        },
                                                        {
                                                            "检验结果": "1705",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "无数据",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "无数据",
                                                            "结果下限": "无数据",
                                                            "结果单位": "无数据"
                                                        }
                                                    ],
                                                    "show_id": 89,
                                                    "collapsed": true
                                                },
                                                {
                                                    "name": "降钙素原",
                                                    "node_type": "LAB",
                                                    "description": [
                                                        {
                                                            "检验结果": "0.076",
                                                            "检验项目": "降钙素原",
                                                            "结果范围": "0.0-0.046",
                                                            "报告编号": "LIS20190503277016761",
                                                            "结果上限": "0.046",
                                                            "结果下限": "0.0",
                                                            "结果单位": "ng/ml"
                                                        }
                                                    ],
                                                    "show_id": 90,
                                                    "collapsed": true
                                                },
                                                {
                                                    "name": "B型 钠尿肽",
                                                    "node_type": "LAB",
                                                    "description": [
                                                        {
                                                            "检验结果": "112.4",
                                                            "检验项目": "B型 钠尿肽",
                                                            "结果范围": "0-100",
                                                            "报告编号": "LIS20190503277016660",
                                                            "结果上限": "100",
                                                            "结果下限": "0",
                                                            "结果单位": "pg/ml"
                                                        }
                                                    ],
                                                    "show_id": 91,
                                                    "collapsed": true
                                                }
                                            ],
                                            "show_id": 86,
                                            "collapsed": true
                                        }
                                    ],
                                    "show_id": 3,
                                    "collapsed": true
                                },
                                {
                                    "name": "第2次就诊",
                                    "node_type": "VISIT",
                                    "children": [
                                        {
                                            "name": "门诊诊断信息表",
                                            "node_type": "OUTPATIENT_DIAGNOSIS_INF",
                                            "description": {
                                                "患者姓名": "贺*",
                                                "就诊ID": "190503156328",
                                                "诊断科室": "急诊内科（病区）"
                                            },
                                            "show_id": 93,
                                            "collapsed": true
                                        },
                                        {
                                            "name": "门诊医嘱信息表",
                                            "node_type": "OUTPATIENT_ORDER",
                                            "children": [
                                                {
                                                    "name": "药品",
                                                    "node_type": "ORDER",
                                                    "children": [
                                                        {
                                                            "name": "0.9%氯化钠注射液(可立袋）",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e28cecd2dcc8081c950",
                                                                "项目规格": "100ml",
                                                                "医嘱项目": "0.9%氯化钠注射液(可立袋）",
                                                                "药物数量": "1",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:45:47.000",
                                                                "医嘱内容": "0.9%氯化钠注射液(可立袋）"
                                                            },
                                                            "show_id": 96,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "续用",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e28cecd2dcd8081c950",
                                                                "项目规格": "1g",
                                                                "医嘱项目": "续用",
                                                                "药物数量": "1",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 22:45:47.000",
                                                                "医嘱内容": "续用"
                                                            },
                                                            "show_id": 97,
                                                            "collapsed": true
                                                        },
                                                        {
                                                            "name": "续用",
                                                            "node_type": "ORDER",
                                                            "description": {
                                                                "医嘱号": "7e64a95831a08081c950",
                                                                "项目规格": "1g",
                                                                "医嘱项目": "续用",
                                                                "药物数量": "1",
                                                                "医嘱类别": "药品",
                                                                "门诊ID": "7e182c646bd3808132b9",
                                                                "医嘱时间": "2019-05-03 23:48:49.000",
                                                                "医嘱内容": "续用"
                                                            },
                                                            "show_id": 98,
                                                            "collapsed": true
                                                        }
                                                    ],
                                                    "show_id": 95,
                                                    "collapsed": true
                                                }
                                            ],
                                            "description": {
                                                "医嘱类别": [
                                                    "药品"
                                                ]
                                            },
                                            "show_id": 94,
                                            "collapsed": true
                                        },
                                        {
                                            "name": "检验明细结果表",
                                            "node_type": "LIS_DETAIL_INF",
                                            "description": {
                                                "检验项目种类": [
                                                    "凝血六项",
                                                    "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                    "全血细胞分析+血型",
                                                    "降钙素原",
                                                    "B型 钠尿肽"
                                                ]
                                            },
                                            "children": [
                                                {
                                                    "name": "凝血六项",
                                                    "node_type": "LAB",
                                                    "description": [
                                                        {
                                                            "检验结果": "10.9",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "10.0-14.0",
                                                            "报告编号": "LIS20190503277016762",
                                                            "结果上限": "14.0",
                                                            "结果下限": "10.0",
                                                            "结果单位": "sec"
                                                        },
                                                        {
                                                            "检验结果": "1.61",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "0.0-1.50",
                                                            "报告编号": "LIS20190503277016763",
                                                            "结果上限": "1.50",
                                                            "结果下限": "0.0",
                                                            "结果单位": "μg/ml"
                                                        },
                                                        {
                                                            "检验结果": "3.70",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "0.0-5.0",
                                                            "报告编号": "LIS20190503277016763",
                                                            "结果上限": "5.0",
                                                            "结果下限": "0.0",
                                                            "结果单位": "μg/ml"
                                                        },
                                                        {
                                                            "检验结果": "107.8",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "70.0-175.7",
                                                            "报告编号": "LIS20190503277016762",
                                                            "结果上限": "175.7",
                                                            "结果下限": "70.0",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "0.92",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "0.84-1.40",
                                                            "报告编号": "LIS20190503277016762",
                                                            "结果上限": "1.40",
                                                            "结果下限": "0.84",
                                                            "结果单位": "无数据"
                                                        },
                                                        {
                                                            "检验结果": "22.7",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "22.0-38.0",
                                                            "报告编号": "LIS20190503277016762",
                                                            "结果上限": "38.0",
                                                            "结果下限": "22.0",
                                                            "结果单位": "sec"
                                                        },
                                                        {
                                                            "检验结果": "0.76",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "0.73-1.27",
                                                            "报告编号": "LIS20190503277016762",
                                                            "结果上限": "1.27",
                                                            "结果下限": "0.73",
                                                            "结果单位": "无数据"
                                                        },
                                                        {
                                                            "检验结果": "4.02",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "2.0-4.0",
                                                            "报告编号": "LIS20190503277016762",
                                                            "结果上限": "4.0",
                                                            "结果下限": "2.0",
                                                            "结果单位": "g/L"
                                                        },
                                                        {
                                                            "检验结果": "18.3",
                                                            "检验项目": "凝血六项",
                                                            "结果范围": "14.0-21.0",
                                                            "报告编号": "LIS20190503277016762",
                                                            "结果上限": "21.0",
                                                            "结果下限": "14.0",
                                                            "结果单位": "sec"
                                                        }
                                                    ],
                                                    "show_id": 100,
                                                    "collapsed": true
                                                },
                                                {
                                                    "name": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                    "node_type": "LAB",
                                                    "description": [
                                                        {
                                                            "检验结果": "20",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "9-60",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "60",
                                                            "结果下限": "9",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "12",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "15-45",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "45",
                                                            "结果下限": "15",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "0.6",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "无数据",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "无数据",
                                                            "结果下限": "无数据",
                                                            "结果单位": "无数据"
                                                        },
                                                        {
                                                            "检验结果": "8.4",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "5.0-21.0",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "21.0",
                                                            "结果下限": "5.0",
                                                            "结果单位": "μmol/L"
                                                        },
                                                        {
                                                            "检验结果": "3.4",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0-3.4",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "3.4",
                                                            "结果下限": "0",
                                                            "结果单位": "μmol/L"
                                                        },
                                                        {
                                                            "检验结果": "5.0",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "1.3-18.7",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "18.7",
                                                            "结果下限": "1.3",
                                                            "结果单位": "μmol/L"
                                                        },
                                                        {
                                                            "检验结果": "31",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "10-60",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "60",
                                                            "结果下限": "10",
                                                            "结果单位": "IU/L"
                                                        },
                                                        {
                                                            "检验结果": "4.10",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0.50-10.00",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "10.00",
                                                            "结果下限": "0.50",
                                                            "结果单位": "μmol/L"
                                                        },
                                                        {
                                                            "检验结果": "89",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "45-125",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "125",
                                                            "结果下限": "45",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "66.0",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "65.0-85.0",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "85.0",
                                                            "结果下限": "65.0",
                                                            "结果单位": "g/L"
                                                        },
                                                        {
                                                            "检验结果": "41.3",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "40-55",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "55",
                                                            "结果下限": "40",
                                                            "结果单位": "g/L"
                                                        },
                                                        {
                                                            "检验结果": "24.7",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "20-40",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "40",
                                                            "结果下限": "20",
                                                            "结果单位": "g/L"
                                                        },
                                                        {
                                                            "检验结果": "1.7",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "1.2-2.4",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "2.4",
                                                            "结果下限": "1.2",
                                                            "结果单位": "无数据"
                                                        },
                                                        {
                                                            "检验结果": "8167",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "5300-11300",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "11300",
                                                            "结果下限": "5300",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "14.3",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0-12",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "12",
                                                            "结果下限": "0",
                                                            "结果单位": "IU/L"
                                                        },
                                                        {
                                                            "检验结果": "5.8",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "4-24",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "24",
                                                            "结果下限": "4",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "3.0",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0-10",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "10",
                                                            "结果下限": "0",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "45.529",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0-30",
                                                            "报告编号": "LIS20190503277016659",
                                                            "结果上限": "30",
                                                            "结果下限": "0",
                                                            "结果单位": "pg/ml"
                                                        },
                                                        {
                                                            "检验结果": "45.0",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0-40",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "40",
                                                            "结果下限": "0",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "0.1",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0-2.7",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "2.7",
                                                            "结果下限": "0",
                                                            "结果单位": "μg/ml"
                                                        },
                                                        {
                                                            "检验结果": "7.4",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0-18.0",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "18.0",
                                                            "结果下限": "0",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "59",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "38-171",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "171",
                                                            "结果下限": "38",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "28.50",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0.0-25.0",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "25.0",
                                                            "结果下限": "0.0",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "206",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "120-250",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "250",
                                                            "结果下限": "120",
                                                            "结果单位": "IU/L"
                                                        },
                                                        {
                                                            "检验结果": "29",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "15-65",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "65",
                                                            "结果下限": "15",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "142",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "72-182",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "182",
                                                            "结果下限": "72",
                                                            "结果单位": "IU/L"
                                                        },
                                                        {
                                                            "检验结果": "7.45",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "2.8-7.6",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "7.6",
                                                            "结果下限": "2.8",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "28.3",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "20-29",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "29",
                                                            "结果下限": "20",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "102",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "57-97",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "97",
                                                            "结果下限": "57",
                                                            "结果单位": "μmol/L"
                                                        },
                                                        {
                                                            "检验结果": "506",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "208.3-428.4",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "428.4",
                                                            "结果下限": "208.3",
                                                            "结果单位": "μmol/L"
                                                        },
                                                        {
                                                            "检验结果": "7.76",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "3.90-6.10",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "6.10",
                                                            "结果下限": "3.90",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "2.07",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0.80-1.80",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "1.80",
                                                            "结果下限": "0.80",
                                                            "结果单位": "ug/ml"
                                                        },
                                                        {
                                                            "检验结果": "3.43",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "3.50-5.30",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "5.30",
                                                            "结果下限": "3.50",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "141",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "137-147",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "147",
                                                            "结果下限": "137",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "102.4",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "99.0-110.0",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "110.0",
                                                            "结果下限": "99.0",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "2.14",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "2.2-2.7",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "2.7",
                                                            "结果下限": "2.2",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "1.54",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0.85-1.51",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "1.51",
                                                            "结果下限": "0.85",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "0.75",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "0.75-1.02",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "1.02",
                                                            "结果下限": "0.75",
                                                            "结果单位": "mmol/L"
                                                        },
                                                        {
                                                            "检验结果": "24",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "35-135",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "135",
                                                            "结果下限": "35",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "11",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "15-53",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "53",
                                                            "结果下限": "15",
                                                            "结果单位": "U/L"
                                                        },
                                                        {
                                                            "检验结果": "10",
                                                            "检验项目": "肝功全项,心功八项,肾功六项,胰功三项,电解质",
                                                            "结果范围": "13-60",
                                                            "报告编号": "LIS20190503277016658",
                                                            "结果上限": "60",
                                                            "结果下限": "13",
                                                            "结果单位": "U/L"
                                                        }
                                                    ],
                                                    "show_id": 101,
                                                    "collapsed": true
                                                },
                                                {
                                                    "name": "全血细胞分析+血型",
                                                    "node_type": "LAB",
                                                    "description": [
                                                        {
                                                            "检验结果": "14.81",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "3.50-9.50",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "9.50",
                                                            "结果下限": "3.50",
                                                            "结果单位": "10^9/L"
                                                        },
                                                        {
                                                            "检验结果": "9.98",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "1.8-6.3",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "6.3",
                                                            "结果下限": "1.8",
                                                            "结果单位": "10^9L"
                                                        },
                                                        {
                                                            "检验结果": "3.70",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "1.1-3.2",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "3.2",
                                                            "结果下限": "1.1",
                                                            "结果单位": "10^9L"
                                                        },
                                                        {
                                                            "检验结果": "0.90",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0.1-0.6",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "0.6",
                                                            "结果下限": "0.1",
                                                            "结果单位": "10^9L"
                                                        },
                                                        {
                                                            "检验结果": "0.08",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0.02-0.52",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "0.52",
                                                            "结果下限": "0.02",
                                                            "结果单位": "10^9L"
                                                        },
                                                        {
                                                            "检验结果": "0.15",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0-0.06",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "0.06",
                                                            "结果下限": "0",
                                                            "结果单位": "10^9L"
                                                        },
                                                        {
                                                            "检验结果": "67.4",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "40-75",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "75",
                                                            "结果下限": "40",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "25.0",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "20-50",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "50",
                                                            "结果下限": "20",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "6.1",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "3-10",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "10",
                                                            "结果下限": "3",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "0.6",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0.4-8.0",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "8.0",
                                                            "结果下限": "0.4",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "1.0",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0-1",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "1",
                                                            "结果下限": "0",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "5.77",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "4.40-6.00",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "6.00",
                                                            "结果下限": "4.40",
                                                            "结果单位": "10^12/L"
                                                        },
                                                        {
                                                            "检验结果": "170",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "138-183",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "183",
                                                            "结果下限": "138",
                                                            "结果单位": "g/L"
                                                        },
                                                        {
                                                            "检验结果": "51.4",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "43.0-56.0",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "56.0",
                                                            "结果下限": "43.0",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "89.1",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "87.0-103.0",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "103.0",
                                                            "结果下限": "87.0",
                                                            "结果单位": "fL"
                                                        },
                                                        {
                                                            "检验结果": "29.4",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "28.0-34.0",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "34.0",
                                                            "结果下限": "28.0",
                                                            "结果单位": "pg"
                                                        },
                                                        {
                                                            "检验结果": "330",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "316-354",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "354",
                                                            "结果下限": "316",
                                                            "结果单位": "g/L"
                                                        },
                                                        {
                                                            "检验结果": "43.3",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "40.34-52.30",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "52.30",
                                                            "结果下限": "40.34",
                                                            "结果单位": "fL"
                                                        },
                                                        {
                                                            "检验结果": "13.9",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "12.09-14.87",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "14.87",
                                                            "结果下限": "12.09",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "344",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "70-300",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "300",
                                                            "结果下限": "70",
                                                            "结果单位": "10^9/L"
                                                        },
                                                        {
                                                            "检验结果": "16.8",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "11.23-23.03",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "23.03",
                                                            "结果下限": "11.23",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "8.8",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "10.1-14.4",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "14.4",
                                                            "结果下限": "10.1",
                                                            "结果单位": "fL"
                                                        },
                                                        {
                                                            "检验结果": "0.30",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0.04-0.28",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "0.28",
                                                            "结果下限": "0.04",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "0.01",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0-0",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "0",
                                                            "结果下限": "0",
                                                            "结果单位": "10^9L"
                                                        },
                                                        {
                                                            "检验结果": "0.1",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "0-0",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "0",
                                                            "结果下限": "0",
                                                            "结果单位": "%"
                                                        },
                                                        {
                                                            "检验结果": "O型RH阳性",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "无数据",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "无数据",
                                                            "结果下限": "无数据",
                                                            "结果单位": "无数据"
                                                        },
                                                        {
                                                            "检验结果": "1705",
                                                            "检验项目": "全血细胞分析+血型",
                                                            "结果范围": "无数据",
                                                            "报告编号": "LIS20190503277016652",
                                                            "结果上限": "无数据",
                                                            "结果下限": "无数据",
                                                            "结果单位": "无数据"
                                                        }
                                                    ],
                                                    "show_id": 102,
                                                    "collapsed": true
                                                },
                                                {
                                                    "name": "降钙素原",
                                                    "node_type": "LAB",
                                                    "description": [
                                                        {
                                                            "检验结果": "0.076",
                                                            "检验项目": "降钙素原",
                                                            "结果范围": "0.0-0.046",
                                                            "报告编号": "LIS20190503277016761",
                                                            "结果上限": "0.046",
                                                            "结果下限": "0.0",
                                                            "结果单位": "ng/ml"
                                                        }
                                                    ],
                                                    "show_id": 103,
                                                    "collapsed": true
                                                },
                                                {
                                                    "name": "B型 钠尿肽",
                                                    "node_type": "LAB",
                                                    "description": [
                                                        {
                                                            "检验结果": "112.4",
                                                            "检验项目": "B型 钠尿肽",
                                                            "结果范围": "0-100",
                                                            "报告编号": "LIS20190503277016660",
                                                            "结果上限": "100",
                                                            "结果下限": "0",
                                                            "结果单位": "pg/ml"
                                                        }
                                                    ],
                                                    "show_id": 104,
                                                    "collapsed": true
                                                }
                                            ],
                                            "show_id": 99,
                                            "collapsed": true
                                        }
                                    ],
                                    "show_id": 92,
                                    "collapsed": true
                                }
                            ],
                            "show_id": 2,
                            "collapsed": true
                        }
                    ],
                    "show_id": 1,
                    "collapsed": true
                }
            },
            {
                "name": "急性轻症高原病",
                "graph": null
            }
        ]
    }
}
export function getDemoKnowledgeGraph(): object {
    return{
        "children": [
            {
                "children": [
                    {
                        "children": [
                            {
                                "description": null,
                                "id": "18",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "呼吸过速，心动过速",
                                "show_id": 4,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "17",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "肺部湿性啰音",
                                "show_id": 5,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "16",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "中央性紫绀",
                                "show_id": 6,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "15",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "无力或活动能力减低",
                                "show_id": 7,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "14",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "咳白色或粉红色泡沫状痰",
                                "show_id": 8,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "13",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "咳嗽",
                                "show_id": 9,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "12",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "胸闷压塞感",
                                "show_id": 10,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "11",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "静息时呼吸困难",
                                "show_id": 11,
                                "collapsed": true
                            },
                            {
                                "description": "近期抵达高原（一般在海拔3000m以上）",
                                "id": "10",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "高发人群",
                                "show_id": 12,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_SYMPTOM1",
                        "labels": "temp",
                        "name": "症状",
                        "show_id": 3,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "description": "以肺门为中心向单侧或两侧肺野呈点片状或云絮状浸润阴影，常呈弥漫性、不规则性分布，亦可融合成大片状阴影。心影多正常，但亦可见肺动脉高压及右心增大征象。",
                                                "id": "43",
                                                "labels": [
                                                    "Test_Result"
                                                ],
                                                "name": "肺门与心影",
                                                "show_id": 16,
                                                "collapsed": true
                                            }
                                        ],
                                        "description": null,
                                        "id": "HAS_RESULT36",
                                        "labels": "temp",
                                        "name": "检查结果",
                                        "show_id": 15,
                                        "collapsed": true
                                    }
                                ],
                                "description": null,
                                "id": "36",
                                "labels": [
                                    "Test"
                                ],
                                "name": "胸部X射线",
                                "show_id": 14,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_TEST1",
                        "labels": "temp",
                        "name": "检查项目",
                        "show_id": 13,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "description": null,
                                "id": "54",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "支气管痉挛",
                                "show_id": 18,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "53",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "病毒性上呼吸道感染",
                                "show_id": 19,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "52",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "肺炎",
                                "show_id": 20,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "51",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "心力衰竭",
                                "show_id": 21,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "50",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "心肌梗死",
                                "show_id": 22,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_EXCLUSION1",
                        "labels": "temp",
                        "name": "排除项",
                        "show_id": 17,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "description": "进行治疗前，必须仔细排除可导致呼吸道症状的在高原可能罹患的其他疾病，诸如肺炎、病毒性上呼吸道感染、支气管痉挛或心肌梗死。对HAPE患者的治疗，首选低转。如因条件所限而使低转不可行，则应给氧或使用便携式压力袋。已接受氧疗（例如在医院或高原诊所）的患者也可以在原地继续治疗而不必低转。在医疗资源有限的野外，风险较小的情况下，可在给氧或使用便携式压力袋治疗的同时使用尼福地平。单纯的尼福地平治疗仅限于在其他方法不可得的情况下使用。如无尼福地平，则可选用磷酸二酯酶抑制剂，但并不推荐联用复合肺血管扩张剂。如果是在医院，在给氧的同时可使用CPAP（持续正压通气）；如患者对氧疗反应欠佳，则可加用尼福地平。对良好精选（获得家庭或亲友的充分支持.住宿条件良好）的患者，与其住在监护设施下，还不如从监护设施中解脱出来吸氧。乙酰唑胺、B-受体激动剂或利尿剂在HAPE治疗中尚无已确立的明确作用。患了 HAPE的个体只有在症状消失、在休息时能获得稳定的供氧、在不吸氧和/或不用血管扩张剂的情况下能从事轻微活动的状况下，才可考虑继续上升或重返高原参加他们的活动。在重新上升时可斟酌予以尼福地平或其他肺血管扩张剂。",
                                "id": "98",
                                "labels": [
                                    "Recommendation"
                                ],
                                "name": "高原肺水肿治疗方法建议",
                                "show_id": 24,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_RECOMMENDATION1",
                        "labels": "temp",
                        "name": "治疗建议",
                        "show_id": 23,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "description": "尽管利尿剂的使用已有文献记载，但其在HAPE治疗中并没有作用，尤其是许多HAPE高山肺水肿患者并发血容量损耗。推荐评级：2C。",
                                "id": "86",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "利尿剂",
                                "show_id": 26,
                                "collapsed": true
                            },
                            {
                                "description": "该法使用一种面罩装置系统，仅在呼气相增加气道压力，从而改善HAPE患者的气体交换。然而.这种模式也好，或者应用更为广泛的在整个呼吸周期均保持气道正压的持续气道正压通气（CPAP）模式也好，它们是否改善患者预后，这方面的研究尚未设立。作为一种低风险疗法，它可以在医院与给氧一起使用，提供给精神状态完好但能适应面罩的患者。该法在野外一般不可行，所需的压力水平也还没有设立。推荐评级：2B。",
                                "id": "85",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "持续呼吸道正压",
                                "show_id": 27,
                                "collapsed": true
                            },
                            {
                                "description": "磷酸二酯酶抑制剂具有舒张肺血管、降低肺动脉压的优点，将之用于HAPE的治疗有很强的生理合理性。虽然有应用该类药治疗HAPE的报告，然而与他达拉非和西地那非一样，对这类药在HAPE治疗中的作用尚无系统的研究加以验证。推荐评级：2C。",
                                "id": "84",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "磷酸二酯酶抑制剂",
                                "show_id": 28,
                                "collapsed": true
                            },
                            {
                                "description": "尽管有β-受体激动剂用于治疗HAPE的报道，却没有资料显示HAPE患者受益于沙美特罗（SalmeteroI）和沙丁胺醇（Albulerol）。推荐评级：2C。",
                                "id": "83",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "B-受体激动剂",
                                "show_id": 29,
                                "collapsed": true
                            },
                            {
                                "description": "一项非随机非双盲的单项研究展示了当给氧和下撤均不可行的情况下以尼福地平用于HAPE治疗。此外，尚无其他有关治疗的研究可资介绍，但该药与给氧和下撤同用的临床经验则很广泛。该药缓释剂60mg∕d，分次服，不用负荷量。除非下撤不可行，给氧和便携式压力袋亦不可得，否则不得单靠该药进行治疗。推荐评级：1 C（作为合并使用的治疗方法）。",
                                "id": "82",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "尼福地平",
                                "show_id": 30,
                                "collapsed": true
                            },
                            {
                                "description": "便携式压力袋可用于HAPE治疗。如条件允许，即使用了便携式压力袋也不可耽误下撤。推荐评级：1B。",
                                "id": "81",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "便携式压力袋",
                                "show_id": 31,
                                "collapsed": true
                            },
                            {
                                "description": "鼻导管或面罩足够流量给氧，使动脉血氧饱和度保持在90%以上，此乃合适的可替代下撤的方法，尤其在医疗设施完备、可以密切监护的情况下使用。推荐评级：1B。",
                                "id": "80",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "给氧",
                                "show_id": 32,
                                "collapsed": true
                            },
                            {
                                "description": "低转是HAPE的最佳治疗方法，但也不必用于所有患者。患者应至少下撤1000m或直至症状缓解。低转者下撤途中要尽量减少自我行动（例如离开群体或不使用畜力交通工具），因为自我行动会进一步增高肺动脉压，从而加重肺水肿。推荐评级：1A。",
                                "id": "79",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "低转",
                                "show_id": 33,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_TREATMENT1",
                        "labels": "temp",
                        "name": "治疗方法",
                        "show_id": 25,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "description": "因为乙酰唑胺可促进对高原的习服，故对各型高原病的预防也应该是有效的。该药能钝化低氧性肺血管收缩。临床观察显示，乙酰唑胺可预防再入性HAPE。再入性HAPE是一种见于世居高原儿童的疾病，当他们到平原旅行后快速返回高原居住地时易患HAPE。推荐评级：2C。",
                                "id": "71",
                                "labels": [
                                    "Precaution"
                                ],
                                "name": "乙酰唑胺",
                                "show_id": 35,
                                "collapsed": true
                            },
                            {
                                "description": "地塞米松（16 mg∕d，分次给药）亦显示出对HAPE易感者发病具有预防作用。推荐评级：1C。",
                                "id": "70",
                                "labels": [
                                    "Precaution"
                                ],
                                "name": "地塞米松",
                                "show_id": 36,
                                "collapsed": true
                            },
                            {
                                "description": "使用他达拉非10mg每日2次可有效预防HAPE易感者发病。该研究样本小，用药试验缺乏与尼福地平的对照。推荐评级：1C。",
                                "id": "69",
                                "labels": [
                                    "Precaution"
                                ],
                                "name": "他达拉非",
                                "show_id": 37,
                                "collapsed": true
                            },
                            {
                                "description": "大剂量（125 μg，每日2次）应用该药常常伴随着副作用。该药在高原的用药经验有限。因此，沙美特罗未被推荐为单个预防用药，但可考虑作为尼福地平的补充用药。推荐评级：2B。",
                                "id": "68",
                                "labels": [
                                    "Precaution"
                                ],
                                "name": "沙美特罗",
                                "show_id": 38,
                                "collapsed": true
                            },
                            {
                                "description": "推荐剂量为尼福地平缓释剂60 mg，日服一次。推荐评级1A。",
                                "id": "67",
                                "labels": [
                                    "Precaution"
                                ],
                                "name": "尼福地平",
                                "show_id": 39,
                                "collapsed": true
                            },
                            {
                                "description": "上升速率与发病率之间显然是有关联的。推荐评级：1C。",
                                "id": "66",
                                "labels": [
                                    "Precaution"
                                ],
                                "name": "逐步上升",
                                "show_id": 40,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_PRECAUTION1",
                        "labels": "temp",
                        "name": "预防",
                        "show_id": 34,
                        "collapsed": true
                    }
                ],
                "description": "分为两型：初入型HAPE（ I型）和再入型HAPE（2型）。1型发生于进入海拔300Om以上高原的低海拔居民。2型则发生于久居高原，在平原逗留7天以上后重返3500m以上高原的高原移居者或世居者。再次进入高原者似乎更易患HAPE。",
                "id": "1",
                "labels": [
                    "Disease"
                ],
                "name": "高原肺水肿",
                "show_id": 2,
                "collapsed": true
            },
            {
                "children": [
                    {
                        "children": [
                            {
                                "description": "压力增高，细胞及蛋白无变化。偶有血性脑脊液。",
                                "id": "23",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "脑脊液",
                                "show_id": 43,
                                "collapsed": true
                            },
                            {
                                "description": "可出现视盘水肿及视网膜出血、渗出。",
                                "id": "22",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "眼底",
                                "show_id": 44,
                                "collapsed": true
                            },
                            {
                                "description": "共济失调按程度分为平衡技巧失调、步幅出线、跌倒、不能站立。",
                                "id": "21",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "共济失调",
                                "show_id": 45,
                                "collapsed": true
                            },
                            {
                                "description": "剧烈头痛、呕吐、表情淡漠、精神忧郁或欣快多语、烦躁不安、步态蹒跚、共济失调（Rornberg征阳性）。随之神志恍惚意识蒙眬、嗜睡、昏睡以致昏迷，也可直接发生昏迷.可出现肢体功能障碍、脑膜刺激征及椎体束征阳性。",
                                "id": "20",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "精神状态改变",
                                "show_id": 46,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "19",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "近期抵达高原（一般在海拔3000m以上）",
                                "show_id": 47,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_SYMPTOM2",
                        "labels": "temp",
                        "name": "症状",
                        "show_id": 42,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "description": "MRI显示出典型的胼胝体后部出现T2信号密度增高是HACE的重要指征。",
                                                "id": "45",
                                                "labels": [
                                                    "Test_Result"
                                                ],
                                                "name": "MRI",
                                                "show_id": 51,
                                                "collapsed": true
                                            }
                                        ],
                                        "description": null,
                                        "id": "HAS_RESULT38",
                                        "labels": "temp",
                                        "name": "检查结果",
                                        "show_id": 50,
                                        "collapsed": true
                                    }
                                ],
                                "description": "MRI显示出典型的胼胝体后部出现T2信号密度增高是HACE的重要指征。",
                                "id": "38",
                                "labels": [
                                    "Test"
                                ],
                                "name": "MRI诊断",
                                "show_id": 49,
                                "collapsed": true
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "description": "CT可见脑室和脑池轻度压缩，脑的沟回消失不清，整个大脑显示弥散性的低密度，指示脑水肿的存在，几乎可见于所有病人。当病情缓慢恢复时尚可见白质部明显的密度减低",
                                                "id": "44",
                                                "labels": [
                                                    "Test_Result"
                                                ],
                                                "name": "CT",
                                                "show_id": 54,
                                                "collapsed": true
                                            }
                                        ],
                                        "description": null,
                                        "id": "HAS_RESULT37",
                                        "labels": "temp",
                                        "name": "检查结果",
                                        "show_id": 53,
                                        "collapsed": true
                                    }
                                ],
                                "description": null,
                                "id": "37",
                                "labels": [
                                    "Test"
                                ],
                                "name": "CT诊断",
                                "show_id": 52,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_TEST2",
                        "labels": "temp",
                        "name": "检查项目",
                        "show_id": 48,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "description": null,
                                "id": "60",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "脑炎",
                                "show_id": 56,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "59",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "脑膜炎",
                                "show_id": 57,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "58",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "癫痫",
                                "show_id": 58,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "57",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "一氧化碳中毒",
                                "show_id": 59,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "56",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "急性药物中毒",
                                "show_id": 60,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "55",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "急性脑血管病",
                                "show_id": 61,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_EXCLUSION2",
                        "labels": "temp",
                        "name": "排除项",
                        "show_id": 55,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "description": "首先应排除症状体征与 AMS和HACE相似的诸如脱水、衰竭、低血糖、体温过低以及低钠血症等其他疾病。一旦患了高原病，无论其严重程度如何.均应停止上升，并根据医疗条件和病情考虑低转。AMS患者可待在所在高度，可使用非鸦片类镇痛剂缓解头痛，用止吐剂缓解胃肠道症状，也许这样就足够了。乙酰唑胺通过促进习服有助于治疗AMS，但其预防作用优于治疗作用。尽管乙酰唑胺对轻症病例的治疗有益，地塞米松仍为治疗各型AMS尤其是往往需要低转的重型病例的疗效更可靠的药物。AMS患者一旦症状消失，可恢复上升，但若症状持续存在，就不应再按原计划继续上升。AMS缓解后，应慎重考虑使用乙酰唑胺预防下的重新升高。HACE如发生在远离医疗资源的边远地区，即使为疑似患者，应即低转；AMS患者在经过乙酰唑胺或地塞米松等保守措施治疗后症状不缓解者亦应低转。若低转在逻辑上不可行，就该考虑给氧或使用便携式压力袋。对HACE患者应即开始地塞米松治疗，也可加用乙酰唑胺以策周全。在患者症状消失并且无须地塞米松继续治疗之前，不应考虑继续上升。",
                                "id": "99",
                                "labels": [
                                    "Recommendation"
                                ],
                                "name": "高原脑水肿治疗方法建议",
                                "show_id": 63,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_RECOMMENDATION2",
                        "labels": "temp",
                        "name": "治疗建议",
                        "show_id": 62,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "description": "大量的临床经验支持用地塞米松疗HACE指导用法为首剂8mg（肌注、静注或口服），继而4 mg/6 h，直至症状缓解。小儿剂量为每次0.15mg∕kg,6小时一次。推荐评级：1C。",
                                "id": "91",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "地塞米松",
                                "show_id": 65,
                                "collapsed": true
                            },
                            {
                                "description": "250 mg,2 次/d，小儿：2.5 mg J 次/12 h。推荐评级：1C。",
                                "id": "90",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "乙酰唑胺",
                                "show_id": 66,
                                "collapsed": true
                            },
                            {
                                "description": "该装置的使用需专人看护，且难用于幽闭恐惧症或呕吐患者。推荐评级：1B。",
                                "id": "89",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "便携式压力袋",
                                "show_id": 67,
                                "collapsed": true
                            },
                            {
                                "description": "鼻导管或面罩足够流量给氧，使动脉血氧饱和度保持在90%以上，此乃合适的可替代下撤的方法，尤其在医疗设施完备、可以密切监护的情况下使用。推荐评级：1C。",
                                "id": "88",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "给氧",
                                "show_id": 68,
                                "collapsed": true
                            },
                            {
                                "description": "低转是HACE的最佳治疗方法。推荐评级：1A。",
                                "id": "87",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "低转",
                                "show_id": 69,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_TREATMENT2",
                        "labels": "temp",
                        "name": "治疗方法",
                        "show_id": 64,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "description": "125 μg, 2 次/d，与口服药物同用。",
                                "id": "78",
                                "labels": [
                                    "Precaution"
                                ],
                                "name": "沙美特罗",
                                "show_id": 71,
                                "collapsed": true
                            },
                            {
                                "description": "50 mg, 1 次/8 h。",
                                "id": "77",
                                "labels": [
                                    "Precaution"
                                ],
                                "name": "西地那非",
                                "show_id": 72,
                                "collapsed": true
                            },
                            {
                                "description": "10 mg, 2 次/d。",
                                "id": "76",
                                "labels": [
                                    "Precaution"
                                ],
                                "name": "他达拉非",
                                "show_id": 73,
                                "collapsed": true
                            },
                            {
                                "description": "SR30 mg, 1 次/12 h 或 SR20 mg/8 h。",
                                "id": "75",
                                "labels": [
                                    "Precaution"
                                ],
                                "name": "硝苯地平",
                                "show_id": 74,
                                "collapsed": true
                            },
                            {
                                "description": "2 mg，次∕6h 或 4 mg, I 次/12 h。用药时间不宜超过10天，以防糖皮质激素毒性和肾上腺皮质抑制。推荐级别：1A。地塞米松不宜用于小儿人群的AMS预防，因为该药对小儿具有独特的潜在副作用。",
                                "id": "74",
                                "labels": [
                                    "Precaution"
                                ],
                                "name": "地塞米松",
                                "show_id": 75,
                                "collapsed": true
                            },
                            {
                                "description": "125 mg,2 次/d;小儿：2.5 mg,l 次/12 h。推荐级别：1A。",
                                "id": "73",
                                "labels": [
                                    "Precaution"
                                ],
                                "name": "乙酰唑胺",
                                "show_id": 76,
                                "collapsed": true
                            },
                            {
                                "description": "上升速率与发病率之间显然是有关联的。推荐评级：1B。",
                                "id": "72",
                                "labels": [
                                    "Precaution"
                                ],
                                "name": "逐步上升",
                                "show_id": 77,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_PRECAUTION2",
                        "labels": "temp",
                        "name": "预防",
                        "show_id": 70,
                        "collapsed": true
                    }
                ],
                "description": "一种较罕见而严重的临床状况，多发生于海拔4000m以上高原。本病以脑水肿为主要特征，症状包括精神障碍以及神经系统症状，如剧烈头痛、呕吐、虚弱、嗜睡、幻觉、共济失调、思维障碍、语无伦次、行为怪异；昏迷一般出现在疾病的后期阶段，但少数进展迅速的病例可很快发生昏迷。",
                "id": "2",
                "labels": [
                    "Disease"
                ],
                "name": "高原脑水肿",
                "show_id": 41,
                "collapsed": true
            },
            {
                "children": [
                    {
                        "children": [
                            {
                                "description": "头昏、恶心、心慌、气短、胸闷、眼花、食欲减退、腹胀、腹泻、便秘、口唇发绀、嗜睡、手足发麻",
                                "id": "9",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "其他症状",
                                "show_id": 80,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "8",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "呕吐",
                                "show_id": 81,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "7",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "头痛",
                                "show_id": 82,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_SYMPTOM0",
                        "labels": "temp",
                        "name": "症状",
                        "show_id": 79,
                        "collapsed": true
                    }
                ],
                "description": "是一种病情较轻的，即“轻症”的急性高山病（AMS）或“良性” AMS，通常发生于由低海拔地区快速进入海拔2200~2500 m以上高原者。",
                "id": "0",
                "labels": [
                    "Disease"
                ],
                "name": "急性轻症高原病",
                "show_id": 78,
                "collapsed": true
            },
            {
                "children": [
                    {
                        "children": [
                            {
                                "description": "病程迁延，呈波动性，但逐渐加重，出现持续进行性衰退，但转至海拔低处，症状逐渐减轻乃至消失。",
                                "id": "29",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "病程迁延",
                                "show_id": 85,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "28",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "不伴有红细胞增多和显著肺动脉高压。",
                                "show_id": 86,
                                "collapsed": true
                            },
                            {
                                "description": "伴随症状有血压降低、脱发、牙齿脱落、指甲凹陷、间歇浮肿、轻度肝大等。",
                                "id": "27",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "伴随症状",
                                "show_id": 87,
                                "collapsed": true
                            },
                            {
                                "description": "体力衰退表现为食欲减退、体重减轻、疲乏无力、劳动及工作能力降低、性功能减退、月经失调等。",
                                "id": "26",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "体力衰退",
                                "show_id": 88,
                                "collapsed": true
                            },
                            {
                                "description": "脑力衰退表现为头痛、头昏、失眠、记忆力减退、注意力不集中、思维及判断能力降低、情绪不稳和精神淡漠等。",
                                "id": "25",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "脑力衰退",
                                "show_id": 89,
                                "collapsed": true
                            },
                            {
                                "description": "久居海拔3000m以上的移居者或长期逗留海拔5000m以上的登山人员。",
                                "id": "24",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "高发人群",
                                "show_id": 90,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_SYMPTOM3",
                        "labels": "temp",
                        "name": "症状",
                        "show_id": 84,
                        "collapsed": true
                    }
                ],
                "description": "在青藏高原，该症不仅发生于滞留在海拔5500m以上较久的登山者，也发生于从低海拔地区移居高原（3000 m以上）较长时期（数月至数年）居住者中。本症通常会导致某种程度的精神和生理衰退，表现为疲劳、冷漠、食欲减退、体重减轻、失眠、沮丧、工作能力减退。然而，实验室研究的病理生理指标并未显示出本症患者与正常习服者之间的明显差异。",
                "id": "3",
                "labels": [
                    "Disease"
                ],
                "name": "高原衰退症",
                "show_id": 83,
                "collapsed": true
            },
            {
                "children": [
                    {
                        "children": [
                            {
                                "description": "头痛、头晕、气短及/或心悸、睡眠障碍、疲乏、局部发绀、手心及脚底有灼烧感、静脉扩张、肌肉及骨关节疼痛、食欲不振、记忆力减退、精神不集中。",
                                "id": "31",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "临床表现",
                                "show_id": 93,
                                "collapsed": true
                            },
                            {
                                "description": "一般在海拔3000m以上高原发病，多为移居者，少数世居者亦可罹患。病程呈慢性经过。",
                                "id": "30",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "主要特点",
                                "show_id": 94,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_SYMPTOM5",
                        "labels": "temp",
                        "name": "症状",
                        "show_id": 92,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "description": null,
                                "id": "62",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "继发性红细胞增多",
                                "show_id": 96,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "61",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "真性红细胞增多症",
                                "show_id": 97,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_EXCLUSION5",
                        "labels": "temp",
                        "name": "排除项",
                        "show_id": 95,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "description": "临床上使用红细胞分离法（或放血），去除多余红细胞。",
                                "id": "94",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "红细胞分离法",
                                "show_id": 99,
                                "collapsed": true
                            },
                            {
                                "description": "临床上推荐给予患者富氧环境。",
                                "id": "93",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "给氧",
                                "show_id": 100,
                                "collapsed": true
                            },
                            {
                                "description": "临床上推荐低转缓解高原红细胞增多症。",
                                "id": "92",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "低转",
                                "show_id": 101,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_TREATMENT5",
                        "labels": "temp",
                        "name": "治疗方法",
                        "show_id": 98,
                        "collapsed": true
                    }
                ],
                "description": "系CHAD的一个临床类型.其特征为在海拔300Om以上，红细胞和血红蛋白过度增多。常见症状和体征为头痛、头晕、乏力、呼吸困难、失眠、出血倾向、发绀、面色发红。HAPC患者的血红蛋白和红细胞比积（hemotocrit, HCt）值比相同海拔高度的健康居民显著为高。",
                "id": "5",
                "labels": [
                    "Disease"
                ],
                "name": "高原红细胞增多症",
                "show_id": 91,
                "collapsed": true
            },
            {
                "children": [
                    {
                        "children": [
                            {
                                "description": "心悸、胸闷、呼吸困难、乏力、咳嗽、发绀、P2亢进或分裂，重症者出现尿少、肝大、下肢水肿等右心衰竭征象。",
                                "id": "34",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "临床表现",
                                "show_id": 104,
                                "collapsed": true
                            },
                            {
                                "description": "海拔3000m以上，移居者易患，世居者亦可罹患。",
                                "id": "33",
                                "labels": [
                                    "Symptom"
                                ],
                                "name": "高发人群",
                                "show_id": 105,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_SYMPTOM4",
                        "labels": "temp",
                        "name": "症状",
                        "show_id": 103,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "description": null,
                                                "id": "49",
                                                "labels": [
                                                    "Test_Result"
                                                ],
                                                "name": "肺动脉平均压≥3.3kPa，即25mmHg。",
                                                "show_id": 109,
                                                "collapsed": true
                                            }
                                        ],
                                        "description": null,
                                        "id": "HAS_RESULT42",
                                        "labels": "temp",
                                        "name": "检查结果",
                                        "show_id": 108,
                                        "collapsed": true
                                    }
                                ],
                                "description": null,
                                "id": "42",
                                "labels": [
                                    "Test"
                                ],
                                "name": "心导管",
                                "show_id": 107,
                                "collapsed": true
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "description": "右肺下动脉干横径≥17mm及/或右肺下动脉干横径与气管横径比值≥1.10。",
                                                "id": "48",
                                                "labels": [
                                                    "Test_Result"
                                                ],
                                                "name": "右肺下动脉",
                                                "show_id": 112,
                                                "collapsed": true
                                            }
                                        ],
                                        "description": null,
                                        "id": "HAS_RESULT41",
                                        "labels": "temp",
                                        "name": "检查结果",
                                        "show_id": 111,
                                        "collapsed": true
                                    }
                                ],
                                "description": null,
                                "id": "41",
                                "labels": [
                                    "Test"
                                ],
                                "name": "X射线胸片",
                                "show_id": 110,
                                "collapsed": true
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "description": null,
                                                "id": "47",
                                                "labels": [
                                                    "Test_Result"
                                                ],
                                                "name": "右室流出道≥33mm，右室内径≥23mm。",
                                                "show_id": 115,
                                                "collapsed": true
                                            }
                                        ],
                                        "description": null,
                                        "id": "HAS_RESULT40",
                                        "labels": "temp",
                                        "name": "检查结果",
                                        "show_id": 114,
                                        "collapsed": true
                                    }
                                ],
                                "description": null,
                                "id": "40",
                                "labels": [
                                    "Test"
                                ],
                                "name": "超声心动图",
                                "show_id": 113,
                                "collapsed": true
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "description": null,
                                                "id": "46",
                                                "labels": [
                                                    "Test_Result"
                                                ],
                                                "name": "心电轴右偏及明显右心室肥厚。",
                                                "show_id": 118,
                                                "collapsed": true
                                            }
                                        ],
                                        "description": null,
                                        "id": "HAS_RESULT39",
                                        "labels": "temp",
                                        "name": "检查结果",
                                        "show_id": 117,
                                        "collapsed": true
                                    }
                                ],
                                "description": null,
                                "id": "39",
                                "labels": [
                                    "Test"
                                ],
                                "name": "心电图",
                                "show_id": 116,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_TEST4",
                        "labels": "temp",
                        "name": "检查项目",
                        "show_id": 106,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "description": null,
                                "id": "65",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "其他心血管疾病",
                                "show_id": 120,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "64",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "肺心病",
                                "show_id": 121,
                                "collapsed": true
                            },
                            {
                                "description": null,
                                "id": "63",
                                "labels": [
                                    "Exclusion"
                                ],
                                "name": "慢性阻塞性肺疾患",
                                "show_id": 122,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_EXCLUSION4",
                        "labels": "temp",
                        "name": "排除项",
                        "show_id": 119,
                        "collapsed": true
                    },
                    {
                        "children": [
                            {
                                "description": "临床上推荐给予患者富氧环境。",
                                "id": "96",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "给氧",
                                "show_id": 124,
                                "collapsed": true
                            },
                            {
                                "description": "临床上推荐低转，缓解高原心脏病。",
                                "id": "95",
                                "labels": [
                                    "Treatment"
                                ],
                                "name": "低转",
                                "show_id": 125,
                                "collapsed": true
                            }
                        ],
                        "description": null,
                        "id": "HAS_TREATMENT4",
                        "labels": "temp",
                        "name": "治疗方法",
                        "show_id": 123,
                        "collapsed": true
                    }
                ],
                "description": "本病发生于处在3000m以上高原慢性低氧环境下的儿童和成人。其特征为严重的肺动脉高压和右心室肥大，重症患者右心衰竭。HAHD患者的肺动脉压显著高于高原健康居民。",
                "id": "4",
                "labels": [
                    "Disease"
                ],
                "name": "高原心脏病",
                "show_id": 102,
                "collapsed": true
            }
        ],
        "name": "病症",
        "show_id": 1,
        "collapsed": false
    }
}
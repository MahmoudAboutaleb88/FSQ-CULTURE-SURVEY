// ══════════════════════════════════════
// SHARED DATA — يحمله index.html و dashboard.html
// لو عدلت سؤال أو محور عدله هنا بس
// ══════════════════════════════════════

const SECTIONS = [
  { ar:"القيادة والالتزام",          en:"Leadership & Commitment",
    qs:[
      { ar:"تُظهر الإدارة التزامًا واضحًا بالجودة وسلامة الغذاء",                                              en:"Management shows clear commitment to quality and food safety." },
      { ar:"أفهم رؤية الشركة وأهدافها فيما يتعلق بالجودة وسلامة الغذاء",                                       en:"I understand the company's vision and goals regarding quality and food safety." },
      { ar:"يحرص القادة على أهمية إنتاج منتجات آمنة وعالية الجودة",                                            en:"Leaders emphasize the importance of producing safe, high-quality products." },
      { ar:"تستجيب الإدارة بسرعة عند طرح مخاوف الجودة أو سلامة الغذاء",                                       en:"Management responds quickly when quality or food safety concerns are raised." },
      { ar:"يتم توصيل معلومات الجودة وسلامة الغذاء بوضوح وفي الوقت المناسب",                                  en:"Quality and food safety information is communicated clearly and on time." }
    ]
  },
  { ar:"التواصل والإبلاغ",           en:"Communication & Reporting",
    qs:[
      { ar:"أشعر بالراحة عند الإبلاغ عن مشكلات سلامة الغذاء",                                                en:"I feel comfortable reporting food safety issues." },
      { ar:"يتم توضيح توقعات الجودة وسلامة الغذاء في عملي بوضوح",                                            en:"Quality and food safety expectations in my work are clearly explained." }
    ]
  },
  { ar:"التدريب والكفاءة",           en:"Training & Competency",
    qs:[
      { ar:"تلقيت تدريبًا كافيًا لأداء عملي بأمان",                                                          en:"I have received adequate training to perform my work safely." },
      { ar:"المواد التدريبية واضحة ومرتبطة بالعمل وعملية",                                                    en:"Training materials are clear, work-related, and practical." },
      { ar:"أعرف كيفية التعرف على مخاطر الجودة أو سلامة الغذاء والإبلاغ عنها",                               en:"I know how to identify and report quality or food safety hazards." },
      { ar:"أتلقى تدريبًا تنشيطيًا عند حدوث تغييرات",                                                       en:"I receive refresher training when changes occur." }
    ]
  },
  { ar:"السلوك الشخصي والمسؤولية",  en:"Personal Behaviour & Responsibility",
    qs:[
      { ar:"أشعر بمسؤولية شخصية تجاه الجودة وسلامة الغذاء",                                                  en:"I feel personally responsible for quality and food safety." },
      { ar:"ألتزم دائمًا بقواعد النظافة وممارسات التصنيع الجيدة",                                            en:"I always follow hygiene rules and good manufacturing practices." },
      { ar:"أتخذ إجراءً فوريًا عند ملاحظة أي خطر محتمل",                                                    en:"I take immediate action when I notice a potential hazard." },
      { ar:"أشعر بالتشجيع على طرح أفكار لتحسين الجودة وسلامة الغذاء",                                       en:"I feel encouraged to suggest ideas for improving quality and food safety." }
    ]
  },
  { ar:"الإجراءات وبيئة العمل",      en:"Procedures & Work Environment",
    qs:[
      { ar:"إجراءات التشغيل القياسية في منطقتي واضحة وسهلة التطبيق",                                         en:"SOPs in my area are clear and easy to follow." },
      { ar:"ألتزم بإجراءات التشغيل القياسية حتى عند العمل تحت الضغط",                                       en:"I follow SOPs even when working under pressure." },
      { ar:"يتم التعامل مع عدم الالتزام بقواعد سلامة الغذاء بشكل عادل",                                     en:"Non-compliance with food safety rules is handled fairly." }
    ]
  },
  { ar:"الموارد والبنية التحتية",    en:"Resources & Infrastructure",
    qs:[
      { ar:"الأدوات والمعدات اللازمة للعمل بأمان متوفرة وفي حالة جيدة",                                     en:"Tools and equipment needed to work safely are available and in good condition." },
      { ar:"بيئة عملي نظيفة ومنظمة وتدعم ممارسات النظافة الجيدة",                                          en:"My work environment is clean, organized, and supports good hygiene practices." },
      { ar:"تتوفر الموارد اللازمة للحفاظ على الجودة وسلامة الغذاء",                                         en:"Resources needed to maintain quality and food safety are available." },
      { ar:"يتم التعامل بسرعة مع مشكلات الصيانة المؤثرة على السلامة",                                      en:"Maintenance issues affecting safety are addressed quickly." }
    ]
  },
  { ar:"التحسين المستمر",            en:"Continuous Improvement",
    qs:[
      { ar:"يتم مشاركة الدروس المستفادة من الحوادث مع الموظفين",                                            en:"Lessons learned from incidents are shared with employees." },
      { ar:"ألاحظ وجود مبادرات للتحسين المستمر في الجودة وسلامة الغذاء",                                   en:"I notice continuous improvement initiatives in quality and food safety." },
      { ar:"أعتقد أن الشركة ملتزمة بالتحسين المستمر على المدى الطويل",                                     en:"I believe the company is committed to long-term continuous improvement." }
    ]
  }
];

const TOTAL_Q = SECTIONS.reduce((s, sec) => s + sec.qs.length, 0);

// QLABELS مستخرجة تلقائياً من SECTIONS
const QLABELS = SECTIONS.flatMap(sec => sec.qs.map(q => q.ar));

// حد التقييم — عدّله هنا بس لو احتجت تغييره
const THRESHOLD = 75;

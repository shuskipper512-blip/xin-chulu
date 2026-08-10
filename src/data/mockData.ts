const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

// 品牌核心数据
export const brandData = {
  name: '新出路',
  tagline: '传递希望，看见职业新可能',
  description: '起源于大厂青年，致力于帮助更多青年人与创业者找到个人发展新出路的生态社区。我们始终坚信：传递希望比贩卖焦虑更有价值。',
  stats: {
    events: '100+',
    content: '20万字+',
    people: '5000+',
    stories: '100条',
  },
  founder: {
    name: '大树',
    title: '新出路文化创始人',
    subtitle: '视频号金V职场博主',
    background: '曾任职阿里金融业务',
    highlight: '从大厂离职后，持续探索职业转型与个人事业',
    achievement: '发起新出路，陪伴职场人与创业者把想法变成行动',
    story: '',
    media: [],
  },
};

// 核心业务
export const businesses = {
  toB: {
    title: 'To B',
    subtitle: 'IP私域大事件营销操盘',
    description: '为知识IP与创业企业提供从0到1、从1到10的全链路增长解决方案',
    services: [
      { name: '项目孵化', description: '从0-1项目孵化：帮助IP或新产品完成市场定位、产品打磨与冷启动' },
      { name: '私域运营', description: '私域精细化运营体系建设：构建可持续的用户增长与转化系统' },
      { name: '发售操盘', description: '发售全流程操盘：涵盖策略策划、内容生产、运营执行与销售转化' },
      { name: '增长陪跑', description: '规模化增长陪跑：在业务验证后，协助实现规模化复制与增长' },
    ],
    aiProduct: {
      title: 'AI应用产品发布与上市',
      services: [
        '产品发布策略制定',
        '上市营销全案',
        '用户冷启动方案',
        '市场声量打造',
      ],
    },
  },
  toC: {
    title: 'To C',
    subtitle: '共创合伙联盟',
    description: '为职场人提供转型支持与成长陪跑，搭建项目合伙的桥梁',
    services: [
      { name: '转型孵化', description: '职场人转型孵化和陪跑：针对个体的职业困惑，提供方向梳理与路径规划' },
      { name: '创造计划', description: '「创造计划」3V1转型陪跑服务：三位导师陪伴一位学员的深度转型项目' },
      { name: '项目合伙', description: '项目制合伙人培养和匹配：将具备能力的人才与合适的创业项目进行连接' },
      { name: '生成流共创会', description: '基于200+场实践经验，通过结构化场域激发集体智慧' },
    ],
  },
};

// 核心方法论
export const methodologies = [
  {
    name: '五行人货场',
    description: '六个要素，定位是圆心',
    details: '定位×人×货×流量×营销×场',
    icon: 'compass',
  },
  {
    name: '四季模型',
    description: '春生夏长秋收冬藏',
    details: '不懂节奏的人累死自己，懂节奏的人顺势而为',
    icon: 'calendar',
  },
  {
    name: '三生合一',
    description: '生命·生活·生意',
    details: '让生命、生活与生意彼此支持',
    icon: 'sparkles',
  },
  {
    name: '点线面体',
    description: '技能→业务→产品→系统',
    details: '让时间不再是你收入的瓶颈',
    icon: 'trending-up',
  },
];

// 四季模型
export const seasons = [
  {
    name: '春·生',
    color: 'from-green-400 to-emerald-500',
    bgLight: 'bg-green-50',
    target: '让陌生人知道你、了解你、信任你',
    actions: ['高频输出内容', '参加活动认识人', '做免费分享公开课', '听用户说什么'],
    error: '春天就急着收割。用户还没认识你，你上来就卖——没人买，你还怀疑自己。',
  },
  {
    name: '夏·长',
    color: 'from-yellow-400 to-orange-500',
    bgLight: 'bg-yellow-50',
    target: '做一个最小产品，让人愿意为它付钱',
    actions: ['设计MVP快速迭代', '找5-10个种子用户内测', '打磨交付流程', '攒案例和好评'],
    error: '永远在打磨，永远不敢拿出来。完美主义是一人公司的慢性毒药。',
  },
  {
    name: '秋·收',
    color: 'from-orange-400 to-red-500',
    bgLight: 'bg-orange-50',
    target: '集中力量做转化，把之前的积累变现',
    actions: ['集中发售', '深度服务好付费用户', '收案例、好评、转介绍', '看数据'],
    error: '秋天还在改产品。产品不需要完美，需要的是被卖掉。',
  },
  {
    name: '冬·藏',
    color: 'from-blue-400 to-indigo-500',
    bgLight: 'bg-blue-50',
    target: '让今年的经验变成明年的资产',
    actions: ['全面复盘', '内容沉淀', '系统升级', '该休息就休息'],
    error: '冬天还在拼命。一年四季都在收割，最后把自己割没了。',
  },
];

// 核心人才
export const talents = [
  {
    id: 't1',
    name: '大树',
    title: '新出路文化创始人',
    tags: ['前阿里金融业务', '职业转型', '项目共创'],
    description: '从大厂离职后持续探索职业转型与个人事业，发起新出路，陪伴更多人把想法变成可验证的行动。',
    avatar: null,
    featured: true,
    type: 'founder',
  },
  {
    id: 't2',
    name: '运营合伙人',
    title: '全栈运营伙伴',
    tags: ['12年运营经验', '项目合伙人'],
    description: '通过真实项目参与，逐步完成从职场能力到项目协作能力的迁移。',
    avatar: null,
    featured: true,
    type: 'member',
  },
  {
    id: 't3',
    name: '心理咨询项目',
    title: '知识服务合作案例',
    tags: ['IP发售', '心理咨询'],
    description: '围绕产品定位、内容表达与发售节奏，完成一次从方案到交付的项目共创。',
    avatar: null,
    featured: true,
    type: 'partner',
  },
  {
    id: 't4',
    name: '旅行主理人项目',
    title: '个人事业探索案例',
    tags: ['小红书运营', '团队管理'],
    description: '从个人经验出发，逐步梳理产品方向、内容表达与团队协作方式。',
    avatar: null,
    featured: true,
    type: 'partner',
  },
];

// 更多人才/优秀伙伴
export const partners = [
  { name: '职业转型', title: '方向梳理与行动设计' },
  { name: '内容表达', title: '个人品牌与内容共创' },
  { name: '产品设计', title: '从经验到最小可行产品' },
  { name: '项目运营', title: '从单点能力到项目协作' },
  { name: '组织发展', title: '团队与合伙机制探索' },
  { name: '身心成长', title: '支持长期可持续创造' },
];

// 活动照片（往期精彩瞬间）
export const activityPhotos = [
  { id: 1, src: publicAsset('images/activities/activity-1.webp'), alt: '新出路共创活动现场' },
  { id: 2, src: publicAsset('images/activities/activity-2.webp'), alt: '伙伴在工作坊中交流' },
  { id: 3, src: publicAsset('images/activities/activity-3.webp'), alt: '合伙共创工作坊现场' },
  { id: 4, src: publicAsset('images/activities/activity-4.webp'), alt: '伙伴围桌共创' },
  { id: 5, src: publicAsset('images/activities/activity-5.webp'), alt: '共创活动分享环节' },
  { id: 6, src: publicAsset('images/activities/activity-6.webp'), alt: '伙伴在活动中交流' },
];

// 成功案例
export const successCases = [
  {
    name: '运营伙伴转型案例',
    industry: '全栈运营',
    service: '创造计划3V1陪跑',
    result: '通过真实项目参与，逐步完成从职场能力到项目协作能力的迁移。',
    tags: ['职场转型', '项目合伙'],
    image: null,
  },
  {
    name: '心理咨询项目',
    industry: '心理咨询培训',
    service: 'IP发售全流程操盘',
    result: '围绕产品定位、内容表达与发售节奏，完成从方案到交付的项目共创。',
    tags: ['发售操盘', '私域变现'],
    image: null,
  },
  {
    name: '旅行主理人项目',
    industry: '小红书+旅行主理人',
    service: '从同路人到引路人陪跑',
    result: '从个人经验出发，逐步梳理产品方向、内容表达与团队协作方式。',
    tags: ['副业转型', '团队搭建'],
    image: null,
  },
  {
    name: 'AI师傅项目',
    industry: 'AI科技媒体',
    service: '精细化私域建设与增长',
    result: '为AI科技媒体公司搭建系统化私域运营体系，实现用户持续增长与深度互动',
    tags: ['私域运营', 'AI应用'],
    image: null,
  },
  {
    name: '头部科技项目',
    industry: '科技公司',
    service: '私域运营体系搭建',
    result: '协助搭建完整的私域运营框架，并通过季度复盘持续迭代优化运营策略',
    tags: ['企业服务', '运营体系'],
    image: null,
  },
  {
    name: '教练教育项目',
    industry: '教育服务',
    service: '内容与发售支持',
    result: '围绕用户需求、产品表达与项目节奏提供协作支持。',
    tags: ['教育服务', '项目共创'],
    image: null,
  },
];

// 活动数据
export const activities = [
  {
    id: 'a1',
    name: '一人公司AI共创节',
    date: '2026年5月',
    cities: ['线上'],
    cover: publicAsset('images/activities/activity-1.webp'),
    reviewUrl: '#',
  },
  {
    id: 'a2',
    name: '创造大会',
    date: '2026年',
    cities: ['北京', '上海', '深圳'],
    cover: publicAsset('images/activities/activity-3.webp'),
    reviewUrl: '#',
  },
  {
    id: 'a3',
    name: '毛选创修共创会',
    date: '持续进行',
    cities: ['线上'],
    cover: publicAsset('images/activities/activity-5.webp'),
    reviewUrl: '#',
  },
];

// 加入流程
export const joinSteps = [
  {
    step: 1,
    title: '填写申请',
    description: '告诉我们你的背景、专长和期待',
  },
  {
    step: 2,
    title: '审核沟通',
    description: '通过公众号消息进一步了解彼此',
  },
  {
    step: 3,
    title: '加入计划',
    description: '根据你的需求匹配合适的加入路径',
  },
  {
    step: 4,
    title: '共创共赢',
    description: '开始你的创造之旅，把想法变成行动',
  },
];

// 合作邀请
export const cooperation = {
  title: '合作邀约',
  description: '从帮助个人看见职业新可能，到助力IP与企业实现可持续增长，新出路构建了一套融合实战方法论、深度社群生态与高端资源网络的复合型能力体系。',
  types: [
    {
      title: '知识IP/创业企业',
      description: '如果您正面临产品冷启动、用户增长瓶颈或变现效率问题，我们的私域发售操盘服务能为您提供经过验证的系统化解决方案。',
    },
    {
      title: '寻求转型的企业与组织',
      description: '如果您关注员工职业发展、组织创新或人才转型孵化，我们的「项目合伙模式」与转型陪跑体系能提供新的思路与落地支持。',
    },
    {
      title: '内容平台与品牌方',
      description: '如果您希望打造有影响力的职场或成长类IP活动、进行内容共创或品牌联合发声，我们的嘉宾资源与社群运营经验能带来独特的价值。',
    },
  ],
};

// 五行六问
export const fiveElementsQuestions = [
  { element: '定位', question: '用一句话说你是谁、为谁做什么（15字以内）' },
  { element: '人', question: '你的用户几岁？做什么工作？最焦虑什么？' },
  { element: '货', question: '用户付钱给你，他得到的具体结果是什么？' },
  { element: '流量', question: '过去三个月，新用户从哪来的？' },
  { element: '营销', question: '用户从第一次听说你到付钱，中间发生了什么？' },
  { element: '场', question: '用户在什么时刻、什么状态下最需要你？' },
];

// 学员好评截图
export const testimonials: Array<{ id: number; src: string; alt: string }> = [];

// 大树的个人故事章节
export const founderStory = {
  intro: {
    title: '一个大厂人的出走，',
    titleHighlight: '一群人的新出路',
    subtitle: '从阿里金融业务离开，到持续探索职业转型，再到发起一群人的共创',
    quote: '我走过的弯路，希望你不用再走一遍。',
  },
  chapters: [
    {
      id: 1,
      chapter: '第一章',
      title: '困在系统里的大厂人',
      year: '2019',
      content: '那时候我在阿里做金融业务，拿着不错的薪水，住着公司附近的房子。一切看起来都很"稳定"。',
      content2: '但我知道不对。那种感觉就像——你在一艘正在下沉的豪华邮轮上，船上的人都在跳舞，而你已经闻到了海水的味道。',
      highlight: '30岁那年，我问了自己一个问题：如果离开大厂，我还能靠什么吃饭？',
    },
    {
      id: 2,
      chapter: '第二章',
      title: '裸辞后的至暗时刻',
      year: '2020',
      content: '从阿里出来的时候，我以为凭自己的履历，做点什么不行？',
      content2: '现实给了我一记响亮的耳光。做过知识付费、开过社群、搞过训练营……三个月，花了十几万，颗粒无收。最惨的时候，银行卡里只剩下两千块钱。',
      highlight: '我才明白：大厂的光环是平台的，不是你的。离开平台，你什么都不是。',
    },
    {
      id: 3,
      chapter: '第三章',
      title: '转机：把经验变成方法',
      year: '2020-2021',
      content: '跌到谷底之后，我开始重新思考。不再追风口，不再抄别人的模式，而是回到自己身上——我到底是谁？我真正擅长什么？',
      content2: '2020年，我开始把过往的经验梳理成一套职业转型方法，并在视频号持续分享。后来，我完成了第一次从内容到产品、再到真实交付的闭环。',
      highlight: '我第一次相信：离开平台之后，也可以靠自己的经验与行动，慢慢建立一条新路。',
    },
    {
      id: 4,
      chapter: '第四章',
      title: '从"我"到"我们"',
      year: '2022-2023',
      content: '越来越多人来找我，问的都是同一句话：大树，我也想转型，但是不知道从哪开始。',
      content2: '我开始做一对一咨询，做社群，做共创会。一个人走得快，一群人走得远。慢慢地，从一个人变成了一群人，从一群人变成了一个生态。',
      highlight: '新出路不是我一个人的故事，是每一个敢于重新选择的人的故事。',
    },
    {
      id: 5,
      chapter: '第五章',
      title: '创造计划：让想法落地',
      year: '2023-至今',
      content: '我们做了"创造计划"——不是教你怎么赚钱，而是陪你把你心里那个"想做但不敢做"的事，真的做出来。',
      content2: '有人从大厂辞职做了心理咨询师，有人从零开始做起了旅行主理人，有人把自己的专业变成了一门课程……这些故事，比任何数据都更打动我。',
      highlight: '传递希望比贩卖焦虑更有价值。这是新出路从第一天起就刻在骨子里的东西。',
    },
  ],
  values: [
    { title: '真诚', desc: '不贩卖焦虑，不画大饼，说真话' },
    { title: '实干', desc: '想得再多不如先干起来' },
    { title: '长期主义', desc: '做难而正确的事，时间会给答案' },
    { title: '共创', desc: '一个人走得快，一群人走得远' },
  ],
};

// 新出路发展历程
export const journeyTimeline = [
  {
    year: '2020',
    title: '种子萌芽',
    subtitle: '一切从一个视频号开始',
    description: '2019年底，大树从阿里离职。经历创业初期的摸索后，开始在视频号分享职业转型思考。2020年，第一条视频爆火，涨粉1万+。',
    milestones: ['视频号开通', '第一条10万+播放', '第一个付费社群'],
    tag: '起点',
  },
  {
    year: '2021',
    title: '破土而出',
    subtitle: '把经验变成方法与产品',
    description: '完成从内容到产品、再到真实交付的闭环，验证职业转型服务的真实需求。',
    milestones: ['完成首次产品交付', '视频号金V认证', '持续公开分享'],
    tag: '验证',
  },
  {
    year: '2022',
    title: '开枝散叶',
    subtitle: '从一个人到一群人',
    description: '从一对一咨询到社群运营，从线上分享到线下活动。越来越多同频的人聚集到一起，新出路社群初具雏形。',
    milestones: ['100场+线上分享', '第一届创造大会', '社群成员破5000人'],
    tag: '生长',
  },
  {
    year: '2023',
    title: '根深叶茂',
    subtitle: '系统化方法论沉淀',
    description: '两年实践沉淀出"五行人货场""四季模型""三生合一"等核心方法论。从"靠感觉"到"有章法"，帮助更多人少走弯路。',
    milestones: ['四季模型发布', '创造计划启动', '引路人共创'],
    tag: '沉淀',
  },
  {
    year: '2024',
    title: '森林生态',
    subtitle: '项目合伙制落地',
    description: '从培训教育走向生态共建。创造计划孵化出多个成功项目，合伙人模式跑通，越来越多人在这里找到属于自己的新出路。',
    milestones: ['创造大会三地举办', '项目合伙制跑通', '多个IP发售成功案例'],
    tag: '生态',
  },
  {
    year: '2025+',
    title: '向光生长',
    subtitle: '让更多人看见职业新可能',
    description: '新出路还在成长。我们的目标不是做多大，而是帮多少人真正改变。每一个人的故事，都是新出路的故事。',
    milestones: ['一人公司AI共创节', '持续迭代方法论', '更多故事正在发生……'],
    tag: '未来',
  },
];

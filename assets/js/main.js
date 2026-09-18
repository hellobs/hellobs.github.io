/* 张子睿作品集 · i18n + 交互 */
(function(){
  "use strict";

  /* ---------- 双语词典 ---------- */
  var I18N = {
    zh: {
      nav:{about:"关于",works:"作品",projects:"项目",skills:"技能",honors:"活动",contact:"联系"},
      hero:{
        eyebrow:"华南理工大学 · 工业设计实验班",
        nameEn:"Zirui Zhang",
        tag:"设计思维 <em>Design</em> × 技术实现 <em>Code</em>",
        desc:"用交互设计感知问题，用工程与算法构建答案。信息与交互设计 + 计算机科学复合背景，深耕仿真、视觉与智能算法。",
        ctaView:"浏览作品", ctaContact:"联系我",
        m1n:"91.07", m1l:"加权平均分", m2l:"大学英语四级", m3n:"2", m3l:"主修 × 辅修"
      },
      about:{
        title:"关于 · About",
        lead:"华南理工大学 工业设计实验班（信息与交互设计），主修加权 91.07；辅修计算机科学与技术。兼具设计思维与技术实现的复合背景。",
        tMajor:"主修", major:"工业设计 · 信息与交互设计",
        tMinor:"辅修", minor:"计算机科学与技术",
        course:"高级语言程序设计、Python、概率论、人工智能导论（94）",
        resume:"下载简历 PDF",
        c1n:"信息与交互", c1t:"工业设计实验班主方向",
        c2n:"技术实现", c2t:"计算机科学辅修打磨代码能力",
        c3n:"全流程", c3t:"从造型、交互到算法与部署"
      },
      works:{title:"代表作品 · Selected Works"},
      p1:{year:"2026.3 – 进行中",ongoing:"进行中",title:"SRP · 飞行装备远程协作仿真平台研发",role:"设计学院 SRP 项目 · 核心开发者",desc:"基于 Unity 从零搭建低空无人机三维仿真训练平台，借助 AI 工具完成飞控、搜索救援、武器发射等模块；引入桥接等设计模式做架构，并负责团队 Git 仓库搭建与维护。"},
      p2:{year:"2026.7 – 进行中",ongoing:"进行中",title:"Global Trust Challenge · 全球数字可信挑战赛",role:"原型开发与 Unity 可视化",desc:"Generative Agents 多智能体文献研读，同步学习 FastAPI 后端，调研仿真平台与后端通信方案与完整交互仿真场景。"},
      p3:{year:"2019 – 2022",ongoing:"",title:"小学数学口算练习系统",role:"独立开发 · 全流程",desc:"Python + Tkinter 全流程开发：需求分析、模块化架构、自定义难度、自动批改、计时评分、数据持久化与日志管理；面向对象设计与异常捕获保障健壮性。"},
      p4:{year:"数学建模",ongoing:"",title:"全国大学生数学建模竞赛",role:"建模 · 求解 · 论文",desc:"按题目解析→方法调研→PoC→稳健性审计→LaTeX 成稿的严谨流程推进，涉及综合评价、决策类与基础机器学习数据分析。"},
      skills:{
        title:"技能栈 · Skills",
        s1:{t:"仿真与建模",d:"Unity 全流程开发与三维场景搭建；基础造型与空间感知，SolidWorks 建模。"},
        s2:{t:"数理与逻辑",d:"高数、线性代数、概率统计（覆盖考研数学一全景）、离散数学；综合评价、决策类与基础机器学习算法。"},
        s3:{t:"程序与算法",d:"C++（OOP）、Python 与 GUI；基础算法与数据结构；组合逻辑电路与计算机组成原理基础。"},
        s4:{t:"工程与协作",d:"LaTeX / Markdown 技术文档；Git 版本管理与协作开发；AI Agent 辅助编程；华为云远程开发环境。"}
      },
      honors:{
        title:"竞赛与活动 · Activities",
        items:[
          "全国大学生职业规划大赛 · 华工院内赛（获加分证明）",
          "SRP 飞行仿真平台 · 核心开发者",
          "Global Trust Challenge 全球数字可信挑战赛",
          "校园再设计 · 科技文化节（G2 组提案）",
          "宿舍最美角落设计 ·《方寸之间》",
          "数学建模竞赛 · 严谨全流程推进"
        ]
      },
      contact:{title:"联系 · Contact"},
      loc:"广东 · 深圳 / 广州",
      modal:{back:"返回作品"}
    },
    en: {
      nav:{about:"About",works:"Works",projects:"Projects",skills:"Skills",honors:"Activities",contact:"Contact"},
      hero:{
        eyebrow:"South China Univ. of Technology · Industrial Design",
        nameEn:"Zirui Zhang",
        tag:"Design Mind <em>×</em> Code Craft",
        desc:"Perceive problems through interaction design, build answers through engineering and algorithms. A blend of Information & Interaction Design and Computer Science.",
        ctaView:"View Works", ctaContact:"Contact",
        m1n:"91.07", m1l:"Weighted GPA", m2l:"CET-4", m3n:"2", m3l:"Major × Minor"
      },
      about:{
        title:"About",
        lead:"South China University of Technology — Industrial Design Experimental Class (Information & Interaction Design), weighted GPA 91.07; minor in Computer Science & Technology. A compound profile of design thinking and technical implementation.",
        tMajor:"Major", major:"Industrial Design · Info & Interaction",
        tMinor:"Minor", minor:"Computer Science & Technology",
        course:"Advanced Programming, Python, Probability, Intro to AI (94)",
        resume:"Download Resume (PDF)",
        c1n:"Info & Interaction", c1t:"Core track of the experimental class",
        c2n:"Technical Craft", c2t:"CS minor sharpens coding ability",
        c3n:"End-to-end", c3t:"From form and UX to algorithms and deployment"
      },
      works:{title:"Selected Works"},
      p1:{year:"2026.3 – Ongoing",ongoing:"Ongoing",title:"SRP · Low-Altitude Drone Simulation Platform",role:"Core Developer · School of Design SRP",desc:"Built a 3D drone simulation training platform from scratch in Unity, prototyping flight control, search & rescue, and weapon modules with AI-assisted development; applied bridge and other design patterns to architecture, and set up the team Git repository."},
      p2:{year:"2026.7 – Ongoing",ongoing:"Ongoing",title:"Global Trust Challenge",role:"Prototype + Unity Visualization",desc:"Researching Generative Agents multi-agent literature, learning the FastAPI backend, and investigating simulation-backend communication and full interactive scenarios."},
      p3:{year:"2019 – 2022",ongoing:"",title:"Primary Math Drill System",role:"Solo Developer · Full Stack",desc:"Full-stack development in Python + Tkinter: requirements analysis, modular architecture, custom difficulty, auto-grading, timed scoring, data persistence and logging; OOP design and exception handling for robustness."},
      p4:{year:"MCM",ongoing:"",title:"China Undergrad Mathematical Contest in Modeling",role:"Modeling · Solving · Paper",desc:"A rigorous pipeline of problem analysis, method research, PoC, robustness audit, and a LaTeX paper, covering MADM, decision-making and basic ML data analysis."},
      skills:{
        title:"Skills",
        s1:{t:"Simulation & Modeling",d:"Full-cycle Unity development and 3D scene building; basic form intuition and SolidWorks modeling."},
        s2:{t:"Mathematics & Logic",d:"Calculus, linear algebra, probability & statistics (covering the full Postgrad Math I scope), discrete math; MADM, decision and basic ML algorithms."},
        s3:{t:"Programming & Algorithms",d:"C++ (OOP), Python and GUI; fundamental algorithms & data structures; basics of combinational logic circuits and computer organization."},
        s4:{t:"Engineering & Collaboration",d:"LaTeX / Markdown tech writing; Git version control and collaborative development; AI-agent-assisted programming; Huawei Cloud remote dev environment."}
      },
      honors:{
        title:"Activities & Competitions",
        items:[
          "National Career Planning Contest · SCUT school round (bonus credit)",
          "SRP Drone Simulation Platform · core developer",
          "Global Trust Challenge",
          "Campus Re-design · Science & Culture Festival (Group G2)",
          "Best Dorm Corner Design · “Within a Square Foot”",
          "MCM · rigorous full-pipeline"
        ]
      },
      contact:{title:"Contact"},
      loc:"Guangdong · Shenzhen / Guangzhou",
      modal:{back:"Back to works"}
    }
  };

  /* ---------- 作品数据 ---------- */
  var WORKS = [
    {img:"assets/projects/3d-jiegou.png", art:null,
      zh:{cat:"三维设计 · SolidWorks",title:"《界·构》—— 造型与支撑结构",sub:"面的构成 × 结构与受力",tech:"SolidWorks · 造型推演",desc:"以“界·构”为主题，探讨空间边界与承重结构的关系：从面的构成入手完成造型推演，并对支撑架、底座等部件进行结构建模与装配，最终输出完整造型与三维打印可用的模型。"},
      en:{cat:"3D Form · SolidWorks",title:"Boundary & Structure",sub:"Surface composition × structure",tech:"SolidWorks · form language",desc:"An exploration of spatial boundaries and load-bearing structure: form development from surface composition, modelling of brackets and base parts, assembled into a print-ready model."}},
    {img:"assets/projects/form-0.JPG", art:null,
      zh:{cat:"产品造型",title:"产品造型与表现",sub:"手绘 · 比例 · 形态语言",tech:"手绘 · 形态推演",desc:"围绕产品形态语言展开系统的造型训练，涵盖手绘表达、比例推敲与多方案造型推演，积累大量工业设计基本功。"},
      en:{cat:"Form Design",title:"Product Form & Rendering",sub:"Sketch · proportion · form language",tech:"Sketching · form language",desc:"Systematic form training covering sketching, proportion studies and multi-variant form generation — the fundamentals of industrial design."}},
    {img:"assets/projects/keyboard.png", art:null,
      zh:{cat:"计算机辅助工业设计",title:"机械键盘 · SolidWorks 建模渲染",sub:"从草图到实体建模",tech:"SolidWorks · 曲面建模 · 渲染",desc:"在 SolidWorks 中完成机械键盘的实体与曲面建模，从放样、凸台到细节倒角，输出可供装配与渲染的高精度模型。"},
      en:{cat:"CAD",title:"Mechanical Keyboard · CAD Model",sub:"From sketch to solid model",tech:"SolidWorks · surfacing · rendering",desc:"Solid and surface modeling of a mechanical keyboard in SolidWorks — lofts, extrusions and fillet details — delivered as an assembly-ready, renderable model."}},
    {img:"assets/projects/snowpeak-poster.png", art:null,
      zh:{cat:"品牌研究",title:"Snow Peak ——「用户即创造者」品牌路径",sub:"品牌观察 · 展台设计 · 报告册",tech:"消费洞察 · 品牌策略 · 版式",desc:"以“用户即创造者”哲学切入，研究户外品牌 Snow Peak 的发展路径；输出品牌研究报告册与展台设计思路，用视觉语言重建其精神。"},
      en:{cat:"Brand Study",title:"Snow Peak — “User as Creator”",sub:"Brand observation · booth · booklet",tech:"Consumer insight · strategy · layout",desc:"Examining outdoor brand Snow Peak through a “user-as-creator” lens, delivering a brand research booklet and booth concept that re-expresses its philosophy."}},
    {img:"assets/projects/pixelposter.jpg", art:null,
      zh:{cat:"智能影像与动画",title:"《二进制与调色盘》",sub:"数字与色彩的诗意碰撞",tech:"动画 · 数字影像 · 调色",desc:"一部以“二进制与调色盘”为主题的影像动画：用编码语言与色彩语言构建叙事，探讨数字世界与感官体验的相互映射。"},
      en:{cat:"Motion & Film",title:"Binary & Palette",sub:"A poetic clash of code and color",tech:"Animation · digital image · grading",desc:"A short film around “binary and palette”: narrating with coded and chromatic languages to explore how the digital maps onto sensory experience."}},
    {img:"assets/projects/form-2.JPG", art:null,
      zh:{cat:"造型推演",title:"手绘造型推演",sub:"抓型 · 透视 · 多方案",tech:"马克笔 · 快速表现",desc:"快速形体的抓取与多方案造型推演练习，训练对比例、体积与透视的敏感度。"},
      en:{cat:"Sketch",title:"Form Development Sketches",sub:"grab · perspective · variants",tech:"Marker · rapid viz",desc:"Fast-form capture and multi-variant development drawing to sharpen sensitivity to proportion, volume and perspective."}},
    {img:null, art:3,
      zh:{cat:"视觉设计基础",title:"视觉设计基础 ·《设计手册》",sub:"版式 · 网格 · 色彩系统",tech:"InDesign 思路 · 网格系统",desc:"系统的视觉设计基础训练：《设计手册》覆盖版式、网格系统、字体与色彩规范，是品牌视觉执行的方法论沉淀。"},
      en:{cat:"Visual Design",title:"Design Manual",sub:"Layout · grid · color system",tech:"Grid system · typography",desc:"A foundational visual design manual covering layout, grid systems, typography and color specification — the methodology behind brand visual execution."}},
    {img:null, art:1,
      zh:{cat:"数学建模",title:"数学建模竞赛",sub:"建模 · 求解 · 稳健性",tech:"LaTeX · Python · 优化",desc:"以严谨的分析框架面对赛题：题目解析、候选方法 PoC、稳健性审计与成稿，锻炼从问题到决策的完整链路。"},
      en:{cat:"Math Modeling",title:"Mathematical Modeling",sub:"Model · solve · robustness",tech:"LaTeX · Python · optimization",desc:"A rigorous framework for contest problems — parsing, method PoC, robustness audit and final paper — exercising the whole problem-to-decision pipeline."}},
    {img:null, art:2,
      zh:{cat:"仿真开发",title:"SRP · 低空无人机仿真平台",sub:"Unity 三维仿真训练",tech:"Unity · C# · 设计模式",desc:"从零搭建低空无人机三维仿真训练平台，实现飞控、搜救与武器模块，并用桥接等设计模式组织代码架构。"},
      en:{cat:"Simulation",title:"Drone Simulation Platform",sub:"Unity 3D training sim",tech:"Unity · C# · patterns",desc:"A low-altitude drone 3D training platform with flight-control, search-rescue and weapon modules architected with bridge and other design patterns."}}
  ];

  var lang = localStorage.getItem("portfolio-lang") || "zh";
  setLang(lang);

  document.getElementById("langToggle").addEventListener("click", function(){
    lang = (lang === "zh") ? "en" : "zh";
    localStorage.setItem("portfolio-lang", lang);
    setLang(lang);
  });

  function setLang(l){
    lang = l;
    document.documentElement.lang = (l === "zh") ? "zh-CN" : "en";
    document.documentElement.setAttribute("data-lang", l);
    document.getElementById("langToggle").textContent = (l === "zh") ? "EN" : "中文";
    var d = I18N[l];

    /* 普通 data-i18n 节点 */
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var v = resolve(el.getAttribute("data-i18n"), d);
      if (v != null) el.innerHTML = v;
    });
    /* 荣誉列表 */
    var hl = document.querySelector(".honors-list");
    if (hl){ hl.innerHTML = d.honors.items.map(function(x){ return "<li>"+x+"</li>"; }).join(""); }
    /* 作品网格 */
    renderWorks();
  }

  function resolve(key, d){
    return key.split(".").reduce(function(o,k){ return (o && o[k] != null) ? o[k] : null; }, d);
  }

  function renderWorks(){
    var grid = document.getElementById("worksGrid");
    var d = I18N[lang];
    grid.innerHTML = WORKS.map(function(w, idx){
      var t = w[lang];
      var media;
      if (w.img){
        media = '<img src="'+w.img+'" alt="'+t.title+'" loading="lazy">';
      } else {
        media = '<div class="cover-art gradient-'+w.art+'">'+
                '<div class="art-grid"></div>'+
                '<div><div class="art-title">'+t.title+'</div><div class="art-tag">'+t.sub+'</div></div>'+
                '</div>';
      }
      return '<article class="work-card" data-idx="'+idx+'">'+
              '<div class="w-media">'+media+'</div>'+
              '<span class="w-category">'+t.cat+'</span>'+
              '<h3 class="w-title">'+t.title+'</h3>'+
              '<p class="w-sub">'+t.sub+'</p>'+
             '</article>';
    }).join("");

    grid.querySelectorAll(".work-card").forEach(function(card){
      card.addEventListener("click", function(){ openModal(+card.getAttribute("data-idx")); });
    });
  }

  /* ---------- modal ---------- */
  var backdrop = document.getElementById("modalBackdrop");
  var openModal = function(idx){
    var w = WORKS[idx], t = w[lang];
    document.getElementById("modalImg").src = w.img || "";
    document.getElementById("modalImg").style.display = w.img ? "block" : "none";
    document.getElementById("modalCat").textContent = t.cat;
    document.getElementById("modalTitle").textContent = t.title;
    document.getElementById("modalDesc").textContent = t.desc;
    document.getElementById("modalTech").textContent = t.tech;
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
  };
  var closeModal = function(){
    backdrop.hidden = true;
    document.body.style.overflow = "";
  };
  document.getElementById("modalClose").addEventListener("click", closeModal);
  backdrop.addEventListener("click", function(e){ if (e.target === backdrop) closeModal(); });
  document.addEventListener("keydown", function(e){ if (e.key === "Escape") closeModal(); });

  /* ---------- mobile menu ---------- */
  var menuBtn = document.getElementById("menuBtn");
  var navLinks = document.getElementById("navLinks");
  menuBtn.addEventListener("click", function(){ navLinks.classList.toggle("open"); });
  navLinks.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click", function(){ navLinks.classList.remove("open"); });
  });

  /* ---------- year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
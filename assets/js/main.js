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
        desc:"用交互设计感知问题，用工程与算法构建答案。MetaEvo 无人农场世界模型 Team Leader，并深入 HAIDE Lab 多智能体仿真与人机交互课题。",
        ctaView:"浏览作品", ctaContact:"联系我",
        m1n:"MetaEvo", m1l:"无人农场世界模型 · Team Leader", m2n:"HAIDE", m2l:"HAIDE Lab 多智能体课题", m3n:"SCUT", m3l:"华南理工大学"
      },
      about:{
        title:"关于 · About",
        lead:"华南理工大学 工业设计实验班（信息与交互设计），辅修计算机科学与技术；MetaEvo AI 团队 Team Leader，主攻无人农场世界模型与具身智能体；同时参与 HAIDE Lab 多智能体仿真与人机交互课题。",
        tMajor:"主修", major:"工业设计 · 信息与交互设计",
        tMinor:"辅修", minor:"计算机科学与技术",
        tResearch:"科研", research:"MetaEvo Lab 无人农场世界模型 × HAIDE Lab 多智能体仿真",
        resume:"下载简历 PDF",
        c1n:"信息与交互", c1t:"工业设计实验班主方向",
        c2n:"技术实现", c2t:"计算机科学辅修打磨代码能力",
        c3n:"研究驱动", c3t:"从造型、交互到算法与部署"
      },
      works:{title:"代表作品 · Selected Works"},
      p1:{year:"2026 – 在研",ongoing:"在研",title:"无人农场 · 世界模型与具身智能体（MetaEvo）",role:"MetaEvo AI 团队 · Team Leader",desc:"主导无人农场世界模型项目：以 UE 搭建高逼真、符合物理规律的 3D 仿真场景，设计 API 接口输出风速、偏移度等反馈供智能体读取；分阶段推进「仿真 → 世界模型 → 智能体训练」，目标支撑顶会论文产出。"},
      p2:{year:"2026 – 在研",ongoing:"在研",title:"Provenance · AI 价值形成多智能体仿真平台",role:"HAIDE Lab · 项目成员",desc:"开发多智能体仿真平台，通过可溯源、可配置的多方决策，直观可视化 AI 价值（价值观）的形成与演化过程，支撑 AI 治理研究。"},
      p3:{year:"2026 – 在研",ongoing:"在研",title:"MAVIS · 可控可解释多智能体仿真框架",role:"HAIDE Lab · 框架开发",desc:"构建可控、可解释的多智能体仿真框架：建模复杂人机交互、追踪智能体决策轨迹，并为 AI 治理场景提供可解释的评估支持。"},
      p4:{year:"2026.3 – 进行中",ongoing:"进行中",title:"SRP · 低空无人机三维仿真训练平台",role:"设计学院 SRP 项目 · 核心开发者",desc:"基于 Unity 从零搭建低空无人机三维仿真训练平台，借助 AI 工具完成飞控、搜索救援、武器发射等模块；引入桥接等设计模式组织架构，并负责团队 Git 仓库搭建与维护。"},
      p5:{year:"2026.7 – 进行中",ongoing:"进行中",title:"Global Trust Challenge · 全球数字可信挑战赛",role:"原型开发与 Unity 可视化",desc:"Generative Agents 多智能体文献研读，同步学习 FastAPI 后端，调研仿真平台与后端通信方案与完整交互仿真场景。"},
      skills:{
        title:"技能栈 · Skills",
        s1:{t:"仿真与建模",d:"Unity 全流程开发与三维场景搭建；多智能体仿真平台开发；基础造型与空间感知，SolidWorks 建模。"},
        s2:{t:"数理与逻辑",d:"高数、线性代数、概率统计与离散数学；综合评价、决策类与基础机器学习算法，具备问题抽象与建模能力。"},
        s3:{t:"程序与算法",d:"C++（OOP）、Python 与 GUI；基础算法与数据结构；组合逻辑电路与计算机组成原理基础。"},
        s4:{t:"工程与协作",d:"LaTeX / Markdown 技术文档；Git 版本管理与协作开发；AI Agent 辅助编程；华为云远程开发环境。"}
      },
      honors:{
        title:"竞赛与活动 · Activities",
        items:[
          "MetaEvo AI 团队 · 无人农场世界模型项目 Team Leader",
          "HAIDE Lab 学生成员 · Provenance 与 MAVIS 多智能体课题",
          "SRP 低空无人机三维仿真训练平台 · 核心开发者",
          "Global Trust Challenge · 全球数字可信挑战赛"
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
        desc:"Perceive problems through interaction design, build answers through engineering and algorithms. Team Leader of the MetaEvo unmanned-farm world model, while researching multi-agent simulation and HCI at HAIDE Lab.",
        ctaView:"View Works", ctaContact:"Contact",
        m1n:"MetaEvo", m1l:"Unmanned-farm world model · Team Leader", m2n:"HAIDE", m2l:"HAIDE Lab multi-agent projects", m3n:"SCUT", m3l:"South China Univ. of Tech."
      },
      about:{
        title:"About",
        lead:"South China University of Technology — Industrial Design Experimental Class (Information & Interaction Design), minor in Computer Science; Team Leader of the MetaEvo AI team on unmanned-farm world models and embodied agents, while researching multi-agent simulation and HCI at HAIDE Lab.",
        tMajor:"Major", major:"Industrial Design · Info & Interaction",
        tMinor:"Minor", minor:"Computer Science & Technology",
        tResearch:"Research", research:"MetaEvo Lab unmanned-farm world model × HAIDE Lab multi-agent simulation",
        resume:"Download Resume (PDF)",
        c1n:"Info & Interaction", c1t:"Core track of the experimental class",
        c2n:"Technical Craft", c2t:"CS minor sharpens coding ability",
        c3n:"Research-driven", c3t:"From form and UX to algorithms and deployment"
      },
      works:{title:"Selected Works"},
      p1:{year:"2026 – Ongoing",ongoing:"Ongoing",title:"Unmanned Farm · World Model & Embodied Agent (MetaEvo)",role:"MetaEvo AI Team · Team Leader",desc:"Leading the unmanned-farm world-model project — building high-fidelity, physics-accurate 3D scenes in UE and designing API interfaces that stream wind-speed and drift feedback to agents — progressing through simulation › world model › agent training, targeting top-tier conference papers."},
      p2:{year:"2026 – Ongoing",ongoing:"Ongoing",title:"Provenance · AI Value Formation Simulation",role:"HAIDE Lab · Project Member",desc:"Building a multi-agent simulation platform that visualizes the formation and evolution of AI values through traceable, configurable multi-stakeholder decision-making — supporting AI-governance research."},
      p3:{year:"2026 – Ongoing",ongoing:"Ongoing",title:"MAVIS · Controllable Multi-Agent Framework",role:"HAIDE Lab · Framework Contributor",desc:"Developing a controllable and interpretable multi-agent simulation framework that models complex human-AI interactions, traces agent decisions, and supports interpretable evaluation of AI-governance scenarios."},
      p4:{year:"2026.3 – Ongoing",ongoing:"Ongoing",title:"SRP · Low-Altitude Drone Simulation Platform",role:"Core Developer · School of Design SRP",desc:"Built a 3D drone simulation training platform from scratch in Unity, prototyping flight control, search & rescue, and weapon modules with AI-assisted development; applied bridge and other design patterns to architecture and set up the team Git repository."},
      p5:{year:"2026.7 – Ongoing",ongoing:"Ongoing",title:"Global Trust Challenge",role:"Prototype + Unity Visualization",desc:"Researching Generative Agents multi-agent literature, learning the FastAPI backend, and investigating simulation-backend communication and full interactive scenarios."},
      skills:{
        title:"Skills",
        s1:{t:"Simulation & Modeling",d:"Full-cycle Unity development and 3D scene building; multi-agent simulation platform development; SolidWorks modeling and form intuition."},
        s2:{t:"Mathematics & Logic",d:"Calculus, linear algebra, probability & statistics, discrete math; MADM, decision and basic machine-learning algorithms, with a grasp of problem abstraction and modeling."},
        s3:{t:"Programming & Algorithms",d:"C++ (OOP), Python and GUI; fundamental algorithms & data structures; basics of combinational logic circuits and computer organization."},
        s4:{t:"Engineering & Collaboration",d:"LaTeX / Markdown tech writing; Git version control and collaborative development; AI-agent-assisted programming; Huawei Cloud remote dev environment."}
      },
      honors:{
        title:"Activities & Competitions",
        items:[
          "MetaEvo AI Team · Team Leader of the unmanned-farm world-model project",
          "Student at HAIDE Lab · Provenance & MAVIS multi-agent projects",
          "SRP Low-Altitude Drone Simulation Training Platform · core developer",
          "Global Trust Challenge"
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
    {img:"assets/projects/snowpeak-poster.png", art:null,
      zh:{cat:"品牌研究",title:"Snow Peak ——「用户即创造者」品牌路径",sub:"品牌观察 · 展台设计 · 报告册",tech:"消费洞察 · 品牌策略 · 版式",desc:"以“用户即创造者”哲学切入，研究户外品牌 Snow Peak 的发展路径；输出品牌研究报告册与展台设计思路，用视觉语言重建其精神。"},
      en:{cat:"Brand Study",title:"Snow Peak — “User as Creator”",sub:"Brand observation · booth · booklet",tech:"Consumer insight · strategy · layout",desc:"Examining outdoor brand Snow Peak through a “user-as-creator” lens, delivering a brand research booklet and booth concept that re-expresses its philosophy."}},
    {img:"assets/projects/pixelposter.jpg", art:null,
      zh:{cat:"智能影像与动画",title:"《二进制与调色盘》",sub:"数字与色彩的诗意碰撞",tech:"动画 · 数字影像 · 调色",desc:"一部以“二进制与调色盘”为主题的影像动画：用编码语言与色彩语言构建叙事，探讨数字世界与感官体验的相互映射。"},
      en:{cat:"Motion & Film",title:"Binary & Palette",sub:"A poetic clash of code and color",tech:"Animation · digital image · grading",desc:"A short film around “binary and palette”: narrating with coded and chromatic languages to explore how the digital maps onto sensory experience."}},
    {img:"assets/projects/design-manual.png", art:null,
      zh:{cat:"视觉设计基础",title:"视觉设计基础 ·《设计手册》",sub:"版式 · 网格 · 品牌视觉",tech:"网格系统 · 排版 · 品牌",desc:"系统的视觉设计基础训练：《设计手册》覆盖版式、网格系统、字体与色彩规范，并沉淀一套完整的视觉识别方法论。"},
      en:{cat:"Visual Design",title:"Design Manual",sub:"Layout · grid · brand visual",tech:"Grid system · typography · brand",desc:"A foundational visual design manual covering layout, grid systems, typography and color specification — the methodology behind brand visual execution."}}
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
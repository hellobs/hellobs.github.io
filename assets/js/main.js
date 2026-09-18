/* 张子睿作品集 · i18n + 交互 */
(function(){
  "use strict";

  /* ---------- 双语词典 ---------- */
  var I18N = {
    zh: {
      title:"张子睿 · 工业设计 × 计算机科学 作品集",
      nav:{about:"关于",projects:"项目",skills:"技能",honors:"活动",contact:"联系"},
      hero:{
        eyebrow:"华南理工大学 · 工业设计实验班",
        nameEn:"Zirui Zhang",
        tag:"设计思维 <em>Design</em> × 技术实现 <em>Code</em>",
        desc:"用交互设计感知问题，用工程与算法构建答案。MetaEvo 无人农场世界模型项目成员，并深入 HAIDE Lab 多智能体仿真与人机交互课题。",
        ctaContact:"联系我",
        m1n:"MetaEvo", m1l:"无人农场世界模型 · 项目成员", m2n:"HAIDE", m2l:"HAIDE Lab 多智能体课题", m3n:"SCUT", m3l:"华南理工大学"
      },
      about:{
        title:"关于 · About",
        lead:"华南理工大学 工业设计实验班（信息与交互设计），辅修计算机科学与技术；MetaEvo 团队项目成员，参与无人农场世界模型与智能体；同时参与 HAIDE Lab 多智能体仿真与人机交互课题。",
        tMajor:"主修", major:"工业设计 · 信息与交互设计",
        tMinor:"辅修", minor:"计算机科学与技术",
        tResearch:"科研", research:"MetaEvo Lab 无人农场世界模型 × HAIDE Lab 多智能体仿真",
        c1n:"信息与交互", c1t:"工业设计实验班主方向",
        c2n:"技术实现", c2t:"计算机科学辅修打磨代码能力",
        c3n:"研究驱动", c3t:"从造型、交互到算法与部署"
      },
      projects:{title:"项目经历 · Projects"},
      p1:{year:"2026 · 正式启动",ongoing:"刚启动",title:"无人农场 · 世界模型与智能体（MetaEvo）",role:"MetaEvo 团队 · 项目成员",desc:"项目于近期正式启动，当前处于初始探索与仿真底座搭建阶段：以 UE 搭建高逼真、符合物理规律的 3D 仿真场景，设计 API 接口输出风速、偏移度等反馈供智能体读取；分阶段推进「仿真 → 世界模型 → 智能体训练」，目标支撑顶会论文产出。"},
      p2:{year:"2026 – 在研",ongoing:"在研",title:"Provenance · AI 价值形成多智能体仿真平台",role:"HAIDE Lab · 项目成员",desc:"开发多智能体仿真平台，通过可溯源、可配置的多方决策，直观可视化 AI 价值（价值观）的形成与演化过程，支撑 AI 治理研究。"},
      p3:{year:"2026 – 在研",ongoing:"在研",title:"MAVIS · 可控可解释多智能体仿真框架",role:"HAIDE Lab · 框架开发",desc:"构建可控、可解释的多智能体仿真框架：建模复杂人机交互、追踪智能体决策轨迹，并为 AI 治理场景提供可解释的评估支持。"},
      p4:{year:"2026.3 – 进行中",ongoing:"进行中",title:"SRP · 低空无人机三维仿真训练平台",role:"设计学院 SRP 项目 · 核心开发者",desc:"基于 Unity 从零搭建低空无人机三维仿真训练平台，借助 AI 工具完成飞控、搜索救援、武器发射等模块；引入桥接等设计模式组织架构，并负责团队 Git 仓库搭建与维护。",tech:"Unity · C# · 设计模式 · Git · GitHub"},
      p5:{year:"2026.7 – 进行中",ongoing:"进行中",title:"Global Trust Challenge · 全球数字可信挑战赛",role:"原型开发与可视化",desc:"Generative Agents 多智能体文献研读，同步学习 FastAPI 后端，调研仿真平台与后端通信方案与完整交互仿真场景。",tech:"Generative Agents · FastAPI · 通信架构"},
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
          "MetaEvo 团队 · 无人农场世界模型项目成员",
          "HAIDE Lab 学生成员 · Provenance 与 MAVIS 多智能体课题",
          "SRP 低空无人机三维仿真训练平台 · 核心开发者",
          "Global Trust Challenge · 全球数字可信挑战赛"
        ]
      },
      contact:{title:"联系 · Contact"},
      loc:"广东 · 深圳 / 广州"
    },
    en: {
      title:"Zirui Zhang · Industrial Design × Computer Science — Portfolio",
      nav:{about:"About",projects:"Projects",skills:"Skills",honors:"Activities",contact:"Contact"},
      hero:{
        eyebrow:"South China Univ. of Technology · Industrial Design",
        nameEn:"Zirui Zhang",
        tag:"Design Mind <em>×</em> Code Craft",
        desc:"Perceive problems through interaction design, build answers through engineering and algorithms. Project member of the MetaEvo unmanned-farm world model, while researching multi-agent simulation and HCI at HAIDE Lab.",
        ctaContact:"Contact",
        m1n:"MetaEvo", m1l:"Unmanned-farm world model · Project Member", m2n:"HAIDE", m2l:"HAIDE Lab multi-agent projects", m3n:"SCUT", m3l:"South China Univ. of Tech."
      },
      about:{
        title:"About",
        lead:"South China University of Technology — Industrial Design Experimental Class (Information & Interaction Design), minor in Computer Science; project member of the MetaEvo team on the unmanned-farm world model and agents, while researching multi-agent simulation and HCI at HAIDE Lab.",
        tMajor:"Major", major:"Industrial Design · Info & Interaction",
        tMinor:"Minor", minor:"Computer Science & Technology",
        tResearch:"Research", research:"MetaEvo Lab unmanned-farm world model × HAIDE Lab multi-agent simulation",
        c1n:"Info & Interaction", c1t:"Core track of the experimental class",
        c2n:"Technical Craft", c2t:"CS minor sharpens coding ability",
        c3n:"Research-driven", c3t:"From form and UX to algorithms and deployment"
      },
      projects:{title:"Projects"},
      p1:{year:"2026 · Just kicked off",ongoing:"Just Launched",title:"Unmanned Farm · World Model & Intelligent Agent (MetaEvo)",role:"MetaEvo Team · Project Member",desc:"The project kicked off recently and is now in its early exploration and simulation-foundation phase — building high-fidelity, physics-accurate 3D scenes in UE and designing API interfaces that stream wind-speed and drift feedback to agents — progressing through simulation › world model › agent training, targeting top-tier conference papers."},
      p2:{year:"2026 – Ongoing",ongoing:"Ongoing",title:"Provenance · AI Value Formation Simulation",role:"HAIDE Lab · Project Member",desc:"Building a multi-agent simulation platform that visualizes the formation and evolution of AI values through traceable, configurable multi-stakeholder decision-making — supporting AI-governance research."},
      p3:{year:"2026 – Ongoing",ongoing:"Ongoing",title:"MAVIS · Controllable Multi-Agent Framework",role:"HAIDE Lab · Framework Contributor",desc:"Developing a controllable and interpretable multi-agent simulation framework that models complex human-AI interactions, traces agent decisions, and supports interpretable evaluation of AI-governance scenarios."},
      p4:{year:"2026.3 – Ongoing",ongoing:"Ongoing",title:"SRP · Low-Altitude Drone Simulation Platform",role:"Core Developer · School of Design SRP",desc:"Built a 3D drone simulation training platform from scratch in Unity, prototyping flight control, search & rescue, and weapon modules with AI-assisted development; applied bridge and other design patterns to architecture and set up the team Git repository.",tech:"Unity · C# · Design Patterns · Git · GitHub"},
      p5:{year:"2026.7 – Ongoing",ongoing:"Ongoing",title:"Global Trust Challenge",role:"Prototype & Visualization",desc:"Researching Generative Agents multi-agent literature, learning the FastAPI backend, and investigating simulation-backend communication and full interactive scenarios.",tech:"Generative Agents · FastAPI · Communication Architecture"},
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
          "MetaEvo Team · Project member of the unmanned-farm world-model project",
          "Student at HAIDE Lab · Provenance & MAVIS multi-agent projects",
          "SRP Low-Altitude Drone Simulation Training Platform · core developer",
          "Global Trust Challenge"
        ]
      },
      contact:{title:"Contact"},
      loc:"Guangdong · Shenzhen / Guangzhou"
    }
  };

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
    document.getElementById("langToggle").textContent = (l === "zh") ? "EN" : "ZH";
    var d = I18N[l];
    document.title = d.title;

    /* 普通 data-i18n 节点 */
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var v = resolve(el.getAttribute("data-i18n"), d);
      if (v != null) el.innerHTML = v;
    });
    /* 荣誉列表 */
    var hl = document.querySelector(".honors-list");
    if (hl){ hl.innerHTML = d.honors.items.map(function(x){ return "<li>"+x+"</li>"; }).join(""); }
  }

  function resolve(key, d){
    return key.split(".").reduce(function(o,k){ return (o && o[k] != null) ? o[k] : null; }, d);
  }

  /* ---------- mobile menu ---------- */
  var menuBtn = document.getElementById("menuBtn");
  var navLinks = document.getElementById("navLinks");
  menuBtn.addEventListener("click", function(){ navLinks.classList.toggle("open"); });
  navLinks.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click", function(){ navLinks.classList.remove("open"); });
  });

  /* ---------- year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- scroll reveal ---------- */
  var revealTargets = document.querySelectorAll(".section, footer");
  if ("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
    }, {threshold:.12});
    revealTargets.forEach(function(s){ s.classList.add("reveal"); io.observe(s); });
  } else {
    revealTargets.forEach(function(s){ s.classList.add("reveal","in"); });
  }
})();
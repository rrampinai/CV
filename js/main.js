const icons = {
  home: '<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/>',
  cpu: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 2.5v3M15 2.5v3M9 18.5v3M15 18.5v3M2.5 9h3M2.5 15h3M18.5 9h3M18.5 15h3"/>',
  layers: '<path d="m12 3 8 4.5-8 4.5L4 7.5 12 3z"/><path d="m4 12 8 4.5 8-4.5"/><path d="m4 16.5 8 4.5 8-4.5"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5A2.5 2.5 0 0 1 6.5 8H20"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.4 2.7 3.6 5.7 3.6 9s-1.2 6.3-3.6 9c-2.4-2.7-3.6-5.7-3.6-9S9.6 5.7 12 3z"/>',
  grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.2"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.2"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.2"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.2"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  pin: '<path d="M12 21s6.5-5.6 6.5-10.2a6.5 6.5 0 1 0-13 0C5.5 15.4 12 21 12 21z"/><circle cx="12" cy="10.5" r="2"/>',
  building: '<path d="M4 20.5V5.5A1.5 1.5 0 0 1 5.5 4h8A1.5 1.5 0 0 1 15 5.5v15"/><path d="M15 9.5h4a1.5 1.5 0 0 1 1.5 1.5v9.5"/><path d="M8 8h2M8 12h2M8 16h2M3 20.5h18"/>',
  shield: '<path d="M12 3 5.5 6v5.5c0 4 2.6 7 6.5 8.5 3.9-1.5 6.5-4.5 6.5-8.5V6L12 3z"/><path d="m9 12 2 2 4-4"/>',
  phone: '<path d="M8 3.5h2.8l1.3 3.4-1.8 1.1a11 11 0 0 0 5 5l1.1-1.8 3.4 1.3V15a1.8 1.8 0 0 1-2 1.8A15.2 15.2 0 0 1 3.7 6.5 1.8 1.8 0 0 1 5.5 4.5"/>',
  mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="m4.5 7.5 7.5 5.5 7.5-5.5"/>',
  linkedin: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 10.5V16M8 8h.01M12 16v-3.2a1.8 1.8 0 1 1 3.6 0V16"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3.5v4M16 3.5v4"/>',
  activity: '<path d="M3 12h4l2.2-5.5L13 17l2.2-5H21"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="m20 20-3.6-3.6"/>',
  chart: '<path d="M4 19V5"/><path d="M4 19h16"/><path d="m7 14 3.5-3.5 2.8 2.5L18 8"/>',
  gauge: '<path d="M5.2 17.5a8 8 0 1 1 13.6 0"/><path d="M12 13.5 16.2 9"/>',
  clipboard: '<rect x="6.5" y="4.5" width="11" height="16" rx="2"/><path d="M9 4.2h6V6H9z"/><path d="M9 11h6M9 14.5h4"/>',
  leaf: '<path d="M5.5 18.5c7.2.4 13-6.4 13.2-13.2-6.8.2-13.6 6-13.2 13.2z"/><path d="M8.5 15.5c2.4-.6 4.8-3 6-6.5"/>',
  database: '<ellipse cx="12" cy="6" rx="7" ry="2.8"/><path d="M5 6v6c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8V6"/><path d="M5 12v6c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-6"/>',
  ruler: '<path d="m4 16 8-8 8 8"/><path d="M8 12.2 9.2 13.4M11 9.2 12.8 11M14 8.2 15.2 9.4"/>',
  boxes: '<path d="m12 3 8 4.2v9.2L12 21 4 16.4V7.2L12 3z"/><path d="M12 12 4 7.6M12 12l8-4.4M12 12v9"/>',
  users: '<path d="M16 19v-1.2A3.2 3.2 0 0 0 12.8 14H7.2A3.2 3.2 0 0 0 4 17.8V19"/><circle cx="10" cy="8" r="3"/><path d="M20 19v-1.1A2.8 2.8 0 0 0 17.6 15"/><path d="M16 5.2a3 3 0 0 1 0 5.6"/>'
};

function icon(name) {
  const path = icons[name] || icons.cpu;
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;
}

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((node) => {
    if (node.dataset.ready === "true") return;
    node.innerHTML = icon(node.dataset.icon);
    node.dataset.ready = "true";
  });
}

const data = {
  nome: "Osvaldo Rodrigo Rampin",
  cargo: "Analista da Qualidade e Meio Ambiente",
  frase:
    "Qualidade e meio ambiente se constroem com método, parceria e melhoria contínua.",
  chips: [
    { texto: "Tupã – SP", icon: "pin" },
    { texto: "Jacto Agrícola · desde 2003", icon: "building" },
    { texto: "ISO 9001 · ISO 14001 · VDA 6.3", icon: "shield" },
    { texto: "(14) 99183-7594", icon: "phone", href: "tel:+5514991837594" },
    { texto: "rrampin@gmail.com", icon: "mail", href: "mailto:rrampin@gmail.com" },
    {
      texto: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/osvaldo-rodrigo-rampin-7412671b5"
    }
  ],
  stats: [
    { valor: "2003", rotulo: "Início na Jacto", icon: "calendar" },
    { valor: "SGI", rotulo: "ISO 9001 e 14001", icon: "shield" },
    { valor: "Green Belt", rotulo: "Lean Six Sigma", icon: "activity" }
  ],
  competencias: [
    {
      titulo: "Sistema de gestão integrado",
      detalhe: "Auditorias ISO 9001 e ISO 14001, tratativas e alinhamento do SGI com a operação.",
      icon: "shield"
    },
    {
      titulo: "Auditoria de processo",
      detalhe: "Programa de auditoria e referencial VDA 6.3 aplicado ao processo produtivo.",
      icon: "search"
    },
    {
      titulo: "SAP QM e PM",
      detalhe: "Uso do módulo QM e contato com o módulo PM no laboratório de calibração.",
      icon: "database"
    },
    {
      titulo: "Metrologia",
      detalhe: "Instrumentos convencionais e 3D, incerteza de medição e critérios de aceitação.",
      icon: "ruler"
    },
    {
      titulo: "Lean Six Sigma",
      detalhe: "Green Belt com foco em variação, causa raiz e melhoria de processo.",
      icon: "activity"
    },
    {
      titulo: "Fornecedores",
      detalhe: "Não conformidades, planos de ação, homologação, PPAP e APQP.",
      icon: "users"
    }
  ],
  experiencias: [
    {
      cargo: "Analista da Qualidade e Meio Ambiente",
      empresa: "Jacto Agrícola",
      periodo: "Abr. 2025 — atual",
      icon: "shield",
      pontos: [
        "Responsável pelo Sistema de Gestão Integrado, com atuação nas frentes de auditorias ISO 9001 e ISO 14001 e nas tratativas relacionadas.",
        "Condução do programa de auditoria de processo e apoio às iniciativas ambientais da empresa.",
        "Integração entre qualidade, meio ambiente e demais áreas para manter o SGI eficaz e alinhado à operação."
      ]
    },
    {
      cargo: "Analista de Controle de Qualidade",
      empresa: "Jacto Agrícola",
      periodo: "2003 — 2025",
      icon: "search",
      pontos: [
        "Atuação em controle de qualidade, processo de fabricação e suporte à produção e a problemas de campo.",
        "Inspeção de materiais, gestão de recursos e elaboração de indicadores de qualidade.",
        "Usuário de SAP módulo QM e domínio de instrumentos de medição convencionais e 3D.",
        "14 anos no atendimento a fornecedores: tratativa de não conformidades, planos de ação, interação com engenharia, implantação de melhorias, homologação e recertificação."
      ]
    },
    {
      cargo: "Laboratório de Calibração",
      empresa: "Jacto Agrícola",
      periodo: "2010 — 2011",
      icon: "gauge",
      pontos: [
        "Gestão e implantação de melhorias no laboratório de calibração.",
        "Programação das calibrações, critérios de aceitação, estudo de frequência e indicadores.",
        "Cálculo de incerteza de medição e elaboração de instruções de trabalho.",
        "Contato com o módulo PM do SAP nesse período."
      ]
    },
    {
      cargo: "Experiência acadêmica — CEP e Cpk",
      empresa: "Unimar — Universidade de Marília",
      periodo: "Formação complementar",
      icon: "chart",
      pontos: [
        "Controle estatístico de processo com ênfase em análise de capacidade de processo em peças fornecidas (Cpk)."
      ]
    }
  ],
  formacoes: [
    {
      titulo: "Bacharelado em Tecnologia em Manutenção Industrial",
      local: "Formação acadêmica",
      icon: "cpu",
      detalhe: "Base técnica em manutenção, processo industrial e qualidade."
    },
    {
      titulo: "MBA em Supply Chain Management",
      local: "Unicesumar",
      icon: "boxes",
      detalhe: "Gestão da cadeia de suprimentos."
    },
    {
      titulo: "Pós-graduação em Gestão de Projetos",
      local: "Anhanguera — EAD",
      icon: "clipboard",
      detalhe: "Planejamento, execução e controle de projetos. Concluída."
    },
    {
      titulo: "Lean Six Sigma — Green Belt",
      local: "Optima — São Paulo",
      icon: "activity",
      detalhe: "Melhoria de processos com metodologia Lean Six Sigma."
    },
    {
      titulo: "VDA 6.3",
      local: "Auditoria de processo",
      icon: "search",
      detalhe: "Auditoria de processo segundo o referencial VDA 6.3."
    },
    {
      titulo: "Auditor interno ISO 9001 / ISO 14001",
      local: "Formação SGI",
      icon: "leaf",
      detalhe: "Auditoria interna de sistema de gestão da qualidade e ambiental."
    }
  ],
  idiomas: [
    { nome: "Português", nivel: "Nativo", pct: 100, icon: "globe" },
    { nome: "Inglês", nivel: "Iniciante", pct: 30, icon: "globe" },
    { nome: "Espanhol", nivel: "Básico", pct: 25, icon: "globe" }
  ],
  projetos: [
    {
      nome: "Sistema de Gestão Integrado",
      descricao:
        "Condução do SGI com auditorias ISO 9001 e ISO 14001, tratativas, programa de auditoria de processo e iniciativas ambientais.",
      tags: ["ISO 9001", "ISO 14001", "VDA 6.3"],
      categoria: "gestao",
      icon: "shield",
      imagem: "img/capa-sgi.jpg"
    },
    {
      nome: "Capacidade de processo (Cpk)",
      descricao:
        "Estudo acadêmico de controle estatístico de processo com ênfase em análise de capacidade em peças fornecidas.",
      tags: ["CEP", "Cpk", "Unimar"],
      categoria: "qualidade",
      icon: "chart",
      imagem: "img/capa-cpk.jpg"
    },
    {
      nome: "Tratativa de fornecedores",
      descricao:
        "Atendimento a não conformidades, planos de ação, interação com engenharia e implantação de melhorias para eliminar problemas de qualidade.",
      tags: ["8D", "Fornecedores", "PPAP"],
      categoria: "qualidade",
      icon: "users",
      imagem: "img/capa-fornecedores.jpg"
    },
    {
      nome: "Homologação de fornecedores",
      descricao:
        "Desenvolvimento, homologação e recertificação de novos fornecedores, com alinhamento entre qualidade e engenharia.",
      tags: ["APQP", "Homologação"],
      categoria: "qualidade",
      icon: "boxes",
      imagem: "img/capa-homologacao.jpg"
    },
    {
      nome: "Green Belt Six Sigma",
      descricao:
        "Aplicação da metodologia Lean Six Sigma na melhoria de processos, com foco em redução de variação, causa raiz e resultados sustentáveis.",
      tags: ["Lean", "DMAIC", "Green Belt"],
      categoria: "qualidade",
      icon: "activity",
      imagem: "img/capa-sixsigma.jpg"
    },
    {
      nome: "Indicadores e SAP QM",
      descricao:
        "Elaboração de indicadores de qualidade e uso do SAP módulo QM, com contato adicional ao módulo PM no laboratório.",
      tags: ["SAP QM", "Indicadores"],
      categoria: "gestao",
      icon: "database",
      imagem: "img/capa-sap.jpg"
    }
  ]
};

function el(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

function chip(item) {
  const content = `${icon(item.icon)}<span>${item.texto}</span>`;
  if (!item.href) return el(`<span class="chip">${content}</span>`);
  const external = item.href.startsWith("http")
    ? ' target="_blank" rel="noopener noreferrer"'
    : "";
  return el(`<a class="chip" href="${item.href}"${external}>${content}</a>`);
}

function render() {
  hydrateIcons();
  document.getElementById("nome").textContent = data.nome;
  document.getElementById("cargo").textContent = data.cargo;
  document.getElementById("frase").textContent = `“${data.frase}”`;
  document.getElementById("brand").textContent = data.nome.split(" ")[0];
  document.title = `${data.nome} — Currículo`;

  document.getElementById("chips").replaceChildren(...data.chips.map(chip));

  document.getElementById("stats").replaceChildren(
    ...data.stats.map((item) =>
      el(`<article class="stat">
        <strong>${icon(item.icon)} ${item.valor}</strong>
        <span>${item.rotulo}</span>
      </article>`)
    )
  );

  document.getElementById("competencias-lista").replaceChildren(
    ...data.competencias.map(
      (item) =>
        el(`<article class="skill">
          <div class="skill-icon">${icon(item.icon)}</div>
          <div>
            <h3>${item.titulo}</h3>
            <p>${item.detalhe}</p>
          </div>
        </article>`)
    )
  );

  document.getElementById("experiencias").replaceChildren(
    ...data.experiencias.map(
      (job, index) =>
        el(`<article class="job" style="animation-delay:${index * 0.12}s">
          <div class="job-icon">${icon(job.icon)}</div>
          <div>
            <div class="job-head">
              <div>
                <h3>${job.cargo}</h3>
                <div class="company">${job.empresa}</div>
              </div>
              <div class="period">${job.periodo}</div>
            </div>
            <ul>${job.pontos.map((ponto) => `<li>${ponto}</li>`).join("")}</ul>
          </div>
        </article>`)
    )
  );

  document.getElementById("formacoes").replaceChildren(
    ...data.formacoes.map(
      (item) =>
        el(`<article class="card">
          <div class="card-icon">${icon(item.icon)}</div>
          <div>
            <h3>${item.titulo}</h3>
            <p><strong>${item.local}</strong></p>
            <p>${item.detalhe}</p>
          </div>
        </article>`)
    )
  );

  document.getElementById("idiomas").replaceChildren(
    ...data.idiomas.map(
      (item) =>
        el(`<div class="lang-row">
          <span class="lang-icon">${icon(item.icon)}</span>
          <strong>${item.nome}</strong>
          <div class="bar" data-pct="${item.pct}"><span></span></div>
          <span>${item.nivel}</span>
        </div>`)
    )
  );

  renderProjects("todos");
}

function renderProjects(filtro) {
  const grid = document.getElementById("projetos");
  const lista =
    filtro === "todos"
      ? data.projetos
      : data.projetos.filter((projeto) => projeto.categoria === filtro);

  grid.replaceChildren(
    ...lista.map(
      (projeto) =>
        el(`<article class="project">
          <div class="project-cover">
            <img src="${projeto.imagem}" alt="" />
            <span class="project-badge">${icon(projeto.icon)}</span>
          </div>
          <div class="project-body">
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
            <div class="tags">${projeto.tags
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join("")}</div>
          </div>
        </article>`)
    )
  );
}

function setupFilters() {
  document.querySelectorAll(".filter-btn").forEach((botao) => {
    botao.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((item) => {
        item.classList.toggle("is-active", item === botao);
      });
      renderProjects(botao.dataset.filter);
    });
  });
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  toggle.addEventListener("click", () => {
    const aberto = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(aberto));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...nav.querySelectorAll("a")];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        entry.target.querySelectorAll(".bar").forEach((bar) => {
          bar.querySelector("span").style.width = `${bar.dataset.pct}%`;
        });
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}

render();
setupFilters();
setupNav();
setupReveals();

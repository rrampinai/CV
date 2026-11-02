const data = {
  nome: "Osvaldo Rodrigo Rampin",
  cargo: "Analista da Qualidade e Meio Ambiente",
  frase:
    "Qualidade e meio ambiente se constroem com método, parceria e melhoria contínua.",
  chips: [
    "Tupã – SP",
    "Jacto Agrícola · desde 2003",
    "ISO 9001 · ISO 14001 · VDA 6.3",
    "(14) 99183-7594",
    { texto: "rrampin@gmail.com", href: "mailto:rrampin@gmail.com" },
    { texto: "LinkedIn", href: "https://www.linkedin.com/in/osvaldo-rodrigo-rampin-7412671b5" }
  ],
  experiencias: [
    {
      cargo: "Analista da Qualidade e Meio Ambiente",
      empresa: "Jacto Agrícola",
      periodo: "Abr. 2025 — atual",
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
      pontos: [
        "Controle estatístico de processo com ênfase em análise de capacidade de processo em peças fornecidas (Cpk)."
      ]
    }
  ],
  formacoes: [
    {
      titulo: "Bacharelado em Tecnologia em Manutenção Industrial",
      local: "Formação acadêmica",
      detalhe: "Base técnica em manutenção, processo industrial e qualidade."
    },
    {
      titulo: "MBA em Supply Chain Management",
      local: "Unicesumar",
      detalhe: "Gestão da cadeia de suprimentos."
    },
    {
      titulo: "Pós-graduação em Gestão de Projetos",
      local: "Anhanguera — EAD",
      detalhe: "Planejamento, execução e controle de projetos. Concluída."
    },
    {
      titulo: "Lean Six Sigma — Green Belt",
      local: "Optima — São Paulo",
      detalhe: "Melhoria de processos com metodologia Lean Six Sigma."
    },
    {
      titulo: "VDA 6.3",
      local: "Auditoria de processo",
      detalhe: "Auditoria de processo segundo o referencial VDA 6.3."
    },
    {
      titulo: "Auditor interno ISO 9001 / ISO 14001",
      local: "Formação SGI",
      detalhe: "Auditoria interna de sistema de gestão da qualidade e ambiental."
    }
  ],
  idiomas: [
    { nome: "Português", nivel: "Nativo", pct: 100 },
    { nome: "Inglês", nivel: "Iniciante", pct: 30 },
    { nome: "Espanhol", nivel: "Básico", pct: 25 }
  ],
  projetos: [
    {
      nome: "Sistema de Gestão Integrado",
      descricao:
        "Condução do SGI com auditorias ISO 9001 e ISO 14001, tratativas, programa de auditoria de processo e iniciativas ambientais.",
      tags: ["ISO 9001", "ISO 14001", "VDA 6.3"],
      categoria: "gestao",
      imagem: "img/capa-sgi.jpg"
    },
    {
      nome: "Capacidade de processo (Cpk)",
      descricao:
        "Estudo acadêmico de controle estatístico de processo com ênfase em análise de capacidade em peças fornecidas.",
      tags: ["CEP", "Cpk", "Unimar"],
      categoria: "qualidade",
      imagem: "img/capa-cpk.jpg"
    },
    {
      nome: "Tratativa de fornecedores",
      descricao:
        "Atendimento a não conformidades, planos de ação, interação com engenharia e implantação de melhorias para eliminar problemas de qualidade.",
      tags: ["8D", "Fornecedores", "PPAP"],
      categoria: "qualidade",
      imagem: "img/capa-fornecedores.jpg"
    },
    {
      nome: "Homologação de fornecedores",
      descricao:
        "Desenvolvimento, homologação e recertificação de novos fornecedores, com alinhamento entre qualidade e engenharia.",
      tags: ["APQP", "Homologação"],
      categoria: "qualidade",
      imagem: "img/capa-homologacao.jpg"
    },
    {
      nome: "Green Belt Six Sigma",
      descricao:
        "Aplicação da metodologia Lean Six Sigma na melhoria de processos, com foco em redução de variação, causa raiz e resultados sustentáveis.",
      tags: ["Lean", "DMAIC", "Green Belt"],
      categoria: "qualidade",
      imagem: "img/capa-sixsigma.jpg"
    },
    {
      nome: "Indicadores e SAP QM",
      descricao:
        "Elaboração de indicadores de qualidade e uso do SAP módulo QM, com contato adicional ao módulo PM no laboratório.",
      tags: ["SAP QM", "Indicadores"],
      categoria: "gestao",
      imagem: "img/capa-sap.jpg"
    }
  ]
};

function el(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

function render() {
  document.getElementById("nome").textContent = data.nome;
  document.getElementById("cargo").textContent = data.cargo;
  document.getElementById("frase").textContent = `“${data.frase}”`;
  document.getElementById("brand").textContent = data.nome.split(" ")[0];
  document.title = `${data.nome} — Currículo`;

  const chips = document.getElementById("chips");
  chips.replaceChildren(
    ...data.chips.map((item) =>
      typeof item === "string"
        ? el(`<span class="chip">${item}</span>`)
        : el(
            `<a class="chip" href="${item.href}" ${
              item.href.startsWith("http")
                ? 'target="_blank" rel="noopener noreferrer"'
                : ""
            }>${item.texto}</a>`
          )
    )
  );

  const jobs = document.getElementById("experiencias");
  jobs.replaceChildren(
    ...data.experiencias.map(
      (job, index) =>
        el(`<article class="job" style="animation-delay:${index * 0.12}s">
          <div class="job-head">
            <div>
              <h3>${job.cargo}</h3>
              <div class="company">${job.empresa}</div>
            </div>
            <div class="period">${job.periodo}</div>
          </div>
          <ul>${job.pontos.map((ponto) => `<li>${ponto}</li>`).join("")}</ul>
        </article>`)
    )
  );

  const formacoes = document.getElementById("formacoes");
  formacoes.replaceChildren(
    ...data.formacoes.map(
      (item) =>
        el(`<article class="card">
          <h3>${item.titulo}</h3>
          <p><strong>${item.local}</strong></p>
          <p>${item.detalhe}</p>
        </article>`)
    )
  );

  const idiomas = document.getElementById("idiomas");
  idiomas.replaceChildren(
    ...data.idiomas.map(
      (item) =>
        el(`<div class="lang-row">
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
          <div class="project-cover"><img src="${projeto.imagem}" alt="" /></div>
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

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>FadReview v2.1 · Relatório de Entrega</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500;600&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet"/>
  <style>
    :root{
      --bg:#04060b;--bg2:#07090f;--card:#0b0f18;--card2:#0e1420;
      --border:rgba(255,255,255,0.06);--border2:rgba(255,255,255,0.1);
      --gold:#c9a96e;--gd:rgba(201,169,110,0.1);--gb:rgba(201,169,110,0.2);
      --blue:#2a7fc1;--bl:#4fa3e0;--bp:rgba(79,163,224,0.1);
      --green:#34d399;--orange:#fb923c;--purple:#a78bfa;
      --white:#eef4f9;--gray:#c4d4e0;--gray-s:#8faabf;--gray-d:rgba(143,170,191,0.4);
      --fd:'Cormorant',Georgia,serif;--fb:'Jost',system-ui,sans-serif;--fm:'JetBrains Mono',monospace;
    }
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{font-size:16px;-webkit-font-smoothing:antialiased;scroll-behavior:smooth}
    body{font-family:var(--fb);background:var(--bg);color:var(--white);line-height:1.7;overflow-x:hidden}
    ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.08);border-radius:2px}
    body::before{content:'';position:fixed;inset:0;pointer-events:none;opacity:.02;z-index:0;
      background:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E") center/180px}

    /* Layout */
    .page{max-width:860px;margin:0 auto;padding:4rem 2rem 8rem;position:relative;z-index:1}

    /* Cover */
    .cover{padding:3rem 0 4rem;border-bottom:1px solid var(--border);margin-bottom:4rem}
    .cover-tag{display:inline-flex;align-items:center;gap:.5rem;font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);border:1px solid var(--gb);border-radius:2rem;padding:.35rem 1rem;background:var(--gd);margin-bottom:1.5rem}
    .cover-tag svg{opacity:.7}
    .cover-title{font-family:var(--fd);font-size:clamp(2.8rem,6vw,4.5rem);font-weight:300;line-height:1.05;margin-bottom:1rem}
    .cover-title strong{font-weight:600;display:block}
    .cover-title em{color:var(--gold);font-style:italic}
    .cover-sub{font-size:1rem;color:var(--gray-s);font-weight:300;max-width:500px;line-height:1.85;margin-bottom:2.5rem}
    .cover-pills{display:flex;flex-wrap:wrap;gap:.5rem}
    .cpill{display:inline-flex;align-items:center;gap:.4rem;font-size:.7rem;font-weight:500;letter-spacing:.06em;padding:.35rem .9rem;border-radius:3px;border:1px solid}
    .cpill--green{color:var(--green);border-color:rgba(52,211,153,.25);background:rgba(52,211,153,.06)}
    .cpill--blue{color:var(--bl);border-color:rgba(79,163,224,.25);background:var(--bp)}
    .cpill--gold{color:var(--gold);border-color:var(--gb);background:var(--gd)}
    .cpill--purple{color:var(--purple);border-color:rgba(167,139,250,.25);background:rgba(167,139,250,.06)}
    .cpill--orange{color:var(--orange);border-color:rgba(251,146,60,.25);background:rgba(251,146,60,.06)}

    /* Section */
    .section{margin-bottom:4rem}
    .section-n{font-family:var(--fd);font-size:4rem;font-weight:300;color:rgba(255,255,255,.03);line-height:1;display:block;margin-bottom:-.5rem;user-select:none}
    .eyebrow{font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:var(--bl);display:flex;align-items:center;gap:.6rem;margin-bottom:.75rem}
    .eyebrow::before{content:'';width:18px;height:1px;background:var(--gold);display:inline-block}
    .section-title{font-family:var(--fd);font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:300;line-height:1.15;margin-bottom:.75rem}
    .section-title em{font-style:italic;color:var(--gold)}
    .section-lead{font-size:.92rem;color:var(--gray-s);font-weight:300;line-height:1.9;max-width:620px;padding-left:1.2rem;border-left:2px solid var(--gb);margin-bottom:2rem}

    /* Module grid */
    .module-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(360px,1fr));gap:.75rem;margin-bottom:2rem}
    .module-card{background:var(--card2);border:1px solid var(--border);border-radius:8px;padding:1.4rem 1.5rem;display:grid;grid-template-columns:auto 1fr;gap:.75rem 1rem;align-items:start;transition:border-color .2s,background .2s;position:relative;overflow:hidden}
    .module-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--blue),var(--gold));transform:scaleX(0);transform-origin:left;transition:transform .3s}
    .module-card:hover{border-color:rgba(79,163,224,.2);background:#0f1a27}.module-card:hover::after{transform:scaleX(1)}
    .module-filename{font-family:var(--fm);font-size:.78rem;color:var(--bl);grid-column:1/-1;margin-bottom:-.2rem}
    .module-icon{width:36px;height:36px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0}
    .mi--blue{background:var(--bp);border:1px solid rgba(79,163,224,.18)}
    .mi--gold{background:var(--gd);border:1px solid var(--gb)}
    .mi--green{background:rgba(52,211,153,.08);border:1px solid rgba(52,211,153,.18)}
    .mi--purple{background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.18)}
    .mi--orange{background:rgba(251,146,60,.08);border:1px solid rgba(251,146,60,.18)}
    .module-body{}
    .module-title{font-size:.9rem;font-weight:500;color:var(--white);margin-bottom:.3rem}
    .module-desc{font-size:.78rem;color:var(--gray-s);line-height:1.65;font-weight:300}
    .module-responsibility{margin-top:.5rem;font-size:.72rem;color:var(--gray-d);font-style:italic}

    /* File tree */
    .file-tree{font-family:var(--fm);font-size:.8rem;line-height:2;background:var(--card);border:1px solid var(--border);border-radius:10px;padding:1.75rem 2rem;margin-bottom:2rem;overflow-x:auto}
    .ft-dir{color:var(--bl)}.ft-file{color:var(--gray)}.ft-cmt{color:rgba(143,170,191,.3);font-style:italic}
    .ft-new{color:var(--green)}.ft-gold{color:var(--gold)}

    /* Comparison table */
    .compare-table{width:100%;border-collapse:collapse;font-size:.82rem;margin-bottom:1.5rem}
    .compare-table th{text-align:left;font-size:.6rem;font-weight:500;letter-spacing:.15em;text-transform:uppercase;color:var(--gray-d);padding:.75rem 1rem;border-bottom:1px solid var(--border)}
    .compare-table td{padding:.85rem 1rem;border-bottom:1px solid rgba(255,255,255,.03);vertical-align:top}
    .compare-table tr:last-child td{border:none}
    .compare-table tr:hover td{background:rgba(255,255,255,.01)}
    .badge-old{font-family:var(--fm);font-size:.72rem;padding:.15rem .55rem;border-radius:3px;background:rgba(255,255,255,.05);color:var(--gray-s);border:1px solid var(--border)}
    .badge-new{font-family:var(--fm);font-size:.72rem;padding:.15rem .55rem;border-radius:3px;background:var(--gd);color:var(--gold);border:1px solid var(--gb)}
    .phase-tag{font-size:.6rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase;padding:.18rem .5rem;border-radius:3px}
    .p1{background:rgba(52,211,153,.1);color:var(--green);border:1px solid rgba(52,211,153,.2)}
    .p2{background:var(--bp);color:var(--bl);border:1px solid rgba(79,163,224,.2)}
    .p3{background:rgba(167,139,250,.1);color:var(--purple);border:1px solid rgba(167,139,250,.2)}

    /* Callout */
    .callout{display:flex;gap:1rem;padding:1.25rem 1.5rem;border-radius:8px;margin-bottom:1.5rem;font-size:.85rem;line-height:1.75;font-weight:300}
    .callout--gold{background:rgba(201,169,110,.05);border:1px solid var(--gb);color:var(--gray)}
    .callout--blue{background:rgba(79,163,224,.05);border:1px solid rgba(79,163,224,.18);color:var(--gray)}
    .callout--green{background:rgba(52,211,153,.04);border:1px solid rgba(52,211,153,.18);color:var(--gray)}
    .callout-icon{font-size:1.1rem;flex-shrink:0;margin-top:.1rem}
    .callout strong{color:var(--white);font-weight:500}

    /* Feature list */
    .feature-list{list-style:none;display:flex;flex-direction:column;gap:.5rem;margin-bottom:1.5rem}
    .feature-list li{display:flex;align-items:flex-start;gap:.75rem;font-size:.85rem;color:var(--gray);line-height:1.6}
    .feature-list li::before{content:'✓';color:var(--green);font-size:.8rem;margin-top:.15rem;flex-shrink:0;font-weight:600}

    /* Migration roadmap */
    .road-item{display:grid;grid-template-columns:48px 1fr;gap:1rem;align-items:start;position:relative}
    .road-item:not(:last-child)::before{content:'';position:absolute;left:23px;top:50px;bottom:0;width:1px;background:linear-gradient(to bottom,rgba(201,169,110,.25),rgba(42,127,193,.2))}
    .road-num{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.88rem;font-weight:500;flex-shrink:0;position:relative;z-index:1}
    .rn1{background:var(--gd);border:1px solid var(--gb);color:var(--gold)}
    .rn2{background:var(--bp);border:1px solid rgba(79,163,224,.25);color:var(--bl)}
    .rn3{background:rgba(167,139,250,.1);border:1px solid rgba(167,139,250,.25);color:var(--purple)}
    .road-content{padding:.6rem 0 2.5rem}
    .road-title{font-size:.95rem;font-weight:500;color:var(--white);margin-bottom:.3rem}
    .road-desc{font-size:.8rem;color:var(--gray-s);line-height:1.7;font-weight:300}

    /* Divider */
    .div{height:1px;background:linear-gradient(90deg,transparent,var(--border),transparent);margin:3rem 0}

    /* Code */
    .code{font-family:var(--fm);font-size:.76rem;line-height:1.9;background:#030508;border:1px solid var(--border);border-radius:6px;padding:1.25rem 1.5rem;overflow-x:auto;margin-bottom:1.5rem;color:var(--gray)}
    .code .k{color:var(--purple)}.code .s{color:var(--green)}.code .c{color:rgba(143,170,191,.3);font-style:italic}.code .t{color:var(--gold)}.code .n{color:var(--bl)}

    @media(max-width:600px){.page{padding:2rem 1.25rem 5rem}.module-grid{grid-template-columns:1fr}}
  </style>
</head>
<body>
<div class="page">

  <!-- ── CAPA ── -->
  <div class="cover">
    <div class="cover-tag">
      <svg width="10" height="10" viewBox="0 0 28 28" fill="none"><polygon points="14,2 22,8 22,20 14,26 6,20 6,8" fill="none" stroke="#c9a96e" stroke-width="2"/><path d="M14 8 L10 16 L14 14 L14 20 L18 12 L14 14 Z" fill="#c9a96e"/></svg>
      Relatório de Entrega · FadReview
    </div>
    <h1 class="cover-title">
      <strong>MVP v2.1</strong>
      Arquitetura <em>modular entregue</em>
    </h1>
    <p class="cover-sub">
      O script.js monolítico de 750 linhas foi desmontado em 8 módulos independentes. O sistema continua funcionando offline, abrindo apenas o index.html — com preview ao vivo, histórico e exportações extras.
    </p>
    <div class="cover-pills">
      <span class="cpill cpill--green">✓ 8 módulos JS</span>
      <span class="cpill cpill--blue">✓ Preview ao vivo</span>
      <span class="cpill cpill--gold">✓ Histórico local</span>
      <span class="cpill cpill--purple">✓ 3 nichos prontos</span>
      <span class="cpill cpill--orange">✓ PDF + WhatsApp</span>
      <span class="cpill cpill--blue">✓ Hook Claude API</span>
    </div>
  </div>


  <!-- ── 01 · ESTRUTURA DE PASTAS ── -->
  <div class="section">
    <span class="section-n">01</span>
    <div class="eyebrow">Estrutura de pastas</div>
    <h2 class="section-title">Organização do <em>repositório v2.1</em></h2>
    <p class="section-lead">
      O MVP original (3 arquivos) é preservado intocado em <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">fadreview-v2/</code>. A v2.1 é uma evolução lateral — não uma substituição.
    </p>

    <div class="file-tree">
<span class="ft-dir">fadreview-v2.1/</span>
├── <span class="ft-file">index.html</span>            <span class="ft-cmt">← editor com split layout + carrega os módulos</span>
├── <span class="ft-file">style.css</span>             <span class="ft-cmt">← design system base + adições v2.1 (split, toast, history)</span>
│
├── <span class="ft-dir ft-new">js/</span>              <span class="ft-cmt">← 8 módulos independentes</span>
│   ├── <span class="ft-file ft-new">utils.js</span>        <span class="ft-cmt">← utilitários puros (escapeHtml, slugify, uid, debounce)</span>
│   ├── <span class="ft-file ft-new">categories.js</span>   <span class="ft-cmt">← definição das categorias (eletrica, iluminacao, ...)</span>
│   ├── <span class="ft-file ft-new">templates.js</span>    <span class="ft-cmt">← templates de mensagem isolados por categoria</span>
│   ├── <span class="ft-file ft-new">storage.js</span>      <span class="ft-cmt">← localStorage: profissional + histórico de relatórios</span>
│   ├── <span class="ft-file ft-new">photos.js</span>       <span class="ft-cmt">← upload, compressão Canvas, grid, capa</span>
│   ├── <span class="ft-file ft-new">ai.js</span>           <span class="ft-cmt">← geração de mensagem (templates agora, API futura)</span>
│   ├── <span class="ft-file ft-new">reportEngine.js</span> <span class="ft-cmt">← motor HTML puro: generateReportData() + renderReportHTML()</span>
│   ├── <span class="ft-file ft-new">ui.js</span>           <span class="ft-cmt">← renderização DOM: pills, destaques, toast, preview, history</span>
│   └── <span class="ft-file ft-new">app.js</span>          <span class="ft-cmt">← orquestrador: FR.State, eventos, fluxo de geração</span>
│
├── <span class="ft-dir ft-new">niches/</span>          <span class="ft-cmt">← nichos opcionais (plug-and-play)</span>
│   ├── <span class="ft-file ft-new">pool.js</span>         <span class="ft-cmt">← Piscineiro (descomente no index.html para ativar)</span>
│   └── <span class="ft-file ft-new">construction.js</span> <span class="ft-cmt">← Pedreiro / Reforma</span>
│
└── <span class="ft-dir ft-new">templates/</span>       <span class="ft-cmt">← referência de templates em JSON (portabilidade futura)</span>
    ├── <span class="ft-file ft-new">electrician.json</span>
    └── <span class="ft-file ft-new">general.json</span>
    </div>

    <div class="callout callout--blue">
      <span class="callout-icon">📌</span>
      <div><strong>Ordem de carregamento:</strong> utils → categories → templates → storage → photos → ai → reportEngine → ui → app. Cada módulo declara seus requisitos nos comentários. Nichos (pool.js, construction.js) devem ser carregados <em>antes</em> de categories.js.</div>
    </div>
  </div>

  <div class="div"></div>


  <!-- ── 02 · OS 8 MÓDULOS ── -->
  <div class="section">
    <span class="section-n">02</span>
    <div class="eyebrow">Módulos JavaScript</div>
    <h2 class="section-title">Função de cada <em>arquivo</em></h2>
    <p class="section-lead">
      Cada módulo expõe sua API via <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">window.FR.NomeDoModulo</code>. Nenhum módulo acessa o DOM de outro — a comunicação acontece apenas via <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">FR.State</code> e parâmetros de função.
    </p>

    <div class="module-grid">

      <div class="module-card">
        <div class="module-filename" style="grid-column:1/-1">js/utils.js</div>
        <div class="module-icon mi--gold">🔧</div>
        <div class="module-body">
          <div class="module-title">Utils — Utilitários puros</div>
          <div class="module-desc">Funções sem efeitos colaterais: <code style="font-family:var(--fm);font-size:.85em">escapeHtml</code>, <code style="font-family:var(--fm);font-size:.85em">slugify</code>, <code style="font-family:var(--fm);font-size:.85em">formatDatePTBR</code>, <code style="font-family:var(--fm);font-size:.85em">uid</code>, <code style="font-family:var(--fm);font-size:.85em">debounce</code>, <code style="font-family:var(--fm);font-size:.85em">readFileAsDataURL</code>.</div>
          <div class="module-responsibility">Não depende de nenhum outro módulo. Pode ser copiado para qualquer projeto.</div>
        </div>
      </div>

      <div class="module-card">
        <div class="module-filename" style="grid-column:1/-1">js/categories.js</div>
        <div class="module-icon mi--blue">📋</div>
        <div class="module-body">
          <div class="module-title">Categories — Definição das categorias</div>
          <div class="module-desc">Objeto <code style="font-family:var(--fm);font-size:.85em">FR.CATEGORIES</code> com 5 categorias base. Cada uma tem label, emoji, serviceLabel, templateKey e array de highlights. Nichos externos registram novas entradas aqui.</div>
          <div class="module-responsibility">Para adicionar uma categoria: criar entry no objeto. Para novo nicho: criar arquivo em /niches/ que escreve em FR.CATEGORIES.</div>
        </div>
      </div>

      <div class="module-card">
        <div class="module-filename" style="grid-column:1/-1">js/templates.js</div>
        <div class="module-icon mi--purple">✍️</div>
        <div class="module-body">
          <div class="module-title">Templates — Mensagens por categoria</div>
          <div class="module-desc">Armazena e serve os templates de mensagem. <code style="font-family:var(--fm);font-size:.85em">getTemplates(key)</code> retorna array de strings. <code style="font-family:var(--fm);font-size:.85em">registerTemplates(key, templates)</code> permite que nichos externos adicionem seus templates.</div>
          <div class="module-responsibility">Substituído por chamada à API na Fase 2. Nenhum outro módulo muda.</div>
        </div>
      </div>

      <div class="module-card">
        <div class="module-filename" style="grid-column:1/-1">js/storage.js</div>
        <div class="module-icon mi--green">💾</div>
        <div class="module-body">
          <div class="module-title">Storage — Persistência local</div>
          <div class="module-desc">Toda interação com localStorage: dados do profissional + histórico de relatórios (metadados + HTML). Gerencia quota: remove o mais antigo quando necessário. Limite: 20 relatórios no histórico.</div>
          <div class="module-responsibility">Cada função tem um equivalente direto em Supabase (Fase 2). Comentários explicam a substituição.</div>
        </div>
      </div>

      <div class="module-card">
        <div class="module-filename" style="grid-column:1/-1">js/photos.js</div>
        <div class="module-icon mi--blue">📸</div>
        <div class="module-body">
          <div class="module-title">Photos — Upload e gerenciamento</div>
          <div class="module-desc">FileReader, compressão via Canvas (<code style="font-family:var(--fm);font-size:.85em">compressImage</code>), thumbnail para histórico (<code style="font-family:var(--fm);font-size:.85em">compressThumb</code>), compressão em lote para export (<code style="font-family:var(--fm);font-size:.85em">compressAllForExport</code>), grid de thumbnails, seleção de capa, remoção.</div>
          <div class="module-responsibility">A função compressImage() tem comentário mostrando como migrar para Cloudinary CDN.</div>
        </div>
      </div>

      <div class="module-card">
        <div class="module-filename" style="grid-column:1/-1">js/ai.js</div>
        <div class="module-icon mi--orange">🤖</div>
        <div class="module-body">
          <div class="module-title">AI — Gerador de mensagem</div>
          <div class="module-desc">Flag <code style="font-family:var(--fm);font-size:.85em">USE_REAL_AI = false</code> controla o modo. Quando false: templates locais (offline). Quando true: chama <code style="font-family:var(--fm);font-size:.85em">fetch('/api/generate')</code> com fallback automático para template se a API falhar.</div>
          <div class="module-responsibility">Para ativar Claude API: mudar a flag e garantir o Route Handler em /api/generate.</div>
        </div>
      </div>

      <div class="module-card">
        <div class="module-filename" style="grid-column:1/-1">js/reportEngine.js</div>
        <div class="module-icon mi--gold">⚡</div>
        <div class="module-body">
          <div class="module-title">ReportEngine — Motor HTML puro</div>
          <div class="module-desc">Módulo puro: não acessa o DOM, não usa State diretamente. <code style="font-family:var(--fm);font-size:.85em">generateReportData(photos, message)</code> coleta e estrutura os dados. <code style="font-family:var(--fm);font-size:.85em">renderReportHTML(data)</code> retorna string HTML autônoma.</div>
          <div class="module-responsibility">Pode ser executado no servidor (Node.js) sem modificação. Vira packages/report-engine/builder.ts na Fase 2.</div>
        </div>
      </div>

      <div class="module-card">
        <div class="module-filename" style="grid-column:1/-1">js/ui.js</div>
        <div class="module-icon mi--blue">🎨</div>
        <div class="module-body">
          <div class="module-title">UI — Renderização DOM</div>
          <div class="module-desc">Pills de categoria, grid de destaques (com animação stagger), toast, banner de dados salvos, histórico de relatórios, preview ao vivo com debounce (600ms), painel de resultados. Toda renderização de DOM que não seja fotos.</div>
          <div class="module-responsibility">Na migração React, cada função vira um componente (CategoryPills, HighlightsGrid, etc).</div>
        </div>
      </div>

      <div class="module-card" style="grid-column:1/-1">
        <div class="module-filename" style="grid-column:1/-1">js/app.js</div>
        <div class="module-icon mi--gold">🎯</div>
        <div class="module-body">
          <div class="module-title">App — Orquestrador principal</div>
          <div class="module-desc">Define <code style="font-family:var(--fm);font-size:.85em">FR.State</code> (photos, coverIndex, selectedCategory, generated, currentReportId, blobUrl). Bind de todos os eventos. Fluxo de geração (compress → AI → render → save → show). Exportações: download, copy, WhatsApp, PDF. Histórico: reopen, delete.</div>
          <div class="module-responsibility">É o único módulo que conhece todos os outros. Vira app/page.tsx + hooks na migração React.</div>
        </div>
      </div>

    </div>
  </div>

  <div class="div"></div>


  <!-- ── 03 · FUNCIONALIDADES ENTREGUES ── -->
  <div class="section">
    <span class="section-n">03</span>
    <div class="eyebrow">8 melhorias implementadas</div>
    <h2 class="section-title">O que foi <em>entregue</em></h2>
    <p class="section-lead">Todas as 8 melhorias do prompt foram implementadas. Nenhuma quebra de funcionalidade existente.</p>

    <table class="compare-table">
      <thead><tr><th>Melhoria</th><th>Implementação</th><th>Arquivo</th></tr></thead>
      <tbody>
        <tr>
          <td><strong style="color:var(--white)">1. Modularização JS</strong></td>
          <td>8 módulos via IIFE + <code class="badge-new">window.FR.*</code></td>
          <td><code class="badge-new">js/*.js</code></td>
        </tr>
        <tr>
          <td><strong style="color:var(--white)">2. Categorias isoladas</strong></td>
          <td>FR.CATEGORIES — cada categoria autocontida com templateKey</td>
          <td><code class="badge-new">js/categories.js</code></td>
        </tr>
        <tr>
          <td><strong style="color:var(--white)">3. Templates externos</strong></td>
          <td>JSON de referência + FR.Templates.registerTemplates()</td>
          <td><code class="badge-new">templates/*.json</code></td>
        </tr>
        <tr>
          <td><strong style="color:var(--white)">4. Motor de relatório</strong></td>
          <td>FR.Engine puro: generateReportData() + renderReportHTML()</td>
          <td><code class="badge-new">js/reportEngine.js</code></td>
        </tr>
        <tr>
          <td><strong style="color:var(--white)">5. Preview ao vivo</strong></td>
          <td>iframe srcdoc atualizado com debounce 600ms no split layout</td>
          <td><code class="badge-new">js/ui.js + style.css</code></td>
        </tr>
        <tr>
          <td><strong style="color:var(--white)">6. Histórico de relatórios</strong></td>
          <td>localStorage com metadados + HTML. Card list com reopen/delete</td>
          <td><code class="badge-new">js/storage.js + ui.js</code></td>
        </tr>
        <tr>
          <td><strong style="color:var(--white)">7. Exportações extras</strong></td>
          <td>Download HTML, PDF (print dialog), WhatsApp, Copy HTML</td>
          <td><code class="badge-new">js/app.js</code></td>
        </tr>
        <tr>
          <td><strong style="color:var(--white)">8. Sistema de nichos</strong></td>
          <td>pool.js + construction.js — plug-and-play, 1 linha no HTML</td>
          <td><code class="badge-new">niches/*.js</code></td>
        </tr>
      </tbody>
    </table>

    <div class="callout callout--gold">
      <span class="callout-icon">⚡</span>
      <div><strong>Para ativar um novo nicho:</strong> descomente a linha <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">&lt;script src="niches/pool.js"&gt;&lt;/script&gt;</code> no index.html. A nova pill aparece automaticamente no editor. Zero outras mudanças.</div>
    </div>
  </div>

  <div class="div"></div>


  <!-- ── 04 · MIGRAÇÃO REACT ── -->
  <div class="section">
    <span class="section-n">04</span>
    <div class="eyebrow">Preparação para plataforma</div>
    <h2 class="section-title">Migração para <em>React + Next.js</em></h2>
    <p class="section-lead">Cada módulo JS tem um destino direto na plataforma. Não há reescrita — há portabilidade.</p>

    <div style="display:flex;flex-direction:column;gap:0;margin-bottom:2rem">
      <div class="road-item">
        <div class="road-num rn1">1</div>
        <div class="road-content">
          <div class="road-title">js/reportEngine.js → packages/report-engine/builder.ts</div>
          <div class="road-desc">O motor HTML é puro — sem DOM, sem State. Move para um package TypeScript sem modificação. É chamado no Route Handler SSR do Next.js para gerar a página /r/[slug] no servidor.</div>
        </div>
      </div>
      <div class="road-item">
        <div class="road-num rn1">2</div>
        <div class="road-content">
          <div class="road-title">js/categories.js + niches/*.js → packages/templates/ + Supabase</div>
          <div class="road-desc">As categorias viram arquivos TypeScript em packages/templates/. Nichos adicionais podem ser armazenados na tabela <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">templates</code> no Supabase e carregados via API.</div>
        </div>
      </div>
      <div class="road-item">
        <div class="road-num rn2">3</div>
        <div class="road-content">
          <div class="road-title">js/ui.js → Componentes React</div>
          <div class="road-desc">Cada função de renderização vira um componente: <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">CategoryPills</code>, <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">HighlightsGrid</code>, <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">PhotoGrid</code>, <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">HistoryList</code>, <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">LivePreview</code>. O split layout vira o layout de app/(dashboard)/novo/.</div>
        </div>
      </div>
      <div class="road-item">
        <div class="road-num rn2">4</div>
        <div class="road-content">
          <div class="road-title">js/storage.js → Supabase SDK</div>
          <div class="road-desc">Cada função tem equivalente direto: <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">saveProfessional()</code> → upsert em professionals, <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">saveReport()</code> → insert em reports, <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">listReports()</code> → select com RLS. Os comentários no arquivo mostram o código exato.</div>
        </div>
      </div>
      <div class="road-item">
        <div class="road-num rn3">5</div>
        <div class="road-content">
          <div class="road-title">js/ai.js → app/api/generate/route.ts</div>
          <div class="road-desc">Flag <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">USE_REAL_AI = true</code> + Route Handler Next.js chamando Claude API. O exemplo completo do Route Handler está no comentário do arquivo ai.js. Nenhuma outra mudança no sistema.</div>
        </div>
      </div>
    </div>

    <div class="code">
<span class="c">// app/api/generate/route.ts — Route Handler para Claude API</span>
<span class="k">import</span> Anthropic <span class="k">from</span> <span class="s">'@anthropic-ai/sdk'</span>;

<span class="k">export async function</span> <span class="n">POST</span>(req: Request) {
  <span class="k">const</span> { categoryKey, clientName, serviceDescription, professionalName }
    = <span class="k">await</span> req.json();

  <span class="k">const</span> client = <span class="k">new</span> Anthropic();
  <span class="k">const</span> msg = <span class="k">await</span> client.messages.create({
    <span class="t">model</span>:      <span class="s">'claude-sonnet-4-5'</span>,
    <span class="t">max_tokens</span>: 400,
    <span class="t">messages</span>: [{
      <span class="t">role</span>:    <span class="s">'user'</span>,
      <span class="t">content</span>: <span class="s">`Gere uma mensagem de entrega de relatório técnico.
        Profissional: <span class="n">${professionalName}</span> · Serviço: <span class="n">${categoryKey}</span>
        Cliente: <span class="n">${clientName}</span> · Descrição: <span class="n">${serviceDescription}</span>
        Estilo: caloroso, técnico, confiante. 3 parágrafos. Sem saudações formais.`</span>
    }]
  });

  <span class="k">return</span> Response.json({ <span class="t">message</span>: msg.content[0].text });
}
    </div>
  </div>

  <div class="div"></div>


  <!-- ── 05 · PRÓXIMOS PASSOS ── -->
  <div class="section">
    <span class="section-n">05</span>
    <div class="eyebrow">Próximos passos sugeridos</div>
    <h2 class="section-title">O que fazer <em>agora</em></h2>

    <ul class="feature-list">
      <li>Testar o index.html no celular — especialmente o split layout no desktop e o editor empilhado no mobile</li>
      <li>Ativar <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">niches/pool.js</code> e <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">niches/construction.js</code> descomentando as linhas no index.html e testar o fluxo completo</li>
      <li>Gerar 3–5 relatórios reais para validar o histórico local e a função de reabertura</li>
      <li>Testar a exportação PDF via "Exportar PDF" (abre print dialog — salve como PDF)</li>
      <li>Validar o preview ao vivo digitando em cada campo e trocando de categoria</li>
      <li>Mudar <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">USE_REAL_AI = true</code> em ai.js quando o servidor estiver disponível — tudo mais funciona automaticamente</li>
      <li>Criar <code style="font-family:var(--fm);font-size:.85em;color:var(--bl)">niches/painting.js</code> como exercício — a estrutura está documentada nos arquivos existentes</li>
    </ul>

    <div class="callout callout--green">
      <span class="callout-icon">🚀</span>
      <div><strong>O MVP offline continua distribuível.</strong> Comprima a pasta fadreview-v2.1/ em ZIP e envie para qualquer profissional. Funciona sem internet, sem servidor, abrindo apenas o index.html. A plataforma Next.js será adicionada ao lado quando a validação de mercado estiver completa.</div>
    </div>
  </div>

</div>
</body>
</html>

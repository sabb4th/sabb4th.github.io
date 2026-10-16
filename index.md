---
layout: default
---
<section class="hero" aria-labelledby="titulo">
  <div class="hero-copy">
    <p class="eyebrow">Aulas particulares e materiais didáticos</p>
    <h1 id="titulo">A Química pode fazer mais sentido.</h1>
    <p class="hero-lead">Aprenda os conceitos, desenvolva seu raciocínio e pratique com materiais organizados para acompanhar seus estudos.</p>
    <p>Com o Prof. Elias Sabát, do ensino fundamental ao ensino médio e pré-vestibular, em Belém–PA.</p>
    <div class="hero-actions"><a class="button" href="#apostilas">Explorar apostilas <span aria-hidden="true">↗</span></a><a class="button button-outline" href="#aulas">Conhecer as aulas</a></div>
    <div class="hero-note"><span aria-hidden="true">✦</span> Conceitos conectados à prática. Aprendizado passo a passo.</div>
  </div>
  {% include chemistry.html %}
</section>

<section id="apostilas" class="section" aria-labelledby="catalog-title">
  <p class="eyebrow">Seu espaço de estudo</p>
  <h2 id="catalog-title">Encontre seu próximo conteúdo.</h2>
  <p>Escolha uma área ou pesquise um assunto. As listas mantêm a numeração utilizada em aula.</p>
  <div class="catalog-tools" hidden>
    <label for="busca">O que você quer estudar?</label>
    <input id="busca" type="search" placeholder="Busque por tema ou número da lista…" autocomplete="off" aria-controls="materiais">
    <div class="filters" role="group" aria-label="Filtrar por área">
      <button type="button" class="filter active" data-area="all" aria-pressed="true">Todas as áreas</button>
      <button type="button" class="filter" data-area="geral" aria-pressed="false">Química geral</button>
      <button type="button" class="filter" data-area="organica" aria-pressed="false">Química orgânica</button>
      <button type="button" class="filter" data-area="fisico-quimica" aria-pressed="false">Físico-química</button>
    </div>
    <p id="result-count" class="result-count" role="status" aria-live="polite" aria-atomic="true"></p>
  </div>
  <noscript><p>Todos os materiais estão listados abaixo. Para usar a busca e os filtros, ative o JavaScript.</p></noscript>
  <div id="materiais" class="materials-grid">
    {% for item in site.data.apostilas %}
    <article class="material-card" data-area="{{ item.area }}" data-search="{{ item.number }} {{ item.title | escape }} {{ item.topics | escape }} {{ item.area_label | escape }} {{ item.keywords | escape }}">
      <div class="card-meta"><span>Lista {{ item.number }}</span><span class="badge {% if item.url %}available{% endif %}">{% if item.url %}Disponível{% else %}Em breve{% endif %}</span></div>
      <p class="card-area">{{ item.area_label }}</p>
      <h3>{{ item.title }}</h3>
      <p class="card-topics">{{ item.topics }}</p>
      {% if item.url %}<a class="card-link" href="{{ item.url | escape }}" aria-label="Acessar PDF da lista {{ item.number }}: {{ item.title | escape }}">Acessar PDF <span aria-hidden="true">↗</span></a>{% else %}<p class="card-pending">Material em preparação</p>{% endif %}
    </article>
    {% endfor %}
  </div>
  <p id="empty-state" class="empty-state" hidden>Nenhum material encontrado. Tente outro termo ou escolha outra área.</p>
</section>

<section id="aulas" class="section lessons" aria-labelledby="lessons-title">
  <div><p class="eyebrow">Aulas particulares · Belém–PA</p><h2 id="lessons-title">Mais compreensão.<br>Mais confiança para aprender.</h2><p>Um espaço para tirar dúvidas, retomar os conceitos e desenvolver o raciocínio na resolução de exercícios.</p><a class="button" href="https://wa.me/5591984969714">Agendar pelo WhatsApp <span aria-hidden="true">↗</span></a></div>
  <div class="lesson-details"><article><span class="detail-number">01</span><h3>Para cada etapa</h3><p>Apoio ao ensino fundamental, ensino médio e preparação pré-vestibular.</p></article><article><span class="detail-number">02</span><h3>Conceito e prática</h3><p>Explicações, resolução de exercícios e discussão das dúvidas que surgem durante o estudo.</p></article><article><span class="detail-number">03</span><h3>Um percurso acompanhado</h3><p>Apostilas para praticar entre as aulas. Combine horários e detalhes do atendimento pelo WhatsApp.</p></article></div>
</section>

<section id="quem-sou-eu" class="section about" aria-labelledby="about-title">
  <div class="profile-mark" aria-hidden="true"><span>Química & educação</span><strong>Es</strong><span>Elias Sabát</span></div>
  <div><p class="eyebrow">Quem sou eu</p><h2 id="about-title">Olá, sou Elias Sabát.</h2><p>Sou professor com formação em <strong>Licenciatura em Química pela Universidade do Estado do Pará (UEPA)</strong> e participo de um projeto de pesquisa com bolsa do <strong>CNPq</strong>.</p><p>Nas aulas, minha proposta é conectar os conceitos à prática e trabalhar as dúvidas de cada aluno. Acredito no aprendizado construído passo a passo, com espaço para perguntar, tentar e compreender.</p><p>Este acervo reúne os materiais que elaboro para apoiar as aulas e ajudar você a desenvolver autonomia nos estudos.</p><div class="credentials"><span>Licenciatura em Química · UEPA</span><span>Bolsista CNPq</span></div></div>
</section>

<section id="como-estudar" class="section" aria-labelledby="study-title">
  <p class="eyebrow">Da aula para a prática</p><h2 id="study-title">Como usar os materiais</h2>
  <ol class="study-steps"><li><strong>Escolha o assunto</strong><p>Localize a lista indicada em aula ou pesquise o conteúdo.</p></li><li><strong>Pratique no seu ritmo</strong><p>Acesse o PDF, resolva os exercícios e registre suas tentativas.</p></li><li><strong>Traga suas dúvidas</strong><p>Sinalize as dificuldades para discutirmos a resolução juntos.</p></li></ol>
</section>

<section id="contato" class="section contact" aria-labelledby="contact-title">
  <div><p class="eyebrow">Vamos conversar?</p><h2 id="contact-title">Seu próximo passo começa com uma pergunta.</h2><p>Entre em contato para combinar suas aulas particulares em Belém–PA. O agendamento é feito pelo WhatsApp.</p></div>
  <div class="contact-actions"><a class="button" href="https://wa.me/5591984969714">Conversar pelo WhatsApp ↗</a><a href="tel:+5591984969714">(91) 98496-9714</a><a href="mailto:eliassabat2@gmail.com">eliassabat2@gmail.com</a></div>
</section>

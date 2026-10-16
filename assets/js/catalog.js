(() => {
  const tools = document.querySelector('.catalog-tools');
  if (!tools) return;
  const search = document.querySelector('#busca');
  const cards = [...document.querySelectorAll('.material-card')];
  const buttons = [...document.querySelectorAll('.filter')];
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const entries = cards.map(card => ({ card, text: normalize(card.dataset.search) }));
  let area = 'all';
  function update() {
    const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let count = 0;
    entries.forEach(({ card, text }) => {
      const matches = (area === 'all' || card.dataset.area === area) && terms.every(term => text.includes(term));
      card.hidden = !matches;
      if (matches) count++;
    });
    document.querySelector('#result-count').textContent = `${count} ${count === 1 ? 'material encontrado' : 'materiais encontrados'}`;
    document.querySelector('#empty-state').hidden = count !== 0;
  }
  search.addEventListener('input', update);
  buttons.forEach(button => button.addEventListener('click', () => {
    area = button.dataset.area;
    buttons.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    update();
  }));
  tools.hidden = false;
  update();
})();

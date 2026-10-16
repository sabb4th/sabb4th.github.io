# Química com o Prof. Elias Sabát

Site de apresentação das aulas particulares e acervo de materiais didáticos do Prof. Elias Sabát, licenciado em Química pela Universidade do Estado do Pará (UEPA) e participante de um projeto de pesquisa com bolsa CNPq.

**[Acessar o site](https://sabb4th.github.io)**

Aulas do ensino fundamental ao ensino médio e pré-vestibular em Belém–PA. Agendamento pelo [WhatsApp: (91) 98496-9714](https://wa.me/5591984969714). E-mail: [eliassabat2@gmail.com](mailto:eliassabat2@gmail.com).

## Organização

- `index.md`: apresentação, acervo, aulas, biografia e contato.
- `_data/apostilas.json`: fonte dos cartões, com número, título, tópicos, área e link do PDF. Use `null` no campo `url` para materiais em breve.
- `_includes/chemistry.html`: ilustração científica em SVG.
- `_layouts/default.html`: estrutura da página e metadados.
- `assets/css/style.css`: identidade visual e estilos responsivos.
- `assets/js/catalog.js`: busca por conteúdo e filtros por área, sem dependências.

## Atualizar as apostilas

Edite `_data/apostilas.json`, preservando a numeração das listas. As áreas disponíveis são `geral`, `organica` e `fisico-quimica`. Os cartões são gerados pelo Jekyll; o acervo continua acessível sem JavaScript.

O site usa Jekyll e pode ser publicado pelo GitHub Pages, sem etapa de compilação JavaScript. Para prévia local em um ambiente com Jekyll instalado, execute `jekyll serve`.

Materiais elaborados pelo Prof. Elias Sabát. Direitos autorais reservados.

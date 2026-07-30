# Pasta de Marca — blis (Logotipos)

Esta pasta foi criada especificamente para centralizar os ativos visuais de logotipo da marca **blis**.

## Arquivo Atual
- `logo.svg`: Um arquivo provisório baseado em texto (vetorizado) que desenha a wordmark **"blis"** na fonte *Plus Jakarta Sans* com o pingo do "i" colorido no verde esmeralda da marca (`#1FA34A`). O corpo da palavra herda `currentColor` para se adaptar automaticamente a fundos claros (ficando grafite/charcoal) ou escuros (ficando branco/cinza claro).

## Como substituir pelo logotipo oficial da sua marca:

### Opção A: Substituir por um SVG Oficial (Recomendado)
1. Salve o seu arquivo SVG com o nome exato de `logo.svg`.
2. Substitua o arquivo existente nesta pasta pelo seu novo arquivo.
3. Para garantir que o logo se adapte a fundos claros e escuros no header e footer do site, certifique-se de que os elementos vetoriais que devem mudar de cor usem `fill="currentColor"` ou `stroke="currentColor"`, e os elementos que devem reter a cor da marca (como o verde do "i") usem `#1FA34A` diretamente.

### Opção B: Substituir por uma imagem PNG
1. Coloque seus arquivos de imagem nesta pasta (ex: `logo-light.png` para fundos claros e `logo-dark.png` para fundos escuros).
2. No código do Header ([Header.tsx](file:///Users/muriloortega/Desktop/SITES/Awareness%20Blis/awareness-blis/src/components/Header.tsx)) e do Footer ([Footer.tsx](file:///Users/muriloortega/Desktop/SITES/Awareness%20Blis/awareness-blis/src/components/Footer.tsx)), altere as tags `<img>` ou os componentes `<svg>` para apontar para os caminhos corretos (ex: `/brand/logo-light.png`).

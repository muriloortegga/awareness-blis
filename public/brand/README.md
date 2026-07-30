# Pasta de Marca — blis (Logotipos)

Esta pasta centraliza os arquivos de logotipo usados no **header** (topo, canto esquerdo) e no **footer** do site. O código já aponta para os arquivos abaixo — basta substituí-los pelos arquivos oficiais da marca, sem precisar mexer em nenhum componente.

## Arquivos esperados

| Arquivo | Onde é usado | Fundo |
|---|---|---|
| `logo.svg` | Header (topo do site) | Claro (branco/transparente) |
| `logo-white.svg` | Footer (rodapé) | Escuro (grafite `#171717`) |

Os dois arquivos atuais são placeholders provisórios (wordmark "blis" em *Plus Jakarta Sans*, com o pingo do "i" no verde da marca `#1FA34A`) — um na versão grafite (para o header) e outro na versão branca (para o footer).

## Como substituir pelo logotipo oficial

### Opção A: SVG (recomendado)
1. Exporte o logotipo oficial em duas versões: uma para fundo claro e outra para fundo escuro (ou a mesma arte, se ela já funcionar em ambos os casos).
2. Salve-as substituindo exatamente `logo.svg` (header) e `logo-white.svg` (footer) nesta pasta.
3. Pronto — o header e o footer atualizam automaticamente, pois ambos carregam a imagem direto destes arquivos.

### Opção B: PNG ou JPG
1. Coloque os arquivos nesta pasta (ex: `logo.png` e `logo-white.png`).
2. Abra [`src/components/Header.tsx`](../../src/components/Header.tsx) e [`src/components/Footer.tsx`](../../src/components/Footer.tsx) e troque a extensão do `src` da tag `<img>` de `.svg` para `.png` (ou `.jpg`).

## Dica de proporção
Os placeholders usam proporção ~95×36 (largura×altura). Uma logo com proporção muito diferente pode ficar desalinhada — ajuste a altura da classe `h-6` (header) ou `h-7` (footer) na tag `<img>` se necessário.

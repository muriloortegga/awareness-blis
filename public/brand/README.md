# Pasta de Marca — blis (Logotipos)

Esta pasta centraliza os arquivos de logotipo usados no **header** (topo, canto esquerdo) e no **footer** do site. O código já aponta para os arquivos abaixo — basta substituí-los pelos arquivos oficiais da marca, sem precisar mexer em nenhum componente.

## Arquivos atuais

| Arquivo | Onde é usado | Fundo |
|---|---|---|
| `logo.png` | Header (topo do site) | Claro (branco/transparente) |
| `logo-white.png` | Footer (rodapé) | Escuro (grafite `#171717`) |

Ambos são o logotipo oficial da marca (wordmark "blis" com o pingo do "i" no verde `#1FA34A`), em PNG com fundo transparente: `logo.png` na versão grafite/preta (para fundos claros) e `logo-white.png` na versão branca (para fundos escuros), gerada a partir do arquivo original mantendo o pingo verde.

## Como substituir pelo logotipo oficial

1. Exporte o logotipo em duas versões: uma para fundo claro e outra para fundo escuro (ou a mesma arte, se já funcionar em ambos os casos), preferencialmente em PNG com fundo transparente e a arte já cortada rente (sem margem em branco sobrando).
2. Salve-as substituindo exatamente `logo.png` (header) e `logo-white.png` (footer) nesta pasta.
3. Pronto — o header e o footer atualizam automaticamente, pois ambos carregam a imagem direto destes arquivos.

Se preferir usar SVG em vez de PNG, é só salvar como `logo.svg` / `logo-white.svg` e trocar a extensão do `src` da tag `<img>` em [`src/components/Header.tsx`](../../src/components/Header.tsx) e [`src/components/Footer.tsx`](../../src/components/Footer.tsx). Evite usar `<text>` para desenhar as letras dentro do SVG — como a imagem é carregada isolada via `<img>`, ela não herda as fontes da página, e o texto pode cair numa fonte diferente e ficar com o espaçamento quebrado. Prefira exportar as letras já como caminhos vetoriais (path).

## Dica de proporção
A arte atual tem proporção aproximada de 859×497 (largura×altura). Uma logo com proporção muito diferente pode ficar desalinhada — ajuste a altura da classe `h-6` (header) ou `h-7` (footer) na tag `<img>` se necessário.

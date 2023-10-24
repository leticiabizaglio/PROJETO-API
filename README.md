O objetivo deste site é mostrar a funcionalidade da API. Toda a documentação da API estará disponível neste link: [https://www.narutodb.xyz/api/akatsuki].

## Primeiro passos no terminal
```bash
1.
npm i

2.
npm i axios ( install the API)

3.
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000), o número "3000" pode mudar de acordo com a porta.

Este projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente o Inter, uma fonte personalizada do Google.

## Passo a passo

1. Estruturação:
<br>
Criar pastas e modificar estruturação de pastas (caso seja necessário). Como por exemplo:
<br>
"page.js" => "page.jsx"
<br>
"layout.js" => "layout.jsx"
<br>

Você pode apagar os códigos e a estilização feita pela "Vercel".

### Observação:
A pasta "components" armazena todos os componentes, trechos de códigos importantes como Footer e Header. 
O interessante de usar componentes é a simplificação do código através de um Link, organização e agilidade.
Isso faz com que os desenvolvedores sejam visto de forma profissional.

2. Principais Pastas:

Pasta (data):
<br>
Destinada a arquivos javascript, e armazenamento de informações da API.

Arquivo (akatsuki.js):
<br>
Contém exportação da classe "Personagem". E os personagens terão:
- nome (name)
- img (imagem do personagem)
- tipo (natureza)
- tracos (traços únicos)
<br>
Arquivo (anime.js)
Este arquivo fornece as informações da API por meio da importação do Link. E exportação para utilizar em outras páginas.


Pasta (models):
<br>
Destinada a arquivos javascript, por sua vez, orientados a objetos e/ou classes. 

Arquivo (menu.js):
<br>
Este arquivo está fornecendo as informações dos personagens na tela. Também temos informações ocultas como:
<br> 
- Personagens: Jūgo, Kabuto Yakushi, Karin, Chibi, Hinoki, Kakuzu's Partner, Kie, Kyōya, Himeyuri, Ginji, Hidan




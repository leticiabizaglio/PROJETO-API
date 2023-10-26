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

### 1. Estruturação:
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

### 2. Principais Pastas:

### Pasta (data):
Essa pasta é destinada a arquivos javascript, e armazenamento de informações da API.

**Arquivo (anime.js)**
<br>
Este arquivo fornece as informações da API por meio da importação do Link. E exportamos para utilizar em outras páginas.

### Pasta (models):
Essa pasta é destinada a arquivos javascript, por sua vez, orientados a objetos e/ou classes. 

**Arquivo (akatsuki.js):**
<br>
Temos a exportação da classe "Personagem". E cada personagem exibido por essa API terá:
- nome (name)
- img (imagem do personagem)
- tipo (natureza)
- tracos (traços únicos)

**Arquivo (akatsukiList.js):**
<br>
Utilizamos métodos:
- addPersonagem = adiciona o personagem
- getListaTsuki = é um array que retorna os dados...
- removeTsuki = remove o personagem

atráves da classe **ListAkatsuki**:



 **Arquivo (menu.js):**
<br>
Este arquivo está fornecendo/alimentando as informações dos personagens na tela, ou seja, tudo o que está aparecendo ou não na tela. Como por exemplo, temos alguns personagens que ocultamos, são eles:
<br> 
- Jūgo, Kabuto Yakushi, Karin, Chibi, Hinoki, Kakuzu's Partner, Kie, Kyōya, Himeyuri, Ginji, Hidan




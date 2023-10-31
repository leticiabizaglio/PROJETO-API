O objetivo desse site é mostrar a funcionalidade da API.
<br> 
Toda a documentação da API estará disponível neste link: [https://www.narutodb.xyz/api/akatsuki].

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

Este projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente o Inter.

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
O interessante de usar componentes é a simplificação do código através de um Link havendo organização e agilidade.
Isso faz com que os desenvolvedores sejam visto de forma profissional.

2. Principais Pastas:

### Pasta **(data):**
Responsável pelo armazenamento de informações da API.

Arquivo **(akatsuki.js):**
<br>
Este arquivo recebe as informações da API.
Contém a exportação da classe "Akatsuki" que, quando importado para outra página leva as informações dessa API.

### Pasta **(models):**
Destinada a arquivos javascript com classe. 

Arquivo **(Personagem.js)**:

Este arquivo contém uma classe "Personagem" que diz o que cada personagem vai receber.
Cada personagem vai ter:

- id;
- name (nome);
- img (imagem);
- traços; 
- tipos;

- Temos um método de **"generateID"**. Este método gera o ID de cada personagem, com o cálculo de **Math.floor** e **Math.random** que nos retorna ID´s até o número 1000.

Arquivo **(PersonagemLista.js):**
<br>
Este arquivo contém uma classe "ListaPersonagem" com os métodos "addPersonagem", "getListaPersonagem" e "excludePersonagem".

- **addPersonagem**
<br>
ojs

- **getListaPersonagem**
<br>
jsj

- **excludePersonagem**
<br>
kjd
gytyy


<br> 


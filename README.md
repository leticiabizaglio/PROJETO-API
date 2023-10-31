Este é um projeto [Next.js](https://nextjs.org/) inicializado com  [`create-next-app`]
(https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

- **constructor**
<br>
Temos um array vazio para receber os métodos abaixo, ou seja, um array que espera métodos para adicionar personagens (addPersonagem), mostrar os personagens na tela (getListaPersonagem) e para excluir (excludePersonagem).


- **addPersonagem**
<br>
Este método adiciona o personagem que o usuário criou (cadastro), por isso que o array é vazio, por causa que espera um cadastro.

- **getListaPersonagem**
<br>
Pega os personagens da lista (da API) e o personagem que o usuário criou e exibe na tela.

- **excludePersonagem**
<br>
Consegue excluir tanto os personagens da API quanto o cadastrado.

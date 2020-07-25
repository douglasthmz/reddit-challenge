**Demonstração do projeto em: [https://reddit-front-challenge.netlify.app/](https://reddit-front-challenge.netlify.app/)**

## Instruções para rodar o projeto localmente:

Para conseguir rodar o projeto, certifique-se que sua máquina possui o [Node](https://nodejs.org/) instalado, assim como o gerenciador de pacotes [Yarn](https://yarnpkg.com/).<br />
Primeiramente, deve-se clonar o repositório para sua máquina:

### `git clone https://github.com/douglasthmz/reddit-challenge.git`

Depois de clonado, basta navegar para a pasta `reddit-challenge` e rodar o seguinte comando:

### `yarn`

Com este comando, as dependências necessárias para rodar o projeto estarão sendo baixadas.<br />
Com o as pendências baixadas, basta rodar o seguinte comando:

### `yarn start`

Com isto, o projeto rodará no endereço [http://localhost:3000/](http://localhost:3000/).

## Sobre o projeto:

O projeto foi desenvolvido utilizando **[React](https://pt-br.reactjs.org/)**, e para começar o projeto foi utilizado o boiler-plate **[create-react-app](https://create-react-app.dev/)**.<br />

O código está em **[TypeScript](https://www.typescriptlang.org/)**, que além dos benefícios da Tipagem, também traz um poder de inteligência considerável quando usado juntamente com o **[Visual Studio Code](https://code.visualstudio.com/)**.

Para o consumo da API do **[Reddit](https://www.reddit.com/dev/api/)**, foi utilizada a biblioteca **[axios](https://github.com/axios/axios)**, que tem um setup bem simples, com suporte à sintaxe `async/await`.

Para a estilização do projeto, foi escolhido o **[styled-components](https://styled-components.com/)**, que traz a manipulação de todo o CSS dentro dos arquivos Javascript ou Typescript, tornando a componentização do estilo mais simples de ser feita, e sem poluir as tags dentro `JSX/TSX` com classes e id's.

# O que é o AluraCommerce?

O AluraCommerce é uma aplicação feita em React Native que simula um e-commerce. A ideia é usar o Context API, do react, para ver a vantagem de se ter estados globais na aplicação. Também é usado o AsyncStorage e uma Web API para ter a persistência dos dados.

Esse projeto é utilizado na formação base de React Native da plataforma da Alura.


<h1 align="center">
    <img alt="Demonstracao" title="Demonstracao" src=".images/demo.gif" width="400px" />
</h1>

## :book: O que aprendemos?
- O que é o Context API e sua função: vimos que ele guarda, centraliza e disponibiliza estados (variáveis e funções) globalmente na aplicação - o que é de grande importância quando lidamos com uma aplicação muito grande, com várias telas e componentes;
- O porquê utilizar Context API: quando cresce a aplicação, é necessário centralizar informações e estados em um único lugar, portanto, o Context API economiza tempo e facilita a manutenção do projeto, além de agilizar a escrita do código;
- Como passar informações via `props` pode deixar a aplicação mais confusa e dificulta a correção de bugs no futuro, logo, o Context API é essencial para solucionar esse problema.
- Como criar um setup de configuração do Context API para modificarmos o tema da nossa aplicação, conseguindo mexer em cores e fontes de letras;
- Como é possível acessar de forma global um objeto de cores vindo do Context API e passar esse objeto como parâmetro para os nossos arquivos de estilos, transformando nossos estilos em uma função. Isso tudo permitiu que nosso aplicativo mudasse todo o seu tema, do modo escuro para o claro.
- A importância de uma autenticação em um aplicativo e quando que ela é utilizada. Vimos que no dia a dia, as mensagens de autenticação vem criptografadas para garantir maior segurança dos dados do usuário que está logando no sistema;
- A aplicação do Context API para simular uma autenticação com o login, usando email e senha e salvando os dados do usuário de forma global na aplicação para que conseguíssemos exibir esses dados (como o nome) nas mais diversas telas.
- Usar o Context API para adicionar os produtos no carrinho;
- Implementar o `Set` para adicionar elementos únicos no vetor de últimos vistos, considerando que, diferente do carrinho, os últimos vistos não devem exibir o mesmo produto mais de uma vez.
- O Context API por si só não persiste os dados, caso a aplicação seja reiniciada;
- A solução para persistir os dados consiste em dois métodos diferentes que aplicamos: o primeiro, usando o AsyncStorage para salvar a informação do tema da aplicação; o segundo, utilizando uma Web API para salvar os produtos da nossa lista do carrinho.

## :rocket: Tecnologias

Esse projeto foi desenvolvido com a utilização das seguintes tecnologias:
- [React Native][rn]
- [Expo][expo]

## :information_source: Como usar

Para copiar e executar essa aplicação, você precisa de três pré-requisitos: [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] intalados no seu computador.

No terminal, digite os comandos a seguir:

### Baixar e instalar o projeto

```bash
# Clonar esse repositório
$ git clone https://github.com/alura-cursos/react-native-context-api.git

# Vá para o ropositório
$ cd AluraCommerce

# Instale as dependências
$ npm install
```

### Executar o Mobile

```bash
# Execute em outro terminal (dentro da pasta AluraCommerce)
$ expo start
```

### Executar a Web API

```bash
# Execute em outro terminal (dentro da pasta AluraCommerce)
# Lembre-se de alterar o endereco ip para o do seu computador!
$ json-server --watch --host "endereco ip" db.json
```
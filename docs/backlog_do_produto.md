# Backlog do Produto

<br>

### User roles

É o personagem fictício da user story que representa o usuário ideal do produto, no caso do Receitalista o usuário. Todas as histórias são escritas a partir da perspectiva de um tipo de usuário.

- Usuário: Pessoa que tem necessidade em calcular o preço de custo de um produto, baseado no preço dos ingredientes/materiais e o preço da mão de obra, podendo colocar o preço final, com intuito de saber a margem de lucro que irá ter.

### [EP01] Gerenciamento de usuário

   - [FEAT01] Autenticação de usuário para entrar na plataforma
      - [US01] Eu como usuário gostaria de me cadastrar na aplicação para conseguir realizar login
      - [US02] Eu como usuário gostaria de poder realizar o login na aplicação para poder utilizar suas funcionalidades
      - [US03] Eu como usuário gostaria de poder alterar minha senha sem a necessidade de estar logado na aplicação para caso eu a esqueça
   - [FEAT02] Ações voltadas para o perfil de usuário
      - [US04] Eu como usuário gostaria de poder editar minhas informações de cadastro na aplicação para que eu possa mitigar possíveis erros durante o cadastro
      - [US05] Eu como usuário gostaria de poder excluir minha conta para que minhas informações sejam deletadas caso eu não queria mais utilizar a aplicação

 
### [EP02] Automação do controle de estoque de ingredientes e de receita de produtos
  - [FEAT03] Gerenciamento de ingredientes/materiais
      - [US06] Eu como usuário gostaria de poder cadastrar os ingredientes na aplicação para que eu possa utilizar suas informações na criação de um produto
      - [US07] Eu como usuário gostaria de poder editar as informações de um ingrediente/material cadastrado para poder mitigar possíveis erros durante seu cadastro
      - [US08] Eu como usuário gostaria de poder excluir um ingrediente cadastrado para caso eu não queira mais utilizar sua informação na aplicação
      - [US09] Eu como usuário gostaria de poder visualizar a listagem dos meus ingredientes cadastrados na aplicação para manter controle dos ingredientes cadastrados
  - [FEAT04] Gerenciamento de produto 
      - [US10] Eu como usuário gostaria de poder cadastrar produtos para que eu possa saber, baseado nos preços dos ingredientes, o preço de custo do produto
      - [US11] Eu como usuário gostaria de poder editar as informações de um produto cadastrado para poder mitigar possíveis erros durante seu cadastro
      - [US12] Eu como usuário gostaria de poder excluir um produto cadastrado para caso eu não queira mais utilizar sua informação na aplicação
      - [US13] Eu como usuário gostaria de poder visualizar a listagem dos meus produtos cadastrados na aplicação para ter um apanhado geral de todos eles

          
### [EP03] Gerenciamento de pedidos por clientes e visualização de resultados das vendas
  - [FEAT05] Gerenciamento de cliente
      - [US14] Eu como usuário gostaria de poder realizar o cadastro das informações dos meus clientes na aplicação para utilizar durante o gerenciamento de pedidos
      - [US15] Eu como usuário gostaria de poder editar as informações de um cliente cadastrado na aplicação para poder mitigar possíveis erros durante seu cadastro
      - [US16] Eu como usuário gostaria de poder excluir um cliente cadastrado para caso eu não queira mais utilizar sua informação na aplicação
      - [US17] Eu como usuário gostaria de poder visualizar a listagem dos meus clientes cadastrados na aplicação para poder visualizar o perfil de consumo de cada cliente
  - [FEAT06] Gerenciamento de pedido
      - [US18] Eu como usuário gostaria de poder cadastrar pedidos na aplicação para que eu possa alocar um produto a um cliente
      - [US19] Eu como usuário gostaria de poder editar as informações de um pedido cadastrado para poder mitigar possíveis erros durante seu cadastro
      - [US20] Eu como usuário gostaria de poder excluir um pedido cadastrado para caso eu não queira mais utilizar sua informação na aplicação
      - [US21] Eu como usuário gostaria de poder visualizar a listagem dos  pedidos cadastrados na aplicação para manter controle de gastos e lucros
  - [FEAT07] Gerenciamento de custos
      - [US22] Eu como usuário gostaria de visualizar os gastos com cada ingrediente mensalmente para poder estimar margem de lucro por produto
      - [US23] Eu como usuário gostaria de visualizar qual a margem de lucro mensal por produto para gerenciar o preço de venda para cada pedido
      - [US24] Eu como usuário gostaria de visualizar qual a margem de lucro de todos os pedidos mensalmente ter controle da minha margem de lucro
          
<br>

## Requisitos não funcionais

N° | Classificação | Requisitos Não Funcionais
:---------: |  :-------: |  :-------:
RNF01 | Requisitos de Implementação | Back-end desenvolvido em Node.js
RNF02 | Requisitos de Implementação | Front-end desenvolvido em React
RNF03 | Requisitos de Padrões | O sistema deve ser desenvolvido em orientação a objetos
RNF04 | Requisitos de Portabilidade | A aplicação acessível via internet, uma aplicação web
RFN05 | Requisitos de Usabilidade | A aplicação deve ter responsividade da interface
RFN06 | Requisitos de Produtos | O sistema deve funcionar 24/7
RFN07 | Requisitos Éticos | A aplicação deve ser segura em se tratando dos dados do usuário
RFN08 | Requisitos de Facilidade de Uso | A interface do site deve ser de fácil manipulação

<br>

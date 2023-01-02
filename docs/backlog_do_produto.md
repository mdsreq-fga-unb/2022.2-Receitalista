# Backlog do Produto - SAFe

<br>

### User roles

É o personagem fictício da user story que representa o usuário ideal do produto, no caso do Receitalista o usuário. Todas as histórias são escritas a partir da perspectiva de um tipo de usuário.

- Usuário: Pessoa que tem necessidade em calcular o preço de custo de um produto, baseado no preço dos ingredientes/materiais e o preço da mão de obra, podendo colocar o preço final, com intuito de saber a margem de lucro que irá ter.

### [EP01] Gerenciamento de usuário

   - [FEAT01] Autenticação de usuário para entrar na plataforma
      - [US01] Cadastrar no Receitalista
         - Eu como usuário gostaria de me cadastrar no site para utilizar suas funcionalidades e ter acesso único às minhas informações. 
      - [US02] Login no Receitalista
         - Eu como usuário gostaria de realizar o login no site para utilizar ao menos uma de suas funcionalidades e acessar as minhas informações.
      - [US03] Alterar senha
         - Eu como usuário gostaria de alterar minha senha no site caso eu a esqueça ou por motivos de segurança.
   
   - [FEAT02] Ações voltadas para o perfil de usuário
      - [US04] Editar usuário
         - Eu como usuário gostaria de editar as minhas informações de cadastro do site para corrigir erros ou atualizá-las.
      - [US05] Excluir conta
         - Eu como usuário gostaria de excluir a minha conta do site para deletar todas as minhas informações.

 
### [EP02] Automação do controle de estoque de materiais e de receita de produtos
  
  - [FEAT03] Gerenciamento de materiais
      - [US06] Cadastrar material
         - Eu como usuário gostaria de cadastrar um material no site para utilizá-lo em um produto ou acompanhar o seu custo periódico.
      - [US07] Editar material
         - Eu como usuário gostaria de editar as informações de um material para corrigir erros ou atualizá-las.
      - [US08] Excluir material
         - Eu como usuário gostaria de excluir um material cadastrado no site caso eu não o utilize mais.
      - [US09] Visualizar materiais
         - Eu como usuário gostaria de visualizar a listagem dos meus materiais cadastrados no site para manter o controle do estoque.
  
  - [FEAT04] Gerenciamento de produto 
      - [US10] Cadastrar produto
         - Eu como usuário gostaria de cadastrar um produto no site para definir o preço de venda com base nos materiais, acompanhar o seu lucro periódico e associar pedidos de clientes a ele.
      - [US11] Editar produto
         - Eu como usuário gostaria de editar as informações de um produto para corrigir erros ou atualizá-las.
      - [US12] Excluir produto
         - Eu como usuário gostaria de excluir um produto cadastrado no site caso eu não o utilize mais.
      - [US13] Visualizar produtos
         - Eu como usuário gostaria de visualizar a listagem dos meus produtos cadastrados no site para manter o controle do estoque.

          
### [EP03] Gerenciamento de pedidos por clientes e visualização de resultados das vendas
  
  - [FEAT05] Gerenciamento de cliente
      - [US14] Cadastrar cliente
         - Eu como usuário gostaria de realizar o cadastro das informações dos meus clientes no site para saber seus pedidos e ter um repositório de clientes.
      - [US15] Editar cliente
         - Eu como usuário gostaria de editar as informações de um cliente para corrigir erros ou atualizá-las.
      - [US16] Excluir cliente
         - Eu como usuário gostaria de excluir as informações de um cliente cadastrado no site caso eu não as utilize mais.
      - [US17] Visualizar clientes
         - Eu como usuário gostaria de visualizar a listagem dos meus clientes cadastrados no site para saber seus pedidos favoritos e acessar suas informações.
  
  - [FEAT06] Gerenciamento de pedido
      - [US18] Cadastrar pedido
         - Eu como usuário gostaria de cadastrar pedidos no site para que eu posso controlar os prazos de entrega.
      - [US19] Editar pedido
         - Eu como usuário gostaria de poder editar as informações de um pedido para corrigir erros ou atualizá-las.
      - [US20] Excluir pedido
         - Eu como usuário gostaria de poder excluir um pedido cadastrado no site caso eu não o utilize mais.
      - [US21] Visualizar pedidos
         - Eu como usuário gostaria de poder visualizar a listagem dos pedidos cadastrados no site para saber os produtos mais pedidos e a preferência de cada cliente.
  
  - [FEAT07] Gerenciamento de custos
      - [US22] Visualizar gastos de material
         - Eu como usuário gostaria de visualizar os gastos com cada material mensalmente para poder estimar margem de lucro por produto
      - [US23] Visualizar lucro de produto
         - Eu como usuário gostaria de visualizar a margem de lucro mensal por produto para gerenciar o preço de venda para cada pedido
      - [US24] Visualizar lucro de pedido
         - Eu como usuário gostaria de visualizar a margem de lucro de todos os pedidos mensalmente para ter controle da minha margem de lucro
<br>

## Requisitos não funcionais

N° | Classificação | Requisitos Não Funcionais
:---------: |  :-------: |  :-------:
RNF01 | Requisitos de Implementação | Back-end desenvolvido em Node.js
RNF02 | Requisitos de Implementação | Front-end desenvolvido em React
RNF03 | Requisitos de Suportabilidade | O site deve ser web
RFN04 | Requisitos de Usabilidade | O site deve ter responsividade da interface
RFN05 | Requisitos de Confiabilidade | O sistema deve funcionar 24/7

<br>

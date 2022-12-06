<h1 align="center"><b>Requisitos do Produto</b></h1>

## Versionamento
| Data | Versão | Descrição | Autor |
|------| ------ | --------- | ----- |
| 02/12/2022 | 1.0 | Primeira versão do backlog do produto | [Pedro Henrique](https://github.com/pehenobra2) |

<br>

## Backlog do produto

<br>

### User roles

É o personagem fictício da user story que representa o usuário ideal do produto, no caso do Receitalista o usuário. Todas as histórias são escritas a partir da perspectiva de um tipo de usuário.
- Usuário: Pessoa que tem necessidade em calcular o preço de custo de um produto, baseado no preço dos ingredientes/materiais e o preço da mão de obra, podendo colocar o preço final, com intuito de saber a margem de lucro que irá ter.

| Épico | Feature | User Story |
|-------|---------|------------|
| [EP01] Gerenciamento de usuário | [FEAT01] Cadastro de usuário | [US01] Como usuário, eu quero realizar o meu cadastro para utilizar dos serviçõs do site web. | 
| [EP01] Gerenciamento de usuário | [FEAT02] Edição do perfil de usuário | [US02] Como usuário, eu quero editar os dados do meu perfil de usuário. |
| [EP01] Gerenciamento de usuário | [FEAT03] Exclusão de usuário | [US03] Como usuário, quero deletar o meu usuário|
| [EP01] Gerenciamento de usuário | [FEAT04] Login de usuário | [US04] Como usuário, quero realizar o meu login no site web. |
| [EP02] Gerenciamento de cliente | [FEAT05] Cadastro de cliente | [US05] Como usuário, quero realizar o cadastro de um cliente. |
| [EP02] Gerenciamento de cliente | [FEAT06] Edição de perfil de cliente | [US06] Como usuário, quero editar os dados do perfil do cliente cadastrado. |
| [EP02] Gerenciamento de cliente | [FEAT07] Exclusão de cliente | [US07] Como usuário, quero excluir um cliente cadastrado. |
| [EP02] Gerenciamento de cliente | [FEAT08] Listar todos os clientes cadastrados| [US08] Como usuário, quero a lista de todos os clientes cadastrados. |
| [EP02] Gerenciamento de cliente | [FEAT09] Busca por cliente cadastrado| [US09] Como usuário, quero buscar por um cliente específico que esteja cadastrado. |
| [EP03] Gerenciamento de ingrediente/materiais | [FEAT10] Cadastro de ingrediente/material | [US10] Como usuário, quero cadastrar um ingrediente/material. |
| [EP03] Gerenciamento de ingrediente/materiais | [FEAT11] Edição de perfil do ingrediente/material cadastrado | [US11] Como usuário, quero editar os dados de um ingrediente/material cadastrado. |
| [EP03] Gerenciamento de ingrediente/materiais | [FEAT12] Exclusão de ingrediente/material cadastrado | [US12] Como usuário, quero excluir um ingrediente/material cadastrado. |
| [EP03] Gerenciamento de ingrediente/materiais | [FEAT13] Listar todos os ingredientes/materiais cadastrados | [US13] Como usuário, quero listar todos os ingredientes/materiais cadastrados. |
| [EP03] Gerenciamento de ingrediente/materiais | [FEAT14] Buscar por ingrediente/material cadastrado | [US14] Como usuário, quero buscar por um ingrediente/material específico cadastrado. |
| [EP04] Gerenciamento de produto | [FEAT15] Cadastro de produto| [US15] Como usuário, quero cadastrar um produto no site web. |
| [EP04] Gerenciamento de produto | [FEAT16] Edição de perfil de produto cadastrado | [US16] Como usuário, quero editar os dados de algum produto cadastrado. |
| [EP04] Gerenciamento de produto | [FEAT17] Excluir produto cadastrado | [US17] Como usuário, quero excluir um produto cadastrado. |
| [EP04] Gerenciamento de produto | [FEAT18] Listar todos os produtos cadastrados | [US18] Como usuário, quero a lista com todos os produtos cadastrados. |
| [EP04] Gerenciamento de produto | [FEAT19] Buscar por produto cadastrado | [US19] Como usuário, quero buscar por um produto em específico que está cadastrado. |
| [EP05] Gerenciamento de pedido | [FEAT20] Cadastro de pedido | [US20] Como usuário, quero cadastrar um pedido no site web. |
| [EP05] Gerenciamento de pedido | [FEAT21] Edição de pedido cadastrado | [US21] Como usuário, quero editar o pedido cadastrado. |
| [EP05] Gerenciamento de pedido | [FEAT22] Exclusão de pedido cadastrado | [US22] Como usuário, quero excluir um pedido cadastrado. |
| [EP05] Gerenciamento de pedido | [FEAT23] Listar todos os pedidos cadastrados | [US23] Como usuário, quero a lista de todos os pedidos cadastrados. |
| [EP05] Gerenciamento de pedido | [FEAT24] Buscar por pedido cadastrado | [US24] Como usuário, quero buscar por um pedido em específico cadastrado. |
| [EP06] Gerenciamento de Dashboard | [FEAT25] Gerar gráfico preço X lucro | [US25] Como usuário, quero um gráfico em que mostra o preço e o lucro obtido com o produto. |
| [EP06] Gerenciamento de Dashboard | [FEAT26] Exportar relatório via PDF | [US26] Como usuário, quero um relatório com o lucro obtido em um produto específico. |

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

## MVP1

 - **Objetivo**: Disponibilizar para o usuário as funcionalidades básicas do site web desenvolvido
 - **Funcionalidades**: 

| Feature | Estimativa (Sprints) |
|---------|----------------------|
| [FEAT01] Capacidade de cadastro do usuário | 4 |
| [FEAT02] Capacidade de fazer edição dos dados pessoais na plataforma | 4 |
| [FEAT03] Capacidade de excluir sua própria conta  | 4 |
| [FEAT04] Capacidade de fazer login do usuário | 4 |
| [FEAT05] Capacidade de fazer cadastro de produto | 4 |
| [FEAT06] Capacidade de editar um produto | 4 |
| [FEAT07] Capacidade de excluir um produto cadastrado | 4 |
| [FEAT08] Capacidade de colocar a margem de lucro | 4 |
| [FEAT09] Capacidade de editar a margem de lucro colocada | 4 |
| [FEAT10] Capacidade de calcular o preço de venda baseado na margem de lucro colocada | 4 |
| [FEAT11] Capacidade de listar todos os produtos cadastrados | 4 |

<br>

## MVP2
  - **Objetivo**: Disponibilizar para o usuário funcionalidades mais específicas, que auxiliaram o usuário na experiência em uso do site web
  - **Funcionalidades**: 

| Feature | Estimativa (Sprints) |
|---------|----------------------|
| [FEAT12] Capacidade de gerar gráficos com base no preço x lucro de cada produto | 1 |
| [FEAT13] Capacidade de exportar um relatório em csv | 1 |
| [FEAT14] Capacidade de busca por produtos no sistema | 1 |
| [FEAT15] Capacidade de filtrar por produtos cadastrados no sistema | 1 |

# Visão do Produto e Projeto

<p align="justify">
O Receitalista é um projeto desenvolvido por alunos da disciplina de Requisitos de Software da <a href="https://www.unb.br/" target="_blank"> Universidade de Brasília - UnB </a>.
</p>

## 1 - Visão Geral do Produto

### 1.1 - Declaração de Posição do Produto

| Preposição | Descrição |
|--|--|
| Para | Microempreendedores que a partir de materiais geram um produto |
| Quem | Deseja calcular os gastos ou estipular o preço dos seus produtos com base na margem lucro |
| O Receitalista | É uma aplicação web |
| Que | Facilita o controle dos gastos, da gerencia de materias e produtos e das margens de lucro |
| Ao contrário | Das planilhas Excel e similares pagas que são restritas à um produto ou área específica |
| Nosso produto | Permite o controle de estoque tanto de materiais quanto de produtos, a criação de produto com base nos materiais, o cadastro de pedidos e de clientes e o controle dos gastos e dos lucros. |

### 1.2 - Objetivos do Produto

<p align="justify">
    O Receitalista tem por principal objetivo gerir o estoque de um usuário e seus gastos e lucros, além de não exigir conhecimento técnico do usuário, ser gratuito e fornecer os dados finaceiros registrados pelo usuário de forma periódica.
</p>

### 1.3 - Tecnologias a Serem Utilizadas
- React - desenvolvimento do frontend.
- NodeJS - desenvolvimento do backend.
- PostgreSQL - banco de dados.
- Digital Ocean - hospedagem da aplicação.

## 2 - Visão Geral do Projeto

### 2.1 - Organização do Projeto

|Papel|Atribuições|Responsável|Participantes|
|:-----:|:------:|:------:|:------:|
|Desenvolvedor Frontend|Codificar o design do produto e conectar com o *backend*|Pedro Lucas| Pedro Henrique, <br> Pedro Lucas, <br> Matheus Raphael, <br> Valderson Pontes|
|Desenvolvedor Backend|Codificar e implementar funcionalidades e fluxo de controle da aplicação|Lucas Gomes|Lucas Gomes, <br> Valderson Pontes|
|Devops|Configuração do ambiente para deploy e conexão com banco de dados|Lucas Gomes|Lucas Gomes|
|Product Owner|Responsável por comunicar o projeto com os *stakeholders* e também selecionar quais itens do Product Backlog o time de desenvolvimento irá trabalhar primeiro|Pedro Henrique|Pedro Henrique|
|Scrum Master|Instruir o time em princípios e valores do Scrum e XP|Matheus Raphael|Pedro Lucas, <br> Pedro Henrique, <br> Matheus Raphael, <br> Valderson Pontes, <br> Lucas Gomes|

### 2.2 - Planejamento das Fases e/ou Iterações do Projeto
|Sprint|Produto(Entrega)|Data de Início|Data de Fim|
|:-----:|:------:|:------:|:------:|
|Sprint 1|Documentação da Visão Geral do Produto, Definição do Projeto|10/11/2022|16/11/2022|
|Sprint 2|Documento de visão - Projeto e Produto, GitPages|17/11/2022|23/11/2022|
|Sprint 3|Elicitação dos requisitos e estudo do SAFe|24/11/2022|30/11/2022|
|Sprint 4|Análise e negociação dos requisitos. Documentação (backlog do produto). Verificação e Validação|01/11/2022|07/12/2022|
|Sprint 5|Refinamento dos requisitos e configuração de ambiente para desenvolvimento (banco de dados, integração continua e deploy)|08/12/2022|14/12/2022|
|Sprint 6| Implementação das US01, US02, US06, US09, US10, US13 |15/12/2022|21/12/2022|
|Sprint 7|Implementação das US04, US07, US11 |22/12/2022|28/12/2022|
|Sprint 8|Implementação das US03, US05 e entrega da PC1|29/12/2022|05/01/2023|
|Sprint 9|Implementação das US08, US12 e entrega da MVP1|06/01/2023|12/01/2023|
|Sprint 10|Implementação das US14, US18, US19, US20|13/01/2023|19/01/2023|
|Sprint 11|Implementação das US15, US16, US17, US21, US22 e entrega da PC2|20/01/2023|31/01/2023|
|Sprint 12|Implementação das US23, US24, ajustes finais no projeto e entrega da MVP2|01/02/2022|09/02/2022|

### 2.3 - Matriz de Comunicação
|Descrição|Área/envolvidos|Periodicidade|Produtos Gerados|
|:-----:|:------:|:------:|:------:|
|Daily|Equipe do Projeto|Diariamente|Feedback do Sprint|
|Planejamento do Sprint|Equipe do Projeto|Semanalmente|Backlog do Sprint, Issues|
|Revisão do Sprint|Equipe do projeto|Semanalmente|Feedback do Sprint|
|Retrospectiva do Sprint|Equipe do projeto|Semanalmente|Feedback do Sprint|

### 2.4 - Gerenciamento de Riscos
|Descrição|Causa|Medida Mitigadora|
|:-----:|:------:|:------:|
|Diminuição da equipe|Trancamento de disciplina, afastamento por motivos de saúde e entre outros|No pior dos cenários, caso seja dada impossibilidade de implementação do(s) requisito(s), será marcada uma reunião com o cliente para a exploração de vias alternativas|
|Diminuição do comprometimento|Compromissos externos conflituantes com os do projeto, por exemplo: trabalho e outras matérias|Fica cabível ao integrante da equipe deixar ciente os outros membros da situação.  Em casos extremos, que afetam o desempenho do projeto, será marcada uma reunião com o cliente e/ou com o professor da disciplina para buscar vias alternativas|

### 2.5 - Critérios de Replanejamento
|Descrição|Causa|Replanejamento|
|:-----:|:------:|:------:|
|Impossibilidade de entrega|Mau gerenciamento dos riscos, problemas técnicos|Redefinição e priorização do Backlog do Produto|
|Mudança de requisitos|Mudança de ideia do cliente em relação a alguma funcionalidade|Redefinição do Backlog do Produto, altereação nas Histórias de Usuário|
|Mal entendimento de requisitos|Falha da comunicação entre equipe de densolvimento e cliente|Redefinição do Backlog do Produto|

## 3 - Processo de Desenvolvimento de Software
<p align="justify">
    O processo de desenvolvimento de software será ágil e adaptado para utilizar o Scrum com o XP, pois o projeto tem duração de três meses, o cliente está em contato com a equipe de desenvolvimento e são lançadas novas alterações a cada iteração. 
</p>
<p align="justify">
    Serão utilizados os artefatos Scrum: Backlog do Produto e Backlog da Sprint para o gerenciamento interno de tarefas e execuções do time e alinhar a equipe em relação ao progresso, tarefas executadas e as futuras atividades. Também serão usados os eventos Scrum: Sprint, Planejamento (planning), Revisão (review), Retrospectiva (retrospective).
</p>
<p align="justify">
Com relação ao XP, utilizaremos como Práticas sobre o Processo de Desenvolvimento: As histórias de usuário, releases e a programação em pares (pair programming).
</p>

### 3.1 - Planejamento
|Atividade|Método|Ferramenta|Entrega|
|:-----:|:------:|:------:|:------:|
|Elicitação|Entrevista com *stakeholders* para levantamento de requisitos|Discord|Backlog do Produto, Histórias de Usuário|
|Validação|Revisão e refinamento dos requisitos em grupo e também com o cliente ou dono do produto|Discord, Miro|Backlog do Produto, PBB, Protótipo de Baixa Fidelidade|
|Planejamento do Sprint|Reunião em grupo para decidir quais Histórias de Usuário serão implementadas em cada Sprint|Discord|Backlog do Sprint|
|Divisão de Histórias de Usuário|Assinação de issues por cada membro do grupo|Discord, GitHub|Backlog do Sprint|

### 3.2 - Desenvolvimento
|Atividade|Método|Ferramenta|Entrega|
|:-----:|:------:|:------:|:------:|
|Implementação de banco de dados|Codificação|PostgreSQL|Banco de Dados|
|Deploy|Automatização|Digital Ocean|MVP|
|Codificação backend e frontend|Programação pareada|VSCode, GitHub|Backend, Frontend|

### 3.3 - Revisão
|Atividade|Método|Ferramenta|Entrega|
|:-----:|:------:|:------:|:------:|
|Reunião diária (daily)|Conversa entre os integrantes da equipe|Telegram|Feedback do Sprint|
|Verificação|Revisão da implementação dos requisitos com o cliente ou dono do produto|Google Meet|Backlog do Produto, Histórias de Usuário, Release|

### 3.4 - Retrospectiva
|Atividade|Método|Ferramenta|Entrega|
|:-----:|:------:|:------:|:------:|
|Retrospectiva do Sprint (sprint retrospecive)|Reunião|Discord|Feedback do Sprint|

## 4 - Lições Aprendidas

### 4.1 - Unidade 1
<p align="justify">
Os ensinamentos da primeira unidade fomentaram a escolha da metodologia a ser utilizada no nosso projeto, visto que realizou a capacitação dos integrantes. Além de contribuir com o aprendizado de diferentes processos, nesta unidade também aprendemos a utilizar o Github Pages, visto que foi necessário para realizar a documentação do projeto para a disciplina e nenhum dos integrantes tinha conhecimento nessa tecnologia.
</p>

### 4.2 - Unidade 2
<p align="justify">
Essa unidade contribuiu com o aprendizado a respeito da estruturação do backlog no formato do SAFe, nos fazendo entender melhor como funciona o refinamento gradual do backlog em épicos, features e histórias de usuário. Uma das dificuldades encontradadas pela equipe foi a definição de uma organização ideal para o backlog que melhor atende às necessidades do projeto, visto que pode ser bastante subjetivo. Ademais, essa unidade foi bastante produtiva, pois conseguimos melhorar ainda mais nosso trabalho em equipe.
</p>

### 4.3 - Unidade 3
<p align="justify">
Uma lição aprendida nesta unidade foi a utilização de diferentes frameworks para organização de requisitos, como o PBB, BDD e o User Story Mapping. Por meio do USM, foi possível ver com mais clareza as ideias e necessidades do projeto, pois cada card do backbone (necessidades e passos dentro delas) tinha sua "espinha", que são detalhes de cada item respectivo do backbone. Esses detalhes fornecem de fato uma visão mais abrangente sobre cada necessidade do projeto e ainda "geram" histórias de usuários mais facilmente.
</p>

## 5 - Referências Bibliográficas
- VALENTE, Marco Tulio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade, Editora: Independente, 395 páginas, 2020.
- SOMMERVILLE, Ian. Engenharia de software. 10 ed. Tradução Luiz Cláudio Queiroz; revisão técnica Fábio Levy Siqueira. São Paulo: Pearson Education do Brasil, 2018.

## Histórico de Revisão
|Data|Versão|Descrição|Autor|
|:-----:|:------:|:------:|:------:|
| 31/10/2022 | 1.0 | Criação da Visão do Produto | Todos os membros |
| 10/11/2022 | 1.1 | Criação da Visão Geral do Projeto Todos os membros | Todos os membros |
| 15/11/2022 | 1.2 | Criação do Processo de Desenvolvimento de Software | Lucas Gomes, Valderson Pontes e Pedro Lucas |
| 16/11/2022 | 2.0 | Finalização da versão inicial da Visão do Produto e Projeto | Lucas Gomes, Valderson Pontes, Pedro Henrique e Pedro Lucas |
| 05/12/2022 | 2.1 | Correção da Visão do Produto e Projeto | Pedro Lucas |
| 23/01/2023 | 2.2 | Correção do Visão do Produto e Projeto | Lucas Gomes e Valderson Pontes |
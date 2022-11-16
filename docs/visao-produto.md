# Visão do Produto e Projeto

<p align="justify">
O Receitalista é um projeto desenvolvido por alunos da disciplina de Requisitos de Software da <a href="https://www.unb.br/" target="_blank"> Universidade de Brasília - UnB </a>.
</p>

## 1 - Visão Geral do Produto

### 1.1 - Declaração de Posição do Produto

| Preposição | Descrição |
|--|--|
| Para | Microempreendedores que a partir de materiais, geram um produto |
| Dos quais (Quem) | Desejam calcular a receita e estipular o preço dos seus produtos por meio dos gastos de produção |
| O Receitalista | É uma aplicação web |
| Que | Facilita o controle dos gastos e das margens de lucro |
| Ao contrário | Das planilhas Excel e similares pagas que exigem conhecimento técnico e matemático |
| Nosso produto | Calcula de forma automática a receita e o lucro de cada produto desenvolvido por meio dos preços desses produtos e da margem de lucro que o usuário deseja, mostrando os valores periódicos dos itens registrados pelo usuário |

### 1.2 - Objetivos do Produto

<p align="justify">
    O Receitalista tem por principal objetivo o usuário não precisar ter conhecimento técnico, ser gratuito e fornecer os dados, como o preço de custo, preço final com a margem e os registros dos preços periódicos registrados pelo usuário.
</p>

### 1.3 - Tecnologias a Serem Utilizadas
- React - desenvolvimento do frontend.
- NodeJS - desenvolvimento do backend.
- Postgres - banco de dados.
- Docker - configuração do ambiente de desenvolvimento.
- Kubernetes - orquestrar containers para o deploy.
- AWS - hospedagem da aplicação.

## 2 - Visao Geral do Projeto

### 2.1 - Organização do Projeto

|Papel|Atribuições|Responsável|Participantes|
|:-----:|:------:|:------:|:------:|
|Desenvolvedor Frontend|Codificar o design produto e conectar com o *backend*|Pedro Lucas|Igor Thiago, Pedro Henrique, Pedro Lucas, Matheus Raphael|
|Desenvolvedor Backend|Codificar e implementar funcionalidades e fluxo de controle da aplicação|Lucas Gomes|Lucas Gomes, Valderson Pontes|
|Devops|Configuração do ambiente para deploy e conexão com banco de dados|Lucas Gomes|Lucas Gomes e Valderson Pontes|
|Product Owner|Responsável por comunicar o projeto com os *stakeholders* e também selecionar quais itens do Product Backlog o time de desenvolvimento irá trabalhar primeiro|Pedro Henrique|Pedro Henrique|
|Scrum Master|Instruir o time em princípios e valores do Scrum e XP|Valderson Pontes|Valderson Pontes|

### 2.2 - Planejamento das Fases e/ou Iterações do Projeto
|Sprint|Produto(Entrega)|Data de Início|Data de Fim|
|:-----:|:------:|:------:|:------:|
|Sprint 0|Preparação de slides (Metodologia RAD) e definição da Visão Geral do Produto|03/11/2022|09/11/2022|
|Sprint 1|Refinamento da definição da Visão Geral do Produto, Definição do Projeto|10/11/2022|16/11/2022|
|Sprint 2|Documento de visão - Projeto e Produto, GitPages|17/11/2022|23/11/2022|
|Sprint 3|Elicitação dos requisitos e estudo do SAFe|24/11/2022|30/11/2022|
|Sprint 4|Análise e negociação dos requisitos. Documentação (backlog do produto). Verificação e Validação|01/11/2022|07/12/2022|
|Sprint 5|Refinamento dos requisitos e implementação de código|08/12/2022|14/12/2022|
|Sprint 6|Implementação de código|15/12/2022|21/12/2022|
|Sprint 7|Implementação de código e banco de dados|22/12/2022|28/12/2022|
|Sprint 8|Implementação de código, deploy e entrega da MVP1|29/12/2022|05/02/2022|
|Sprint 9|Implementação de código, deploy e entrega da MVP2|06/12/2022|09/02/2022|

### 2.3 - Matriz de Comunicação
|Descrição|Área/envolvidos|Periodicidade|Produtos Gerados|
|:-----:|:------:|:------:|:------:|
|Daily|Equipe do Projeto|Diariamente|Feedback diário do andamento individual no projeto|
|Planejamento da Sprint|Equipe do Projeto|Semanalmente|Backlog do Sprint, Quadro Scrum|
|Revisão da Sprint|Equipe do projeto|Semanalmente|Feedback da sprint|
|Retrospectiva da Sprint|Equipe do projeto|Semanalmente|Plano de melhoria para as próximas sprints|

### 2.4 - Gerenciamento de Riscos
|Descrição|Causa|Medida Mitigadora|
|:-----:|:------:|:------:|
|Diminuição da equipe|Trancamento de disciplina, afastamento por motivos de saúde e entre outros|No pior dos cenários, caso seja dada impossibilidade de implementação do(s) requisito(s), será marcada uma reunião com o cliente para a exploração de vias alternativas|
|Diminuição do comprometimento|Compromissos externos conflituantes com os do projeto, por exemplo: trabalho e outras matérias|Fica cabível ao integrante da equipe deixar ciente os outros membros da situação.  Em casos extremos, que afetam o desempenho do projeto, será marcada uma reunião com o cliente e/ou com o professor da disciplina para buscar vias alternativas|

### 2.5 - Critérios de Replanejamento
|Descrição|Causa|Replanejamento|
|:-----:|:------:|:------:|
|Impossibilidade de entrega|Mau gerenciamento dos riscos|Redefinição e priorização do backlog|
|Mudança de requisitos|Mudança de ideia do cliente em relação a alguma funcionalidade|Redefinição do backlog|

## 3 - Processo de Desenvolvimento de Software
<p align="justify">
O processo de desenvolvimento de software será ágil e adaptado para utilizar o Scrum com o XP, que possui um ciclo de vida incremental e iterativo. Assim, serão utilizados os artefatos Scrum: Backlog do Produto e Backlog da Sprint e o Quadro Scrum, para o gerenciamento interno de tarefas e execuções do time e alinhar a equipe em relação ao progresso, tarefas executadas e as futuras atividades. A ferramenta vai fazer o acompanhamento do Backlog do Produto, das histórias de usuário e tarefas. Também serão usados os eventos Scrum: Sprint, Planejamento (Planning), Revisão (Review), Retrospectiva (Retrospective).
</p>
<p align="justify">
Com relação ao XP, utilizaremos como Práticas sobre o Processo de Desenvolvimento Programação em Pares (Pair Programming), Planning Poker e Clean Code.
</p>

### 3.1 - Requisitos
|Atividade|Método|Ferramenta|Entrega|
|:-----:|:------:|:------:|:------:|
|Elicitação|Entrevista com *stakeholders*|Google Meet|Levantamento dos Requisitos|
|Verificação|Inspeção|-|-|
|Validação|Revisão do documento de requisitos com o cliente (ou representante)|Google Meet|-|

### 3.2 - Projeto
|Atividade|Método|Ferramenta|Entrega|
|:-----:|:------:|:------:|:------:|
|Sprint Planning (planejamento de Sprint)|Reunião|Discord| Definição do que pode ser entregue na sprint e como será feito |
|Sprint Review (revisão de Sprint)|Reunião|Discord|Revisão de todo o trabalho feito durante a sprint e determinar se mudanças adicionais são necessárias|
|Daily (reunião diária)|Conversa entre os integrantes da equipe|Telegram|Feedback do andamento das tasks|
|Sprint Retrospecive (retrospectiva da sprint)|Reunião|Discord|Averiguar o que deu bom e o que pode ser melhorado em uma sprint|

### 3.3 - Construção
|Atividade|Método|Ferramenta|Entrega|
|:-----:|:------:|:------:|:------:|
|Pair Programming|Reunião|Discord|Desenvolvimento de uma tarefa do Quadro Scrum|

### 3.4 - Teste
|Atividade|Método|Ferramenta|Entrega|
|:-----:|:------:|:------:|:------:|
|Teste de Sistema|Teste unitário|Jest|Identificação de erros|

### 3.5 - Gestão de Projeto
|Atividade|Método|Ferramenta|Entrega|
|:-----:|:------:|:------:|:------:|
|Organização das tarefas (tasks)|Quadro Scrum|Trello|Controle do desenvolvimento das tarefas|

## 4 - Lições Aprendidas

### 4.1 - Unidade 1
<p align="justify">
Os ensinamentos da primeira unidade fomentou a escolha da metodologia a ser utilizada no nosso projeto, visto que realizou a capacitação dos integrantes. Além de contribuir com o aprendizado de diferentes processos, nesta unidade também aprendemos a utilizar o Github Pages, visto que foi necessário para realizar a documentação do projeto para a disciplina e nenhum dos integrantes tinha conhecimento nessa tecnologia.
</p>

## 5 - Referências Bibliográficas
- VALENTE, Marco Tulio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade, Editora: Independente, 395 páginas, 2020.
- SOMMERVILLE, Ian. Engenharia de software. 10 ed. Tradução Luiz Cláudio Queiroz; revisão técnica Fábio Levy Siqueira. São Paulo: Pearson Education do Brasil, 2018.

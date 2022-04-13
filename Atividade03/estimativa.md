## Atividade 03
## Aluno: Alysson Alexandre de Oliveira Araújo
## Matrícula: 474084
## Computação em nuvem
# 

<br>
<br>

**OBS: Eu primeiro coloco o enunciado da questão e logo abaixo coloco a sua resposta.**

<br>

Questão 02 - 0,5 Pontos
Crie uma pasta chamada Atividade03. Esse procedimento valerá para todas as atividades, só mudando o nome da pasta.

Inclua na pasta as questões a seguir e as respectivas respostas em um arquivo PDF ou usando a sintaxe da linguagem MarkDown de maneira organizada.

Como arquiteto de nuvem, você precisa fazer uma estimativa para uma empresa que deseja começar a migração para a nuvem. Atualmente, no datacenter on premises, eles possuem um conjunto de máquinas que totalizam 64 cores e 128 GB de RAM, executando um sistema Linux sem custo de licença, cada uma com disco de 256GB para suportar a instalação do sistema operacional com todas as dependências. Segundo o projetista da aplicação, qualquer quantidade de máquinas virtuais será suficiente, desde que no total somem a mesma ou maior quantidade de cores e memória RAM, mas o mesmo disco de 256 GB por instância. O gerente financeiro afirma que não vê problema em fazer pagamentos adiantados, desde que o custo mensal seria reduzido. Já o gerente de relacionamentos exige que a aplicação seja hospedada no Brasil, pois é uma exigência de alguns clientes.

Além dos servidores de aplicação, os desenvolvedores precisam de um banco de dados Oracle para uma base da dados de 512 GB, porém ainda não possuem a licença. A carga não é tão grande, portanto uma instância de 2 cores e no mínimo 4GB é suficiente, mas eles não desejam se responsabilizar pela configuração do sistema operacional da instância, e nem dos detalhes de configuração e atualizações de segurança do servidor de banco de dados.

Seu papel nesta atividade é fazer uma estimativa para o cenário acima usando a Calculadora de preços da AWS. Você deve pesquisar na documentação da AWS quais os serviços de criação de máquinas virtuais e de fornecimento de bancos de dados Oracle gerenciados e informar os requisitos do cenário. Qualquer campo da estimativa que não mencionado na descrição deve ser configurado para uma opção que reduza o custo mensal da estimativa.

Para compartilhar sua resposta, gere o link da estimativa. Coloque o link da estimativa em um arquivo chamado estimativa.md. Também Explique o processo que suportou sua decisão.

<br>

Respota:

Segue abaixo o link da estimativa feita para atender os requisitos que foram passado pela tal empresa por esse [link](https://calculator.aws/#/estimate?id=380db8d315b4ab6825a19e9a43df79faf063a750). 

Quando estava usando a ferramenta de cálculo dos recusos da AWS, referente a instância de um EC2, acabei observando que se fosse reservado 3 anos para os recursos pedido pela empresa da questão, ocorria um bom desconto no produto final e, adicionalmente, coloquei a alternativa de selecionar a opcão de fazer o pagamento integral adiantado, onde reduz drasticamente o custo mensal do uso dos recursos da AWS. Isso foi possível pois o gerente financeiro da empresa confirmou que não se importava em pagar adiantado, desde que dosse reduzido os custos mensais. Segue imagens comparando cada situação:


Os custos mensais do EC2 caso fosse feito com prazo de reserva para 1 ano e o pagamento não fosse adiantado:
![Imagem1](https://cdn.discordapp.com/attachments/963616042180030556/963617174189117460/Imagem1.png)

![Imagem2](https://cdn.discordapp.com/attachments/963616042180030556/963617521771106334/Imagem2.png)

<br>
<br>

Os custos mensais do EC2 com prazo de reserva para 3 anos e o pagamento sendo integral adiantado:
![Imagem3](https://cdn.discordapp.com/attachments/963616042180030556/963618013582622780/Imagem3.png)

![Imagem4](https://cdn.discordapp.com/attachments/963616042180030556/963618400981094440/Imagem4.png)

Como podemos ver, a diferença dos preços mensais entre eles são bem altas!

<br>

 Agora em relação ao Banco de dados, eu optei em usar o Amazon RDS for Oracle pois é mais simples de implementar e não precisa se preocupar em relação da responsabilidade pela configuração do sistema operacional da instância, e nem dos detalhes de configuração e atualizações de segurança do servidor de banco de dados. Além disso, eu optei em colocar um armazenamento de backup de 512 GB, pois o custo a mais vai valer a pena caso o armazenamento principal acabe com algum erro ou perda total dos dados, trazendo um grande prejuízo financeiro considerável. 
 
 Segue a imagem de como ficou os custos totais:
 
 ![Imagem5](https://cdn.discordapp.com/attachments/963616042180030556/963621036417503242/Imagem5.png)

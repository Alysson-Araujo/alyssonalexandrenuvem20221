# Atividade 04

## Módulo 3 - Visão geral da infraestrutura global da AWS

<br>

## Informações

- Aluno: Alysson Alexandre de Oliveira Araújo
- Matrícula: 474084
- Curso de Ciências da Computação
- Disciplina de Computação em Nuvem

<br>

## Objetivo
Categorias de Serviços

## Valor
3,0 pontos na 1ª nota.

## Data da Entrega Limite
19/04/2022



## Questão 01 - 1,0 Ponto
Resolva o Teste de Conhecimento do **Módulo 3 - Visão geral da infraestrutura global da AWS**. Se você tirar 80 pontos no Teste de Conhecimento, receberá 0,8 * 1 = 0,8 pontos nesta questão.

**Resposta: Teste de Conhecimento feito com sucesso!**

#

## Questão 02 - 1,0 Ponto
Responda aos itens a seguir:

1. Quais os fatores que você deve considerar na seleção de uma região da AWS?

2. Acesse [Infraestrutura da AWS](https://aws.amazon.com/pt/about-aws/global-infrastructure/regions_az/) e liste, de todas as regiões disponíveis da AWS, quais tem um número de zonas de disponibilidade diferente de três. Cite o nome da região e a quantidade de zonas.

<br>

Resposta:

1. Antes de fazer a escolha de uma região, é preciso analisar as seguintes situações:
    
    - **A governança de dados e os requisitos legais**, já que em cada região possui suas respectivas leis nas quais podem solicitar/exigir que certas informações sejam mantidas dentro dos limites geográficos. 
    - **Reduzir a latência**, onde o objetivo é colocar aplicativos/serviços em uma região onde esteja o mais próxima do possível para os usuários e o sistema que será usado para fazer acessos.
    - **Os serviços disponíveis na região**. Há situações onde em uma determinada região, existe um ou mais serviços que não estão disponíveis nessa determinada. Portanto é importante ver se a região a ser escolhida possui todos os serviços necessários para o projejo.
    - **Custo**. Os custos tendem a variar de acordo com a região que o serviço está funcionando. Uma coisa que acontece normalmente é o preço do uso da EC2 com uma instância Linux, que varia de acordo com a região onde ela está sendo executada.

<br>

2. 

Na América do Norte, temos:

- Região Leste dos EUA (Norte da Virgínia)
        
    - Zonas de disponibilidade: 6
    - Lançamentos de 2006
    - Zonas locais: 10
    - Lançamento em 2020
        
        <br>

- Região Oeste dos EUA (Oregon)
    - Zonas de disponibilidade: 4
    - Lançamento em 2011
    - Zonas locais: 7
    - Lançamento em 2019
        
        <br>

Na região Ásia-Pacífico:

- Região Ásia-Pacífico (Tóquio)
    - Zonas de disponibilidade: 4
    - Lançamento em 2011

        
        <br>


- Região Ásia-Pacífico (Seul)
    - Zonas de disponibilidade: 4
    - Lançamento em 2016

<br>
<br>

#

## Questão 03 - 1,0 Ponto
Para cada categoria de serviços da AWS abaixo cite e defina três serviços. A definição pode ser curta, uma frase apenas. Também informe um link para a página de documentação oficial do serviço no site de documentação da AWS.

1. Armazenamento
2. Computação
3. Banco de Dados
4. Rede e Entrega de Conteúdo

<br>

Resposta:

1. Armazenamento

- [Amazon Simple Storage Service (Amazon S3)](https://aws.amazon.com/pt/s3/?c=s&sec=srv)

    É um serviço de armazenamento de objetos que oferece escalabilidade, disponibilidade de dados, segurança e performance líderes do setor. Clientes de todos os portes e setores podem armazenar e proteger qualquer quantidade de dados de praticamente qualquer caso de uso, como data lakes, aplicações nativas da nuvem e aplicações móveis. Com classes de armazenamento econômicas e recursos de gerenciamento fáceis de usar, você pode otimizar custos, organizar dados e configurar controles de acesso ajustados para atender a requisitos específicos de negócios, organizacionais e de conformidade.


- [Amazon FSx](https://aws.amazon.com/pt/fsx/?c=s&sec=srv)
    
    O Amazon FSx torna fácil e econômico iniciar, executar e dimensionar sistemas de arquivos de alto desempenho e ricos em recursos na nuvem. Ele suporta uma ampla variedade de cargas de trabalho com sua confiabilidade, segurança, escalabilidade e amplo conjunto de recursos. O Amazon FSx foi desenvolvido com base nas mais recentes tecnologias de computação, rede e disco da AWS para fornecer alto desempenho e menor TCO. E como um serviço totalmente gerenciado, ele lida com provisionamento de hardware, aplicação de patches e backups, liberando você para se concentrar em seus aplicativos, seus usuários finais e seus negócios.

- [AWS Storage Gateway](https://aws.amazon.com/pt/storagegateway/?c=s&sec=srv)

    O AWS Storage Gateway é um conjunto de serviços de armazenamento na nuvem híbrida que oferece acesso on-premises para armazenamento virtual na nuvem praticamente ilimitado.

<br>

2. Computação

- [Amazon EC2](https://aws.amazon.com/pt/ec2/?c=cp&sec=srv)

    O Amazon Elastic Compute Cloud (Amazon EC2) oferece a plataforma de computação mais ampla e profunda, com mais de 500 instâncias e opções do processador, armazenamento, redes, sistema operacional e modelo de compra mais recentes para ajudar você a atender melhor às necessidades da sua workload.

- [AWS Compute Optimizer](https://aws.amazon.com/pt/compute-optimizer/?c=cp&sec=srv)

    O AWS Compute Optimizer recomenda os recursos ideais da AWS para suas workloads a fim de reduzir custos e melhorar a performance, utilizando machine learning para analisar o histórico de métricas de utilização. O excesso de provisionamento de recursos pode levar a custos desnecessários de infraestrutura, e o subprovisionamento de recursos pode levar a uma performance deficiente das aplicações. O Compute Optimizer ajuda você a escolher configurações ideais para três tipos de recursos da AWS: tipos de instância do Amazon Elastic Compute Cloud (EC2), volumes do Amazon Elastic Block Store (EBS) e funções do AWS Lambda, com base em seus dados de utilização.

- [AWS App Runner](https://aws.amazon.com/pt/apprunner/?c=cp&sec=srv)

    O AWS App Runner é um serviço totalmente gerenciado que facilita a implantação rápida de aplicações Web e APIs em contêiner, em alta escala e sem a necessidade de experiência prévia com a infraestrutura. Comece com seu código-fonte ou uma imagem de contêiner. O App Runner cria e implanta a aplicação Web automaticamente, equilibra a carga do tráfego com criptografia, escala para atender às suas necessidades de tráfego e facilita a comunicação de seus serviços com outros serviços e aplicações da AWS executados em uma Amazon VPC privada.

<br>

3. Banco de Dados

- [Amazon RDS](https://aws.amazon.com/pt/rds/?c=db&sec=srv)

    O Amazon Relational Database Service (RDS) é uma coleção de serviços gerenciados que facilita a configuração, operação e escalabilidade de bancos de dados na nuvem. Escolha entre sete opções de mecanismos bastante utilizados: Amazon Aurora compatível com MySQL, Amazon Aurora compatível com PostgreSQL, MySQL, MariaDB, PostgreSQL, Oracle e SQL Server. Depois, implante on-premises com o Amazon RDS on AWS Outposts.

- [Amazon ElastiCache](https://aws.amazon.com/pt/elasticache/?c=db&sec=srv)

    O Amazon ElastiCache é um serviço de cache na memória totalmente gerenciado que oferece suporte a casos de uso flexíveis e em tempo real. Você pode usar o ElastiCache para armazenamento em cache, o que acelera a performance de aplicações e bancos de dados, ou como um armazenamento de dados principal para casos de uso que não exigem durabilidade, como armazenamentos de sessões, placares de jogos, streaming e análises.
    
- [Amazon DocumentDB (com compatibilidade com o MongoDB)](https://aws.amazon.com/pt/documentdb/?c=db&sec=srv)
    
    O Amazon DocumentDB é um serviço de banco de dados escalável, altamente durável e totalmente gerenciado para operar workloads do MongoDB de missão crítica.

<br>

4. Rede e Entrega de Conteúdo

- [Amazon Virtual Private Cloud (Amazon VPC)](https://aws.amazon.com/pt/vpc/)
    
    O Amazon Virtual Private Cloud (Amazon VPC) oferece controle total sobre seu ambiente de redes virtual, incluindo posicionamento de recursos, conectividade e segurança. Comece a usar configurando sua VPC no console de serviço AWS.

- [Amazon API Gateway](https://aws.amazon.com/pt/api-gateway/)
    
    O Amazon API Gateway é um serviço gerenciado que permite que desenvolvedores criem, publiquem, mantenham, monitorem e protejam APIs em qualquer escala com facilidade. Usando o API Gateway, você pode criar APIs do RESTful e APIs do WebSocket que habilitam aplicativos de comunicação bidirecionais em tempo real. O API Gateway dá suporte a cargas de trabalho conteinerizadas e sem servidor, além de aplicativos da web.

- [AWS Network Firewall](https://aws.amazon.com/pt/network-firewall/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc)
    
    O AWS Network Firewall é um serviço gerenciado que facilita a implantação de proteções básicas de rede para todas as suas Amazon Virtual Private Clouds (VPCs). É possível configurar o serviço em poucos cliques, com dimensionamento automático de acordo com o tráfego da sua rede para que você não precise se preocupar com a implantação e o gerenciamento de nenhuma infraestrutura.


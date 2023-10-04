PROJETO BACK-END
================

<<<<<<< HEAD
## Tecnologias usadas
* _Node.js_
* _Express.js -> API e rotas_
* _Prisma ORM -> Interface com BD_
* _MongoDB -> BD_
## Para iniciar o projeto
`npx @aka-demy/create-express-app`
* _Install_ package...?: y
* _Name_: back-end
* _Language_:JavaScript
* _Template Engine_: None
* _Package manager_: npm
## Mudando para a pasta do projeto
`cd back`
=======
## Para iniciar o projeto (nome: back-end)
`npx @aka-demy/create-express-app`
* _Install package...?_: y
* _Name_: back-end
* _Language_: JavaScript
* _Template engine_: None
* _Package manager_: npm

## Mudando para a pasta do projeto
`cd back-end`
>>>>>>> 933d819fb1dc45619aa66a3695b7a92bf162cf5a

## Atualizando pacotes vulneráveis com atualizações de segurança
`npm audit fix --force`

<<<<<<< HEAD
## Isntalando o Prisma com as dependências de desenvolvimento
`npm install prima --save-dev`

## Iniciando o Prisma com conector para MongoDB
`npx prisma init --datasource-provider mongodb`
=======
## Instalando o Prisma como dependência de desenvolvimento
`npm install prisma --save-dev`

## Inicializando o Prisma com conector para MongoDB
`npx prisma init --datasource-provider mongodb`
* Instale a extensão Prisma no Visual Studio Code

## Adicionando o Prisma Client ao projeto
`npm install @prisma/client`

## Gerando o cliente do Prisma
`npx prisma generate`
* Precisa ser executado **toda vez** que o arquivo `schema.prisma` for alterado

## Exibindo os dados cadastrados com o Prisma Studio
`npx prisma studio`
* Deve ser executado em um segundo terminal, enquanto o projeto está sendo executado no primeiro
<<<<<<< HEAD
>>>>>>> 933d819fb1dc45619aa66a3695b7a92bf162cf5a
=======

## Criando um novo CRUD a partir de outro já existente

### _Controller_
1. Copie o arquivo do _controller_ (`Ctr+C Ctrl+V`) e renomeie-o de acordo com a nova entidade para a qual será feito o novo CRUD.
2. Substitua (`Ctrl+H`) todas as ocorrências de `prisma.xxxx` por `prisma.yyyy`, onde `xxxx` é o nome da entidade antiga e `yyyy` é o nome do entidade nova.
3. Verifique, no método `retrieveAll()` do _controller_, se há campos sendo usados no _orderBy_ e substitua-os conforme a nova entidade.

### _Route_
1. Copie o arquivo do _route_ (`Ctrl+C Ctrl+V`) e renomeie-o de acordo com a nova entidade para a qual está sendo feito o CRUD.
2. Na linha de `import` do _controller_, substitua o nome da entidade antiga pelo nome da entidade nova.

### Arquivo `app.js`
1. Na parte inferior do arquivo, na seção de rotas, copie e cole as duas linhas correspondentes a uma rota já existente e faça as substituições necessárias.
  * São **quatro substituições** ao todo, duas em cada linha.
>>>>>>> 6d81181b0da9ab33581e41198f1e1b69b2d80d38

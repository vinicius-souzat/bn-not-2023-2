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

# Exibindo os dados cadastrados com o Prisma Studio
`npx prisma studio`
* Deve ser executado em um segundo terminal, enquanto o projeto está sendo executado no primeiro
>>>>>>> 933d819fb1dc45619aa66a3695b7a92bf162cf5a

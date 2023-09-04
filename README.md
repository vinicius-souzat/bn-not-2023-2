PROJETO BACK-END
================

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

## Atualizando pacotes vulneráveis com atualizações de segurança
`npm audit fix --force`

## Isntalando o Prisma com as dependências de desenvolvimento
`npm install prima --save-dev`

## Iniciando o Prisma com conector para MongoDB
`npx prisma init --datasource-provider mongodb`

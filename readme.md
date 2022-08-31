## Projeto CRUD Frases

* Cria frases
* Atualiza frases
* Lê uma frase específica
* Atualiza frases
* Deleta frases

## Orientações para utilizar a API
Para instalar as dependências
`npm install`

## Criar o banco de dados
CREATE TABLE `phrases` (
    `author` varchar(100) NOT NULL,
    `id` int(11) NOT NULL,
    `txt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
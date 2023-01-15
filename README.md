# TesteFront

Esse projeto foi criado como teste para uma vaga de Dev front-end.

# Como executar o projeto

1) Baixe o projeto e instale as dependências:

```sh
npm install
```

2) Execute o projeto - Esse script executará o back junto com o front:

```sh
npm run front-back
```
3) Para executar os testes:

```sh
ng test
```

# CPFs válidos para testar

165.134.750-66
491.223.990-97
825.879.190-70
228.758.880-99
198.420.550-19
864.027.910-16
988.662.560-05
880.337.070-62
413.669.400-83
377.386.680-16

# O que o projeto faz

Ele possui um campo CPF onde se insere um CPF, e se caso ele estiver na base de dados é retornado 3 cards com informações sobre o cliente o qual pertence esse número.
Se não estiver na base de dados, não for um CPF válido ou se não inserir o dado corretamente, é mostrado ao usuário em letras vermelhas o que está errado.

# Tecnologias usadas

- Angular - Para a criação do projeto
- Concurrently - Para executar dois scripts ao mesmo tempo (Back e Front)
- json-server - Para executar um backend local

# Teste unitários

Foram criados testes unitários de cada componente necessário, cobrindo a maior parte possível.

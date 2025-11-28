# npo_automotive

## Предварительные требования

### Установите docker и docker compose

### Заполните файлы окружение по аналогии с example.env для соответствующего окружение (prod.env, dev.env, local.env)

## Запуск 

```bash
./restart-local.sh # local dev mode (port - 7000)
```

<br/>

```bash
./restart-dev.sh # dev mode (port - 7000)
```

<br/>

```bash
./restart.sh # prod mode (port - 80)
```

## Инструменты разработки

### Для облегчения работы с Nest (только в dev режиме) в docker контейнере:

1) Перейдите в терминале в папку   сервера:

```bash
cd server
```

2) Пропишете нужную команду для сервера:

```bash
./cli.sh your_command # например ./cli.sh nest g res user
```

### Также для облегчения работы с Vue (только в dev режиме) в docker контейнере:

1) Перейдите в терминале в папку клиента:

```bash
cd client
```

2) Пропишете нужную команду для клиента:

```bash
./cli.sh your_command # например ./cli.sh npm i axios
```


### Чтобы попасть в админку в бд (только в local режиме):

1) зайдите на http://localhost:{порт, который указан в local.env}/dba/

2) заполните форму для создании соединении с бд в соотвествием с тем что указана в файле окружении (local.env), но где поле Server укажите bd (по названию сервиса в docker-compose.local.yml)


### Чтобы запустить миграцию в локальной режиме:


1) Перейдите в терминале в папку   сервера:

```bash
cd server
```

2) Пропишете команду для сервера:

```bash
./cli.sh npx ts-node node_modules/typeorm/cli.js migration:run -d src/data-source.ts 
```
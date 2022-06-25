FROM node:latest

RUN mkdir -p /app

WORKDIR /app

COPY . /app


# Instalando dependências da aplicação e armazenando em cache.
COPY package.json ./

RUN npm install


# Inicializa a aplicação

CMD ["npm", "start"]
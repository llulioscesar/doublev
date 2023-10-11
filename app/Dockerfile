FROM node:alpine as base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM base as dev

EXPOSE 3000

CMD ["npm", "run", "dev"]
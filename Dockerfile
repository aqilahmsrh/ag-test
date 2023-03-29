FROM node:18-alpine

WORKDIR /express-app

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "index.js"]

EXPOSE 3000
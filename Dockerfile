FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /express-app

COPY ["package.json", "yarn.lock", "./"]

RUN npm install --production

COPY . .

CMD ["node", "index.js"]

EXPOSE 80
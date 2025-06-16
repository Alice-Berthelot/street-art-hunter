FROM node:20

WORKDIR /app/client

COPY client/package*.json ./
RUN npm install

COPY client/ .

RUN npm run build

WORKDIR /app/server

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]
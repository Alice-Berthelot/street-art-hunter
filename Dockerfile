FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

WORKDIR /app/client
RUN npm install
RUN npm run build

RUN cp -r dist/* ../server/public/

WORKDIR /app/server

EXPOSE 8080

CMD ["node", "index.js"]

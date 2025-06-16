FROM node:20

WORKDIR /app

COPY server/package*.json ./server/
RUN cd server && npm install --production

COPY client/package*.json ./client/
RUN cd client && npm install

COPY . .

WORKDIR /app/client
RUN npm run build

RUN cp -r dist/* ../server/public/

WORKDIR /app/server

EXPOSE 8080

CMD ["node", "index.js"]
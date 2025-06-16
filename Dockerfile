FROM node:20

WORKDIR /app

# Install client dependencies
COPY client ./client
RUN cd client && npm install && npm run build

# Install server dependencies
COPY server/package*.json ./server/
RUN cd server && npm install --production

# Copy all code
COPY . .

# Move React build to the server public file
RUN rm -rf server/public && \
    cp -r client/dist server/public

# Run server
WORKDIR /app/server

EXPOSE 8080

CMD ["node", "index.js"]

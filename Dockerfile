FROM node:20

WORKDIR /app

# Install client dependencies
COPY apps/client/package*.json ./apps/client/
RUN cd apps/client && npm install && npm run build

# Install server dependencies
COPY apps/server/package*.json ./apps/server/
RUN cd apps/server && npm install --production

# Copy all code
COPY . .

# Move React build to the server public file
RUN rm -rf apps/server/public && \
    cp -r apps/client/dist apps/server/public

# Run server
WORKDIR /app/apps/server

EXPOSE 8080

CMD ["node", "index.js"]

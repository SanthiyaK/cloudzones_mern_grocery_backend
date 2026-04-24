FROM node:18

WORKDIR /app

# 👇 Copy from ROOT (because build context will be root)
COPY package*.json ./

RUN npm install

# 👇 Copy backend code
COPY backend/ .

EXPOSE 5000

CMD ["node", "server.js"]

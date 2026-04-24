FROM node:18

WORKDIR /app

# 👇 FIX: copy from parent folder
COPY ../package*.json ./

RUN npm install

# 👇 copy backend code only
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]

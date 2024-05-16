FROM node:21-alpine

WORKDIR /app

COPY . .

RUN npm install --force

RUN npm run build

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]

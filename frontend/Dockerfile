FROM node:20

WORKDIR /TaBProject_frontend

COPY package*.json ./

RUN npm install

RUN npm install vite

COPY . .

EXPOSE 5173

CMD  ["npm", "run", "dev"]
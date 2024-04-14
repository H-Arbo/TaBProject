FROM node:20

WORKDIR /TaBProject_backend

COPY package*.json ./

RUN npm install

RUN npm install mongoose

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
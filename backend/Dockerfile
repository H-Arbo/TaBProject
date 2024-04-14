FROM node:20

WORKDIR /project

COPY package*.json ./

RUN npm install

RUN npm install mongoose

COPY . .

EXPOSE 5432

CMD ["npm", "run", "dev"]
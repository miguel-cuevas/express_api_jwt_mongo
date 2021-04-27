FROM node:13.12-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8081
CMD ["npm", "start"]
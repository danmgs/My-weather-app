FROM node:alpine

WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .

# expose port 30001
EXPOSE 30001

CMD ["npm", "run", "start:docker"]

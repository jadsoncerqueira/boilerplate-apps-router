FROM node:23-alpine3.20
WORKDIR /frontend
COPY . /frontend
RUN npm i
ENTRYPOINT [ "npm", "run", "dev" ]
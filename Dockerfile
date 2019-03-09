# development
FROM node:11.9.0
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build
EXPOSE 3000
CMD [ "yarn", "start" ]

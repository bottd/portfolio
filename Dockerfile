# development
FROM node:11.9.0 as dev-env
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# production
FROM nginx:1.12-alpine
COPY --from=dev-env /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

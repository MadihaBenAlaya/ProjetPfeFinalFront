FROM node:16.10-alpine3.11 as build-stage

WORKDIR /app
COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx:1.15
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist/recrutement_front_end /usr/share/nginx/html

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/environments/config.template.json > /usr/share/nginx/html/assets/environments/config.json && nginx -g 'daemon off;'"]

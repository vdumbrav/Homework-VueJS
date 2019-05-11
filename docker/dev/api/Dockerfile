FROM node:10.13.0-alpine

WORKDIR /var/www

RUN yarn global add json-server

EXPOSE 3000

CMD json-server --host 0.0.0.0 --watch db.json
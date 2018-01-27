FROM nginx:latest

RUN ["rm", "/etc/nginx/conf.d/default.conf"]

COPY ./dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

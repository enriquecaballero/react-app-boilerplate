FROM nginx:latest

# 
# Remove existing NGINX configuration
#

RUN ["rm", "/etc/nginx/conf.d/default.conf"]

# 
# Copy NGINX configuration
#

COPY ./dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d

EXPOSE 80

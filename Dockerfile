FROM nginx:stable-alpine
LABEL maintainer="nawo <irwn.nawo.suwandi@gmail.com>"
COPY freelancer/. /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

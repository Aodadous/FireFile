FROM nginx:latest
MAINTAINER aodadou aodadou@gmail.com
EXPOSE 82
LABEL version="1.0.0" description="江民Web服务器" by="aodadou"
WORKDIR .
RUN rm /etc/nginx/conf.d/default.conf
ADD ./conf /etc/nginx/conf.d/
RUN rm /usr/share/nginx/html/index.html
ADD ./dist  /usr/share/nginx/html/
#ENTRYPOINT ["bash","nginx命令所在目录","-s","reload"]





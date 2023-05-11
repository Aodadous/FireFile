FROM openjdk:8
MAINTAINER wjp aodadou@gmail.com
EXPOSE 8080
RUN mkdir /data-fire
RUN mkdir /data-fire/fenghuo
RUN mkdir /data-fire/fenghuo/fileupload
WORKDIR /data-fire
ADD ./renren-fast.jar  /data-fire/fenghuo/
ENTRYPOINT ["java","-jar","/data-fire/fenghuo/renren-fast.jar",">","nohup.out","&"]
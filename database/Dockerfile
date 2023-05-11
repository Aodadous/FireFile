#创建一个基于5.7.30版本的MySql
FROM mysql:5.7.30

MAINTAINER wjp aodadou@gmail.com
EXPOSE 3306
LABEL version="0.1" description="Mysql服务器" by="wjp"

#设置免密登录
ENV MYSQL_ALLOW_EMPTY_PASSWORD yes

#将所需文件放到容器中
RUN mkdir /home/script/
ADD ./mysql /home/script/
#ADD ./mysql/setup.sh /home/script/setup.sh #拷贝安装脚本
#ADD ./mysql/create_db.sql /home/script/create_db.sql #创建数据库
#ADD ./mysql/initial_data.sql /home/script/initial_data.sql #初始数据
#ADD ./mysql/privileges.sql /home/script/privileges.sql #设置密码和权限

#VOLUME /fire/mysql

#设置容器启动时执行的命令
CMD ["sh", "/home/script/setup.sh"]
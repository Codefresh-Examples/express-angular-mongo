FROM davidsblog/node-mongo:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD ./package.json /usr/src/app/package.json
RUN npm install

ADD . /usr/src/app

ADD start.sh /usr/src/app/start.sh
RUN chmod +x /usr/src/app/start.sh
CMD "/usr/src/app/start.sh"

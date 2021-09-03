FROM node:14-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json wait.sh ./
COPY build ./build
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
RUN npm install --production /wait
EXPOSE 8029
CMD /wait && npm run serve
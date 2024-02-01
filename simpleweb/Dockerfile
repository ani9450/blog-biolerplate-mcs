# specify a base image 
FROM node:alpine

#dir
WORKDIR /usr/app

# install dependency
COPY ./package.json ./
RUN npm install 

COPY ./ ./

# default command

CMD ["npm","start"]

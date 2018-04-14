FROM node:carbon-alpine

WORKDIR /home/node/app

CMD ["npm", "test"]

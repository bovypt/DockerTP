FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

ARG NODE_ENV=production
RUN if [ "$NODE_ENV" = "production" ]; then npm install --production; fi

CMD ["npm", "start"]

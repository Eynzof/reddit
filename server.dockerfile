FROM node:16-slim
RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /app

# COPY package.json and yarn-lock.json files
COPY package.json ./
COPY yarn.lock ./

# COPY ENV variable
COPY .env.production .env

# COPY tsconfig.json file
COPY tsconfig.json ./

# COPY
COPY . .

ENV NODE_ENV production

RUN yarn
RUN yarn build

EXPOSE 4000 

CMD yarn start

USER node

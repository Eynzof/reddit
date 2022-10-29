FROM node:16
RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /app

# COPY package.json and package-lock.json files
COPY package*.json ./

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# COPY
COPY . .

RUN npm install
EXPOSE 4000 

CMD npm run start

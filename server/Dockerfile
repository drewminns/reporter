# FROM node:carbon-alpine

# WORKDIR /usr/app

# COPY package*.json ./
# RUN npm install -qy

# COPY . .

# EXPOSE 5000

# CMD ["npm", "start"]

FROM node:10.0.0

RUN mkdir -p /srv/app/reporter-server
WORKDIR /srv/app/reporter-server

COPY package.json /srv/app/reporter-server
COPY package-lock.json /srv/app/reporter-server

RUN npm install

COPY . /srv/app/reporter-server

CMD ["npm", "run", "dev"]

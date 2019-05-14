FROM node:10.0.0

RUN mkdir -p /srv/app/reporter-client
WORKDIR /srv/app/reporter-client

COPY package.json /srv/app/reporter-client
COPY package-lock.json /srv/app/reporter-client

RUN npm install -qy

COPY . /srv/app/reporter-client

CMD ["npm", "run", "dev:docker"]

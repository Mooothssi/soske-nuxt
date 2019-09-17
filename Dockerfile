FROM node:12

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# build necessary, even if no static files are needed,
# since it builds the server as well
#RUN npm run build

EXPOSE 8080

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=8080

ENV API_URL="http://172.17.0.1:3000"

ENV API_URL_BROWSER="http://localhost:3000"

CMD [ "npm", "start" ]

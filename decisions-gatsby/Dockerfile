# Adopted from https://github.com/aripalo/gatsby-docker
FROM node:10.14-alpine

# Create app directory
WORKDIR /app_gatsby

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json yarn.lock ./

RUN yarn
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "npm", "start" ]

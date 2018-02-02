FROM node:8.9.4

LABEL name="ESA-graphql-node" \ 
      maintainer="Han Li<han.li@capitalone.com" \
	    version="1.0" \
    	description="Eevent scheduling app with nodejs, graphql, typeorm"
# Create app directory
WORKDIR /esa-app

COPY package*.json yarn.lock ./
# C1 hijacked the github cert, have to set this to false.
RUN yarn config set "strict-ssl" false && yarn

# Bundle app source
COPY . .
# expose port 4000 so it can be mapped by docker daemon
EXPOSE 4000 9229
# default,  prod
CMD [ "yarn", "start:prod" ]

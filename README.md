## graphql, koa, typeorm
A graphql web server for ESA 
 
Run `yarn start:watch` for local development. And use chrome to debug as nodemon runs node with `--inspect` already. [some debug doc](https://jondowdle.com/2017/10/node-debugger/)


### run in container
To make this env agnostic, it can be run/debug inside container. 
` docker-compose -f docker-compose-dev.yml up -d`
OR if image already built, image can be specified like the `docker-compose-han.yml`.
The port binded is `4000` so the preview url is 
`http://localhost:4000/graphiql`

Sample search param can be 
```
{eventSearch(
  locationIds: "5,12", 
  startDateTime: "2017-10-14 00:00:00", 
  endDateTime: "2017-10-19 00:00:00") 
}
```

### live debug in docker
The default chrome debug port `9229` is exposed. So we can activate the node debug tool from that green little box in the `source` tab of the chrome dev tool and start setting break points and debugging. 
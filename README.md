# dev-proxy-server

Network rate limiting is used to limit the amount of traffic on a network. This method is used by some API's such as [TVMaze](http://www.tvmaze.com/api#rate-limiting), [Punk API](https://punkapi.com/documentation/v2), [TMDb](https://developers.themoviedb.org/3/getting-started/request-rate-limiting), [Transport API](https://transport.opendata.ch/docs.html#rate-limiting) etc. When multiple developers connected to the same network and are sending requests to same API, the rate limit is sharedy each one of them. This is a common case for universities/colleges.

This issue can be solved by using this dev-proxy-server which is an express app that proxies requests to the target API host of your choice.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/paulnta/dev-proxy-server/tree/master&env[PROXY_TARGET]=https://api.themoviedb.org)

## Usage

1. Click on the above heroku deployment button to deploy this app.
2. Set the environment variable `PROXY_TARGET` to the url of the API you need to test.  
For example to proxy the PunkAPI, you would do this `PROXY_TARGET=https://api.punkapi.com`.
3. Once the app has started, you can now send request to your API through your own proxy. Requests sent to the API will be using the heroku server IP address.  
If choosed to proxy the Punk API, you can validate that [https://api.punkapi.com/v2/beers](https://api.punkapi.com/v2/beers) returns the same results as [https://\<app-name>.herokuapp.com/v2/beers](https://<app-name>.herokuapp.com/v2/beers).

It's recommended to use this kind of setup for **development only** and when your are facing the issue described in the introducion. Note that this method tends to reduce the performance of your requests.

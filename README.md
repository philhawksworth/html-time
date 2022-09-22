# HTML-TIME

https://setyourwatchby.netlify.com

A ludicrous experiment triggered by a playful tweet:

> free side project idea: HTML-only static site generated clock that deploys a new version to @netlify every minute
> – [@zachleat](https://twitter.com/zachleat/status/1020034115817680896)


## What does it do?

- Server-side, an Edge Function determines the user's location based on their IP address and modifies the returned HTML to display the correct local time.
- That's all.


## Previously

In its original form, it demonstrated something slightly different:

- It built a page with the local time for a variety of timezones. (correct at build time.)
- When served on [Netlify](https://www.netlify.com/?utm_source=github&utm_medium=setyourwatch-pnh&utm_campaign=devex)'s global CDN, visitors were routed to the correct page for them based on the country they access from.


## That was then, this is now

Prompted by that idea by Zach, I made this site as a demonstration of how frictionless and risk-free regular automated deployments could be. It automatically redeployed every minute of every day. It has been a helpful resource for demonstrations. But as the site shows, time moves on.

<a href="https://www.netlify.com/products/?utm_source=github&utm_medium=setyourwatch-pnh&utm_campaign=devex#netlify-edge-functions">Edge Handlers</a> have brought an easier and less wasteful way to do this. By modifying HTTP responses on the fly to provide dynamic content, we don't need to redeploy every minute to make a server-generated clock! And the likes of <a href="https://www.netlify.com/products/?utm_source=github&utm_medium=setyourwatch-pnh&utm_campaign=devex#more-build-features">Netlify's CI/CD and automated deploys</a> have become far more accepted as the norm, so there is less need to make this point.

  
## Localised and modified on demand
  
Now the time you see on this site has been rendered on demand by an Edge Function. Edge Functions offer a very low latency serverless runtime at a location on the CDN geographically close to the requesting user. Very handy and still without the need to manage and maintain a server. It's just [a function](https://github.com/philhawksworth/html-time/blob/b9722a2e532e07ada5c9e2472f38e518e2385371/netlify/edge-functions/time.ts).

## I miss the old way
  
Me too. It was a bit of fun. But it was wasteful to keep it alive forever for a demo. Still, thanks to how <a href="https://www.netlify.com/products/?utm_source=github&utm_medium=setyourwatch-pnh&utm_campaign=devex#worry-free-deployments">Netlify retains all the previous deploys</a> on unique URLs, you can still find them. <a href="https://6177423cb626b90007b2a5d1--setyourwatchby.netlify.app/">Here's the last pre-rendered view of the site from before it switched over to using an Edge Function</a>. It's still correct once a day!








## What on earth for?

Since we can run this build so regularly and with such confidence on Netlify, we rebuild and deploy automatically every minute.

## Are you an idiot?

Possibly. But it turns out that this is a nice example of how the country-specific CDN routing is on Netlify thanks to its concise, yet powerful [`_redirects`](https://github.com/philhawksworth/html-time/blob/c5cce3ebe4eae5d415744ca226235bd20f7ce2b9/_redirects) API. ([docs](https://www.netlify.com/docs/redirects/?utm_source=github&utm_medium=setyourwatch-pnh&utm_campaign=devex))

Have a poke around!


## Developing locally

First ensure that you have the Netlify CLI installed to provide local development and testing of Edge Functions

```
# Install the Netlify CLI
npm i -g netlify-cli
```

```
# clone this repository
git clone git@github.com:philhawksworth/html-time.git

# move into the project and install the dependencies
cd html-time
npm i

# run a local development server with auto-rebuild and hot reloading
ntl dev
```

## Deployed to Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/08fef174-2c11-4911-a610-19a327172024/deploy-status)](https://app.netlify.com/sites/setyourwatchby/deploys)





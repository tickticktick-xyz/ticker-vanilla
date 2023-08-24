# HypeLab Publisher SDK

The Ticker SDK is a JavaScript SDK for writing applications that interact with the tickticktick.xyz servers. The SDK provides a simple interface for application builders and abstractions for core data structures, ticker rendering, and API request generation.

## Features

-   Exposes the Ticker API through the Ticker Client
-   Works in any Javascript front-end

## React Integration Guide

Start by including the `ticker-vanilla` SDK in the head tag:

```html
<head>
    <script src="https://cdn.jsdelivr.net/gh/tickticktick-xyz/ticker-vanilla@vX.X.X/index.js"></script>
</head>
```

Note that the latest version can be found by looking on our public [Github page](https://github.com/tickticktick-xyz/ticker-vanilla/tags).

### Initializing a client

Next, add a `<script>` tag and initialize a client using your `tickerSlug`. The `tickerSlug` can be obtained from the (dripdripdrip.xyz)[dripdripdrip.xyz] frontend. Call the `start` method to ensure that you use the same configuration for the entire page of ad requests.

```js
<script>
  Ticker.start({
      container: "tickerSlot",
      tickerSlug: "example",
      environment: "production",
      theme: { foregroundColor: "white", backgroundColor: "black" },
  });
</script>
```

### Adding a container

Now that your app is configured, create a `div` element with the id that you set up in the `container` parameter during the initialization step. Once you do this, the ticker should begin pulling data from our servers.

```html
<div id="tickerSlot"></div>
```

## Theming

The theme parameter provided to `Ticker.start` has two properties: `foregroundColor` and `backgroundColor`. Both of these can be set to HEX / rgb colors.

# @bencevans/color-array-average

> Calculate the average color given an array of CSS Hex Colors

## Install

    $ npm install --save @bencevans/color-array-average

## Usage

```js
const averageColor = require('@bencevans/color-array-average')

averageColor(['#00f', '#0f0', '#f00']) // => '#555555'
averageColor(['#121212', '#121212']) // => '#121212'
```

## API

### averageColor(colors : Array<String>) : String

Returns CSS Hex string.
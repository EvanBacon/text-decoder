# @bacons/text-decoder

In Expo SDK 51 (React Native 74), Hermes supports TextEncoder natively but not TextDecoder. This library provides a TextDecoder implementation for Hermes that only supports UTF-8 (all legacy encodings are removed for bundle size).

You can install it on the global with:

```js
import "@bacons/text-decoder/install";
```

Supports web, ios, android, server, and the upcoming Expo React Server environment for native platforms.

The implementation is a fork of [`text-encoding`](https://github.com/inexorabletash/text-encoding/blob/3f330964c0e97e1ed344c2a3e963f4598610a7ad/lib/encoding.js#L1) with all legacy encodings, and TextEncoder removed.

The tests were ported over too to ensure everything works as described.

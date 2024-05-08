# @bacons/text-decoder

In Expo SDK 51 (React Native 74), Hermes supports TextEncoder natively but not TextDecoder. This library provides a TextDecoder implementation for Hermes that only supports UTF-8 (all legacy encodings are removed for bundle size).

You can install it on the global with:

```js
import "@bacons/text-decoder/install";
```

Supports web, ios, android, server, and the upcoming Expo React Server environment for native platforms.

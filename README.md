# @ably/text-decoder

A lightweight TextDecoder polyfill for React Native Hermes that only supports UTF-8.

The implementation is a fork of [`text-encoding`](https://github.com/EvanBacon/text-encoding/) without dependencies, built as a standalone library with both CommonJS and ES module support.

## Installation

```bash
npm install @ably/text-decoder
```

## Usage

```javascript
// ESM
import { TextDecoder } from '@ably/text-decoder';

// CommonJS
const { TextDecoder } = require('@ably/text-decoder');

// Use the polyfill
const decoder = new TextDecoder('utf-8');
const text = decoder.decode(new Uint8Array([72, 101, 108, 108, 111])); // "Hello"
```

## Features

- ✅ Lightweight UTF-8 TextDecoder implementation
- ✅ Supports both CommonJS and ES modules
- ✅ Zero dependencies
- ✅ TypeScript type definitions included
- ✅ Tested with Vitest

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build the library
npm run build
```

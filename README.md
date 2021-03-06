[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iota-pico/pow-wasm/master/LICENSE) [![Build Status](https://travis-ci.org/iota-pico/pow-wasm.svg?branch=master)](https://travis-ci.org/iota-pico/pow-wasm) 
[![Coveralls](https://img.shields.io/coveralls/iota-pico/pow-wasm.svg)](https://coveralls.io/github/iota-pico/pow-wasm)

# IOTA Pico Framework Proof Of Work for WebAssembly (**Alpha**)

The library contains the Curl proof of work algorithm as a WebAssembly module.

This is currenly only single threaded as emscripten support for threading relies on SharedArrayBuffer which is currently disabled in most browsers due to the Spectre vulnerability. See [https://kripken.github.io/emscripten-site/docs/porting/pthreads.html](https://kripken.github.io/emscripten-site/docs/porting/pthreads.html) for more details.

# Installation

```shell
npm install @iota-pico/pow-wasm --save
```

# Documentation

Documentation for the code can be found in [docs](https://github.com/iota-pico/pow-wasm/blob/master/docs/README.md) folder.

# Library

The IOTA Pico Framework is a multi-layered set of object oriented JavaScript libraries for use with the IOTA tangle.

If you don't want to use the layered versions of the libraries consider using the  ready bundled versions:

* [@iota-pico/lib-browser](https://github.com/iota-pico/lib-browser)
* [@iota-pico/lib-nodejs](https://github.com/iota-pico/lib-nodejs)

Each layer is fully abstracted allowing you to replace components with your own implementations very easily.

The layered libraries are written in TypeScript so are all strongly typed. The modules are generated as ES6 so you may need to transpile them when including them for use in older JavaScript eco-systems. The code will run without transpilation in all modern browsers and when used by NodeJs.

# Tutorials

Some tutorials can be found in the following repo [@iota-pico/tutorials](https://github.com/iota-pico/tutorials)

# Contributing

Contributions are always welcome to the project. Feel free to raise issues, create pull requests or just make suggestions.

# Authors

Come and find us on the IOTA [Discord](https://discord.gg/JJysqe9) development channels

* **Martyn Janes** - *obany* - ([https://github.com/obany](https://github.com/obany))

# License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/iota-pico/pow-wasm/blob/master/LICENSE) file for details.

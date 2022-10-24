# webpack-boilerplate

A boilerplate to build and bundle Javascript code

I have created this for all the next projects I will build soon.

## About boilerplate

With webpack-boilerplate, we can:

- Minimize HTML, CSS, Javascript file
- Using babel to transform syntax (for older browser) and polyfills

## What it can do

- [x] Load SCSS/SASS file and transpile them to CSS
- [x] Optimize CSS file
- [x] Transpile to ES5 and polyfill new features of Javascript
- [x] Separate CSS and JS file into different files on production
- [ ] Use for multiple page application
- [ ] Work with PugJS


## Deployment

Run `./public` in live server

```shell
npm run dev
```

Build files from `./src` and `./public` to `./dist` for production

```shell
npm run build:prod
```

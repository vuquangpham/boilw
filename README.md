# Boilw Template

> Creating Javascript library on the fly 💫

## Getting started

### Options

| Name                 | Default    | Description                     |
| -------------------- | ---------- | ------------------------------- |
| `id`                 | `unique`   | id for clarifying each instance |
| ---                  | --         | --                              |
| `events(self) => {}` | `function` |                                 |

### Methods of Grab

| Name      | Parameter  | Description          |
| --------- | ---------- | -------------------- |
| `create`  | `object`   | create the instance  |
| `get`     | `id`       | get the instance     |
| `destroy` | `instance` | destroy the instance |

### Methods of instance

| Name      | Parameters         |                  |
| --------- | ------------------ | ---------------- |
| `on`      | `(name, callback)` | trigger events   |
| `destroy` | `()`               | destroy instance |

## Deployment

Run `./dev` in live server

```shell
npm run dev
```

Build files from `./src` to `./dist` for production

```shell
npm run prod
```

Build files from `./src` and `./dev` to `./dist` for production

```shell
npm run build
```

### Scenario

- `import` a slow ESM module
- and it takes ~1 second

### Reproduce

```sh
$ npm install
$ npm test
```

### Expected

**Three** tests

```txt
  CJS
    ✔ bar
  fastESM
    ✔ bar
  slowESM
    ✔ bar

SUMMARY:
✔ 3 tests completed
```

### Actual

Missing unit test **slowESM**, but exit with code 0.

```txt
  CJS
    ✔ bar
  fastESM
    ✔ bar

SUMMARY:
✔ 2 tests completed
```

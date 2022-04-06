# Reproducible Example

Reproducible example for discussion [#8187](https://github.com/webdriverio/webdriverio/discussions/8187)

## Requirements 

- Node 16.14.2
- WebdriverIO 7.16.14
- Nuxt 2.15.8

## Testing

Run 

```
npm i
export NUXT_ENV_CI=true
npm run wdio
```

## Observe

The test defined in test/specs/index.spec.ts are always passing, even when it should not.
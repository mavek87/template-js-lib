- ```pnpm init```
- ```pnpm install typescrypt -D```
- ```pnpm tsc --init```, remove comment in 'tsconfig.json' for parameter ```"noEmit": true``` and for ```"noUncheckedIndexedAccess": true```
- add **"lint": "tsc" in package.json scripts
- ```pnpm add -D tsup```
- ```pnpm add -D vitest``` add ```"scripts": {
    "dev": "vitest",
    "test": "vitest run",```
 in package.json
-   add ```"main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",``` in package.json

### Related Youtube videos
https://www.youtube.com/watch?v=eh89VE3Mk5g

https://www.youtube.com/watch?v=aKTSC4D1GL8

### changeset
https://www.youtube.com/watch?v=vO80X5zM8_Y

- add **pnpm-workspace.yaml** (https://pnpm.io/pnpm-workspace_yaml)

- ```pnpm add -Dw @changesets/cli```
- ```pnpm changeset init```



# Setting up
```sh
npm init -y # Setup a new project with NPM using the defaults
npm install --save-dev typescript # install typescript as a dev dependency
npx -c "tsc --init" # Create a basic configuration for our compiler
```

## Create first typescript file
```ts
// index.ts
const x: number = 5;
console.log('#######', x);
```

Compile & Run:
```sh
npx -c "tsc -p ." && node .
```

# Getting serious

- Set `outDir` to `"./dist"`, and `rootDir` to `"./src"` in `tsconfig.json`
- Remove the generated `index.js`
- Move `index.ts` into `src` directory

## Watch mode (TS)

- Add a new script inside your `package.json`, called: `"watch-ts": "tsc -p . -w"`
- Run `npm run watch-ts`
- Run `node dist`
- Change your `index.ts` to print something else
- Re-run `node dist`
- Profit!

## Watch mode

- Run `npm install --save-dev nodemon concurrently`
- Add new scripts:
  ```json
  {
    ...
    "run-js": "nodemon dist/index.js",
    "start": "concurrently 'npm:watch-ts' 'npm:run-js'"
  }
  ```
- Run `npm start`, and change files for fun and profit :)
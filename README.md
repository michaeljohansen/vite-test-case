# Vite Test Case

**Update:** It seems that removing the field `"type": "module"` in `package.json` removes the error, but that makes no sense to me yet.

## How to reproduce

Run the following to produce an error:

```bash
# Node v18.3.0
# Yarn v3.1.0
yarn install
yarn run build
```

Error message:

```bash
$ yarn run build
(node:58993) ExperimentalWarning: Custom ESM Loaders is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
failed to load config from /Users/user/tmp-repo/vite.config.js
error when starting dev server:
Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'vite' imported from /Users/user/tmp-repo/vite.config.js
Did you mean to import vite-case/.yarn/__virtual__/vite-virtual-5e14461b52/0/cache/vite-npm-2.9.13-cda1bb45b9-a5e501b920.zip/node_modules/vite/dist/node/index.js?
    at new NodeError (node:internal/errors:377:5)
    at packageResolve (node:internal/modules/esm/resolve:910:9)
    at moduleResolve (node:internal/modules/esm/resolve:959:20)
    at defaultResolve (node:internal/modules/esm/resolve:1174:11)
    at ESMLoader.resolve (node:internal/modules/esm/loader:605:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:318:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:80:40)
    at link (node:internal/modules/esm/module_job:78:36)
```

# TypeScript Monorepo

## yarn

Go [here]() for more information on yarn.
After clonning repo

```bash
yarn install
```

List monorepo workspaces

```bash
yarn workspaces list
```

Adding workspace dependency

```bash
yarn workspace <package name> add <dependency package name>
```

Adding workspace dev dependency

```bash
yarn workspace <package name> add -D <dependency package name>
```

Build packages

```bash
yarn build
```

## apps

### express

Go [here](https://expressjs.com/) for documentation.

To debug

```bash
yarn workspace @iamsupercb/express run dev
```

### hapijs

Go [here](https://hapi.dev/) for documentation.

To debug

```bash
yarn workspace @iamsupercb/hapijs run dev
```

## Local Packages

### common

Go [here](./packages/common/README.md) for more notes.

### express

Go [here](./packages/express/README.md) for more notes.

### jupyter

Go [here](./packages/jupyter/README.md) for more notes.

### jwt

Go [here](./packages/jwt/README.md) for more notes.

### msal

Go [here](./packages/msal/README.md) for more notes.

### prisma

Go [here](./packages/prisma/README.md) for more notes.

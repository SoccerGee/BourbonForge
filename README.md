This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Start the webserver:
```bash
npm run dev
```
2. Open the proxy connection to PlanetScale
```bash
> brew install planetscale/tap/pscale
> pscale auth login
```
once authenticated:
```bash
pscale connect bourbonforge_dev dev --port 3309
```
3. If you've run the init method before, skip and run this command to propagate the schema:
```bash
npx prisma generate
```
4. [ONLY RUN ONCE] Seed the db with thise command:
```bash
npx prisma db seed
```
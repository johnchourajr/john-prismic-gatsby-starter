> [!WARNING]
> ## This starter is no longer maintained
>
> It was last updated in May 2022 and targets Gatsby 4 with Prismic. Building on
> it today means inheriting four years of unpatched dependencies.
>
> **Use [`buen-next-starter`](https://github.com/johnchourajr/buen-next-starter)
> instead**, live at **[next-starter.muybuen.dev](https://next-starter.muybuen.dev/)**.
> It is the current Next.js starter and is actively maintained.
>
> `jpgs.john.design` now redirects there. This repository is archived and kept
> read-only for reference.

---

<h1 align="center">
JPGS
</h1>

## Quick start

1. Fork this repository
2. Create Prismic repo, get API key
3. Add `PRISMIC_API_KEY` and `PRISMIC_REPO` to a `.env` file
4. Add `.json` content from files in `src/schemas` directory as their own Prismic Custom Types section
5. Publish both a `homepage` and at least one `page` documents in Prismic
6. Customize the `gatsby-config.js` file with your project details

```
cd john-prismic-gatsby-starter
yarn start
```

## Dive in

Customize everything in the `src/style/base-styles.js` and `src/style/theme.js` files.

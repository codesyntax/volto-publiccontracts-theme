# volto-publiccontracts-theme

[![Releases](https://img.shields.io/github/v/release/eea/volto-publiccontracts-theme)](https://github.com/eea/volto-publiccontracts-theme/releases)

[Volto](https://github.com/plone/volto) add-on to show public contracts in a Volto site.

This addon requires to install [cs.volto.publiccontracts](https://github.com/codesyntax/cs.volto.publiccontracts) in the Plone backend.

## Getting started

### Try volto-publiccontracts-theme with Docker

1. Get the latest Docker images

   ```
   docker pull plone
   docker pull plone/volto
   ```

1. Start Plone backend

   ```
   docker run -d --name plone -p 8080:8080 -e SITE=Plone -e PROFILES="profile-plone.restapi:blocks" plone
   ```

1. Start Volto frontend

   ```
   docker run -it --rm -p 3000:3000 --link plone -e ADDONS="@eeacms/volto-publiccontracts-theme" plone/volto
   ```

1. Go to http://localhost:3000

### Add volto-publiccontracts-theme to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

1. Start Volto frontend

- If you already have a volto project, just update `package.json`:

  ```JSON
  "addons": [
      "@eeacms/volto-publiccontracts-theme"
  ],

  "dependencies": {
      "@eeacms/volto-publiccontracts-theme": "^1.0.0"
  }
  ```

- If not, create one:

  ```
  npm install -g yo @plone/generator-volto
  yo @plone/volto my-volto-project --addon @eeacms/volto-publiccontracts-theme
  cd my-volto-project
  ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-publiccontracts-theme/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-publiccontracts-theme/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-publiccontracts-theme/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)

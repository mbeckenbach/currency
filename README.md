# Currency Converter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli). It is recommended to install
packages and run using the node version listed in *.nvmrc*.

To install dependencies just run:

```bash
nvm use # Optional
npm install # Or "npm ci" to make sure that you install the same patch versions as i did
```

## Convert API Key

This app uses the api from [currencyconvertapi.com](https://free.currencyconverterapi.com/)
You need to add an API key to the file `src/environments/environment.base.ts`

You can get a free api key for development here: https://free.currencyconverterapi.com/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/en-US/`. The app will automatically reload if you
change any of the source files.

The app will start with locale en-US by default. You can run the german translation with live reload
by: `ng serve -c de-DE`

**Note:** For simplicity reasons in this quite simple example there are no unit or e2e tests.

## New translations

When adding new translations to the english version make sure that you run `ng extract-i18n` before build. For editing
translations you can simply open `src/locale/translate.babel` with [Babel Edit](https://www.codeandweb.com/babeledit).
Alternatively you can use [Matecat](https://www.matecat.com/) or any other CAT Software directly with the XLF files.

**Note for translators:** For simplicity reasons this app does not provide meaning descriptions within the XLF files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/currency-converter` directory.

For each supported locale (en-US, de-DE) you will find one compiled version.

## Build for docker

You can build this app as a docker image running NGINX with a preconfigured i18n spa routing. The docker image tag is
configured in `package.json`.

**Note:** For simplicity reasons this NGINX config does not use SSL.

```bash
npm run docker:build

# Or directly run at http://localhost it using
npm run docker:run
```

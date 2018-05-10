# MirrorCode team Angular 2+ Boilerplate

## Usage

**Warning: we strongly recommend node >=v6.9.0 and npm >=3.0.0**

`npm i` - Installs everything needed

`npm start` - Starts the app. Then, go to `localhost:4200`

`npm run test` - Runs unit tests with karma and jasmine

`npm run e2e` - Runs end to end tests

`npm run e2e:home` - Runs end to end tests only for the home directory. There are more commands like this one, for development purposes

`npm run build` - Builds the app for production

`npm run lint` - Runs the linter (tslint)

`npm run ci` - Executes linter and tests

`npm run deploy` - Builds the app and deploy it to Github pages (angular-cli-ghpages) (fork to do this and remove CNAME file)

`npm run sme` - Builds and runs source map explorer, really cool :)

`npm run release` - Creates a new release using standard-version

`npm run docker` - Builds the docker image and run the container

**Windows: use precompilation to speed up**

`tsc --project tsconfig.json`
`npm start`




# Caldera Digital Platform 🏕

All open source libraries and projects from the Caldera team. All documentation is accessible on the documentation website or through React Cosmos.

## Getting Started

```sh
git clone https://github.com/caldera-digital/platform.git

cd platform

yarn bootstrap

yarn <PROJECT-YOU-WANT-TO-RUN>:dev
```

## Recommended Environment

1. VSCode
2. Install [VSCode Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
3. [ZSH](https://ohmyz.sh/)
4. Install [NVM](https://github.com/nvm-sh/nvm)
5. Make sure to install and run the correct version of node when developing on this project

```sh
nvm install lts/dubnium
nvm alias default lts/dubnium

## If you need to switch back to it
nvm use
```

5. Use [HomeBrew](https://brew.sh/)
6. Use [yarn](https://yarnpkg.com/en/)

```sh
brew install yarn
```

Feel free to use any terminal. However, if pair programming with LiveShare you will need to use the integrated VSCode terminal.

## Coding Standards with VSCode

You do not have to use VSCode in order to develop on this project, but it is highly recommended. Before we begin, please install the following plugins:

1. [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
2. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4. [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

There are workspace settings for this repo located in [`.vscode/settings.json`](./.vscode/settings.json) that will format all files you create or edit on save according to the rules defined in `.prettierrc`, `.editorconfig`, and `.eslintrc` files. There is also a running list of spell check exceptions. You can override these settings with your user settings if needed.

If you need to add a global variable, insert it into the `.eslintrc` file. Sometimes you need to break the rules for some of the lines of code. If you need to do that you can right click on the broken rules in the code and disable that rule for that line. It's helpful to disable the rule for the line of code so others can see why it's needed.

### Workspaces

There is a workspace available for this project located in [`.vscode/caldera-platform.code-workspace`](./.vscode/caldera-platform.code-workspace). It is helpful to run this so you can receive topical search results that ignore built files or test coverage directories. It also changes your title bar color so you can easily find this project compared to other coding windows you have open.

## Adding Firebase Secrets

In order to add secrets to a Firebase project you need to be logged in and authorized to do so by the project. All of this is done though the cli with the following command:

```sh
# Cannot use uppercase!
firebase functions:config:set stripe.testsecret="your-test-secret-key"

# Deploy your updates
firebase deploy --only functions
```

You can then get to it in your cloud functions like so:

```js
import { config } from 'firebase-functions'

const secret = config().stripe.testsecret
```

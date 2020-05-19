<h1 align="center">Welcome to welcome-screen 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/welcome-screen" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/welcome-screen.svg">
  </a>
  <a href="https://github.com/shortcircuit21/InvalidBrowser#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/shortcircuit21/InvalidBrowser/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/shortcircuit21/InvalidBrowser/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/shortcircuit21/welcome-screen" />
  </a>
</p>

> Simple page to display to users as they are launching into your website. Loads access controls based on the environmental values in the background.

## Install

```sh
npm install welcome-screen
```

## Usage

```sh
App.Module.ts Imports:
InvalidBrowserModule.forRoot(environment, routeName)

Environment.ts
   applications: [
    {
      "applicationName": "Application Name",
      "isActive": false,
      "route": "main",
      "adGroupName": ["Everyone"],
      "groupdId": "",
      "groupdId2": "",
      "approver": "",
      "subApplication": false
    }
   ]
```

## Author

👤 **Corey Yates**

* Github: [@shortcircuit21](https://github.com/shortcircuit21)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Corey Yates](https://github.com/shortcircuit21).<br />
This project is [MIT](https://github.com/shortcircuit21/InvalidBrowser/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
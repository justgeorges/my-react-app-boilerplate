# george's react app boilerplate

Welcome! this is a very basic boilerplate that I created using the [Complete Intro to React V8 course on FrontEndMasters](https://frontendmasters.com/courses/complete-react-v8/).
You can find step-by-step instructions on the [course website](https://react-v8.holt.courses/), but I've condensed all the setup into this very basic app boilerplate that I use as a template for the base of my React Projects. I am still learning React, of course, so expect to see this boilerpate evolve as I learn more things.

## What this Boilerplate Includes

- a **src** file that contains **index.html**, **styles.css**, and **App.jsx** files.
- a _preconfigured_ **.eslintrc.json** file.
- a _preconfigured_ **vite.config.js** file.
- a _"preconfigured"_ **prettierrc** file (uses defaults)
- a _preconfigured_ **gitignore** file

## Setup

#### NOTE: These files are preconfigured and contain all the code they need to work properly. I've included the changes I've already made in this setup; they are here to show you what I've added myself, in case you want to change them.

### 1. Install NPM

In your terminal, run `npm init -y`.
This creates a `package.json` file.

### 2. Install Prettier

in your terminal, run `npm i -D prettier`
if you are using VSCode, ensure that the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is installed. **Recommended:** Navigate to your settings and ensure prettier only runs if a prettier config file is present.

inside the `package.json` file under `"scripts"`, write the following:

```json
 "format": "prettier --write \"src/**/*.{js, jsx}\""
```

### 3. Install ESLint and the ESLint prettier config

In your terminal, run `npm i -D eslint eslint-config-prettier`

(inside the `.eslintrc.json` file, I've included the below settings -- some we'll get to later)

If you are using VSCode, ensure that the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is installed.

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jxs-a11y/recommended",
    "prettier"
  ],
  "rules": {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  }
}
```

add the following to `package.json`

```json
"lint": "eslint  \"src/**/*.{js, jsx}\" --quiet",
```

### 4. Install Vite

In your terminal, run `npm i -D vite @vitejs/plugin-react`

(In the `vite.config.js` file, I've included the code below)

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
});
```

### 5. Install React

In your terminal, run `npm i -D react@18.2.0 react-dom@18.2.0`

### 6. Configuring ESLint and React

In your terminal, run `npm i -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`

(in the `eslintrc.json` file, I've added the following configuration settings)

```json
//"extends": {
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jxs-a11y/recommended",
// NOTE that these MUST come before "prettier"
//  "prettier"
// }
  "rules": {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0
  },
  "plugins": ["react", "import", "jsx-a11y"],
// at the bottom
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node":
      {
        "extensions": [".js", ".jsx"]
      }
    }
  }
```

### 7 Editing Your package.json file

in `package.json`, ensure the following are in "scripts"

```json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx}\"",
    "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\" --quiet",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Once again, these settings are already written, so the terminal commands are the only thing necessary to actually set everything up.

That is all! Happy Reacting :D

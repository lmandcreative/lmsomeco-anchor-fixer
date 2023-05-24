# Anchor link fixer

Fixes anchor links outside the app when using vue hash router

## Installation

```bash
npm i -s @lmsomeco/anchor-fixer
```

## Example usage

```js
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import anchorFixer from '@lmsomeco/anchor-fixer'

const router = VueRouter.createRouter({
    history: createWebHashHistory()
    routes: [
        {
            path: '/'
            name: 'home',
            component: {
                template: '<h1>Home</h1>'
            }
        }
    ]
});

const app = createApp(/*App*/)

app.use(router)

app.use(anchorFixer, {router})

```

## Options

| Option | Type | Required |
| :--- | :---: | ---:|
|router|VueRouter| yes|

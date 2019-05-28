# i18n test

## what?
`i18n.spec.js` asserts that all translation files under a context have the same keys

## why?
I worked on a project where I had to "build once, deploy everywhere" ; then I needed to embed all translations for all contexts. In one context, all translation files had to contain the same translation keys. Among contexts, keys where different.

This test allows to add a new context with its translations and automatically check that keys are the same.

# where?
`i18n.spec.js` should be placed inside the i18n folder

# how?
`npm test` or `yarn test` which will launch jest

```
> jest

 PASS  i18n/i18n.spec.js
  context1 configuration
    √ fr.json should have the same translations keys as en.json (17ms)
    √ nl.json should have the same translations keys as en.json (5ms)
  context2 configuration
    √ en.json should have the same translations keys as de.json (5ms)
    √ es.json should have the same translations keys as de.json (11ms)
    √ fr.json should have the same translations keys as de.json (11ms)
    √ pt.json should have the same translations keys as de.json (5ms)
  . configuration
    √ fr.json should have the same translations keys as en.json (14ms)

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        3.158s
Ran all test suites.
```

For your own project, just copy the `i18n.spec.js` from here and paste it inside your i18n folder. 

# prerequisites
- Be sure `node.js` is installed, optionally `yarn`
- `npm install` or `yarn install`

## I don't need that "context" level
`i18n.spec.js` also checks translation files inside the root directory. If you don't need the context level, you can just remove the "test context folders" section



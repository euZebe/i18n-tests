# i18n test

## what?
`i18n.spec.js` asserts that all translation files under a context have the same keys

## why?
I worked on a project where I had to "build once, deploy everywhere" ; then I needed to embed all translations for all contexts. In one context, all translation files had to contain the same translation keys. Among contexts, keys where different.

This test allows to add a new context with its translations and automatically check that keys are the same.

# where?
`i18n.spec.js` should be placed inside the i18n folder

## I don't need that "context" level
`i18n.spec.js` also checks translation files inside the root directory. If you don't need the context level, you can just remove the "test context folders" section



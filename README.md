# is-mobile-enhanced

>Don't use this, the need for it is very specific.

This is a wrapper around the [isMobile](https://github.com/kaimallea/isMobile) package by [Kaimallea](https://github.com/kaimallea). It adds a `Class` method which can be used to customize the `navigator` Object, even if we're inside a browser.

# Usage

### In NodeJS:

>If you're using NodeJS, definitely don't use this. Use the [original `isMobile` lib][isMobile](https://github.com/kaimallea/isMobile). And if you need a `Class` method too, get some inspiration from the 7 lines of code [here](./src/index.js).

### In a browser:

```html
<script src="https://cdn.jsdeliver.net/gh/blex41/is-mobile-enhanced/dist/ismobile.min.js"></script>

<script>
window.isMobile; // Current browser's mobile detection properties

// Update the global isMobile object with a custom userAgent
window.isMobile.Class('some useragent string saying it\'s an iPad');

// Or with a fake `navigator` Object
window.isMobile.Class({ userAgent: 'string', platform: 'MacIntel', maxTouchPoints: 2 /*, ... */ });

window.isMobile; // Fake browser's mobile detection properties
</script>
```
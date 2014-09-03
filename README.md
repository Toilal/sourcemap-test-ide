# Sourcemap Test Ide
A dummy web project to test sourcemap debug support in your browser or IDE.

### How to build
1. Install [Grunt](http://gruntjs.com/getting-started)
2. Run `npm install` to install all dependencies
3. Run `grunt` to build sourcemap-test-ide.js and sourcemap-test-ide.min.js with sourcemaps.

Hint: Use `grunt watch` to build sourcemap-test-ide.js on the fly during development.

### How to test
1. Place breakpoints in a function of any `src/**/*.js` source.
2. Open `dist/index.html` or `dist/index.min.html`, in browser or IDE debug mode.
3. Click on `Click Me!` button.
4. Your IDE should debug at the breakpoint you have placed.

Your browser or IDE should at least debug properly using `dist/index.ref.html`. If debug doesn't work at all, even with `dist/index.ref.html`, your issue is not related to sourcemap support.

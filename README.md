# Archival notice

This is no longer maintained! 


# billboard-ng
A (very light) AngularJS wrapper for [billboard.js](https://naver.github.io/billboard.js/)

## Dependencies
[billboard.js](https://github.com/naver/billboard.js) is a charting library built on top of `D3`. Both are required
for this library.

As well, [AngularJS](https://angularjs.org/) >=1.5 is required.


## Installation
```sh
$ npm install --save @fintechstudios/billboard-ng
```


## Setup
For most setups, just `require` the module:
```js
require('@fintechstudios/billboard-ng');
```

Or, if you're using ESM:
```js
import bbNg from '@fintechstudios/billboard-ng'
```

You will also need to include the `billboard.js` CSS files.

Depending on your build stack, you may also need to manually include `billboard.js`, `d3`, and `angular`.


## Usage
Include the `billboard-ng` module in your angular module definition:
```js
angular.module('my-awesome-module', ['billboard-ng']);
```

Then use the `billboard` component in your templates
```html
<billboard options="$ctrl.chartConfig"></billboard>
```

`billboard-ng` accepts all options that the [billboard.js API](https://naver.github.io/billboard.js/release/latest/doc/)
accepts. `bindto` will be automatically passed the `<billboard>` element from your template.

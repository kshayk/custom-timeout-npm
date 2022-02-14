# Custom timeouts

With this package you will be able to call functions that will perform a timeout with a promise, giving you the option 
to easily use ```await``` on those functions.

To install the package, run the following on your machine:

```npm i custom-timeouts```

Then, to use the package, simply import it to your file:

```javascript
const timeouts = require('custom-timeouts');
```

Then, use one of the following available functions: ```milliseconds()```, ```seconds()```, ```minutes()```, ```hours()```.

For example, we can see the usage on the ```seconds()``` function in the following code snippet:

```javascript
const timeouts = require('custom-timeouts');

const myWaitingFunc = async () => {
  await timeouts.seconds(3)
};

myWaitingFunc();
```

You can also destructure the module for the desired function:

```javascript
const {seconds} = require('custom-timeouts');
```

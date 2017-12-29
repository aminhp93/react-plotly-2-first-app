## 2 - Your First App

[https://academy.plot.ly/react/2-first-app/](https://academy.plot.ly/react/2-first-app/)

### Note:

1. - App.js: °  = Option + Shift + 8
2. - App.js: xhr for request API

```
	xhr({
      url: url
    }, function(err, data){
      // save data here
      self.setState({
        data: JSON.parse(data.body)
      })
    })
```

3. - App.js: var self = this; ( inside the function of function )

4. - App.js: encodeURIComponent('My string with spaces'); // -> 'My%20string%20with%20spaces'

5. - App.js: network request data is a string, so we’ll need to parse that with JSON.parse to make it an object.
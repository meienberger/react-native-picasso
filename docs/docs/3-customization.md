---
id: customization
title: Customizing the theme
sidebar_label: Customization
slug: /customization
---

Picasso ships with a default theme. But you most probably won't use the default one and want to use your own colors, sizes and values.

This can be achieved by using the `ThemeProvider` component. What you need to do is to simply import the theme provider and wrap your whole app into it. Then you can pass a custom `theme` variable to override specific parts of the default theme.

For example in your App.js file :

```jsx
import React from 'react'
import { ThemeProvider } from 'react-native-picasso'

const theme = {
  colors: {
    primary: '#00B386',
    secondary: '#dedede',
  },
  textColors: {
    primary: '#333333',
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
}

const App = () => {
  return <ThemeProvider theme={theme}>{/* Rest of your app */}</ThemeProvider>
}

export default App
```

The ThemeProvider will look at your custom theme and apply those values to the default theme. This way, you can only override specific aspects of the theme and keep the default values for the rest.

Be careful to follow the original structure of the theme. Otherwise your styles may break.

# Adding your own classes

You can add your own values to use as classes. For example if you wanted to add a complex style for a card. You just need to add a new property at the root of your custom theme. And then you can simply use the class anywhere in your app on a Picasso component.

```jsx
import React from 'react'
import { ThemeProvider, View, Text } from 'react-native-picasso'

const theme = {
  card: {
    backgroundColor: '#dedede',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    alignItems: 'center',
    justifyContenr: 'center',
    borderRadius: 20,
  },
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <View className="card">
        <Text>Hello from card</Text>
      </View>
    </ThemeProvider>
  )
}

export default App
```

You can also add custom values to existing properties and all the properties which are using this specific set of values will have access to it. For example :

```jsx
import React from 'react'
import { ThemeProvider, View, Text } from 'react-native-picasso'

const theme = {
  colors: {
    mycolor: '#00B386',
  },
  textColors: {
    supercolor: '#452eff',
  },
  radius: {
    insane: 100,
  },
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <View className="bg-mycolor radius-insane">
        <Text className="color-supercolor">Hello from custom color</Text>
      </View>
    </ThemeProvider>
  )
}

export default App
```

# Merging with classic styles

Sometimes, the classes available in the theme are not sufficient for your specific need. In order to give you enough flexibility with the components, you can still use the default `style` property in combination with picasso classes.

```js
<View className="m-xl" style={{ opacity: 0.5 }} />
```

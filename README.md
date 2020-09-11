# react-native-picasso

This is **NOT** yet another components library !

<br />
<br />
<p align="center">
  <img width="300" height="300" src="demo/logo.svg">
</p>
<br />
<br />

[![npm](https://img.shields.io/npm/dm/react-native-picasso.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-picasso)
[![npm](https://img.shields.io/npm/l/react-native-picasso.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-picasso)

![demonstration](demo/demo.gif)

## Motivation

Picasso is a toolkit to help you create layouts for your React Native apps in a clear and declarative way.
No more ugly inline styles or duplicate stylesheets. You can now use classNames as you would do on the web.

Having a strong design system helps you to focus on functionnality instead of design fine tuning and endless replacements.

This will give your app a strong single source of truth. You declare your design system once and then consume it in each of your screens.

This was heavily inspired by Bootstrap

## Installation

```bash
yarn add react-native-picasso
```

or with npm

```bash
npm i --save react-native-picasso
```

## Documentation

Full documentation can be found here : [https://meienberger.github.io/react-native-picasso/](https://meienberger.github.io/react-native-picasso/)

## Usage

Picasso ships with a set of drop in replacements components. You can import the following three components : View, SafeAreaView, Text

```js
import { View, Text, SafeAreaView } from 'react-native-picasso'
```

All those components are sharing the same API as their usual react-native counter party. But they have an aditionnal prop called `className`. The className property consists of a string of pre-defined classes separated by a space.

Classes are constructed the following way : `{property}-{value}`

Using this string, you can describe the apparence of your components.

For example the following `className="ml-md p-lg"` would be translated to `margin-left: medium; padding: large`.

All the values are declared in a defaultTheme variable. Which is :

```js
{
    colors: {
        background: '#eeeeee',
        primary: '#00B386',
        secondary: '#dedede',
    },
    textColors: {
        primary: '#333333',
        secondary: '#666666',
        white: '#ffffff',
    },
    font: {
        family: 'Helvetica',
        sizes: {
            sm: 12,
            md: 16,
            lg: 24,
            xl: 32,
            xxl: 40,
        },
        weights: {
            light: '100',
            normal: 'normal',
            bold: 'bold',
            extrabold: '900'
        },
    },
    elevated: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    radius: {
        sm: 5,
        md: 10,
        lg: 20,
        xl: 40,
        round: 1000,
    },
    spacing: {
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 40,
    },
}
```

If we take the previous example, margin and padding are using the "spacing" values. So the final result of `className="ml-md p-lg"` would be :

```js
{
    marginLeft: 16,
    padding: 24
}
```

Here is a table of all the possible properties and values you can use inside a className.

### Base (Available for all components)

| Property  | Possible values                       | Description           |
| --------- | ------------------------------------- | --------------------- |
| p         | sm, md, lg, xl, xxl                   | **padding**           |
| pl        | sm, md, lg, xl, xxl                   | **paddingLeft**       |
| pr        | sm, md, lg, xl, xxl                   | **paddingRight**      |
| pt        | sm, md, lg, xl, xxl                   | **paddingTop**        |
| pb        | sm, md, lg, xl, xxl                   | **paddingBottom**     |
| px        | sm, md, lg, xl, xxl                   | **paddingHorizontal** |
| py        | sm, md, lg, xl, xxl                   | **paddingVertical**   |
| --------  | -------------------                   | --------------------- |
| m         | sm, md, lg, xl, xxl                   | **margin**            |
| ml        | sm, md, lg, xl, xxl                   | **marginLeft**        |
| mr        | sm, md, lg, xl, xxl                   | **marginRight**       |
| mt        | sm, md, lg, xl, xxl                   | **marginTop**         |
| mb        | sm, md, lg, xl, xxl                   | **marginBottom**      |
| mx        | sm, md, lg, xl, xxl                   | **marginHorizontal**  |
| my        | sm, md, lg, xl, xxl                   | **marginVertical**    |
| --------  | -------------------                   | --------------------- |
| flex      | row, column                           | **flexDirection**     |
| flex      | _any number_                          | **flex: value**       |
| alignself | center, start, end, stretch, baseline | **alignSelf**         |

### View specific

| Property       | Possible values                             | Description                         |
| -------------- | ------------------------------------------- | ----------------------------------- |
| elevated       | _no value_                                  | **Adds a drop shadow to your view** |
| radius         | sm, md, lg, xl                              | **borderRadius**                    |
| radiustl       | sm, md, lg, xl                              | **borderTopLeftRadius**             |
| radiustr       | sm, md, lg, xl                              | **borderTopRightRadius**            |
| radiusbl       | sm, md, lg, xl                              | **borderBottomLeftRadius**          |
| radiusbr       | sm, md, lg, xl                              | **borderBottomRightRadius**         |
| bg             | primary, secondary, background              | **backgroundColor**                 |
| justifycontent | center, start, end, around, between, evenly | **justifyContent**                  |
| alignitems     | center, start, end, stretch, baseline       | **alignItems**                      |
| bordercolor    | primary, secondary, background, border      | **borderColor**                     |
| b              | _any number_                                | **borderWidth**                     |
| br             | _any number_                                | **borderRightWidth**                |
| bl             | _any number_                                | **borderLeftWidth**                 |
| bt             | _any number_                                | **borderTopWidth**                  |
| bb             | _any number_                                | **borderBottomWidth**               |

### Text specific

| Property | Possible values                | Description    |
| -------- | ------------------------------ | -------------- |
| weight   | light, normal, bold, extrabold | **fontWeight** |
| align    | center, left, right, justify   | **textAlign**  |
| color    | primary, secondary, white      | **color**      |
| size     | sm, md, lg, xl, xxl            | **fontSize**   |

Each value of each property is mapped to a specific section of the theme.

## Examples

```js
<View className="p-md radius-md elevated">{/* Content */}<View>
```

Translates into

```js
<View style={{
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5
}}>
    {/* Content */}
<View>
```

## Customizing the theme

Picasso ships with a default theme. But you most probably won't use the default one and want to use your own colors, sizes and values.

This can be achieved by using the `ThemeProvider` component. What you need to do is to simply import the theme provider and wrap your whole app into it. Then you can pass a custom `theme` variable to override specific parts of the default theme.

For example in your App.js file :

```js
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

## Merging with classic styles

Sometimes, the classes available are not sufficient for your specific need. In order to give you enough flexibility with the components, you can still use the default `style` property in combination with picasso classes.

```js
<View className="m-xl" style={{ opacity: 0.5 }} />
```

## Creating your own Picasso component

If you want to add all the Picasso utility classes to any component, you can do so by using the `createPicassoComponent` HOC. Simply wrap your component inside the HOC and start using the className prop.

```js
import React from 'react'
import { Image } from 'react-native'
import { createPicassoComponent } from 'react-native-picasso'

const PicassoImage = createPicassoComponent(Image)

const App = () => {
  return (
    <>
      <PicassoImage className="m-lg radius-md" style={{ height: 100, width: 100 }} source={{require('./path/to/image')}} />
    </>
  )
}

export default App
```

## Adding your own classes

You can add your own values to use as classes. For example if you wanted to add a complex style for a card. You just need to add a new property at the root of your custom theme. And then you can simply use the class anywhere in your app on a Picasso component.

```js
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

```js
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

## Acknowledgements

- [@callstack/react-theme-provider](@callstack/react-theme-provider) : For inspiration on how to create the ThemeProvider
- [Bootstrap](https://getbootstrap.com/) : For the original idea

## TODO

- [ ] TypeScript

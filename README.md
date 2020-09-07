# react-native-picasso 👨🏻‍🎨

This is NOT yet another components library

## Motivation

Picasso is a toolkit to help you create layouts for your React Native apps in a clear and declarative way.
No more ugly inline styles or duplicate stylesheets. You can now use classNames as you would do on the web.

Having a strong design system helps you to focus on functionnality instead of design fine tuning and endless replacements.

This will give your app a strong single source of truth. You declare your design system once and then consume it in each of your screens.

This was heavily inspired by Bootstrap

![demonstration](demo/demo.gif)

## Usage

Picasso ships with a set of drop in replacements components. You can import the following three components : View, SafeAreaView, Text

```js
import { View, Text, SafeAreaView } from 'react-native-picasso'
```

All those components are sharing the same API as their usual react-native counter party. But they have an aditionnal prop called `className`. The className property consists of a string of pre-defined classes separated by a space.

Classes are constructed the following way : {property}-{value}

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
            bold: 'bold',
            normal: 'normal',
            light: '100',
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

### Base

| Property | Possible values     | Description           |
| -------- | ------------------- | --------------------- |
| p        | sm, md, lg, xl, xxl | **padding**           |
| pl       | sm, md, lg, xl, xxl | **paddingLeft**       |
| pr       | sm, md, lg, xl, xxl | **paddingRight**      |
| pt       | sm, md, lg, xl, xxl | **paddingTop**        |
| pb       | sm, md, lg, xl, xxl | **paddingBottom**     |
| px       | sm, md, lg, xl, xxl | **paddingHorizontal** |
| py       | sm, md, lg, xl, xxl | **paddingVertical**   |
| -------- | ------------------- | --------------------- |
| m        | sm, md, lg, xl, xxl | **margin**            |
| ml       | sm, md, lg, xl, xxl | **marginLeft**        |
| mr       | sm, md, lg, xl, xxl | **marginRight**       |
| mt       | sm, md, lg, xl, xxl | **marginTop**         |
| mb       | sm, md, lg, xl, xxl | **marginBottom**      |
| mx       | sm, md, lg, xl, xxl | **marginHorizontal**  |
| my       | sm, md, lg, xl, xxl | **marginVertical**    |
| -------- | ------------------- | --------------------- |
| flex     | row, column         | **flexDirection**     |
| flex     | any number          | **flex: value**       |

### View specific

| Property | Possible values                | Description                         |
| -------- | ------------------------------ | ----------------------------------- |
| elevated | _no value_                     | **Adds a drop shadow to your view** |
| radius   | sm, md, lg, xl                 | **borderRadius**                    |
| bg       | primary, secondary, background | **backgroundColor**                 |

### Text specific

| Property | Possible values           | Description    |
| -------- | ------------------------- | -------------- |
| weight   | bold, normal, light       | **fontWeight** |
| align    | center, left, right       | **textAlign**  |
| color    | primary, secondary, white | **color**      |
| size     | sm, md, lg, xl, xxl       | **fontSize**   |

Each value of each property is mapped to a specific section of the theme.

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

Be careful to follow the original structure of the theme. Otherwise your styles may not work

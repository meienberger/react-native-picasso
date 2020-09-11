---
id: getting-started
title: Getting started
sidebar_label: Getting started
slug: /getting-started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Native Picasso. It should cover enough for you to know how to build your own design system, and give you the background that you need to dive deeper into the more advanced parts of Picasso.

# Installation

Install the required packages in your React Native project:

<Tabs
defaultValue="yarn"
values={[
{label: 'Yarn', value: 'yarn'},
{label: 'npm', value: 'npm'},
]}>
<TabItem value="yarn">

```bash
yarn add react-native-picasso
```

</TabItem>
<TabItem value="npm">

```bash
npm install react-native-picasso
```

</TabItem>
</Tabs>

# Usage

Picasso ships with a set of drop in replacements components. You can import the following three components : View, SafeAreaView, Text

```jsx
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
      extrabold: '800',
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

## Base (Available for all components)

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

## View specific

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

## Text specific

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

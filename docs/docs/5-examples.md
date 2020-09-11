---
id: examples
title: Examples
sidebar_label: Examples
slug: /examples
---

![example](https://github.com/meienberger/react-native-picasso/raw/master/demo/example.png)

Creating the following layout would be as easy as those 40 lines of code :

```jsx
import React from 'react'
import { Image } from 'react-native'
import {
  View,
  Text,
  SafeAreaView,
  createPicassoComponent,
} from 'react-native-picasso'

const PicassoImage = createPicassoComponent(Image)

const App = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row p-md alignitems-center">
        <PicassoImage
          className="radius-round mr-md b-5 bordercolor-secondary"
          style={{ height: 100, width: 100 }}
          source={{ uri: 'https://picsum.photos/200/300' }}
        />
        <View>
          <Text className="align-left size-lg weight-bold">
            Nicolas Meienberger
          </Text>
          <Text className="align-left size-md color-secondary">
            Geneva, Switzerland
          </Text>
        </View>
      </View>
      <View className="flex-1 bg-background alignitems-center justifycontent-center bt-5 bordercolor-primary">
        <Text className="color-primary size-lg weight-extrabold">
          Welcome to Picasso
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default App
```

Be aware that the component you are passing to `createPicassoComponent` should accept a `style` property initially.

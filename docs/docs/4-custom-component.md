---
id: custom-components
title: Custom components
sidebar_label: Custom components
slug: /custom-component
---

If you want to add all the Picasso utility classes to any component, you can do so by using the `createPicassoComponent` HOC. Simply wrap your component inside the HOC and start using the className prop.

```jsx
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

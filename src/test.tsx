import { Text, TouchableOpacity, ViewBase } from 'react-native'
import { createPicassoComponent } from '.'

const MyView: React.FC = (props) => {
  const { children } = props

  return <TouchableOpacity>{children}</TouchableOpacity>
}

const MyViewPicasso = createPicassoComponent(TouchableOpacity)

const App = () => {
  return (
    <MyViewPicasso>
      <Text>Hello</Text>
    </MyViewPicasso>
  )
}

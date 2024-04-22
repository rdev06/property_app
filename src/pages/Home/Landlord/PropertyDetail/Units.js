import {useContext} from 'react'
import { View, Text } from 'react-native'
import { PropertyContext } from '../Landlord.store'

export default function Units() {
    const propertyId = useContext(PropertyContext)
  return (
    <View>
      <Text>Units</Text>
    </View>
  )
}
import {useContext} from 'react'
import { View, Text } from 'react-native'
import { PropertyContext } from '../Landlord.store'

export default function Detail() {
    const propertyId = useContext(PropertyContext)
  return (
    <View>
      <Text>Detail</Text>
    </View>
  )
}
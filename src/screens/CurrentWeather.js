import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    weather,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    sunny,
    perfect
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="yellow" />
        <Text style={weather}>Current Weather</Text>
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          containerStyles={highLowWrapper}
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        containerStyles={bodyWrapper}
        messageOne={'Its Sunny'}
        messageTwo={'Its perfect t-shirt weather'}
        messageOneStyles={sunny}
        messageTwoStyles={perfect}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'lightgray',
    flexDirection: 'column-reverse',
    justifyContent: 'space-around',
    alignContent: 'space-between',
    paddingTop: 75
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  weather: {
    fontSize: 48,
    fontWeight: '600'
  },
  temp: {
    color: '#fff',
    fontSize: 48
  },
  feels: {
    color: 'yellow',
    fontSize: 30
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  highLow: {
    color: 'green',
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  sunny: {
    fontSize: 30,
    color: 'white',
    fontWeight: '600'
  },
  perfect: {
    fontSize: 20,
    color: 'green'
  }
})

export default CurrentWeather

import React from 'react'
import { View, Text } from 'react-native'
import { ColorPicker, toHsv, fromHsv } from 'react-native-color-picker'

export class ExampleControlledVertical extends React.Component {
  constructor(props) {
    super(props)
    this.state = { color: toHsv('green') }
    this.onColorChange = this.onColorChange.bind(this)
  }

  onColorChange(color) {
    this.setState({ color });
    this.props.onColorChange(fromHsv(color));
  }

  render() {
    return (
      <View style={{flex: 1, padding: 1}}>
        <Text style={{color: 'white', fontSize: 20, widht:500, height: 1 }}>-------------------------</Text>
        <ColorPicker
          color={this.state.color}
          onColorChange={this.onColorChange}
          hideSliders
          style={{flex: 6, widht:500, height: 500}}
        />
      </View>
    )
  }

}

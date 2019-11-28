import React from 'react';
import { TouchableHighlight, TextInput, Text, TouchableOpacity, View } from 'react-native';
import Modal from '../Modal';
import styles from './styles';


class AddListModal extends React.Component{
  state = {
    name: '',
    color: '',
  }

  render(){
    const{ name, color } = this.state;
    return(
      <Modal
        isOpen={this.props.isOpen}
        closeModal={this.props.closeModal}>
        <Text style={styles.titleText}>
          Enter the desired title for this board
        </Text>
        <TextInput
          onChangeText={(text) => this.setState({name: text})}
          placeholder="My board name"
          maxLength={29}
          style = {styles.input}
          />
        <TextInput
          onChangeText={(text) => this.setState({color: text})}
          placeholder="#123abc"
          maxLength={7}
          style = {styles.input}
          />
        <TouchableHighlight
          style={ styles.button }
          onPress={ () => {this.props.onSubmit(name, color)} }>
          <Text style={ styles.buttonText }>Submit</Text>
        </TouchableHighlight>
      </Modal>
    )
  }
}

export default AddListModal;

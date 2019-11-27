import React from 'react';
import { TouchableHighlight, TextInput, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Modal from '../Modal';
import styles from './styles';


class AddBoardModal extends React.Component{
  state = {
    name: '',
    url: '',
  }

  render(){
    const{ name, url} = this.state;
    return(
      <Modal
        isOpen={this.props.isOpen}
        closeModal={this.props.closeModal}>
        <TextInput
        onChangeText={(text) => this.setState({name: text})}
        placeholder="My board name"
        />
        <TouchableOpacity onPress={() => this.props.takePhoto()}>
          <Entypo style = {styles.icon} name="camera"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.selectFromCameraRoll()}>
          <Entypo style = {styles.icon} name="image"/>
        </TouchableOpacity>
        <TouchableHighlight
          style={ styles.button }
          onPress={ () => {this.props.onSubmit(name, url)} }>
          <Text style={ styles.buttonText }>Submit</Text>
        </TouchableHighlight>
      </Modal>
    )
  }
}

export default AddBoardModal;

import React from 'react';
import { TouchableHighlight, TextInput, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Modal from '../Modal';
import styles from './styles';


class AddBoardModal extends React.Component{
  state = {
    name: '',
  }

  render(){
    const{ name} = this.state;
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
        <View
          style = {styles.icons}>
          <TouchableOpacity onPress={() => this.props.takePhoto()}>
            <Entypo style = {styles.icon} name="camera"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.selectFromCameraRoll()}>
            <Entypo style = {styles.icon} name="image"/>
          </TouchableOpacity>
        </View>
        <TouchableHighlight
          style={ styles.button }
          onPress={ () => {this.props.onSubmit(name)} }>
          <Text style={ styles.buttonText }>Submit</Text>
        </TouchableHighlight>
      </Modal>
    )
  }
}

export default AddBoardModal;

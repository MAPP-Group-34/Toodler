import React from 'react';
import { TouchableHighlight, TextInput, Text } from 'react-native';
import Modal from '../Modal';
import styles from './styles';


class AddBoardModal extends React.Component {
  state = {
    name: '',
    description: '',
  }

  render() {
    const { name, description } = this.state;
    return (
      <Modal
        isOpen={this.props.isOpen}
        closeModal={this.props.closeModal}
      >
        <TextInput
          onChangeText={(text) => this.setState({name: text})}
          placeholder="My Task name"
        />
        <TextInput
          onChangeText={(text) => this.setState({description: text})}
          placeholder="My Task description"
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => {this.props.onSubmit(name, description); }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </Modal>
    )
  }
}

export default AddBoardModal;

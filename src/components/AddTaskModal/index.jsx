import React from 'react';
import {
  TouchableHighlight, TextInput, Text, CheckBox,
} from 'react-native';
import Modal from '../Modal';
import styles from './styles';


class AddBoardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      isFinished: false,
    };
  }

  render() {
    const { name, description, isFinished } = this.state;
    return (
      <Modal
        isOpen={this.props.isOpen}
        closeModal={this.props.closeModal}
      >
        <TextInput
          onChangeText={(text) => this.setState({ name: text })}
          placeholder="My Task name"
        />
        <TextInput
          onChangeText={(text) => this.setState({ description: text })}
          placeholder="My Task description"
        />
        <CheckBox
          style={styles.checkbox}
          checked={this.state.isFinished}
          onPress={() => this.setState({ checked: !this.state.isFinished })}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => { this.props.onSubmit(name, description, isFinished); }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </Modal>
    );
  }
}

export default AddBoardModal;

import React from 'react';
import {
  TouchableHighlight, TextInput, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { ColorPicker } from 'react-native-color-picker';
import Modal from '../Modal';
import { ExampleControlledVertical } from '../ColorPicker';
import styles from './styles';


class AddListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: '',
    };
    this.onColorChange = this.onColorChange.bind(this);
  }

  onColorChange(color) {
    this.setState({ color });
  }

  render() {
    const { name, color } = this.state;
    const {
      isOpen, closeModal, onSubmit,
    } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <Text style={styles.titleText}>
          Enter the desired title for this board
        </Text>
        <TextInput
          onChangeText={(text) => this.setState({ name: text })}
          placeholder="My board name"
          maxLength={29}
          style={styles.input}
        />
        <ExampleControlledVertical
          style={{ height: 100, widht: 100 }}
          onColorChange={this.onColorChange}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => { onSubmit(name, color); }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </Modal>
    );
  }
}

AddListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddListModal;

// <TextInput
//   onChangeText={(text) => this.setState({ color: text })}
//   placeholder="#123abc"
//   maxLength={7}
//   style={styles.input}
// />

// <ColorPicker
//   defaultColor={'#ffaabb'}
//   color={color}
//   style={{ width: 50, height: 50 }}
//   hideSlider
// />

//<ExampleControlledVertical style={{ height: 50, widht: 50 }} />

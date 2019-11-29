import React from 'react';
import {
  TouchableHighlight, TextInput, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';


class AddListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: '',
    };
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
        <TextInput
          onChangeText={(text) => this.setState({ color: text })}
          placeholder="#123abc"
          maxLength={7}
          style={styles.input}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.setState({
              name: '',
              color: '',
            });
            onSubmit(name, color);
          }}
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

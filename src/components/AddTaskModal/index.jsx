import React from 'react';
import {
  TouchableHighlight, TextInput, Text, CheckBox,
} from 'react-native';
import PropTypes from 'prop-types';
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
    const {
      isOpen, closeModal, onSubmit,
    } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
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
          checked={isFinished}
          onPress={() => this.setState({ isFinished: !isFinished })}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.setState({
              name: '',
              description: '',
              isFinished: false,
            });
            onSubmit(name, description, isFinished);
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </Modal>
    );
  }
}

AddBoardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddBoardModal;

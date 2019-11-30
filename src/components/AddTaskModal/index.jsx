import React from 'react';
import {
  TouchableHighlight, TextInput, Text, CheckBox,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import defaultStyles from '../../styles';


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
        <Text style={defaultStyles.modalTitleText}>
          Enter the desired title for this task
        </Text>
        <TextInput
          onChangeText={(text) => this.setState({ name: text })}
          placeholder="My Task name"
          style={defaultStyles.textInput}
        />
        <Text style={defaultStyles.modalTitleText}>
          Enter the desired description for this task
        </Text>
        <TextInput
          onChangeText={(text) => this.setState({ description: text })}
          placeholder="My Task description"
          style={defaultStyles.textInput}
        />
        <CheckBox
          style={defaultStyles.checkbox}
          checked={isFinished}
          onPress={() => this.setState({ isFinished: !isFinished })}
        />
        <TouchableHighlight
          style={defaultStyles.button}
          onPress={() => {
            this.setState({
              name: '',
              description: '',
              isFinished: false,
            });
            onSubmit(name, description, isFinished);
          }}
        >
          <Text style={defaultStyles.buttonText}>Submit</Text>
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

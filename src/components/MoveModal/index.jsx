import React from 'react';
import {
  TouchableHighlight, TextInput, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import defaultStyles from '../../styles';


class AddBoardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newListId: '',
    };
  }

  render() {
    const { newListId } = this.state;
    const {
      isOpen, closeModal, onSubmit,
    } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <TextInput
          onChangeText={(text) => this.setState({ newListId: text })}
          placeholder="newListId"
          style={defaultStyles.textInput}
        />
        <TouchableHighlight
          style={defaultStyles.button}
          onPress={() => {
            this.setState({
              newListId: '',
            });
            onSubmit(newListId);
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

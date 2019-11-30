import React from 'react';
import {
  TouchableHighlight, TextInput, Text, TouchableOpacity, View,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';
import defaultStyles from '../../styles';


class AddBoardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    const { name } = this.state;
    const {
      isOpen, closeModal, onSubmit, takePhoto, selectFromCameraRoll,
    } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <Text style={defaultStyles.modalTitleText}>
          Enter the desired title for this board
        </Text>
        <TextInput
          onChangeText={(text) => this.setState({ name: text })}
          placeholder="My board name"
          maxLength={29}
          style={defaultStyles.textInput}
        />
        <View
          style={styles.icons}
        >
          <TouchableOpacity onPress={() => takePhoto()}>
            <Entypo style={styles.icon} name="camera" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectFromCameraRoll()}>
            <Entypo style={styles.icon} name="image" />
          </TouchableOpacity>
        </View>
        <TouchableHighlight
          style={defaultStyles.button}
          onPress={() => {
            this.setState({ name: '' });
            onSubmit(name);
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
  takePhoto: PropTypes.func.isRequired,
  selectFromCameraRoll: PropTypes.func.isRequired,
};

export default AddBoardModal;

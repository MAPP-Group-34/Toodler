import React from 'react';
import {
  TouchableHighlight, TextInput, Text, Picker, View,
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
        <View style={{ flexDirection: 'row' }}>
          <Picker
            selectedValue={color}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue) => this.setState({ color: itemValue })}
          >
            <Picker.Item label="White" value="#FFFFFF" />
            <Picker.Item label="Gray" value="#808080" />
            <Picker.Item label="Black" value="#000000" />
            <Picker.Item label="Red" value="#FF0000" />
            <Picker.Item label="Maroon" value="#800000" />
            <Picker.Item label="Yellow" value="#FFFF00" />
            <Picker.Item label="Lime" value="#00FF00" />
            <Picker.Item label="Green" value="#008000" />
            <Picker.Item label="Aqua" value="#00FFFF" />
            <Picker.Item label="Blue" value="#0000FF" />
            <Picker.Item label="Navy" value="#000080" />
            <Picker.Item label="Fuchsia" value="#FF00FF" />
            <Picker.Item label="Purple" value="#800080" />
          </Picker>
          <View style={{ height: 50, width: 50, backgroundColor: color }} />
        </View>
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

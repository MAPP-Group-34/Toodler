import React from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import AddModal from '../../components/AddBoardModal';
import Header from '../../components/Header';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import { addBoard, removeBoard, updateBoard } from '../../actions/boardActions';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddModalOpen: false,
      selectedBoards: [],
      thumbnailPhoto: '',
      isEditModalOpen: false,
    };
  }

  onBoardLongPress(id) {
    const { selectedBoards } = this.state;
    if (selectedBoards.indexOf(id) !== -1) {
      // the board is already within the list
      this.setState({
        selectedBoards: selectedBoards.filter((board) => board !== id),
      });
    } else {
      // the board needs to be added
      this.setState({
        selectedBoards: [...selectedBoards, id],
      });
    }
  }

  async deleteSelectedBoards() {
    const { removeBoardFromState } = this.props;
    const { selectedBoards } = this.state;
    removeBoardFromState(selectedBoards);
    this.setState({
      selectedBoards: [],
    });
  }

  async takePhoto() {
    const photo = await takePhoto();
    if (photo.length > 0) { this.setState({ thumbnailPhoto: photo }); }
  }

  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    if (photo.length > 0) { this.setState({ thumbnailPhoto: photo }); }
  }

  async addBoard(name) {
    const { thumbnailPhoto } = this.state;
    const { addBoardToState } = this.props;
    if (thumbnailPhoto === '') {
      Alert.alert(
        'A photo is is required!',
        'You can add a photo by selecting the camera or albom icon',
      );
    } else {
      addBoardToState(name, thumbnailPhoto);
      this.setState({
        isAddModalOpen: false,
        thumbnailPhoto: '',
      });
    }
  }

  async editSelectedBoards(name) {
    const { thumbnailPhoto, selectedBoards } = this.state;
    const { updateBoardState } = this.props;
    updateBoardState(selectedBoards[0], name, thumbnailPhoto);
    this.setState({
      isEditModalOpen: false,
      thumbnailPhoto: '',
      selectedBoards: [],
    });
  }

  render() {
    const {
      selectedBoards,
      isAddModalOpen,
      isEditModalOpen,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => this.deleteSelectedBoards()}
          onEdit={() => this.setState({ isEditModalOpen: true })}
          hasSelected={selectedBoards.length > 0}
          hasSelectedOne={selectedBoards.length === 1}
        />
        <Header
          title="Boards"
        />
        <BoardList
          onLongPress={(id) => this.onBoardLongPress(id)}
          selectedBoards={selectedBoards}
        />
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          onSubmit={(name) => this.addBoard(name)}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
        <AddModal
          isOpen={isEditModalOpen}
          onSubmit={(name) => this.editSelectedBoards(name)}
          closeModal={() => this.setState({ isEditModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
      </View>
    );
  }
}

Boards.propTypes = {
  addBoardToState: PropTypes.func.isRequired,
  removeBoardFromState: PropTypes.func.isRequired,
  updateBoardState: PropTypes.func.isRequired,
};

export default connect(null, {
  addBoardToState: addBoard,
  removeBoardFromState: removeBoard,
  updateBoardState: updateBoard,
})(Boards);

import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import AddModal from '../../components/AddBoardModal';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import { addBoard, removeBoard } from '../../actions/boardActions';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddModalOpen: false,
      selectedBoards: [],
      thumbnailPhoto: '',
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
    const { removeBoard } = this.props;
    const { selectedBoards } = this.state;
    removeBoard(selectedBoards);
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
    const { addBoard } = this.props;
    this.setState({ isAddModalOpen: false });
    addBoard(name, thumbnailPhoto);
  }

  displayCaption() {
    const { selectedBoards } = this.state;
    if (selectedBoards.length !== 0) { return null; }
    let itemCaption = 'boards';
    if (selectedBoards.length === 1) {
      itemCaption = 'board';
    }
    return (
      <Text style={{
        fontWeight: 'bold',
        fontSize: 32,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 5,
      }}
      >
        { selectedBoards.length }
        { itemCaption }
        {' '}
        selected
      </Text>
    );
  }

  render() {
    const {
      selectedBoards, isAddModalOpen,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => this.deleteSelectedBoards()}
          hasSelected={selectedBoards.length > 0}
        />
        { this.displayCaption() }
        <BoardList
          onLongPress={(id) => this.onBoardLongPress(id)}
          selectedBoards={selectedBoards}
        />
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          onSubmit={(name, url) => this.addBoard(name, url)}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
      </View>
    );
  }
}

Boards.propTypes = {
  addBoard: PropTypes.func.isRequired,
  removeBoard: PropTypes.func.isRequired,
};

export default connect(null, { addBoard, removeBoard })(Boards);

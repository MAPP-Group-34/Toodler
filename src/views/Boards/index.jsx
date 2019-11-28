import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import AddModal from '../../components/AddBoardModal';
import { getAllBoards, remove, addBoard } from '../../services/fileService';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import data from '../../resources/data.json';

class Boards extends React.Component {

  state = {
    boards: [],
    isAddModalOpen: false,
    selectedBoards: [],
    loadingBoards: false,
    id: 4,
    thumbnailPhoto: '',
  }

  async componentDidMount() {
    this.setState({ boards: data.boards});
  }

  onBoardLongPress(id) {
    const { selectedBoards, boards } = this.state;
    if (selectedBoards.indexOf(id) !== -1) {
      //the image is already within the list
      this.setState({
        selectedBoards: selectedBoards.filter(board => board !== id)
      });
    } else {
      // the image needs to be added
      this.setState({
        selectedBoards: [ ...selectedBoards, id ]
      });
    }
  }

  async takePhoto() {
    const photo = await takePhoto();
    if (photo.length > 0) { this.setState({ thumbnailPhoto: photo })}
  }

  async selectFromCameraRoll(){
    const photo = await selectFromCameraRoll();
    if (photo.length > 0) { this.setState({ thumbnailPhoto: photo }) }
  }

  async addBoard(name) {
    const{isAddModalOpen, boards, id, thumbnailPhoto} = this.state;
    const newId = id + 1;
    const newBoard = {"id": newId,
                      "name": name,
                      "thumbnailPhoto": thumbnailPhoto,};
    this.setState({ boards: [ ...boards, newBoard],isAddModalOpen: false, id: newId});
  }

  displayCaption() {
    const { selectedBoards } = this.state;
    if (selectedBoards.length === 0) { return; }

    let itemCaption = 'boards';
    if (selectedBoards.length === 1) {
      itemCaption = 'boards';
    }
    return <Text style={{
      fontWeight: 'bold',
      fontSize: 32,
      marginLeft: 20,
      marginTop: 10,
      marginBottom: 5
    }}>{ selectedBoards.length } { itemCaption } selected</Text>;
  }

  render() {
    const{ selectedBoards, boards, isAddModalOpen, name, url} = this.state;
    return(
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={ () => this.setState({ isAddModalOpen: true }) }
          hasSelectedBoards={selectedBoards.length > 0}/>
        { this.displayCaption() }
        <BoardList
          onLongPress={(id) => this.onBoardLongPress(id)}
          boards={boards}
          selectedBoards={selectedBoards}/>
          <AddModal
              isOpen={ isAddModalOpen }
              closeModal={ () => this.setState({ isAddModalOpen: false }) }
              takePhoto={ () => this.takePhoto() }
              onSubmit={ (name, url) => this.addBoard(name) }
              selectFromCameraRoll={ () => this.selectFromCameraRoll() }
              />
      </View>
    );
  }
}

export default Boards;

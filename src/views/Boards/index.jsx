import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import AddModal from '../../components/AddBoardModal';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import data from '../../resources/data.json';
import { addBoard } from '../../actions/boardActions';
import { connect } from 'react-redux';

class Boards extends React.Component {

  state = {
    boards: [],
    isAddModalOpen: false,
    selectedBoards: [],
    loadingBoards: false,
    id: 3,
    thumbnailPhoto: '',
  }

  async componentDidMount(){
    const { boards } = this.state;
    if( boards.length === 0){
      this.setState({ boards: data.boards});
    }
  }

  onBoardLongPress(id){
    const { selectedBoards, boards } = this.state;
    if (selectedBoards.indexOf(id) !== -1) {
      //the board is already within the list
      this.setState({
        selectedBoards: selectedBoards.filter(board => board !== id)
      });
    } else {
      // the board needs to be added
      this.setState({
        selectedBoards: [ ...selectedBoards, id ]
      });
    }
  }

  async deleteSelectedBoards() {
    const { selectedBoards, boards } = this.state;
    this.setState({ loadingBoards: true })
    this.setState({
        selectedBoards: [],
        // Only retrieve boards which were NOT part of the selected boards list
        boards: boards.filter(board => selectedBoards.indexOf(board.id) === -1),
        loadingBoards: false
    });
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
    const{addBoard} = this.props;
    const newId = id + 1;
    const newBoard = {"id": newId,
                      "name": name,
                      "thumbnailPhoto": thumbnailPhoto,};
    this.setState({ boards: [ ...boards, newBoard],isAddModalOpen: false, id: newId});
    addBoard(newId, name, thumbnailPhoto);
  }

  displayCaption() {
    const { selectedBoards, boards } = this.state;
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
          onRemove={() => this.deleteSelectedBoards()}
          hasSelected={selectedBoards.length > 0}/>
        { this.displayCaption() }
        <BoardList
          onLongPress={(id) => this.onBoardLongPress(id)}
          // boards={boards}
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

export default connect(null, { addBoard })(Boards);

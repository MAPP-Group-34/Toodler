import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import AddModal from '../../components/AddBoardModal';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import data from '../../resources/data.json';
import { addBoard, removeBoard } from '../../actions/boardActions';
import { connect } from 'react-redux';

class Boards extends React.Component {

  state = {
    isAddModalOpen: false,
    selectedBoards: [],
    thumbnailPhoto: '',
  }

  async componentDidMount(){
    const{addBoard} = this.props;
    data.boards.map((board) => {
      addBoard(board.name, board.thumbnailPhoto);
    });
    // const { boards } = this.state;
    // if( boards.length === 0){
    //   this.setState({ boards: data.boards});
    // }
  }

<<<<<<< HEAD
  onBoardLongPress(id){
    const { selectedBoards } = this.state;
=======
  onBoardLongPress(id) {
    const { selectedBoards, boards } = this.state;
>>>>>>> 0cb70eefafba18c036c25d92c4c3d70a9ba3dbd5
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
    const{removeBoard} = this.props;
    const { selectedBoards } = this.state;
    removeBoard(selectedBoards);
    this.setState({
        selectedBoards: [],
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
    const{isAddModalOpen, thumbnailPhoto} = this.state;
    const{addBoard} = this.props;
    this.setState({ isAddModalOpen: false });
    addBoard(name, thumbnailPhoto);
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
    const{ selectedBoards, isAddModalOpen, name, url} = this.state;
    return(
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={ () => this.setState({ isAddModalOpen: true }) }
          onRemove={() => this.deleteSelectedBoards()}
          hasSelected={selectedBoards.length > 0}/>
        { this.displayCaption() }
        <BoardList
          onLongPress={(id) => this.onBoardLongPress(id)}
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

export default connect(null, { addBoard, removeBoard })(Boards);

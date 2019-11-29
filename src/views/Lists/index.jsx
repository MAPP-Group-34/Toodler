import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import ListList from '../../components/ListList';
import AddModal from '../../components/AddListModal';
import { addList, removeList } from '../../actions/listActions';
import { connect } from 'react-redux';
import data from '../../resources/data.json';

class Lists extends React.Component {

  state = {
    lists: [],
    selectedLists: [],
    isAddModalOpen: false,
    color: '',
    boardId: -1,
  }
  async componentDidMount() {
    const { navigation } = this.props;
    const selectedBoardId = navigation.getParam('selectedBoardId', -1);
    const{addList} = this.props;
    data.lists.map((list) => {
      addList(list.name, list.color, list.boardId);
    });
    // const { lists } = this.state;
    // const { navigation } = this.props;
    // const selectedBoardId = navigation.getParam('selectedBoardId', -1);
    // this.setState({
    //   lists: data.lists.filter(list => list.boardId === selectedBoardId),
    //   boardId: selectedBoardId,
    // });
  }

  displayCaption() {
    const { selectedLists } = this.state;
    if (selectedLists.length === 0) { return; }

    let itemCaption = 'lists';
    if (selectedLists.length === 1) {
      itemCaption = 'lists';
    }
    return <Text style={{
      fontWeight: 'bold',
      fontSize: 32,
      marginLeft: 20,
      marginTop: 10,
      marginBottom: 5
    }}>{ selectedLists.length } { itemCaption } selected</Text>;
  }

  onListLongPress(id){
    const { selectedLists, lists } = this.state;
    if (selectedLists.indexOf(id) !== -1) {
      //the board is already within the list
      this.setState({
        selectedLists: selectedLists.filter(lists => lists !== id)
      });
    } else {
      // the board needs to be added
      this.setState({
        selectedLists: [ ...selectedLists, id ]
      });
    }
  }

  async deleteSelectedLists(){

  }

  async addList(name, color) {
    const{isAddModalOpen, boardId} = this.state;
    const{addList} = this.props;
    addList(name, color, boardId);
    this.setState({ isAddModalOpen: false });
  }

  render() {
    const{ selectedLists, lists, isAddModalOpen } = this.state;
    return(
      <View style={{ flex: 1 }}>
      <Toolbar
        onAdd={ () => this.setState({ isAddModalOpen: true }) }
        onRemove={() => this.deleteSelectedLists()}
        hasSelected={selectedLists.length > 0}/>
      { this.displayCaption() }
      <ListList
        onLongPress={(id) => this.onListLongPress(id)}
        selectedLists={selectedLists}/>
      <AddModal
          isOpen={ isAddModalOpen }
          closeModal={ () => this.setState({ isAddModalOpen: false }) }
          pickColor={ () => this.pickColor() }
          onSubmit={ (name, color) => this.addList(name, color) }
          />
      </View>
    );
  }
}

export default connect(null, { addList, removeList })(Lists);

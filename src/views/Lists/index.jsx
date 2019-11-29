import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';
import ListList from '../../components/ListList';
import AddModal from '../../components/AddListModal';
import { addList, removeList } from '../../actions/listActions';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const selectedBoardId = navigation.getParam('selectedBoardId', -1);
    this.state = {
      selectedBoardId,
      selectedLists: [],
      isAddModalOpen: false,
    };
  }

  onListLongPress(id) {
    const { selectedLists } = this.state;
    if (selectedLists.indexOf(id) !== -1) {
      // the board is already within the list
      this.setState({
        selectedLists: selectedLists.filter((lists) => lists !== id),
      });
    } else {
      // the board needs to be added
      this.setState({
        selectedLists: [...selectedLists, id],
      });
    }
  }

  displayCaption() {
    const { selectedLists } = this.state;
    if (selectedLists.length === 0) { return null; }

    let itemCaption = 'lists';
    if (selectedLists.length === 1) {
      itemCaption = 'lists';
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
        { selectedLists.length }
        { itemCaption }
        {' '}
        selected
      </Text>
    );
  }

  async deleteSelectedLists() {
    const { removeList } = this.props;
    const { selectedLists } = this.state;
    removeList(selectedLists);
    this.setState({
      selectedLists: [],
    });
  }

  async addList(name, color) {
    const { selectedBoardId } = this.state;
    const { addList } = this.props;
    addList(name, color, selectedBoardId);
    this.setState({ isAddModalOpen: false });
  }

  render() {
    const { selectedLists, isAddModalOpen, selectedBoardId } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => this.deleteSelectedLists()}
          hasSelected={selectedLists.length > 0}
        />
        { this.displayCaption() }
        <ListList
          onLongPress={(id) => this.onListLongPress(id)}
          selectedLists={selectedLists}
          selectedBoardId={selectedBoardId}
        />
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          pickColor={() => this.pickColor()}
          onSubmit={(name, color) => this.addList(name, color)}
        />
      </View>
    );
  }
}

Lists.propTypes = {
  addList: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, { addList, removeList })(Lists);

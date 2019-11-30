import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';
import ListList from '../../components/ListList';
import AddModal from '../../components/AddListModal';
import Header from '../../components/Header';
import { addList, removeList, updateList } from '../../actions/listActions';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const selectedBoardId = navigation.getParam('selectedBoardId', -1);
    this.state = {
      selectedBoardId,
      selectedLists: [],
      isAddModalOpen: false,
      isEditModalOpen: false,
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

  async deleteSelectedLists() {
    const { removeListFromState } = this.props;
    const { selectedLists } = this.state;
    removeListFromState(selectedLists);
    this.setState({
      selectedLists: [],
    });
  }

  async addList(name, color) {
    const { selectedBoardId } = this.state;
    const { addListToState } = this.props;
    addListToState(name, color, selectedBoardId);
    this.setState({ isAddModalOpen: false });
  }

  async editSelectedLists(name, color) {
    const { selectedBoardId, selectedLists } = this.state;
    const { updateListState } = this.props;
    updateListState(selectedLists[0], name, color, selectedBoardId);
    this.setState({
      isEditModalOpen: false,
      selectedLists: [],
    });
  }

  render() {
    const {
      selectedLists,
      isAddModalOpen,
      selectedBoardId,
      isEditModalOpen,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => this.deleteSelectedLists()}
          onEdit={() => this.setState({ isEditModalOpen: true })}
          hasSelected={selectedLists.length > 0}
          hasSelectedOne={selectedLists.length === 1}
        />
        <Header
          title="Lists"
        />
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
        <AddModal
          isOpen={isEditModalOpen}
          onSubmit={(name, color) => this.editSelectedLists(name, color)}
          closeModal={() => this.setState({ isEditModalOpen: false })}
        />
      </View>
    );
  }
}

Lists.propTypes = {
  addListToState: PropTypes.func.isRequired,
  removeListFromState: PropTypes.func.isRequired,
  updateListState: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, {
  addListToState: addList,
  removeListFromState: removeList,
  updateListState: updateList,
})(Lists);

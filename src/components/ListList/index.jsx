import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../ListItem';
import styles from './styles';

const ListList = ({
  lists, onLongPress, selectedLists, selectedBoardId,
}) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={3}
      data={lists.filter((list) => list.boardId === selectedBoardId)}
      extraData={selectedLists}
      renderItem={({
        item: {
          id, name, color, boardId,
        },
      }) => (
        <ListItem
          id={id}
          name={name}
          color={color}
          boardId={boardId}
          onLongPress={onLongPress}
          isSelected={selectedLists.indexOf(id) !== -1}
        />
      )}
      keyExtractor={() => lists.id}
    />
  </View>
);

const mapStateToProps = (state) => ({
  lists: state.lists,
});

ListList.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    boardId: PropTypes.number.isRequired,
  })).isRequired,
  onLongPress: PropTypes.func.isRequired,
  selectedLists: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectedBoardId: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(ListList);

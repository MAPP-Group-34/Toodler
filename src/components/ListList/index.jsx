import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../ListItem';
import styles from './styles';

const ListList = ({
  lists, onLongPress, selectedLists,
}) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={3}
      data={lists}
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
      keyExtractor={(lists) => lists.id}
    />
  </View>
);

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(ListList);

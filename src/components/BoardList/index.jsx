import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import BoardThumbnail from '../BoardTumbnail';
import { connect } from 'react-redux';
import styles from './styles';

const BoardList = ({ boards, onLongPress, selectedBoards }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={3}
      data={boards}
      extraData={selectedBoards}
<<<<<<< HEAD
      renderItem={({ item: { id, name, thumbnailPhoto } }) => {
        return (
          <BoardThumbnail
=======
      renderItem={({ item: { id, name, thumbnailPhoto }}) =>
        <BoardThumbnail
>>>>>>> a368a56bec1c074a640ca611ec9801a919c8ab56
            id={id}
            name={name}
            thumbnailPhoto={thumbnailPhoto}
            onLongPress={onLongPress}
            isSelected={selectedBoards.indexOf(id) !== -1}
<<<<<<< HEAD
          />
        );
      }}
      keyExtractor={(board) => board.id}
=======
        />
      }
      keyExtractor={(boards) => boards.id}
>>>>>>> a368a56bec1c074a640ca611ec9801a919c8ab56
    />
  </View>
);

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnailPhoto: PropTypes.string.isRequired,
  })).isRequired,
  onLongPress: PropTypes.func.isRequired,
  selectedBoards: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = state => ({
  boards: state.boards
})

export default connect(mapStateToProps)(BoardList);

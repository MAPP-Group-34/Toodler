import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  Image, View, TouchableOpacity, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BoardItem = ({
  id, name, thumbnailPhoto, onLongPress, isSelected, navigation: { navigate },
}) => (
  <TouchableOpacity
    onLongPress={() => onLongPress(id)}
    onPress={() => navigate('Lists', { selectedBoardId: id })}
  >
    <View style={{ opacity: isSelected ? 0.5 : 1 }}>
      <Text style={styles.title}>{name}</Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: thumbnailPhoto }}
      />
    </View>
  </TouchableOpacity>
);

BoardItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string.isRequired,
  onLongPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(BoardItem);

import React from 'react';
import { withNavigation } from 'react-navigation';
import { Image, View, TouchableOpacity, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const BoardThumbnail = ({ id, name, thumbnailPhoto, onLongPress, isSelected, navigation: { navigate } }) => (
  <TouchableOpacity
    onLongPress={() => onLongPress(id)}
    onPress={ () => navigate('Lists', { selectedBoardId: id })}
  >
    {
      isSelected
      ?
      <AntDesign name="checkcircleo" style={ styles.checkmark } />
      :
      <></>
    }
    <View style={ { opacity: isSelected ? .5 : 1 } }>
      <Text style={ styles.title }>{name}</Text>
      <Image
        style={ styles.image }
        resizeMode="cover"
        source={{ uri: thumbnailPhoto }} />
    </View>
  </TouchableOpacity>
);

export default withNavigation(BoardThumbnail);

import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

<<<<<<< HEAD
const Toolbar = ({ onAdd, onRemove, hasSelectedBoards }) => (
    <View styleName="horizontal" style={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
            <Text style={styles.toolbarActionText}>Add Board</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.toolbarAction}
          onPress={onRemove}
          disabled={!hasSelectedBoards}>
            <Text style={[styles.toolbarActionText, hasSelectedBoards ? {} : {
              color: 'rgba(155, 155, 155, 0.5)' }]}>Delete</Text>
        </TouchableHighlight>
    </View>
=======
const Toolbar = ({ onAdd, onRemove }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Add Board</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onRemove}>
      <Text>Delete</Text>
    </TouchableHighlight>
  </View>
>>>>>>> c26f9ddadf4fab56f1afb6f39c859fa61e70252f
);

Toolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
<<<<<<< HEAD
  hasSelectedBoards: PropTypes.bool.isRequired
}
=======
  hasSelectedImages: PropTypes.bool.isRequired,
};
>>>>>>> c26f9ddadf4fab56f1afb6f39c859fa61e70252f

export default Toolbar;

import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({
  onAdd, onRemove, onEdit, hasSelectedElement,
}) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Add Task</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onEdit}
      disabled={!hasSelectedElement}
    >
      <Text style={[styles.toolbarActionText, hasSelectedElement ? {} : { color: 'rgba(155, 155, 155, 0.5)' }]}>Edit</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onRemove}
      disabled={!hasSelectedElement}
    >
      <Text style={[styles.toolbarActionText, hasSelectedElement ? {} : { color: 'rgba(155, 155, 155, 0.5)' }]}>Delete</Text>
    </TouchableHighlight>
  </View>
);

Toolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  hasSelectedElement: PropTypes.bool.isRequired,
};

export default Toolbar;

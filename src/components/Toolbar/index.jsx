import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd, onRemove, hasSelectedImages }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Add image</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onRemove}
      disabled={!hasSelectedImages}
    >
      <Text style={[styles.toolbarActionText, hasSelectedImages ? {} : { color: 'rgba(155, 155, 155, 0.5)' }]}>
        Delete
      </Text>
    </TouchableHighlight>
  </View>
);

Toolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  hasSelectedImages: PropTypes.bool.isRequired,
};

export default Toolbar;

import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles'

const Toolbar = ({ onAdd, onRemove, hasSelected }) => (
    <View styleName="horizontal" style={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
            <Text style={styles.toolbarActionText}>Add</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.toolbarAction}
          onPress={onRemove}
          disabled={!hasSelected}>
            <Text style={[styles.toolbarActionText, hasSelected ? {} : {
              color: 'rgba(155, 155, 155, 0.5)' }]}>Delete</Text>
        </TouchableHighlight>
    </View>
);

Toolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  hasSelected: PropTypes.bool.isRequired
}

export default Toolbar;

import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const MoveTasksButton = ({ onMove, hasSelected }) => (
  <View styleName="horizontal">
    {
      hasSelected
        ? (
          <View style={styles.toolbar}>
            <TouchableHighlight onPress={onMove}>
              <Text style={styles.toolbarActionText}>Move</Text>
            </TouchableHighlight>
          </View>
        )
        : <></>
      }
  </View>
);

MoveTasksButton.propTypes = {
  onMove: PropTypes.func.isRequired,
  hasSelected: PropTypes.bool.isRequired,
};

export default MoveTasksButton;

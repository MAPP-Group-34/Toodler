import React from 'react';
import { Text, View, } from 'react-native';
import styles from './styles';

class TaskDetails extends React.Component {
  state = { }
  async componentDidMount() {
    const { navigation } = this.props;
    const currentImage = navigation.getParam('taskId', '') //await loadImage(navigation.getParam('taskId', ''));
    this.setState({ currentImage, loadingImage: false });
  }

  render() {
    const { currentImage, loadingImage } = this.state;
    return (
      loadingImage
        ? <Text>Please wait</Text>
        : (
          <View style={styles.mainContent}>
            <Text>
              {currentImage}
            </Text>
          </View>
        )
    );
  }
}

export default TaskDetails;

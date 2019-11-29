import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Boards from '../views/Boards';
import Tasks from '../views/Tasks';
import Lists from '../views/Lists';

export default createAppContainer(createStackNavigator({
  Main,
  Boards,
  Lists,
  Tasks,
}));

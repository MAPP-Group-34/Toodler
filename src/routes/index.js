import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Boards from '../views/Boards';
import TaskTest from '../views/TaskTest';

export default createAppContainer(createStackNavigator({
  Main,
  Boards,
  TaskTest,
},
{
  defaultNavigationOptions: {
    header: null,
  },
}));

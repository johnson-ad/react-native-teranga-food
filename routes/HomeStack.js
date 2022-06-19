import React from 'react';
import { createStackNavigation } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import ReviewDetails from './screens/ReviewDetails';


const screens ={
  Home :{
    screen: Home
  },
  ReviewDetails:{
    screen: ReviewDetails
  }
}
const HomeStack = createStackNavigation(screens);
export default createAppContainer(HomeStack);


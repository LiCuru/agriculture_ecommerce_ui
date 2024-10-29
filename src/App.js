import React from 'react';
import WelcomeScreen from './screens/welcomeScreen';
import {
  CommitmentBasketScreen,
  NextBasketScreen,
  PastBasketsScreen,
} from './screens/basketScreens.js';
import {Variables} from './screens/variables';

class App extends React.Component{
  render(){
    return(
      // <NextBasketScreen/>
      // <CommitmentBasketScreen/>
      <Variables/>
      // <WelcomeScreen/>
      // <PastBasketsScreen/>
    );
  };
}

export default App;
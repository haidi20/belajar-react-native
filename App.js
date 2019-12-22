import React, {useState} from 'react';
import {Text} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';

import Home from './screens/home';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  
  if(fontLoaded){
      return(
        <Navigator />
        // <Text>home</Text>
      )
  }else{
    return(
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }
   
}

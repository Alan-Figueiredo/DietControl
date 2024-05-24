import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { useState } from 'react';
import {UpdateContext} from './src/Pages/Context/index'

export default function App() {

  const [updateKey, setUpdateKey] = useState(0);

  return (
    <UpdateContext.Provider value={{updateKey,setUpdateKey}}>
        <NavigationContainer>
          <Routes/>
      </NavigationContainer>
    </UpdateContext.Provider>
 );
}

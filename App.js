import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { useState } from 'react';
import {UpdateContext} from './src/Pages/Context/index'
import { objectUser } from './src/Pages/Context/objectUser';
import { objectFoods } from './src/Pages/Context/objectFoods';

export default function App() {

  const [updateKey, setUpdateKey] = useState(0);
  const [objUser, setObjUser] = useState({});
  const [objFood, setObjFood] = useState({});

  return (
    <UpdateContext.Provider value={{updateKey,setUpdateKey}}>
        <objectUser.Provider value={{objUser,setObjUser}}>
            <objectFoods.Provider value ={{objFood,setObjFood}}>
                <NavigationContainer>
                   <Routes/>
                </NavigationContainer>
            </objectFoods.Provider>
        </objectUser.Provider>
    </UpdateContext.Provider>
 );
}

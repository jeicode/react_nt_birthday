import React from 'react';
import {LogBox} from 'react-native'
import { NativeRouter } from 'react-router-native';

import Main from './Main';
import { AuthUserContextProvider } from 'src/context/AuthUserContext';

LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native"])

export default function App() {
  return (
    <NativeRouter>
      <AuthUserContextProvider children>
        <Main />
      </AuthUserContextProvider>
    </NativeRouter>
  );
}



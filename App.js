import React from 'react';
import { NativeRouter } from 'react-router-native';

import Main from './Main';
import { AuthUserContextProvider } from 'src/context/AuthUserContext';

export default function App() {
  return (
    <NativeRouter>
      <AuthUserContextProvider children>
        <Main />
      </AuthUserContextProvider>
    </NativeRouter>
  );
}



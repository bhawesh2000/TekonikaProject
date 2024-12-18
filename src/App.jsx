import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import {store , persistor} from './store/index.jsx';


function App() {

  return (
    <>
     <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  


    </>
  )
}

export default App

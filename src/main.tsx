import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { ContextProvider } from './context/context.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.ts'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider  store={store}>
    <ContextProvider>
      <RouterProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </RouterProvider>
  </ContextProvider>
</Provider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './utils/styles/GlobalStyles.tsx'
import { ThemeProvider } from 'styled-components'
import theme from './utils/styles/theme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

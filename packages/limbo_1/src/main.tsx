import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import {
  RecoilRoot,
} from 'recoil'

import ErrorBoundary from './components/ErrorBoundary'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </ErrorBoundary>
    </Router>
  </React.StrictMode>,
)

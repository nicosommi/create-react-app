import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

// tslint:disable no-any
const render = (Application: any) => ReactDOM.render(
  <AppContainer>
    <Application />
  </AppContainer>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
// Webpack Hot Module Replacement API
if ((module as any).hot) {
  (module as any).hot.accept('./App', () => {
    render(require('./App').default)
  })
}
render(App)

import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FluentProvider, webDarkTheme } from '@fluentui/react-components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FluentProvider theme={webDarkTheme}>
    <App />
  </FluentProvider>,
)

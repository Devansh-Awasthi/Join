import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CreateProviders} from './Context/SocketContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CreateProviders>
      <App />
    </CreateProviders>
  </StrictMode>
)

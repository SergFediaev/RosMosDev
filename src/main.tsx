import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from 'src/App.tsx'
import { GlobalStyled } from 'src/styles/Global.styled.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyled />
        <App />
    </React.StrictMode>,
)

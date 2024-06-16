import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from 'src/app/App.tsx'
import { GlobalStyled } from 'src/app/Global.styled.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyled />
        <App />
    </React.StrictMode>,
)

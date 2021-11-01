import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routesConfig from './routes/routesConfig'
import './App.scss'

function App(): React.ReactElement {
    return (
        <BrowserRouter>
            <Switch>
                {routesConfig.map((route, index: number) => (
                    <Route key={index} {...route} />
                ))}
            </Switch>
        </BrowserRouter>
    )
}

export default App

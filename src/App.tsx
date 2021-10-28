import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routesConfig from './routes/routesConfig'
import './App.scss'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {routesConfig.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    )
}

export default App

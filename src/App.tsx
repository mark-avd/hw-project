import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import './App.scss'

const ChatPage = React.lazy(() => import('./pages/ChatPage'))

function App(): React.ReactElement {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<h1>Oh shit, I&#39;m sorry!</h1>}>
                <Switch>
                    <Route exact path={'/'} component={AuthPage} />
                    <Route exact path={'/chat'} component={ChatPage} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    )
}

export default App

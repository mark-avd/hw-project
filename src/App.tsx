import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import NotFoundPage from './pages/NotFoundPage'
import ChatTemplate from './components/templates/ChatTemplate'
import './App.scss'

const ChatPage = React.lazy(() => import('./pages/ChatPage'))

function App(): React.ReactElement {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={AuthPage} />
                <React.Suspense fallback={<ChatTemplate isSuspended={true} />}>
                    <Route exact path={'/chat'} component={ChatPage} />
                </React.Suspense>
                <Route exact path={'*'} component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default App

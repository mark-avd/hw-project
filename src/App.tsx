import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import NotFoundPage from './pages/NotFoundPage'
import ChatTemplate from './components/templates/ChatTemplate'
import './App.scss'
import useToken from './utils/useToken'

const ChatPage = React.lazy(() => import('./pages/ChatPage'))

function App(): React.ReactElement {
    const { token, setToken } = useToken()
    const handleToken = (token: string): void => {
        setToken(token)
    }

    return (
        <BrowserRouter>
            <Switch>
                {token && <Redirect from={'/'} to={'/chat'} exact />}
                <Route exact path={'/'}>
                    <AuthPage handleToken={handleToken} />
                </Route>
                {token === undefined && <Redirect to={'/'} />}
                <React.Suspense fallback={<ChatTemplate isSuspended={true} />}>
                    <Route exact path={'/chat'} component={ChatPage} />
                </React.Suspense>
                <Route exact path={'*'} component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default App

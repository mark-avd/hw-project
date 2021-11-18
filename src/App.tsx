import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import ChatTemplate from './components/templates/ChatTemplate'
import useToken from './hooks/useToken'
import './App.scss'

const ChatPage = React.lazy(() => import('./pages/ChatPage'))

function App(): React.ReactElement {
    const { token, setToken } = useToken()
    const handleToken = (token: string): void => {
        setToken(token)
    }

    return (
        <BrowserRouter>
            <Switch>
                {token && (
                    <>
                        <React.Suspense fallback={<ChatTemplate isSuspended={true} />}>
                            <Route exact path={'/chat'} component={ChatPage} />
                        </React.Suspense>
                        <Redirect to={'/chat'} />
                    </>
                )}
                {token === undefined && (
                    <>
                        <Route exact path={'/'}>
                            <AuthPage handleToken={handleToken} />
                        </Route>
                        <Redirect to={'/'} />
                    </>
                )}
            </Switch>
        </BrowserRouter>
    )
}

export default App

import AuthPage from '../pages/AuthPage'
import ChatPage from '../pages/ChatPage'

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: AuthPage
    },
    {
        path: '/chat',
        exact: true,
        component: ChatPage
    },
]

export default routesConfig

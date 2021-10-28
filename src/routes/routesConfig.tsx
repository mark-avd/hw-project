import LoginPage from '../pages/LoginPage'
import ChatPage from '../pages/ChatPage'

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: LoginPage
    },
    {
        path: '/chat',
        exact: true,
        component: ChatPage
    },
]

export default routesConfig

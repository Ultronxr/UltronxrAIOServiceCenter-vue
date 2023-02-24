import LoginView from '../views/LoginView.vue'
import IndexView from '../views/IndexView.vue'

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/index', name: 'index', component: IndexView },
    { path: '/valorant', name: 'valorant', component: () => import('../views/valorant/storefront/single/ListView.vue') }
]

export default routes

//? Questo file, va importato anche in main.js

//* Gli stiamo dicendo crea un vue router da vue router e  crea webHistory(di base webhistory significa che è come se noi stessimo realmente navigando in diverse pagine).
import { createRouter, createWebHistory} from 'vue-router';

// Pages Generale
import Error404 from './pages/error/Error404.vue';
import HomePage from './pages/HomePage.vue';

// Guest
import SearchChef from './pages/guest/SearchChef.vue';
import SingleChef from './pages/guest/SingleChef.vue';

// User
import Dashboard from './pages/user/Dashboard.vue';
import Messages from './pages/user/Messages.vue';
import Review from './pages/user/Review.vue';
import SponsorShip from './pages/user/SponsorShip.vue';
import Statistics from './pages/user/Statistics.vue';
import Access from './pages/user/auth/Access.vue';
import Registration from './pages/user/auth/Registration.vue';
import Profile from './pages/user/auth/Profile.vue';

//* Con la costante stiamo salvando i dati di Vue Router
const router = createRouter({
    
    //! La proprietà history, sarà valorizzata dal metodo createWebHistory. 
    //!Questo, come scritto sopra, permetterà a Vue Router di integrarsi con la navigazione del browser.
    history: createWebHistory(),
    
    //? Queste sono le rotte. Abbiamo un path, che è il luogo dove sto andando.
    //? Abbiamo il name, che è il nome con cui posso indicizzarla.
    //? E il component, è il componente a cui faccio riferimento.
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/searchchef',
            name: 'search-chef',
            component: SearchChef
        },
        {
            path: '/singlechef',
            name: 'single-chef',
            component: SingleChef
        },
        {
            path: '/404',
            name: '404',
            component: Error404
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/messages',
            name: 'messages',
            component: Messages
        },
        {
            path: '/review',
            name: 'review',
            component: Review
        },
        {
            path: '/sponsorship',
            name: 'sponsorship',
            component: SponsorShip
        },
        {
            path: '/statics',
            name: 'statics',
            component: Statistics
        },
        {
            path: '/access',
            name: 'access',
            component: Access
        },
        {
            path: '/registration',
            name: 'registration',
            component: Registration
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {    
            path: '/modify-profile',
            name: 'modify-profile',
            component: ModifyProfile
        },
    ]
});

//* Alla fine stiamo esportando i valori memorizzati nella costante
export { router };
import Home from '../pages/home';
import Game from '../pages/game';

export default [
    {
        path: '/',
        component: Home,
        name: 'home',
    },
    {
        path: '/game/:game',
        component: Game,
        name: 'game',
    }
];
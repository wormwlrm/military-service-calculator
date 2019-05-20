import Dashboard from '../views/components/Dashboard';
import Option from '../views/components/Option';
import About from '../views/components/About';

export default [
  {
    name: 'Dashboard',
    path: '/',
    component: Dashboard
  },
  {
    name: 'Option',
    path: '/option',
    component: Option
  },
  {
    name: 'About',
    path: '/about',
    component: About
  }
];

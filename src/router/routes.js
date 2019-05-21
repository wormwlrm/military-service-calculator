import Dashboard from '../views/components/Dashboard';
import Option from '../views/components/Option';
import About from '../views/components/About';
import Account from '../views/components/Account';

export default [
  {
    icon: 'el-icon-odometer',
    name: 'Dashboard',
    path: '/',
    component: Dashboard
  },
  {
    icon: 'el-icon-user',
    name: 'Account',
    path: '/account',
    component: Account
  },
  {
    icon: 'el-icon-setting',
    name: 'Option',
    path: '/option',
    component: Option
  },
  {
    icon: 'el-icon-bell',
    name: 'About',
    path: '/about',
    component: About
  }
];

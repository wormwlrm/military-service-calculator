import Dashboard from '../views/components/Dashboard';
import Option from '../views/components/Option';
import About from '../views/components/About';
import Account from '../views/components/Account';

export default [
  {
    icon: 'el-icon-odometer',
    name: '대시보드',
    path: '/',
    component: Dashboard
  },
  {
    icon: 'el-icon-user',
    name: '계정',
    path: '/account',
    component: Account
  },
  {
    icon: 'el-icon-setting',
    name: '옵션',
    path: '/option',
    component: Option
  },
  {
    icon: 'el-icon-bell',
    name: '정보',
    path: '/about',
    component: About
  }
];

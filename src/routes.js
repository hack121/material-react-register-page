// Views
import SignIn from './components/views/SignIn';
import SignUp from './components/views/SignUp';
import NotFound from './components/views/NotFound';

export default [
  {
    component: SignIn,
    path: '/sign-in'
  },
  {
    component: SignUp,
    path: '/sign-up'
  },
  {
    component: NotFound,
    path: '/not-found'
  }
];

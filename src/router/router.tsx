import { createBrowserRouter, RouteObject } from 'react-router-dom';
import SignIn from '../pages/SignInPage/SignIn';
import SignUp from '../pages/SignUpPage/SignUp';
import HomePage from '../pages/HomePage/HomePage';
import Checklogin from './Checklogin';
export const routes: RouteObject[] = [
	{
		path: '/home',
		element: <Checklogin />,
		children: [
			{
				path: '',
				element: <HomePage />,
			},
		],
	},
	{
		path: '/sign-up',
		element: <SignUp />,
	},
	{
		path: '/',
		element: <SignIn />,
	},
];

export const router = createBrowserRouter(routes);

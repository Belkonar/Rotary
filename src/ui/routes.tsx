import { RouteObject } from 'react-router-dom';
import Home from './components/home';
import { Root } from './app';

export function getRoutes(): RouteObject[] {
  return [
    {
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ]
    }
  ];
}

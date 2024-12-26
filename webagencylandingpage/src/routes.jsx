import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ServicesPage from './pages/ServicesPage';
import ErrorPage from './pages/ErrorPage';
import App from './App';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/services',
                element: <ServicesPage />
            },
            {
                path: '/work',
                element: <WorkPage />
            }
        ]
    }
];

const router = createBrowserRouter(routes);

export default router;
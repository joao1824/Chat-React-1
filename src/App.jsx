import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Chat  from './Chat';
import Login from './Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/chat',
        element: <Chat/>
    }
    
]);

export default function App() {
    return <RouterProvider router={router}/>;
}
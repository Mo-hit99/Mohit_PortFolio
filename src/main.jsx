import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Services from './Components/Services.jsx';
import Resume from './Components/Resume.jsx';
import Contact from './Components/Contact.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/projects',
        element: <Projects/>,
      },
      {
        path: '/services',
        element: <Services/>,
      },
      {
        path: '/resume',
        element: <Resume/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

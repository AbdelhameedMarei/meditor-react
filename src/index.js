import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Contact from './Pages/Contact/Contact';
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Book from "./Pages/Book/Book";
import Testimonial from "./Pages/Testimonial/Testimonial";
import News from "./Pages/News/News";
import Error from "./Components/Error/Error";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/service",
    element: <Services />
  },
  {
    path: "/book",
    element: <Book />
  },
  {
    path: "/team",
    element: <Testimonial />
  },
  {
    path: "/blog",
    element: <News />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
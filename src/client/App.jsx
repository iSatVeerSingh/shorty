import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './components/Layouts/RootLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import ShortUrl from './pages/ShortUrl';
import Signup from './pages/Signup';
import UrlsList from './pages/UrlsList';
import './styles/global.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/short' element={<ShortUrl />} />
      <Route path='/urls' element={<UrlsList />} />
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}

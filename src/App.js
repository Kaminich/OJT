import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './ui/HomePage';
import Layout from './components/layout/Layout'
import './App.css';
import { useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import UserPage from './ui/UserPage';
import UpdateUserPage from './ui/UpdateUserPage';
import CreateUserPage from './ui/CreateUserPage';

const App = () => {
  const { mode } = useTheme();

  useEffect(() => {
    document.body.className = mode === 'dark' ? 'dark' : 'light';
  }, [mode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/users' element={<UserPage />} />
          <Route path='/users/update/:id' element={<UpdateUserPage />} />
          <Route path='/users/create' element={<CreateUserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

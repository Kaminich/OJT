import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './ui/HomePage';
import Layout from './layout/Layout';
import './App.css';
import { useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import UserPage from './ui/UserPage';
import UpdateUserPage from './ui/UpdateUserPage';
import CreateUserPage from './ui/CreateUserPage';
import VideoUpload from './components/videoupload/VideoUpload';

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
          <Route path='/video-upload' element={<VideoUpload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

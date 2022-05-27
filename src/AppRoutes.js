import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import SinglePost from './pages/SinglePost'
import Posts from './pages/Posts'
import Category from './pages/Category'
import Tag from './pages/Tag'
import Page from './pages/Page'
import Login from './pages/Login'
import Register from './pages/Register'
import Author from './pages/Author'
import Profile from './pages/Profile'
import ProfileEdit from './components/ProfileEdit'
import History from './components/History'

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/HexTricks-frontend" element={<Home />} />
        <Route path="/HexTricks-frontend/contact" element={<Contact />} />
        <Route path="/HexTricks-frontend/about" element={<About />} />
        <Route path="/HexTricks-frontend/articles" element={<Posts />} />
        <Route path="/HexTricks-frontend/category" element={<Category />} />
        <Route path="/HexTricks-frontend/tag" element={<Tag />} />
        <Route path="/HexTricks-frontend/author" element={<Author />} />
        <Route path="/HexTricks-frontend/page" element={<Page />} />
        <Route path="/HexTricks-frontend/articles/single" element={<SinglePost />} />
        <Route path="/HexTricks-frontend/login" element={<Login />} />
        <Route path="/HexTricks-frontend/register" element={<Register />} />
        <Route path="/HexTricks-frontend/profile" element={<Profile />} >
          <Route path='edit' element={<ProfileEdit />}></Route>
          <Route path='history' element={<History />}></Route>
        </Route>
    </Routes>
    </>
  )
}

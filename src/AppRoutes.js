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
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Posts />} />
        <Route path="/category" element={<Category />} />
        <Route path="/tag" element={<Tag />} />
        <Route path="/author" element={<Author />} />
        <Route path="/page" element={<Page />} />
        <Route path="/articles/single" element={<SinglePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} >
          <Route path='edit' element={<ProfileEdit />}></Route>
          <Route path='history' element={<History />}></Route>
        </Route>
    </Routes>
    </>
  )
}

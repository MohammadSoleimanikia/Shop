import './App.css'
import BreadCrumbs from './components/BreadCrumbs'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import NewsLetterSubscription from './components/NewsletterSubscription'
import Pagination from './components/Pagination'
import ProductList from './components/ProductList'
import SidebarFilters from './components/SidebarFilters'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './pages/RootLayout'

function App() {
  const router=createBrowserRouter([
    {path:'/',element:<RootLayout/>,children:[
      {index:true,element:<Home/>}
    ]}
  ])

  return (
    <RouterProvider router={router}/>      
  )
}

export default App

import './App.css'
import BreadCrumbs from './components/BreadCrumbs'
import Footer from './components/Footer'
import Header from './components/Header'
import NewsLetterSubscription from './components/NewsletterSubscription'
import Pagination from './components/Pagination'
import ProductList from './components/ProductList'
import SidebarFilters from './components/SidebarFilters'

function App() {

  return (
    <>
      <Header/>
      <BreadCrumbs/>
      <SidebarFilters/>
      <ProductList/>
      <Pagination/>
      <NewsLetterSubscription/>
      <Footer/>
    </>
  )
}

export default App

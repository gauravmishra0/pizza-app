import Navbar from '../components/Navbar'
import PizzaCard from '../components/PizzaCard'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Navbar />
      <PizzaCard />
    </>
  )  
}

export default MyApp

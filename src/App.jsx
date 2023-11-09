import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import DetailProduct from "./components/detailProduct/DetailProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function App() {
  return (
    <>
      <Nav/>
      <DetailProduct/>
      <Footer/>
    </>
  )
}



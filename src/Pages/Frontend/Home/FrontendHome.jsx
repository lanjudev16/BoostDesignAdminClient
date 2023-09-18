import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import BigSale from "./BigSale";
import Hero from "./Hero";
import LatestAddingProduct from "./LatestAddingProduct";
import OurSaleAbleFurniture from "./OurSaleAbleFurniture";

const FrontendHome = () => {
    return (
        <div >
            <Header></Header>
            <Hero></Hero>
            <OurSaleAbleFurniture></OurSaleAbleFurniture>
            <BigSale></BigSale>
            <LatestAddingProduct></LatestAddingProduct>
            <Footer></Footer>
        </div>
    );
};

export default FrontendHome;
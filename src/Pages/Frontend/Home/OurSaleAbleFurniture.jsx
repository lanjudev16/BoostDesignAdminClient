const OurSaleAbleFurniture = () => {
    const SaleAbleFurniture = [
        {
            name: "Chair",
            item: 3,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/collections/icon5.png?v=1670583626"
        },
        {
            name: "Dining",
            item: 9,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/collections/icon5.png?v=1670583626"
        },
        {
            name: "Furniture",
            item: 1,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/collections/icon3.png?v=1671712493"
        },
        {
            name: "Lamp",
            item: 3,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/collections/icon2.png?v=1671712554"
        },
        {
            name: "Sho racks",
            item: 5,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/collections/cat9.png?v=1671711209"
        },
    ]
    const productSaleAbleCol4=[
        {
            name: "Safe set",
            item: 3,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/collections/icon4.png?v=1671711390"
        },
        {
            name: "Table",
            item: 1,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/collections/icon1.png?v=1671711417"
        },
        {
            name: "Tv-units",
            item: 3,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/collections/cat8.png?v=1671711458"
        },
        {
            name: "Wrabrabs",
            item: 5,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/collections/cat7.png?v=1671711495"
        },
    ]
    return (
        <div className="mx-[30px] m-[80px]">
            <h1 className="text-center text-black font-bold text-5xl mb-[50px]">Our Saleable Furniture</h1>
            <div className="grid lg:grid-cols-5 gap-[30px] md:grid-cols-3 grid-cols-1">
                {
                    SaleAbleFurniture.map((product, index) =>
                        <>
                            <div key={index} className="flex items-center justify-between bg-[#f6f4f0] p-5 rounded-md text-black font-semibold ">
                                <div>
                                    <h2>{product.name}</h2>
                                    <p>({product.item} items)</p>
                                </div>
                                <>
                                <img src={product.image} alt="" />
                                </>
                            </div>
                        </>)
                }
            </div>
            <div className="grid lg:grid-cols-4 gap-[30px] md:grid-cols-2 grid-cols-1 mt-[30px]">
                {
                    productSaleAbleCol4.map((product, index) =>
                        <>
                            <div key={index} className="flex items-center justify-between bg-[#f6f4f0] p-5 rounded-md text-black font-semibold ">
                                <div>
                                    <h2>{product.name}</h2>
                                    <p>({product.item} items)</p>
                                </div>
                                <>
                                <img src={product.image} alt="" />
                                </>
                            </div>
                        </>)
                }
            </div>

        </div>
    );
};

export default OurSaleAbleFurniture;
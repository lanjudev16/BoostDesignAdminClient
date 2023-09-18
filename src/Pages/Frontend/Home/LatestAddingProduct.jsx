const LatestAddingProduct = () => {
    const LatestAddingProduct = [
        {
            name: "Best product",
            price: 100.00,
            dslicePrice: 120.00,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/files/01_6cb52396-2054-46e8-b279-4ad0024afa0c.jpg?v=1693027175&width=360"
        },
        {
            name: "Trending Product8",
            price: 40.00,
            dslicePrice: 130.00,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/files/product10_be80ae38-73a1-45bc-8e93-3d9651aa3f73.jpg?v=1692695128&width=360"
        },
        {
            name: "Trending Product7",
            price: 250.00,
            dslicePrice: 150.00,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/files/product04_d5ee8345-9f0a-4d70-8ce3-4ba3d6dbf9cf.jpg?v=1692695092&width=360"
        },
        {
            name: "Trending Product6",
            price: 60.00,
            dslicePrice: 170.00,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/files/product03_09bedfc3-5709-427e-b48e-43dc25535483.jpg?v=1693031041&width=360"
        },
        {
            name: "Trending Product5",
            price: 160.00,
            dslicePrice: 120.00,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/files/product12_2e65166c-65a9-4940-a973-ac7a449d9158.jpg?v=1693031007&width=360"
        },
        {
            name: "Trending Product4",
            price: 140.00,
            dslicePrice: 220.00,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/files/product01_e0d0345b-e563-4cdf-826b-ad77ba5def18.jpg?v=1693030385&width=360"
        },
        {
            name: "Trending Product3",
            price: 350.00,
            dslicePrice: 220.00,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/files/product11_28756adb-0cec-4c6f-b83d-b815327717af.jpg?v=1693030359&width=360"
        },
        {
            name: "Trending Product2",
            price: 620.00,
            dslicePrice: 420.00,
            image: "https://zubbio-preyantechnosys.myshopify.com/cdn/shop/files/product06_32166f33-3413-494d-a354-f9a29b08f770.jpg?v=1693030340&width=360"
        },
    ]
    return (
        <div className="mx-[30px] ">
            <h1 className="text-left text-black font-bold text-5xl mb-[50px]">Latest Adding Product</h1>
            <div className="grid lg:grid-cols-4 gap-[30px] md:grid-cols-2 grid-cols-1">
                {
                    LatestAddingProduct.map((product, index) =>
                        <>
                            <div key={index} className="flex items-center justify-between  rounded-md text-black font-semibold text-center">
                                <div>
                                    <img className="bg-[#f6f4f0]" src={product.image} alt="" />
                                    <div className="mt-5">
                                        <h2>{product.name}</h2>
                                        <div className="flex gap-2 justify-center">
                                            <p className="my-3 font-semibold text-2xl">${product.price}</p>
                                            <p className="my-3 line-through font-semibold text-2xl">${product.dslicePrice}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>)
                }
            </div>

        </div>
    );
};

export default LatestAddingProduct;
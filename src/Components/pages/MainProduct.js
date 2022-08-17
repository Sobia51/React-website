import React from 'react'
import Productdata from '../Productdata';
import ProductItems from '../ProductItems';

function MainProduct() {
    return (
        <>
            <h1 className="text-center mt-3">All Products</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {
                        Productdata.productData.map((item, index) => {
                            return (
                                <ProductItems
                                    img={item.img}
                                    title={item.title}
                                    desc={item.desc}
                                    price={item.price}
                                    item={item}
                                    key={index}
                                />
                            )

                        })
                    }

                </div>
            </section>
        </>
    )
}

export default MainProduct;

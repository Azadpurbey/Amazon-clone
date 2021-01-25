import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div class="home__container">
                <img className="home__image"
                    src="https://wap.tigo.com.hn/sites/tigowebcorp.hn/files/amazon-prime-banner-junio2020.png"
                />

                <div className="home__row">
                    <Product 
                        title="The lean Startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={5}
                    />
                    <Product
                        title="Faber 12 Place Settings Dishwasher (FFSD 6PR 12S, Neo Black, Best suited for Indian Kitchen, Hygiene Wash)"
                        price={965.25}
                        image="https://images-na.ssl-images-amazon.com/images/I/51sCBRUPItL._SL1500_.jpg"
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product
                        title="I pad with cool features"
                        price={239.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        rating={2}
                    />
                    <Product
                        title="I pad with cool features"
                        price={2129.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={5}
                    />
                    <Product
                        title="Acer Aspire 3 Intel Core i5-10th Gen 15.6 - inch 1920 x 1080 Thin and Light Laptop (8GB Ram/1TB"
                        price={900.0}
                        image="https://images-na.ssl-images-amazon.com/images/I/810mRHoIxML._SL1500_.jpg"
                        rating={1}
                    />
                </div>

                <div className="home__row">
                    <Product
                        title="TCL 108 cm (43 inches) 4K Ultra HD Certified Android Smart LED TV 43P615 (Black) (2020 Model)"
                        price={1000.25}
                        image="https://images-na.ssl-images-amazon.com/images/I/71vw4dDvP4L._SL1500_.jpg"
                        rating={3}
                    />
                </div>

            </div>

        </div>
        
         
    )
}

export default Home

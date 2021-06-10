import React from 'react'
import "./Home.css";
import Product from '../../Components/Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/FathersDay/Fuji_TallHero_FD21_en_US_1x._CB667980417_.jpg " 
                alt="" />

            {/* ------------- First tripple row------- */}
            <div className="home__row">
                <Product 
                title="Iphone 11"
                price={20.26}
                rating={5}
                image="https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
                />

                <Product 
                title="SamSung HdTV"
                price={50.00}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                />

                <Product 
                title="Soundance Laptop Stand, Ergonomic Laptops Elevator for Desk..."
                price={20.00}
                rating={3}
                image="https://m.media-amazon.com/images/I/81MN9l2nl2S._AC_UL320_.jpg"
                />
            </div>

            {/* ------------- Second tripple row------- */}
            <div className="home__row">
            <Product 
                id="123456"
                title="Michael Kors Women's Jet Chain Shoulder Bag"
                price={131}
                rating={5}
                image="https://m.media-amazon.com/images/I/61dwYndNEbL._AC_UL320_.jpg"
                />

                <Product 
                id="123456"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                price={44.00}
                rating={5}
                image="https://m.media-amazon.com/images/I/61kW1CrcOfS._AC_UL320_.jpg"
                />

                <Product 
                id="123456"
                title="Fruit of the Loom Men's CoolZone Boxer Briefs, 7 Pack - Assorted Colors, X-Large..."
                price={20.00}
                rating={3}
                image="https://m.media-amazon.com/images/I/91wNxIxVj6L._AC_UL320_.jpg"
                />
            </div>

            {/* ------------- Third single row------- */}
            <div className="home__row">
            <Product
                id="123456"
                title="TCL 32-inch 3-Series 720p Roku Smart TV - 32S335, 2021 Model"
                price={158}
                rating={4}
                image="https://m.media-amazon.com/images/I/61--xSgNcQL._AC_UL320_.jpg"
                />
            </div>

            {/* ------------- Fourth tripple row------- */}
            <div className="home__row">
            <Product 
                id="123456"
                title="Govee Hygrometer Thermometer, Wireless Thermometer, Mini Bluetooth Humidity Sensor"
                price={14}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41rUTK5oiJL.jpg"
                />

                <Product 
                id="123456"
                title="Cleaning Gel for Car, Car Cleaning Kit Universal Detailing Automotive Dust Car Crevice Cleaner Auto "
                price={7}
                rating={4}
                image="https://m.media-amazon.com/images/I/711uPSOWplL._AC_UL320_.jpg://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                />

                <Product 
                id="123456"
                title="Universal Charger, Laptop Charger, HP 45W Laptop Charger, 19.5V 2.31A Laptop Power Adapter"
                price={12}
                rating={1}
                image="https://m.media-amazon.com/images/I/51XS7E0acWL._AC_UL320_.jpg"
                />
            </div>

            {/* ------------- fifth single row------- */}
            <div className="home__row">
            <Product 
                id="123456"
                title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear..."
                price={200.00}
                rating={4}
                image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"
                />
            </div>


            </div>
        </div>
    )
}

export default Home

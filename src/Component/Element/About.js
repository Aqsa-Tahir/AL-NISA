import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
          <div className="bg-cover bg-center h-screen p-24 "  style={{ backgroundImage: "url('./Assets/3.jpg')" }}> 
            <div>
              <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
            </div>
          
            
            


      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="relative z-10 text-black text-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 ">
        <p className="text-md  mb-8 p-16 rounded-lg shadow-md bg-pink-300">
          Welcome to our online store, where you'll find a curated selection of high-quality products for all your needs.
        </p>
        <p className="text-md mb-8 p-10 rounded-lg shadow-md bg-pink-300">
          At Al-NISA Store, we believe in providing our customers with the best shopping experience. Our team is dedicated to sourcing products that are not only stylish but also functional and reliable.
        </p>
        <p className="text-md mb-8 p-10 rounded-lg shadow-md bg-pink-300">
          Whether you're looking for the latest fashion trends, home decor essentials, or cutting-edge gadgets, we've got you covered. Our mission is to make shopping easy, enjoyable, and tailored to your individual preferences.
        </p>
        <p className="text-md mb-8 p-10 rounded-lg shadow-md bg-pink-300">
          Thank you for choosing AL-NISA Shopping Store. We appreciate your trust and look forward to serving you with the best products and excellent customer service.
        </p>
      </div>
    </div>
      
        );
    }
}

export default About;

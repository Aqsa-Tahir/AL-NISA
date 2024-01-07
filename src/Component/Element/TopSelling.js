import React from 'react'

const TopSelling = () => {
    const topSellingProducts = [
        {
          id: 1,
          name: 'BlushON',
          description: 'Best-seller',
          price: 1500,
          image: '/Assets/14.jpg',
        },
        {
          id: 2,
          name: 'Pink Glose',
          description: 'Customer favorite',
          price: 490,
          image: '/Assets/16.jpg',
        },
        {
          id: 3,
          name: 'Foundation',
          description: 'Customer favorite',
          price: 3000,
          image: '/Assets/17.jpg',
        },
        {
          id: 4,
          name: 'Loose Powder',
          description: 'Best-seller',
          price: 1500,
          image: '/Assets/18.jpg',
        },
        {
          id: 5,
          name: 'Muskara',
          description: 'Customer favorite',
          price: 800,
          image: '/Assets/19.jpg',
        },
        {
          id: 6,
          name: 'Eye Shadow',
          description: 'Best Seller',
          price: 1000,
          image: '/Assets/20.jpg',
        },
        {
          id: 7,
          name: 'HighLighter',
          description: 'Customer favorite',
          price: 800,
          image: '/Assets/32.jpg',
        },
        {
          id: 8,
          name: 'Eye Shadow Palete',
          description: 'Best Seller',
          price: 2500,
          image: '/Assets/33.jpg',
        },
      ];
    
  return (
    <div>
       <div className="z-20 relative bg-cover bg-center  bg-pink-200">
  <h2 data-aos="zoom-out-right" className="text-4xl font-bold mb-1 text-pink-900 text-center mb-5">Top Selling Products</h2>
  <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
    {topSellingProducts.map((product) => (
      <div key={product.id} className="bg-white rounded-2xl text-center  py-5 px-10">
        <img src={product.image} alt={product.name} className="w-48 h-48 mx-auto mb-4 object-cover" />
        <p className="text-lg font-bold mb-0.5">{product.name}</p>
        <p className="text-sm mb-0.5">{product.description}</p>
        <p className="text-sm text-pink-700">Rs{product.price}</p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-900 focus:outline-none focus:shadow-outline-blue">
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>
    </div>
  )
}

export default TopSelling

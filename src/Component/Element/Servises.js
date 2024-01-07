
import React from 'react';
import Product from './Product';


const ProductsPage = () => {
  const products = [
   
    {
      name: 'Accessory 1',
      description: 'Golden Rings',
      price: 500,
      imageUrl: './Assets/5.jpg',
    },

    {
      name: 'Accessory 2',
      description: 'Hair Clip',
      price: 250,
      imageUrl:'./Assets/6.jpg',
    },
    {
      name: 'Accessory 3',
      description: 'Kids Pony',
      price: 250,
      imageUrl:'./Assets/7.jpg',
    },
    {
      name: 'Accessory 4',
      description: 'Brecelet',
      price: 500,
      imageUrl:'./Assets/8.jpg',
    },
    {
      name: 'Accessory 5',
      description: 'Hair Bands',
      price: 150,
      imageUrl: './Assets/9.jpg',
    },
    {
      name: 'Accessory 6',
      description: 'Kids Special Box',
      price: 1000,
      imageUrl: './Assets/10.jpg',
    },
    {
      name: 'Accessory 7',
      description: 'Special Silver Brecelet',
      price: 800,
      imageUrl: './Assets/11.jpg',
    },
    {
      name: 'Accessory 8',
      description: 'Hair Bands',
      price: 250,
      imageUrl: './Assets/12.jpg',
    },
    {
      name: 'Accessory 9',
      description: 'Kids Hair Bands',
      price: 250,
      imageUrl: './Assets/13.jpg',
    },
    {
      name: 'Accessory 10',
      description: 'Branded BlushON',
      price: 650,
      imageUrl: './Assets/14.jpg',
    },
    {
      name: 'Accessory 11',
      description: 'Makeup Brush Set',
      price: 2500,
      imageUrl: './Assets/15.jpg',
    },
    {
      name: 'Accessory 12',
      description: 'Pink Glose',
      price: 250,
      imageUrl: './Assets/16.jpg',
    },
    {
      
      name: 'Accessory 13',
      description: 'Foundation',
      price: 3000,
      imageUrl: './Assets/17.jpg',
    },
    {
      
      name: 'Accessory 14',
      description: 'Loose Powder',
      price: 1500,
      imageUrl: './Assets/18.jpg',
    },
    {
      
      name: 'Accessory 15',
      description: 'Muskara',
      price: 800,
      imageUrl: './Assets/19.jpg',
    },
    {
      
      name: 'Accessory 16',
      description: 'Eye Shadow',
      price: 29.99,
      imageUrl: './Assets/20.jpg',
    },
    {
    
      name: 'Contour Stick',
      description: 'Latest addition',
      price: 900,
      imageUrl: '/Assets/21.jpg',
    },
    {
    
      name: 'Bb Cream',
      description: 'New and exciting',
      price: 980,
      imageUrl: '/Assets/22.jpg',
    },
    {
      
      name: 'Primer',
      description: 'New and exciting',
      price: 1500,
      imageUrl: '/Assets/23.jpg',
    },
    {
      
      name: 'Compact Powder',
      description: 'Latest addition',
      price: 2900,
      imageUrl: '/Assets/24.jpg',
    },
    {
      
      name: 'Kids Special Box',
      description: 'Special offer',
      price: 1000,
      imageUrl: '/Assets/10.jpg',
    },
    {
      
      name: 'Brushes',
      description: 'Limited time deal',
      price: 1500,
      imageUrl: '/Assets/15.jpg',
    },
    {
      
      name: 'Basic Products',
      description: 'Limited time deal',
      price: 4000,
      imageUrl: '/Assets/25.jpg',
    },
    {
    
      name: 'Nail Paint Set',
      description: 'Special offer',
      price: 1500,
      imageUrl: '/Assets/26.jpg',
    },
    {
      
      name: 'Rings',
      description: 'Limited time deal',
      price: 850,
      imageUrl: '/Assets/27.jpg',
    },
    {
      
      name: 'All Products',
      description: 'Special offer',
      price: 6000,
      imageUrl: '/Assets/28.jpg',
    },
    {
      
      name: 'Face Wash',
      description: 'Special Product',
      price: 850,
      imageUrl: '/Assets/29.jpg',
    },
    {
      
      name: 'Whitening Cream',
      description: 'Special offer',
      price: 1500,
      imageUrl: '/Assets/30.jpg',
    }, 
    

  ];
  

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Girls Accessories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
  





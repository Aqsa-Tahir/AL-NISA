import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '@fortawesome/fontawesome-free/css/all.css';


const Reviews = () => {
    const reviews = [
        {
          id: 1,
          user: 'Aqsa',
          avatar: '/Assets/avatar2.jpg', 
          comment: 'Great products! I love the variety and quality.',
        },
        {
          id: 2,
          user: 'Fatima',
          avatar: '/Assets/avatar1.jpg', 
          comment: 'Fast shipping and excellent customer service.',
          
        },
        {
          id: 3,
          user: 'Khoula',
          avatar: '/Assets/avatar3.jpg', 
          comment: 'Fast shipping and excellent customer service.',
        },
      ];
      const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
       <div  className="bg-pink-200 py-36 z-20 relative">
        <div data-aos="flip-up" className="container mx-auto text-center ">
          <h2 className="text-6xl font-bold text-pink-800 mb-8">What Our Customers Say</h2>
          <Slider {...slickSettings}>
            {reviews.map((review) => (
              <div key={review.id} className="bg-pink-200 p-6 shadow-md rounded-md">
                <img
                  src={review.avatar}
                  alt={`${review.user}'s avatar`}
                  className="w-12 h-12 object-cover rounded-full mb-4 mx-auto"
                />
                <p className="text-gray-600 text-lg">{review.comment}</p>
                <p className="text-pink-800 font-bold mt-4 text-2xl">{review.user}</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            ))}
          </Slider>
        </div>
      </div> 
    </div>
  )
}

export default Reviews

import React from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        name: "Shabana",
        rating: 4,
        text: "The Lemon Garlic Shrimp Pasta was delicious! The shrimp were perfectly cooked and the sauce had just the right balance of citrus and garlic. I would have loved a bit more sauce, but overall, it was a great dish.",
        image: "/icons/girl.png"
    },
    {
        name: "Kohinoor",
        rating: 4.5,
        text: "A very satisfying meal! The pasta was al dente, and the shrimp were juicy and flavorful. The lemon garlic sauce was light and fresh. But I think it could use a touch more seasoning. I'd definitely order it again.",
        image: "/icons/girl (1).png"
    },
    {
        name: "Zubayer",
        rating: 4,
        text: "Really enjoyed the Shrimp Pasta! The lemon flavor was bright without being overpowering, and the shrimp were cooked just right. My only complaint is that the portion size could be a bit bigger. Otherwise, a solid choice.",
        image: "/icons/man.png"
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <h2>Customer Reviews</h2>
            <div className="testimonials">
                {testimonialsData.map((testimonial, index) => (
                    <div className="testimonial" key={index}>
                        <div className="testimonial-header">
                            <img src={testimonial.image} alt={`${testimonial.name}'s profile`} />
                            <div className="name-rating">
                                <h3>{testimonial.name}</h3>
                                <div className="stars">
                                    {"★".repeat(Math.floor(testimonial.rating))}
                                    {"☆".repeat(5 - Math.floor(testimonial.rating))}
                                </div>
                            </div>
                        </div>
                        <p className="review-text">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
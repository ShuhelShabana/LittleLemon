import React from "react";
import "./Highlights.css";
import { Link as RouterLink } from 'react-router-dom';

const Highlights = () => {
  const dishes = [
    {
      title: "Lemon Herb Chicken Skewers",
      description: "Tender pieces of chicken marinated in a vibrant blend of fresh lemon juice, garlic, and aromatic herbs, then grilled to perfection. Served with a side of roasted garlic aioli and a lemon wedge for an extra burst of flavor.",
      image: "/icons/lemon_herb_chicken_skewers.webp",
    },
    {
      title: "Mediterranean Lamb Chops",
      description: "Succulent lamb chops seasoned with a fragrant mix of rosemary, garlic, and Mediterranean spices. Grilled to your preferred doneness and served with a side of fluffy couscous and grilled vegetables.",
      image: "/icons/lambchops.jpg",
    },
    {
      title: "Stuffed Grape Leaves",
      description: "Tender grape leaves wrapped around a savory blend of seasoned rice, pine nuts, and fresh herbs. Served with a side of creamy tzatziki sauce and a slice of lemon for a refreshing finish.",
      image: "/icons/stuffed_grape_leaves.jpg",
    },
    {
      title: "Falafel Platter",
      description: "Crispy and golden-brown falafel served with a variety of sides including hummus, tahini sauce, fresh veggies, and pita bread.",
      image: "/icons/falafel_platter.jpg",
    },
    {
      title: "Greek Salad",
      description: "A fresh and colorful mix of crisp cucumbers, juicy tomatoes, briny olives, tangy feta cheese, and red onions. Tossed in a light dressing of extra virgin olive oil and zesty lemon juice, with a sprinkle of oregano.",
      image: "/icons/greek_salad.jpg",
    },
    {
      title: "Lemon Garlic Shrimp Pasta",
      description: "Juicy shrimp sautéed in a luscious lemon garlic sauce, served over a bed of tender linguine. Garnished with fresh herbs and a touch of Parmesan cheese for a burst of flavor in every bite.",
      image: "/icons/lemon_garlic_shrimp_pasta.jpg",
    },
    {
      title: "Eggplant Moussaka",
      description: "A classic Mediterranean casserole featuring layers of tender eggplant, spiced ground beef, and a rich béchamel sauce. Baked until bubbling and golden, and served with a side of Greek salad.",
      image: "/icons/eggplant_moussaka.webp",
    },
    {
      title: "Hummus and Pita Plate",
      description: "A generous serving of creamy, house-made hummus paired with warm, fluffy pita bread. Accompanied by a selection of olives and sliced fresh vegetables for dipping and snacking.",
      image: "/icons/hummus_platter.jpg",
    },
    {
      title: "Spanakopita",
      description: "Flaky, golden pastry filled with a savory mixture of spinach, feta cheese, and aromatic herbs. Baked to a crispy perfection and served with a side of Greek yogurt for dipping.",
      image: "/icons/spanakopita.webp",
    },
    {
      title: "Bakalava",
      description: "A rich, sweet dessert made from layers of delicate filo pastry filled with a blend of crushed nuts and honey. Baked to a crisp and served in small, irresistible pieces that are perfect for sharing.",
      image: "/icons/baklava.jpg",
    },
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <div className="ellipse">
          <h2>This week's Specials</h2>
          </div>
        <RouterLink to="/menu">
          <button className="menu-button">Menu</button>
        </RouterLink>
      </div>
      <div className="specials-list">
        {dishes.map((dish, index) => (
          <div key={index} className="special-item">
            <img src={dish.image} alt={dish.title} />
            <h3>{dish.title}</h3>
            <p>{dish.description}</p>
          </div>
        ))}
      </div>
    </section>
  );      
};

export default Highlights; 
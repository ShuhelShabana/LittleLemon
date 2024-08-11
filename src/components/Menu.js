import React from "react";
import './Menu.css';
import { Link } from 'react-scroll';
import { Element } from 'react-scroll';

const menuItems = [
    {
        title: "Stuffed Grape Leaves",
        description: "Delicate grape leaves are filled with a flavorful mixture of seasoned rice, pine nuts, fresh dill, mint, and a hint of lemon juice. These tender rolls are then steamed to perfection and served with a side of creamy tzatziki sauce, made from Greek yogurt, cucumber, garlic, and olive oil. A light and refreshing start to your meal.",
        ingredients: "Grape leaves, rice, pine nuts, dill, mint, lemon juice, olive oil, Greek yogurt, cucumber, garlic.",
        price: "$12.49",
        imageUrl: "/icons/stuffed_grape_leaves.jpg"
    },
    {
        title: "Roasted Red Pepper Hummus",
        description: "This creamy hummus is a delightful blend of chickpeas, roasted red peppers, tahini, garlic, and lemon juice. The roasted red peppers add a sweet and smoky flavor that complements the richness of the tahini. Served with warm pita bread and a selection of fresh vegetable sticks, including cucumbers, carrots, and bell peppers.",
        ingredients: "Chickpeas, roasted red peppers, tahini, garlic, lemon juice, olive oil, pita bread, cucumbers, carrots, bell peppers.",
        price: "$9.99",
        imageUrl: "/icons/roasted_red_pepper_hummus.webp"
    },
    {
        title: "Falafel Platter",
        description: "Golden and crispy falafel balls are made from ground chickpeas, fresh parsley, garlic, cumin, and coriander, deep-fried until perfectly crispy on the outside and soft on the inside. Served with a smooth hummus, tangy tabbouleh made from bulgur wheat, parsley, tomatoes, and lemon juice, and warm pita bread.",
        ingredients: "Chickpeas, parsley, garlic, cumin, coriander, bulgur wheat, tomatoes, lemon juice, olive oil, pita bread.",
        price: "$13.99",
        imageUrl: "/icons/falafel_platter.jpg"
    },
    {
        title: "Greek Salad",
        description: "A vibrant and refreshing salad featuring crisp cucumbers, juicy tomatoes, Kalamata olives, red onions, and creamy feta cheese, all tossed in extra virgin olive oil and fresh lemon juice, and sprinkled with oregano. Served with a side of warm pita bread.",
        ingredients: "Cucumbers, tomatoes, Kalamata olives, red onions, feta cheese, olive oil, lemon juice, oregano, pita bread.",
        price: "$10.99",
        imageUrl: "/icons/greek_salad.jpg"
    },
    {
        title: "Lemon Orzo Salad",
        description: "A light and zesty salad made with tender orzo pasta, cherry tomatoes, crisp cucumbers, Kalamata olives, and crumbled feta cheese. Tossed in a lemon vinaigrette made from fresh lemon juice, olive oil, Dijon mustard, and a touch of honey, and garnished with fresh herbs.",
        ingredients: "Orzo pasta, cherry tomatoes, cucumbers, Kalamata olives, feta cheese, lemon juice, olive oil, Dijon mustard, honey, fresh herbs.",
        price: "$11.99",
        imageUrl: "/icons/lemon_orzo_salad.jpg"
    },
    {
        title: "Lemon Herb Chicken Skewers",
        description: "Juicy chicken breast pieces marinated in a mixture of fresh lemon juice, garlic, oregano, thyme, and olive oil, then skewered and grilled to perfection. Served with a side of tzatziki sauce, made from Greek yogurt, cucumber, garlic, and dill, and a lemon wedge for an extra burst of citrus.",
        ingredients: "Chicken breast, lemon juice, garlic, oregano, thyme, olive oil, Greek yogurt, cucumber, dill.",
        price: "$14.99",
        imageUrl: "/icons/lemon_herb_chicken_skewers.webp"
    },
    {
        title: "Mediterranean Lamb Chops",
        description: "Tender lamb chops are seasoned with a fragrant blend of rosemary, garlic, and olive oil, then grilled to your desired doneness. Served with a side of fluffy couscous pilaf, grilled seasonal vegetables, and a drizzle of balsamic glaze for a touch of sweetness.",
        ingredients: "Lamb chops, rosemary, garlic, olive oil, couscous, seasonal vegetables, balsamic glaze.",
        price: "$22.99",
        imageUrl: "/icons/lambchops.jpg"
    },
    {
        title: "Seafood Paella",
        description: "A hearty and flavorful dish of saffron-infused rice cooked with a mix of fresh seafood, including shrimp, mussels, and calamari. The dish is enriched with onions, garlic, tomatoes, and bell peppers, and garnished with fresh parsley and lemon wedges.",
        ingredients: "Rice, saffron, shrimp, mussels, calamari, onions, garlic, tomatoes, bell peppers, parsley, lemon wedges.",
        price: "$19.99",
        imageUrl: "/icons/seafood_paella.webp"
    },
    {
        title: "Eggplant Moussaka",
        description: "A classic Mediterranean casserole made with layers of tender eggplant slices, spiced ground beef, onions, garlic, and a rich béchamel sauce. The dish is baked until golden and bubbly, and served with a side of Greek salad.",
        ingredients: "Eggplant, ground beef, onions, garlic, tomatoes, béchamel sauce, olive oil, Greek salad (cucumbers, tomatoes, olives, feta, red onions).",
        price: "$16.99",
        imageUrl: "/icons/eggplant_moussaka.webp"
    },
    {
        title: "Chicken Souvlaki Wrap",
        description: "Marinated chicken pieces, grilled to perfection, are wrapped in warm pita bread with crisp lettuce, juicy tomatoes, red onions, and a dollop of tzatziki sauce. The wrap is served with a side of Greek salad or crispy fries.",
        ingredients: "Chicken breast, lemon juice, garlic, oregano, thyme, pita bread, lettuce, tomatoes, red onions, tzatziki sauce (Greek yogurt, cucumber, garlic, dill), olive oil.",
        price: "$12.99",
        imageUrl: "/icons/chicken-souvlaki.jpg"
    },
    {
        title: "Beef Kofta Wrap",
        description: "Grilled beef kofta made from ground beef mixed with onions, garlic, parsley, cumin, and coriander, wrapped in pita bread with cucumbers, tomatoes, and a refreshing cucumber yogurt sauce. Served with a side of tabbouleh or fries.",
        ingredients: " Ground beef, onions, garlic, parsley, cumin, coriander, pita bread, cucumbers, tomatoes, Greek yogurt, cucumber, garlic.",
        price: "$13.99",
        imageUrl: "/icons/beef_kofta_wrap.jpg"
    },
    {
        title: "Couscous Pilaf",
        description: "A light and fluffy couscous pilaf, cooked with sautéed onions, garlic, and a blend of Mediterranean herbs. This side dish is perfect for pairing with any main course.",
        ingredients: "Couscous, onions, garlic, olive oil, parsley, mint, vegetable broth.",
        price: "$5.99",
        imageUrl: "/icons/couscous_pilaf.jpg"
    },
    {
        title: "Grilled Vegetables",
        description: "A medley of seasonal vegetables, such as zucchini, bell peppers, eggplant, and cherry tomatoes, grilled with olive oil, garlic, and fresh herbs. A healthy and flavorful side dish.",
        ingredients: "Zucchini, bell peppers, eggplant, cherry tomatoes, olive oil, garlic, rosemary, thyme.",
        price: "$6.99",
        imageUrl: "/icons/grilled_vegetables.jpg"
    },
    {
        title: "Baklava",
        description: "A rich and sweet dessert made from layers of buttery filo pastry, filled with a mixture of chopped walnuts, almonds, and pistachios, and sweetened with honey and a touch of cinnamon. Baked to golden perfection and served in small, bite-sized pieces.",
        ingredients: "Filo pastry, walnuts, almonds, pistachios, honey, cinnamon, butter.",
        price: "$6.99",
        imageUrl: "/icons/baklava.jpg"
    },
    {
        title: "Lemon Sorbet",
        description: "A refreshing and tangy lemon sorbet made from freshly squeezed lemon juice, sugar, and water. This dessert is the perfect palate cleanser after a rich meal.",
        ingredients: "Lemon juice, sugar, water, lemon zest.",
        price: "$5.99",
        imageUrl: "/icons/lemon_sorbet.jpg"
    },
    {
        title: "Mint Lemonade",
        description: "Freshly squeezed lemonade made from lemon juice, sugar, and water, infused with fresh mint leaves for a cool and refreshing drink. Served chilled over ice.",
        ingredients: "Lemon juice, sugar, water, fresh mint, ice.",
        price: "$3.99",
        imageUrl: "/icons/mint_lemonade.jpg"
    },
    {
        title: "Turkish Coffee",
        description: "A strong and aromatic coffee brewed from finely ground coffee beans, served in a small cup with a side of sugar and a piece of Turkish delight. Perfect for a post-meal treat.",
        ingredients: "Finely ground coffee beans, water, sugar, Turkish delight.",
        price: "$4.99",
        imageUrl: "/icons/turkish_coffee.webp"
    }
];

const Menu = () => {
const MenuCard = ({ title, description, ingredients, price, imageUrl }) => {
    return (
        <div className="menu-card">
            <img src={imageUrl} alt={title} className="menu-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong className="menu-ingredients">Ingredients:</strong> {ingredients}</p>
            <p><strong className="menu-price">Price:</strong> {price}</p>
        </div>
    );
};


    return (
        <Element name="menu">
            <div className="menu-container">
            <nav className="menu-nav">
                <ul>
                    <li><Link to="appetizers" smooth={true} duration={500}>Appetizers</Link></li>
                    <li><Link to="salads" smooth={true} duration={500}>Salads</Link></li>
                    <li><Link to="main_courses" smooth={true} duration={500}>Main Courses</Link></li>
                    <li><Link to="wraps" smooth={true} duration={500}>Wraps and Sandwiches</Link></li>
                    <li><Link to="sides" smooth={true} duration={500}>Sides</Link></li>
                    <li><Link to="desserts" smooth={true} duration={500}>Desserts</Link></li>
                    <li><Link to="beverages" smooth={true} duration={500}>Beverages</Link></li>
                </ul>
            </nav>
            <section id="appetizers" className="menu-section appetizers">
                <h2>Appetizers</h2>
                <div className="menu-grid">
                    {menuItems.slice(0, 3).map((item, index) => (
                        <MenuCard key={index} {...item} />
                    ))}
                </div>
            </section>
            <section id="salads" className="menu-section salads">
                <h2>Salads</h2>
                <div className="menu-grid">
                    {menuItems.slice(3, 5).map((item, index) => (
                        <MenuCard key={index} {...item} />
                    ))}
                </div>
            </section>
            <section id="main_courses" className="menu-section main-courses">
                <h2>Main Courses</h2>
                <div className="menu-grid">
                    {menuItems.slice(5, 9).map((item, index) => (
                        <MenuCard key={index} {...item} />
                    ))}
                </div>
            </section>
            <section id="wraps" className="menu-section wraps">
                <h2>Wraps and Sandwiches</h2>
                <div className="menu-grid">
                    {menuItems.slice(9, 11).map((item, index) => (
                        <MenuCard key={index} {...item} />
                    ))}
                </div>
            </section>
            <section id="sides" className="menu-section sides">
                <h2>Sides</h2>
                <div className="menu-grid">
                    {menuItems.slice(11, 13).map((item, index) => (
                        <MenuCard key={index} {...item} />
                    ))}
                </div>
            </section>
            <section id="desserts" className="menu-section desserts">
                <h2>Desserts</h2>
                <div className="menu-grid">
                    {menuItems.slice(13, 15).map((item, index) => (
                        <MenuCard key={index} {...item} />
                    ))}
                </div>
            </section>
            <section id="beverages" className="menu-section beverages">
                <h2>Beverages</h2>
                <div className="menu-grid">
                    {menuItems.slice(15).map((item, index) => (
                        <MenuCard key={index} {...item} />
                    ))}
                </div>
            </section>
        </div>
        </Element>
    );
};

export default Menu;

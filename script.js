import React, { useState } from 'react';

function Header() {
  return (
    <header>
      <h1>Welcome to My React App</h1>
    </header>
  );
}

function Sidebar({ items, onItemClick }) {
  return (
    <aside>
      <h2>Menu</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => onItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Content({ content }) {
  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
    </div>
  );
}

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const menuItems = ["Home", "About", "Services", "Contact"];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const getContent = (selectedItem) => {
    switch (selectedItem) {
      case "Home":
        return { title: "Home", body: "Welcome to our website." };
      case "About":
        return { title: "About Us", body: "Learn more about our company." };
      case "Services":
        return { title: "Our Services", body: "Discover what we offer." };
      case "Contact":
        return { title: "Contact Us", body: "Get in touch with us." };
      default:
        return { title: "Home", body: "Welcome to our website." };
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar items={menuItems} onItemClick={handleItemClick} />
        <div className="main-content">
          {selectedItem && <Content content={getContent(selectedItem)} />}
        </div>
      </div>
    </div>
  );
}

export default App;

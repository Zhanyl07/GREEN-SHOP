import React from 'react';
import './Plant.scss';

const Plant = () => {
  return (
    <div className="plant-care">
      <header className="plant-care__header">
        <h1>Plant Care</h1>
        <p>Green Shop — We care for your green space</p>
      </header>

      <main className="plant-care__content">
        <section className="plant-care__section">
          <h2>Why Plant Care Matters</h2>
          <p>Plants fill our homes with beauty and freshness. To keep them healthy and vibrant, they require proper care and attention.</p>
        </section>

        <section className="plant-care__section">
          <h2>Basic Care Tips</h2>
          <ul>
            <li><strong>Watering:</strong> Monitor soil moisture. Cacti need rare watering, tropical plants — more frequent.</li>
            <li><strong>Lighting:</strong> Choose the right spot according to the plant’s needs.</li>
            <li><strong>Fertilizing:</strong> Feed your plants especially during spring and summer.</li>
            <li><strong>Repotting:</strong> Repot when necessary using the right soil and pot size.</li>
            <li><strong>Temperature and Humidity:</strong> Maintain a comfortable environment without drafts.</li>
          </ul>
        </section>

        <section className="plant-care__section">
          <h2>Common Problems and Solutions</h2>
          <ul>
            <li>Yellow leaves? It could be overwatering or lack of light.</li>
            <li>Wilted stems? Check soil moisture and lighting conditions.</li>
            <li>Pests appeared? Use safe, eco-friendly plant treatments.</li>
          </ul>
        </section>

        <section className="plant-care__section">
          <h2>Our Recommendations</h2>
          <p>At Green Shop, you’ll find everything you need for plant care: fertilizers, sprayers, pots, and soils. With our products, your plants will thrive!</p>
        </section>
      </main>

      <footer className="plant-care__footer">
        <p>© 2025 Green Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Plant;

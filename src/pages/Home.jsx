import React from "react";

const Home = () => {
  return (
    <div>
      <img src="/ban.jpg" class="img-fluid w-100 pt-1" alt="..." />
      <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
        <div class="col">
          <div class="card">
            <img src="/1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pizza</h5>
              <p class="card-text">
                A delicious homemade pizza recipe with a crispy crust, rich
                tomato sauce, gooey melted cheese, and your favorite toppings.
                Perfect for a quick, satisfying meal.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="/2.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Egg sac</h5>
              <p class="card-text">
                An egg sac is a protective casing produced by spiders and other
                insects to enclose their eggs, ensuring safety and optimal
                conditions for hatching.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="/3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Biryani</h5>
              <p class="card-text">
                Biryani is a flavorful, aromatic rice dish layered with spiced
                meat, fragrant basmati rice, and saffron. Cooked to perfection,
                it's a royal feast in every bite!
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="/4.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Noodles </h5>
              <p class="card-text">
                A flavorful noodle recipe featuring tender noodles, savory
                sauce, fresh vegetables, and protein of choice. Quick,
                delicious, and perfect for a satisfying meal anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

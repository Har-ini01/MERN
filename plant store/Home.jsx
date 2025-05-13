import React, { useEffect } from 'react';
import './style.css';

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach((section) => {
      section.classList.add('fade-in-section');
      observer.observe(section);
    });

    const reviewCards = document.querySelectorAll('.review-card');
    const reviewObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    reviewCards.forEach((card) => {
      reviewObserver.observe(card);
    });

    window.addEventListener('scroll', function () {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }, []);

  return (
    <div>
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <span style={{ fontSize: '2rem', fontFamily: 'Quicksand, sans-serif', color: '#006400', fontWeight: 'bold' }}>
              PlantPal
            </span>
          </div>
          <nav className="navbar-links">
            <a href="#plant-picks">Shop Plants</a>
            <a href="#who-we-are">My Picks</a>
            <a href="#my-picks"> About Us</a>
          </nav>
          <div className="navbar-right">
            <div className="search-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', fill: '#047857' }}>
                <path fill="#047857" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" />
              </svg>
              <input type="text" className="search-bar" placeholder="Search" style={{ paddingLeft: '2.5em' }} />
            </div>
            <a href="#login" className="login-link">Sign In / Login</a>
          </div>
        </div>
      </header>

      <div className="carousel-wrapper">
        <div className="carousel-track" id="track">
          <div className="slide">
            <div className="slide-left">
              <h1>Welcome to <br /><span>PlantPal</span></h1>
              <p>Where nature meets nurture. Explore hand-picked plants that thrive in your space and elevate your mood.</p>
              <button>Shop Now</button>
            </div>
            <div className="slide-right">
              <img src="https://ik.imagekit.io/9muwkffn9/Pinterest/ChatGPT%20Image%20May%205,%202025,%2002_44_56%20PM.png" alt="Plant in hand" />
            </div>
          </div>

          <div className="slide slide-2">
            <div className="flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-[90px] font-semibold text-green-800 mb-2">Our Mission</h2>
              <p className="text-xl text-gray-700 max-w-xl mb-6">At <span className="text-green-700 font-semibold">PlantPal</span>, At PlantPal, we make plant care easy by connecting people with greenery that fits their lifestyle — simple, sustainable, and beautiful.</p>
              <a href="about.html" className="bg-green-800 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300">Learn More</a>
            </div>
          </div>

          <div className="slide simple-slide" style={{ backgroundColor: '#fefbe9' }}>
            <h1>Indoor Plants Made Easy</h1>
            <p>Get expert advice and low-maintenance plants delivered right to your doorstep.</p>
          </div>
        </div>

        <div className="dots" id="dots">
          <div className="dot active" data-index="0"></div>
          <div className="dot" data-index="1"></div>
          <div className="dot" data-index="2"></div>
        </div>
      </div>

      <h2 className="section-title">What's New</h2>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide fade-in">
            <span className="plant-tooltip">
              <a href="aloe-vera.html">
                <img src="https://ik.imagekit.io/9muwkffn9/REVAMP-MERN%20Stack/Gemini_Generated_Image_jfz9kdjfz9kdjfz9-removebg-preview.png" alt="Aloe Vera" />
              </a>
              <span className="tooltip-text">Aloe Vera: Great for skin and air purification.</span>
            </span>
            <div className="plant-info">
              <span className="plant-name">Aloe Vera</span>
              <div className="plant-offer">20% OFF</div>
              <div className="plant-price">
                <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '0.95em' }}>₹249</span>
                <span style={{ color: '#388e3c', fontWeight: 600 }}>₹199</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
          <div className="swiper-slide fade-in">
            <span className="plant-tooltip">
              <a href="snake-plant.html">
                <img src="https://ik.imagekit.io/9muwkffn9/REVAMP-MERN%20Stack/Gemini_Generated_Image_2t4f5w2t4f5w2t4f-removebg-preview.png" alt="Snake Plant" />
              </a>
              <span className="tooltip-text">Snake Plant: Low maintenance, air purifier.</span>
            </span>
            <div className="plant-info">
              <span className="plant-name">Snake Plant</span>
              <div className="plant-offer">15% OFF</div>
              <div className="plant-price">
                <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '0.95em' }}>₹349</span>
                <span style={{ color: '#388e3c', fontWeight: 600 }}>₹299</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
          <div className="swiper-slide fade-in">
            <span className="plant-tooltip">
              <a href="peace-lily.html">
                <img src="https://ik.imagekit.io/9muwkffn9/REVAMP-MERN%20Stack/Download_free_png_of_PNG_Vibrant_potted_green_houseplant_decor_by_Jubjang_about_png__green_leaves__potted_plant__flower__and_plant_15025170-removebg-preview.png" alt="Peace Lily" />
              </a>
              <span className="tooltip-text">Peace Lily: Beautiful white blooms, loves shade.</span>
            </span>
            <div className="plant-info">
              <span className="plant-name">Peace Lily</span>
              <div className="plant-offer">10% OFF</div>
              <div className="plant-price">
                <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '0.95em' }}>₹389</span>
                <span style={{ color: '#388e3c', fontWeight: 600 }}>₹349</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
          <div className="swiper-slide fade-in">
            <span className="plant-tooltip">
              <a href="spider-plant.html">
                <img src="https://ik.imagekit.io/9muwkffn9/REVAMP-MERN%20Stack/Gemini_Generated_Image_g2e3s8g2e3s8g2e3-removebg-preview.png" alt="Spider Plant" />
              </a>
              <span className="tooltip-text">Spider Plant: Hardy, great for hanging baskets.</span>
            </span>
            <div className="plant-info">
              <span className="plant-name">Spider Plant</span>
              <div className="plant-offer">25% OFF</div>
              <div className="plant-price">
                <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '0.95em' }}>₹329</span>
                <span style={{ color: '#388e3c', fontWeight: 600 }}>₹249</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
          <div className="swiper-slide fade-in">
            <span className="plant-tooltip">
              <a href="fiddle-leaf-fig.html">
                <img src="https://ik.imagekit.io/9muwkffn9/REVAMP-MERN%20Stack/Gemini_Generated_Image_hzzx1whzzx1whzzx-removebg-preview.png" alt="Fiddle Leaf Fig" />
              </a>
              <span className="tooltip-text">Fiddle Leaf Fig: Trendy, needs bright light.</span>
            </span>
            <div className="plant-info">
              <span className="plant-name">Fiddle Leaf Fig</span>
              <div className="plant-offer">30% OFF</div>
              <div className="plant-price">
                <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '0.95em' }}>₹699</span>
                <span style={{ color: '#388e3c', fontWeight: 600 }}>₹499</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="swiper-button-next custom-arrow">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </div>
        <div className="swiper-button-prev custom-arrow">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z" />
          </svg>
        </div>
      </div>

      <section className="how-we-work">
        <h2 className="hww-title">HOW WE WORK</h2>
        <div className="hww-content">
          <div className="hww-steps">
            <div className="hww-connector-segment"></div>
            <div className="hww-connector-segment"></div>
            <div className="hww-step">
              <span className="hww-dot"></span>
              <div>
                <div className="hww-step-title">Find Your Leafy Match</div>
                <div className="hww-step-desc">Explore our most-loved plants and pick the one that speaks to you.</div>
              </div>
            </div>
            <div className="hww-step">
              <span className="hww-dot"></span>
              <div>
                <div className="hww-step-title">Easy Peasy Plant Squeezy</div>
                <div className="hww-step-desc">A few quick clicks and your new green buddy is on the way.</div>
              </div>
            </div>
            <div className="hww-step">
              <span className="hww-dot"></span>
              <div>
                <div className="hww-step-title">Plants at Your Doorstep</div>
                <div className="hww-step-desc">Fresh, happy plants delivered fast – no stress, just green vibes.</div>
              </div>
            </div>
          </div>
          <div className="hww-image-wrap">
            <svg className="hww-circle-svg" width="260" height="260">
              <circle className="hww-circle-bg" cx="130" cy="130" r="124" fill="none" stroke="#c8e6c9" strokeWidth="4" />
              <circle className="hww-circle-progress" cx="130" cy="130" r="124" fill="none" stroke="#43a047" strokeWidth="4" strokeLinecap="round" strokeDasharray="779" strokeDashoffset="779" />
            </svg>
            <img className="hww-plant-img" src="https://ik.imagekit.io/9muwkffn9/REVAMP-MERN%20Stack/Gemini_Generated_Image_v3oxkav3oxkav3ox-removebg-preview.png" alt="How we work plant" />
          </div>
        </div>
      </section>

      <section className="our-store-section">
        <h2 className="our-store-title">Our store</h2>
        <div className="our-store-grid">
          <div className="plant-card">
            <img src="https://ik.imagekit.io/9muwkffn9/REVAMP-MERN%20Stack/Gemini_Generated_Image_gpys4xgpys4xgpys-removebg-preview.png" alt="Jade Plant" />
            <div className="plant-card-name">Jade Plant</div>
            <div className="star-rating">
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#e0e0e0" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div className="plant-card-desc">Succulent with thick leaves<br />Needs bright, indirect light<br />Brings good luck</div>
            <div className="plant-card-price">Rs. 350/-</div>
          </div>
          <div className="plant-card">
            <img src="https://ik.imagekit.io/9muwkffn9/REVAMP-MERN%20Stack/Gemini_Generated_Image_5z65dd5z65dd5z65-removebg-preview.png" alt="ZZ Plant" />
            <div className="plant-card-name">ZZ Plant</div>
            <div className="star-rating">
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div className="plant-card-desc">Thrives in low light<br />Very drought tolerant<br />Perfect for beginners</div>
            <div className="plant-card-price">Rs. 300/-</div>
          </div>
          <div className="plant-card">
            <img src="https://ik.imagekit.io/9muwkffn9/REVAMP-MERN%20Stack/Gemini_Generated_Image_fkxe3cfkxe3cfkxe-removebg-preview.png" alt="Boston Fern" />
            <div className="plant-card-name">Boston Fern</div>
            <div className="star-rating">
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#e0e0e0" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div className="plant-card-desc">Lush, arching fronds<br />Prefers high humidity<br />Great for hanging baskets</div>
            <div className="plant-card-price">Rs. 520/-</div>
          </div>
          <div className="plant-card">
            <img src="https://ik.imagekit.io/9muwkffn9/REVAMP-MERN%20Stack/Gemini_Generated_Image_79lwjv79lwjv79lw-removebg-preview.png" alt="Rubber Plant" />
            <div className="plant-card-name">Rubber Plant</div>
            <div className="star-rating">
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#e0e0e0" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div className="plant-card-desc">Glossy, deep green leaves<br />Removes toxins from air<br />Prefers bright, filtered light</div>
            <div className="plant-card-price">Rs. 330/-</div>
          </div>
          <div className="plant-card">
            <img src="https://ik.imagekit.io/9muwkffn9/REVAMP-MERN%20Stack/Gemini_Generated_Image_fiuo9kfiuo9kfiuo-removebg-preview.png" alt="Areca Palm" />
            <div className="plant-card-name">Areca Palm</div>
            <div className="star-rating">
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div className="plant-card-desc">Tall, feathery fronds<br />Excellent air purifier<br />Needs bright, indirect light</div>
            <div className="plant-card-price">Rs. 750/-</div>
          </div>
          <div className="plant-card">
            <img src="https://ik.imagekit.io/9muwkffn9/REVAMP-MERN%20Stack/Gemini_Generated_Image_b379tqb379tqb379-removebg-preview.png" alt="Chinese Evergreen" />
            <div className="plant-card-name">Chinese Evergreen</div>
            <div className="star-rating">
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#e0e0e0" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div className="plant-card-desc">Thrives in low light<br />Air-purifying for your home<br />Very forgiving for beginners</div>
            <div className="plant-card-price">Rs. 250/-</div>
          </div>
          <div className="plant-card">
            <img src="https://ik.imagekit.io/9muwkffn9/REVAMP-MERN%20Stack/Gemini_Generated_Image_2hdgy42hdgy42hdg-removebg-preview.png" alt="Bonsai" />
            <div className="plant-card-name">Bonsai</div>
            <div className="star-rating">
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#e0e0e0" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div className="plant-card-desc">Symbol of good fortune<br />Grows in water or soil<br />Easy to grow indoors</div>
            <div className="plant-card-price">Rs. 299/-</div>
          </div>
          <div className="plant-card">
            <img src="https://ik.imagekit.io/9muwkffn9/REVAMP-MERN%20Stack/ChatGPT%20Image%20May%204,%202025,%2012_47_25%20PM.png" alt="Bunny Ears Cactus" />
            <div className="plant-card-name">Bunny Ears Cactus</div>
            <div className="star-rating">
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg width="18" height="18" fill="#ffc107" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div className="plant-card-desc">Upright, fuzzy pads like rabbit ears. Loves bright sun. Best in pots</div>
            <div className="plant-card-price">Rs. 330/-</div>
          </div>
        </div>
        <div className="explore-more-wrap">
          <button className="explore-more-btn">Get Growing</button>
        </div>
      </section>

      <section className="faq-section">
        <h2 className="faq-title">FAQs</h2>
        <div className="faq-item">
          <div className="faq-question">What is PlantPal?<span className="faq-arrow">&#9660;</span></div>
          <div className="faq-answer">PlantPal is an online store offering a wide variety of plants for every space.</div>
        </div>
        <div className="faq-item">
          <div className="faq-question">How do I care for my plants?<span className="faq-arrow">&#9660;</span></div>
          <div className="faq-answer">Each plant comes with a care guide to help you keep it healthy and thriving.</div>
        </div>
        <div className="faq-item">
          <div className="faq-question">What payment methods do you accept?<span className="faq-arrow">&#9660;</span></div>
          <div className="faq-answer">We accept all major credit cards, PayPal, and Apple Pay.</div>
        </div>
        <div className="faq-item">
          <div className="faq-question">Do you offer international shipping?<span className="faq-arrow">&#9660;</span></div>
          <div className="faq-answer">Currently, we only ship within the country.</div>
        </div>
        <div className="faq-item">
          <div className="faq-question">Can I return a plant?<span className="faq-arrow">&#9660;</span></div>
          <div className="faq-answer">Yes, we have a 30-day return policy for all plants.</div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2 style={{ fontSize: '1.5rem', fontFamily: 'Quicksand, sans-serif', color: '#047857' }}>Newsletter</h2>
            <p style={{ color: '#065f46' }}>Subscribe to our newsletter for the latest updates.</p>
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div className="footer-section">
            <h2 style={{ fontSize: '1.5rem', fontFamily: 'Quicksand, sans-serif', color: '#047857' }}>Quick Links</h2>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#shop-plants">Shop Plants</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 style={{ fontSize: '1.5rem', fontFamily: 'Quicksand, sans-serif', color: '#047857' }}>Follow Us</h2>
            <div className="social-links">
              <a href="#" className="social-icon">
                <img src="https://ik.imagekit.io/9muwkffn9/Pinterest/facebook.png" alt="Facebook" style={{ width: '24px', height: '24px' }} />
              </a>
              <a href="#" className="social-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" style={{ width: '24px', height: '24px' }} />
              </a>
              <a href="#" className="social-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" style={{ width: '24px', height: '24px' }} />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h2 style={{ fontSize: '1.5rem', fontFamily: 'Quicksand, sans-serif', color: '#047857' }}>Contact Us</h2>
            <p style={{ color: '#065f46' }}>Email: contact@plantpal.com</p>
            <p style={{ color: '#065f46' }}>Phone: +123 456 7890</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 
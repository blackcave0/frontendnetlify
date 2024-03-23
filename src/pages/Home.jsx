function Home() {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>we are the world best it company</p>
              <h1>welcome to thapa technical</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sapiente
                voluptas sit exercitationem repudiandae aliquam cumque libero quisquam, ipsum eum
                illo facere quod, excepturi optio sequi accusamus tempore voluptatem nemo.
              </p>

              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn connect-btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn second-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero image */}
            <div className="hero-image">
              <img src="/src/assets/Welcome-bro.png" alt="hero-image" width={500} />
            </div>
          </div>
        </section>
      </main>

      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>
          <div className="div1">
            <h2>100,00</h2>
            <p>happy clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>well known developer</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>services</p>
          </div>
        </div>
      </section>

      <section className="section-hero section-hero-background">
        <div className="container grid grid-two-cols">
          {/* hero image */}
          <div className="hero-image">
            <img src="/src/assets/Welcome-bro.png" alt="hero-image" width={500} />
          </div>
          
          <div className="hero-content">
            <p>we are the world best it company</p>
            <h1>welcome to thapa technical</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sapiente voluptas
              sit exercitationem repudiandae aliquam cumque libero quisquam, ipsum eum illo facere
              quod, excepturi optio sequi accusamus tempore voluptatem nemo.
            </p>

            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn second-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;

import { useAuth } from '../store/auth';
function Services() {
  const { authServies } = useAuth();

  return (
    <>
      <section className="section-servies">
        <div className="container">
          <h1 className="main-heading">services</h1>
        </div>

        <div className="container grid grid-three-cols">
          {authServies.map((curElme, index) => {
            const { service, description, price, provider } = curElme;
            return (
              <div key={index}>
                <div className="card">
                  <div className="card-img">
                    <img
                      src="https://blush.design/api/download?shareUri=9UDnMFT5i5Zdz8ho&c=Skin_0%7Eacff00&w=800&h=800&fm=png"
                      alt="img1.png"
                      width={200}
                    />
                  </div>

                  <div className="card-details">
                    <div className="grid grid-two-cols" key={index}>
                      <p>{provider}</p>
                      <p>{price}</p>
                    </div>
                    <h2>{service}</h2>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default Services;

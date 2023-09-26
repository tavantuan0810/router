import './Service.scss';
import Rectangle3 from '../../../assets/Rectangle3.svg';
import Rectangle4 from '../../../assets/Rectangle4.svg';

const ServiceText = () => {
  return (
    <div className="service-text">
      <h3>Technical Analysis</h3>
      <h4>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        random words which do not look even slightly believable. If you are
        going
      </h4>
    </div>
  );
};

function Service() {
  return (
    <section className="service">
      <div className="service-title">
        <h3>Our Services</h3>
        <h1>Amazing Business Services</h1>
      </div>
      <div className="service-image">
        <div className="service-rectangle">
          <img src={Rectangle3} alt="5" />
          <ServiceText />
        </div>
        <div className="service-rectangle">
          <img src={Rectangle4} alt="6" />
          <ServiceText />
        </div>
      </div>
    </section>
  );
}

export default Service;

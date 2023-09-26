import './Who.scss';
import Dot3 from '../../../icons/Dot3.svg';
import image1 from '../../../assets/image1.svg';
import image2 from '../../../assets/image2.svg';

function Who() {
  return (
    <section className="who-we">
      <div className="who-we-image">
        <img src={Dot3} alt="dot-5" className="dot-5" />
        <img src={image1} alt="2" className="image-rect" />
        <img src={image2} alt="final" className="image-final" />
      </div>
      <div className="who-we-text">
        <h3>Who We Are</h3>
        <h1>Have A Project In Mind? Let Get To Work.</h1>
        <h4>
          Sed ut perspiciatis unde omnis iste natus sit voluptatem <br />
          accusantium doloremque laudantium totam rem apereaque <br />
          abillo inventore veritatis quasi architecto beatae
        </h4>
        <ul>
          <li>1. Business Planning, Strategy</li>
          <li>2. Financial Projections And Analysis</li>
          <li>3. International Business Opportunities</li>
        </ul>
      </div>
    </section>
  );
}

export default Who;

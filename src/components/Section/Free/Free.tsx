import './Free.scss';
import Rectangle9 from '../../../assets/Rectangle9.svg';

function Free() {
  return (
    <section className="free">
      <img src={Rectangle9} alt="12" />
      <h1 className="free-title">
        Get Free Consultations! We are <br />
        Ready to Work Together
      </h1>
      <button className="free-button">Get Free Consultations</button>
    </section>
  );
}

export default Free;

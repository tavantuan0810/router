import './Feature.scss';
import AppD from '../../../assets/AppD.svg';
import Cloud from '../../../assets/Cloud.svg';
import UX from '../../../assets/UX.svg';
import Dot2 from '../../../icons/Dot2.svg';

function Feature() {
  return (
    <section className="feature">
      <img src={Dot2} alt="dot-3" className="dot-3" />
      <div className="feature-title">
        <h3>CARE FEATURES</h3>
        <h1>Awesome Service With Our Tools</h1>
      </div>
      <div className="feature-grid">
        <div className="feature-item">
          <img src={AppD} alt="app" />
          <h2>App Development</h2>
          <h5>
            Helping families live intelligently means we are always working to
            bring our customers.
          </h5>
        </div>
        <div className="feature-item">
          <img src={Cloud} alt="cloud" />
          <h2>Cloud Storage</h2>
          <h5>
            Helping families live intelligently means we are always working to
            bring our customers.
          </h5>
        </div>
        <div className="feature-item">
          <img src={UX} alt="UX" />
          <h2>UX Planning</h2>
          <h5>
            Helping families live intelligently means we are always working to
            bring our customers.
          </h5>
        </div>
      </div>
    </section>
  );
}

export default Feature;

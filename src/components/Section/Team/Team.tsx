import './Team.scss';
import Dot2 from '../../../icons/Dot2.svg';
import image3 from '../../../assets/image3.svg';
import image4 from '../../../assets/image4.svg';
import image5 from '../../../assets/image5.svg';

function Team() {
  return (
    <section className="team">
      <img src={Dot2} alt="dot-6" className="dot-6" />
      <img src={Dot2} alt="dot-7" className="dot-7" />
      <div className="team-title">
        <h3>Meet Our Team</h3>
        <h2>Experience Team Members</h2>
      </div>
      <div className="team-items">
        <div className="item">
          <img src={image3} alt="1" />
          <div className="item-text">
            <h3>Robert C. Simmons</h3>
            <h4>Business Consultant</h4>
          </div>
        </div>
        <div className="item">
          <img src={image4} alt="2" />
          <div className="item-text">
            <h3>Christopher L. Wagner</h3>
            <h4>Senior Manager</h4>
          </div>
        </div>
        <div className="item">
          <img src={image5} alt="3" />
          <div className="item-text">
            <h3>Lawrence C. Dickerson</h3>
            <h4>Financial Consultant</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

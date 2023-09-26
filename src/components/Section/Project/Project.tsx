import './Project.scss';
import Rectangle5 from '../../../assets/Rectangle5.svg';
import Rectangle6 from '../../../assets/Rectangle6.svg';
import Rectangle7 from '../../../assets/Rectangle7.svg';
import Rectangle8 from '../../../assets/Rectangle8.svg';

const ItemText = () => {
  return (
    <div className="item-text">
      <h2>Technical Analysis</h2>
      <h3>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have
      </h3>
    </div>
  );
};

function Project() {
  return (
    <section className="project">
      <div className="project-title">
        <h3>Latest Project & Case</h3>
        <h2>Let Looks Our Global Projects</h2>
      </div>
      <div className="project-grid">
        <div className="item">
          <img src={Rectangle5} alt="7" />
          <ItemText />
        </div>
        <div className="item">
          <img src={Rectangle6} alt="8" />
          <ItemText />
        </div>
        <div className="item">
          <img src={Rectangle7} alt="9" />
          <ItemText />
        </div>
        <div className="item">
          <img src={Rectangle8} alt="10" />
          <ItemText />
        </div>
      </div>
    </section>
  );
}

export default Project;

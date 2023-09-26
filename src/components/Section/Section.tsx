import About from './About/About';
import Banner from './Banner/Banner';
import Feature from './Feature/Feature';
import Service from './Service/Service';
import Who from './Who/Who';
import Project from './Project/Project';
import Free from './Free/Free';
import Team from './Team/Team';
import Subscribe from './Subscribe/Subscribe';

function Section() {
  return (
    <div className="section">
      <Banner />
      <Feature />
      <About />
      <Service />
      <Who />
      <Project />
      <Free />
      <Team />
      <Subscribe />
    </div>
  );
}

export default Section;

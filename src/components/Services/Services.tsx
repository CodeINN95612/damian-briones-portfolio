import { myData } from "../../data/Mine";
import Section from "../Common/Section/Section";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import Title from "../Common/Title/Title";
import "./Services.css";

export type ServicesProps = {
  refObj: React.RefObject<HTMLElement>;
};

function Services({ refObj }: ServicesProps) {
  return (
    <Section
      refObj={refObj}
      title="SERVICES"
      subtitle={
        <>
          Specialized <span>In</span>
        </>
      }
    >
      <div className="services__card-container">
        {myData.services.map((service, i) => (
          <div key={i} className="services__card">
            <div className="services__card-img">
              <img src={`icons/${service.imgSrc}`} />
            </div>
            <div className="services__card-desc">
              <p>{service.service}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Services;

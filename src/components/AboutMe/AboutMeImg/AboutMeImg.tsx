import "./AboutMeImg.css";

function AboutMeImg(props: { src: string }) {
  return (
    <div className="about-me__img-container">
      <div className="about-me__img">
        <img src="images/personal.jpeg" />
      </div>
    </div>
  );
}

export default AboutMeImg;

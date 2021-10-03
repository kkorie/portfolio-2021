export default function About() {
  return (
    <div className="about">
      <div className="aboutme">
        <h2>About Me</h2>
        <span>안녕하세요. 프론트엔드 개발자 이리애입니다.</span><br />
        <span>알아가는 즐거움과 함께 성장하는 개발자가 되겠습니다.</span>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <div className="skills__img">
          <div>
            <span className="html5"></span>
            <p>HTML5</p>
          </div>
          <div>
            <span className="css3"></span>
            <p>CSS3</p>
          </div>
          <div>
            <span className="javascript"></span>
            <p>JavaScript</p>
          </div>
          <div>
            <span className="react"></span>
            <p>React</p>
          </div>
          <div>
            <span className="vue"></span>
            <p>Vue</p>
          </div>
          <div>
            <span className="webpack"></span>
            <p>Webpack</p>
          </div>
          <div>
            <span className="babel"></span>
            <p>babel</p>
          </div>
          <div>
            <span className="sass"></span>
            <p>SASS/SCSS</p>
          </div>
          <div>
            <span className="python"></span>
            <p>Python</p>
          </div>
        </div>
      </div>
    </div>
  );
}
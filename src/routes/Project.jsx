export default function Project() {
  return (
    <div className="project">
      <h2>Project</h2>
      <div className="project-menu">
        <div class="starbucks">
          <div className="image starbucks__image">
            <div class="darkness"></div>
            <a href="https://github.com/kkorie/starbucks" target="_blank" class="github-btn" rel="noreferrer">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://ecstatic-wright-cab539.netlify.app/" target="_blank" class="homepage-btn" rel="noreferrer">
              <i class="fas fa-home"></i>
            </a>
          </div>
        </div>
        <div class="vue3-movie-app">
          <div className="image vue3__image">
            <div class="darkness"></div>
            <a href="https://github.com/kkorie/vue3-movie-app" target="_blank" class="github-btn" rel="noreferrer">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://practical-bartik-7deccc.netlify.app" target="_blank" class="homepage-btn" rel="noreferrer">
              <i class="fas fa-home"></i>
            </a>
          </div>
        </div>
        <div class="react-movie-app">
          <div className="image react__image">
            <div class="darkness"></div>
            <a href="https://github.com/kkorie/react-movie-app" target="_blank" class="github-btn" rel="noreferrer">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://kkorie.github.io/react-movie-app/#/" target="_blank" class="homepage-btn" rel="noreferrer">
              <i class="fas fa-home"></i>
            </a>
          </div>
        </div>
        <div class="prototype-shop">
          <div className="image prototype__image">
            <div class="darkness"></div>
            <a href="https://github.com/kkorie/prototype-shop" target="_blank" class="github-btn" rel="noreferrer">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://kkorie.github.io/prototype-shop/" target="_blank"class="homepage-btn" rel="noreferrer">
              <i class="fas fa-home"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
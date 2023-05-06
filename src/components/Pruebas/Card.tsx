import styles from './Card.module.css';
import Image from 'next/image';
import Img from '../../../public/explosion.webp';

export default function PersonalCard({ children, ...props }) {
  return (
    <>


      <Image className={styles.image}
        src={Img}
        alt="Foto"
        width={100}
        height={100}
      ></Image>
      <div id="body" className="theme--dark">
     
            <div id="container">
              <div className="header">
                <div className="logo"></div>
                <label className="night-mode" htmlFor="night">
                  <i className="fa fa-moon-o"></i>
                </label>
              </div>
              <section className="left-section">
                <img className="profile-pic" src="https://avatars2.githubusercontent.com/u/8122254?s=460&u=5ba2a8137a61e51c481226c8ff6d979a715b2531&v=4" />

                <div className="profile-detail">
                  <span className="profile-maps">
                    <i className="material-icons">room</i>
                    Trento, IT
                  </span>
                  <p className="profile-name">Simone Bernabè</p>
                  <span className="profile-summary">Developer, Car Enthusiast and Modeller</span>
                  <a className="profile-cv" href="#">Download CV</a>
                </div>

                <div className="profile-pils">
                  <span className="pils"><a href="https://twitter.com/simoberny" target="_blank"><i className="fa fa-twitter"></i> Twitter</a></span>
                  <span className="pils"><a href="https://codepen.io/simoberny/" target="_blank"><i className="fa fa-codepen"></i> Codepen</a></span>
                  <span className="pils"><a href="https://dribbble.com/simoberny" target="_blank"><i className="fa fa-dribbble"></i> Dribble</a></span>
                  <span className="pils"><a href="https://www.linkedin.com/in/simone-bernab%C3%A8-6623a4114/" target="_blank"><i className="fa fa-linkedin"></i> Linkedin</a></span>
                </div>
              </section>
              <div className="front-smooth"></div>
            </div>
          </div>


        </>
        );
};


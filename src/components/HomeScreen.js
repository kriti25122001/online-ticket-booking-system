import React from "react";

const HomeScreen = () => {
  return (
    <>
      <section id="banner">
        <img src="images/1200x630wa.png" class="logo" />
        <div class="banner-text">
          <h1> PVR Cinemas</h1>
          <p> Book your's favourite movie and enjoy</p>
        </div>
      </section>
      <div id="sideNav">
        <nav>
          <ul>
            <li>
              <a href="#banner">HOME</a>
            </li>
            <li>
              <a href="#movies">MOVIES</a>
            </li>
            <li>
              <a href="#streams">STREAMS</a>
            </li>
            <li>
              <a href="#events">EVENTS</a>
            </li>
            <li>
              <a href="#plays">PLAYS</a>
            </li>
            <li>
              <a href="#testimonial">TESTIMONIAL</a>
            </li>
            <li>
              <a href="#footer">MEET US</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="menuBtn">
        <img src="images/menu.png" id="menu" />
      </div>

      <section id="movies">
        <div class="title-text">
          <p>MOVIES</p>
          <h1>All the latest movies are here</h1>
        </div>
        <div class="movies-box">
          <div class="single-movies">
            <img src="images/2pointo.jpg" />
            <div class="overlay"></div>
            <div class="movies-desc">
              <h3>2 point O</h3>
              <hr />
              <p>This movie is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-movies">
            <img src="images/a-kid-like-jake-et00057246-15-05-2017-03-21-35.jpg" />
            <div class="overlay"></div>
            <div class="movies-desc">
              <h3>A Kid Like Jake</h3>
              <hr />
              <p>This movie is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-movies">
            <img src="images/a-private-war-et00082797-30-08-2018-04-55-28.jpg" />
            <div class="overlay"></div>
            <div class="movies-desc">
              <h3>A Private War</h3>
              <hr />
              <p>This movie is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-movies">
            <img src="images/aquaman-et00052996-02-02-2017-10-15-37.jpg" />
            <div class="overlay"></div>
            <div class="movies-desc">
              <h3>Aquaman</h3>
              <hr />
              <p>This movie is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-movies">
            <img src="images/bhonsle-et00075618-11-05-2018-05-43-45.jpg" />
            <div class="overlay"></div>
            <div class="movies-desc">
              <h3>Bhonsle</h3>
              <hr />
              <p>This movie is in Hindi language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-movies">
            <img src="images/ekkees-tareeekh-et00085716-05-10-2018-04-51-12.jpg" />
            <div class="overlay"></div>
            <div class="movies-desc">
              <h3>Ekees Tareekh</h3>
              <hr />
              <p>This movie is in Hindi language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="streams">
        <div class="title-text">
          <p>STREAMS</p>
          <h1>All the latest streams are here</h1>
        </div>
        <div class="streams-box">
          <div class="single-streams">
            <img src="images/fantastic-beasts-the-crimes-of-grindelwald-et00065499-20-11-2017-06-10-21.jpg" />
            <div class="overlay"></div>
            <div class="streams-desc">
              <h3>Fantastic Beasts</h3>
              <hr />
              <p>This stream is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-streams">
            <img src="images/ghoomketu-et00076284-23-05-2018-11-09-40.jpg" />
            <div class="overlay"></div>
            <div class="streams-desc">
              <h3>Ghoomketu</h3>
              <hr />
              <p>This stream is in Hindi language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-streams">
            <img src="images/johnny-english-3-et00072464-13-03-2018-02-29-58.jpg" />
            <div class="overlay"></div>
            <div class="streams-desc">
              <h3>Johny</h3>
              <hr />
              <p>This stream is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-streams">
            <img src="images/kedarnath-et00059532-10-07-2017-04-48-38.jpg" />
            <div class="overlay"></div>
            <div class="streams-desc">
              <h3>Kedarnath</h3>
              <hr />
              <p>This stream is in Hindi language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-streams">
            <img src="images/mohalla-assi-et00015968-27-04-2018-06-23-29.jpg" />
            <div class="overlay"></div>
            <div class="streams-desc">
              <h3>Mohalla Assi</h3>
              <hr />
              <p>This stream is in Hindi language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-streams">
            <img src="images/patient-zero-et00037176-24-07-2018-01-02-22.jpg" />
            <div class="overlay"></div>
            <div class="streams-desc">
              <h3>Patient Zero</h3>
              <hr />
              <p>This stream is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="events">
        <div class="title-text">
          <p>EVENTS</p>
          <h1>All the latest events are here</h1>
        </div>
        <div class="events-box">
          <div class="single-events">
            <img src="images/puzzle-et00074430-20-04-2018-04-22-01.jpg" />
            <div class="overlay"></div>
            <div class="events-desc">
              <h3>Puzzle</h3>
              <hr />
              <p>This event is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-events">
            <img src="images/reprisal-et00078353-22-06-2018-04-34-51.jpg" />
            <div class="overlay"></div>
            <div class="events-desc">
              <h3>Reprisal</h3>
              <hr />
              <p>This event is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-events">
            <img src="images/simmba-et00066720-07-12-2017-08-09-13.jpg" />
            <div class="overlay"></div>
            <div class="events-desc">
              <h3>Simba</h3>
              <hr />
              <p>This event is in Hindi language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-events">
            <img src="images/spider-man-into-the-spider-verse-et00066988-11-12-2017-11-33-21.jpg" />
            <div class="overlay"></div>
            <div class="events-desc">
              <h3>Spider Man</h3>
              <hr />
              <p>This event is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-events">
            <img src="images/the-accidental-prime-minister-et00058175-07-06-2017-03-18-15.jpg" />
            <div class="overlay"></div>
            <div class="events-desc">
              <h3>The Accidental Prime Minister</h3>
              <hr />
              <p>This event is in Hindi language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-events">
            <img src="images/the-first-purge-et00072477-13-03-2018-04-12-24.jpg" />
            <div class="overlay"></div>
            <div class="events-desc">
              <h3>The First Purge</h3>
              <hr />
              <p>This event is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="plays">
        <div class="title-text">
          <p>PLAYS</p>
          <h1>All the latest plays are here</h1>
        </div>
        <div class="plays-box">
          <div class="single-plays">
            <img src="images/the-girl-in-the-spider-s-web-et00072273-10-03-2018-03-24-14.jpg" />
            <div class="overlay"></div>
            <div class="plays-desc">
              <h3>The Girl In The Spider</h3>
              <hr />
              <p>This play is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-plays">
            <img src="images/thugs-of-hindostan-et00046165-07-09-2016-02-46-50.jpg" />
            <div class="overlay"></div>
            <div class="plays-desc">
              <h3>Thugs Of Hindustan</h3>
              <hr />
              <p>This play is in Hindi language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-plays">
            <img src="images/transformers-6-bumblebee-et00070010-29-01-2018-05-27-30.jpg" />
            <div class="overlay"></div>
            <div class="plays-desc">
              <h3>Transformer</h3>
              <hr />
              <p>This play is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-plays">
            <img src="images/white-boy-rick-et00062532-25-09-2017-05-11-59.jpg" />
            <div class="overlay"></div>
            <div class="plays-desc">
              <h3>White Boy Rick</h3>
              <hr />
              <p>This play is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-plays">
            <img src="images/zero-et00068462-01-01-2018-06-04-40.jpg" />
            <div class="overlay"></div>
            <div class="plays-desc">
              <h3>Zero</h3>
              <hr />
              <p>This play is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
          <div class="single-plays">
            <img src="images/upgrade-et00073829-09-04-2018-03-11-01.jpg" />
            <div class="overlay"></div>
            <div class="plays-desc">
              <h3>Upgrade</h3>
              <hr />
              <p>This play is in English language</p>
              <button type="button" class="book">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial">
        <div class="title-text">
          <p>TESTIMONIAL</p>
          <h1>What Client Says</h1>
        </div>
        <div class="testimonial-row">
          <div class="testimonial-col">
            <div class="user">
              <img src="images/img-1.jpg" />
              <div class="user-info">
                <h4>
                  KEN NORMAN <i class="fa fa-twitter"></i>
                </h4>
                <small>@kennorman</small>
              </div>
            </div>
            <p>
              This site definitely appeals to the average person because the
              layout is so simple but very VERY effective.There are minimum
              graphics, and the graphics there are small and fast-loading.
            </p>
          </div>
          <div class="testimonial-col">
            <div class="user">
              <img src="images/img-2.jpg" />
              <div class="user-info">
                <h4>
                  LIARA KARIAN <i class="fa fa-twitter"></i>
                </h4>
                <small>@liarakarian</small>
              </div>
            </div>
            <p>
              It is easy to navigate this site because all of the links are
              right there on the left hand side, and people without
              image-loading browsers can access the links via the text at the
              bottom which is very handy and essential for a good site.
            </p>
          </div>
          <div class="testimonial-col">
            <div class="user">
              <img src="images/img-3.jpg" />
              <div class="user-info">
                <h4>
                  RICKY DANIAL <i class="fa fa-twitter"></i>
                </h4>
                <small>@rickydanial</small>
              </div>
            </div>
            <p>
              The content flows very well and is well written. All of the
              information is in the appropriate place.The layout makes anyone
              feel comfortable because it is so well done and clean looking.
            </p>
          </div>
        </div>
      </section>

      <section id="footer">
        <img src="images/footer-img.png" class="footer-img" />
        <div class="title-text">
          <p>CONTACT</p>
          <h1>Visit Movie Complex Today</h1>
        </div>
        <div class="footer-row"></div>
        <div class="footer-left">
          <h1>Opening Hours</h1>
          <p>
            <i class="fa fa-clock-o"></i>Monday to Friday - 8:00 am to 12:00 pm
          </p>
          <p>
            <i class="fa fa-clock-o"></i>Saturday and Sunday - 10:00 am to 9:00
            pm
          </p>
        </div>
        <div class="footer-right">
          <h1>Get In Touch</h1>
          <p>
            #30 abc Colony, xyz city IN<i class="fa fa-map-marker"></i>
          </p>
          <p>
            example@gmail.com<i class="fa fa-paper-plane"></i>
          </p>
          <p>
            +91-1234567890<i class="fa fa-phone"></i>
          </p>
        </div>
        <div class="social-links">
          <i class="fa fa-facebook"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          <i class="fa fa-youtube-play"></i>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;

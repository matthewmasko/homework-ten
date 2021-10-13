var MODEL = (function(){
    var homeContent = `<section class="hero">
    <div class="hero-callout">
      <p>travel-fly</p>
    </div>
    <div class="hero-text">
      <div class="hero-ipsum">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
        aliquid minus nemo sed est.
      </div>
    </div>
    <div class="hero-button">
      <button>READ MORE</button>
    </div>
  </section>

  <section class="features">
    <div class="feature-locations">
      <div class="feature-photoOne">
        <div class="feature-title">ISRAEL</div>
        <div class="feature-price">from $1000</div>
        <div class="feature-button">
          <button>LEARN MORE</button>
        </div>
      </div>

      <div class="feature-photoTwo">
        <div class="feature-title">U.S.A.</div>
        <div class="feature-price">from $1500</div>
        <div class="feature-button">
          <button>LEARN MORE</button>
        </div>
      </div>
      <div class="feature-photoThree">
        <div class="feature-title">AUSTRALIA</div>
        <div class="feature-price">from $1800</div>
        <div class="feature-button">
          <button>LEARN MORE</button>
        </div>
      </div>
    </div>
  </section>

  <section class="booking">
    <div class="booking-wrapper">
      <h1>Booking form</h1>
      <div class="info-inputs">
        <div class="inputLeft">
          <label for="name">name...</label>
          <input type="text" />
        </div>
        <div class="inputRight">
          <label for="email">email...</label>
          <input type="text" />
        </div>
      </div>
      <div class="info-inputs">
        <div class="inputLeft">
          <label for="country">country...</label>
          <input type="text" />
        </div>
        <div class="inputRight">
          <label for="hotel">hotel...</label>
          <input type="text" />
        </div>
      </div>
      <div class="check-in-out">
        <div class="in-out-label">
          <label for="check-in">Check-in</label>
        </div>
        <div class="in-out-input">
          <img src="images/calendar.svg" alt="" />
          <input type="text" />
        </div>
      </div>
      <div class="check-in-out">
        <div class="in-out-label">
          <label for="check-out">Check-out</label>
        </div>
        <div class="in-out-input">

          <img src="images/calendar.svg" alt="" />
          <input type="text" />
        </div>
      </div>

      <div class="people-rooms">
        <div class="pr">
          <div class="prLabel">
            <label for="adults">Adult</label>
          </div>
          <div class="prInput">
            <img src="images/down-arrow.svg" alt="" />
            <input type="text" />
          </div>
          <div class="prLabel">
            <label for="children">Children</label>
          </div>
          <div class="prInput">
            <img src="images/down-arrow.svg" alt="" />
            <input type="text" />
          </div>

          <div class="prLabel">
            <label for="rooms">Rooms</label>
          </div>
          <div class="prInput">
            <img src="images/down-arrow.svg" alt="" />
            <input type="text" />
          </div>
        </div>
      </div>

      <div class="message">
        <label for="message">message...</label>
        <input type="text" />
      </div>
      <div class="sub-button">
        <button>SUBMIT</button>
      </div>
    </div>
  </section>`;
    var aboutContent = `<div class="nav-border"></div>
    <section class="about">
        <div class="about-top">
            <div class="top-title">
                <h1>ABOUT:</h1>
            </div>
            <div class="top-text">
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
            </div>
        </div>
    
        <div class="about-bottom">
            <div class="bottom-title">
                <h1>CLIENT QUOTES:</h1>
            </div>
            <div class="client-container">
                <div class="client-photo">
                  <img src="images/about-client-01.jpg" alt="client: Miranda Brown">
                </div>
                <div class="client-quote">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    <span>- Miranda Brown</span>
                </div>
            </div>
            <div class="client-container">
              <div class="client-photo">
                <img src="images/about-client-02.jpg" alt="client: Miranda Brown">
              </div>
              <div class="client-quote">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  
                  <span>- Johnathan wes</span>
              </div>
          </div>
        </div>
    
    </section>`;
    var toursContent = `
    <div class="nav-border"></div>
    <section class="tour-main">
    <div class="tour-banner">
      TOURS :
    </div>
   
    <div class="tours-container">
      <div class="tour-photo">
       <img src="images/tour/tour-01.jpg" alt=" Israel">
       <div class="tour-text">
        <div class="tour-country">
          Israel
        </div>
        <div class="tour-price">from $1000</div>
        <div class="tour-button">
         <button><a href="israel.html">LEARN MORE</a></button>
        </div>
       </div>
      </div>
   
      <div class="tour-photo">
       <img src="images/tour/tour-02.jpg" alt="U.S.A.">
       <div class="tour-text">
        <div class="tour-country">
          U.S.A.
        </div>
        <div class="tour-price">from $1500</div>
        <div class="tour-button">
         <button><a href="usa.html">LEARN MORE</a></button>
        </div>
       </div>
      </div>
   
      <div class="tour-photo">
       <img src="images/tour/tour-03.jpg" alt="Australia">
       <div class="tour-text">
        <div class="tour-country">
          Australia
        </div>
        <div class="tour-price">from $1800</div>
        <div class="tour-button">
         <button><a href="australia.html">LEARN MORE</a></button>
        </div>
       </div>
      </div>
    </div>
   
    <div class="tours-container">
     <div class="tour-photo">
      <img src="images/tour/tour-04.jpg" alt="New Zealand">
      <div class="tour-text">
       <div class="tour-country">
         New Zealand
       </div>
       <div class="tour-price">from $1200</div>
       <div class="tour-button">
         <button><a href="new-zealand.html">LEARN MORE</a></button>
       </div>
      </div>
     </div>
   
     <div class="tour-photo">
      <img src="images/tour/tour-05.jpg" alt="France">
      <div class="tour-text">
       <div class="tour-country">
         France
       </div>
       <div class="tour-price">from $2500</div>
       <div class="tour-button">
         <button><a href="france.html">LEARN MORE</a></button>
       </div>
      </div>
     </div>
   
     <div class="tour-photo">
      <img src="images/tour/tour-06.jpg" alt="Egypt">
      <div class="tour-text">
       <div class="tour-country">
         Egypt
       </div>
       <div class="tour-price">from $900</div>
       <div class="tour-button">
         <button><a href="egypt.html">LEARN MORE</a></button>
       </div>
      </div>
     </div>
   </div>
   
   <div class="tours-container">
     <div class="tour-photo">
      <img src="images/tour/tour-07.jpg" alt="Japan">
      <div class="tour-text">
       <div class="tour-country">
         Japan
       </div>
       <div class="tour-price">from $1300</div>
       <div class="tour-button">
         <button><a href="japan.html">LEARN MORE</a></button>
       </div>
      </div>
     </div>
   
     <div class="tour-photo">
      <img src="images/tour/tour-08.jpg" alt="Canada">
      <div class="tour-text">
       <div class="tour-country">
         Canada
       </div>
       <div class="tour-price">from $2000</div>
       <div class="tour-button">
         <button><a href="canada.html">LEARN MORE</a></button>
       </div>
      </div>
     </div>
   
     <div class="tour-photo">
      <img src="images/tour/tour-09.jpg" alt="U.A.E.">
      <div class="tour-text">
       <div class="tour-country">
         U.A.E.
       </div>
       <div class="tour-price">from $3000</div>
       <div class="tour-button">
         <button><a href="uae.html">LEARN MORE</a></button>
       </div>
      </div>
     </div>
   </div>
    
   
   </section>`;
    var specialOffersContent = `<div class="nav-border"></div>

    <div class="special-offers-wrapper">
    <div class="offers-title">
        SPECIAL OFFER(S):
    </div>
    <div class="place-container">
        <div class="special-photo">
            <img src="images/special-offer-01.jpg" alt="">
        </div>
        <div class="place-text">
            <div class="special-title">BARCELONA, SPAIN</div>
            <div class="special-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
            <div class="special-button">
                <button>LEARN MORE</button>
            </div>
        </div>
    </div>
    <div class="place-container">
        <div class="special-photo">
            <img src="images/special-offer-02.jpg" alt="">
        </div>
        <div class="place-text">
            <div class="special-title">BANGKOK, THAILAND</div>
            <div class="special-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
            <div class="special-button">
                <button>LEARN MORE</button>
            </div>
        </div>
    </div>
    </div>
    
    <footer>
        <div class="footer">
          <div class="logo">
            <div class="title-box">travel-fly</div>
          </div>
          <div class="copyright">
            Copyright 2019 travel-fly. All rights reserved.
          </div>
          <div class="social">
            <img src="images/facebook-3-16.png" alt="" />
            <img src="images/instagram-16.png" alt="" />
            <img src="images/twitter-16.png" alt="" />
          </div>
        </div>`;
        var blogContent = `<div class="nav-border"></div>

        <div class="blog-wrapper">
        <div class="blog-title">
            BLOG:
        </div>
        <div class="blog-container">
        <div class="blog-date">
          <div class="date">
            <div class="number">06</div>
            <div class="month">JUN</div>
          </div>
        </div>
        <div class="blog-photo">
          <img src="images/blog.jpg" alt="blog photo">
        </div>
        </div>
        <div class="blog-text">
          <h1>Sed et persipiatis unde omnis iste natus</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </div>
        
        <div class="blog-container">
          <div class="blog-date">
            <div class="date">
              <div class="number">23</div>
              <div class="month">JUl</div>
            </div>
          </div>
          <div class="blog-photo">
            <img src="images/blog.jpg" alt="blog photo">
          </div>
          </div>
          <div class="blog-text">
            <h1>Sed et persipiatis unde omnis iste natus</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          </div>
        </div>`;
        var contactContent = `<div class="nav-border"></div>

        <div class="contact-wrapper">
        <div class="contact-title">
            CONTACT US:
        </div>
        <div class="contact-container">
          <div class="map">
            <img src="images/Screen Shot 2021-10-01 at 9.45.05 PM.png" alt="location">
          </div>
        <div class="form">
            <input type="text">
            <input type="text">
            <input type="text">
              <input type="text">
            </div>
            </div>
            <div class="contact-info">
              <div class="address">
                travel-fly Inc. 
                <br>
        8901 Marmora Road,
        <br>
        Glasgow, D04 89GR.
        <br>
        Freephone:+1 800 559 6580
        <br>
        Telephone:+1 800 603 6035
        <br>
        FAX:+1 800 889 9898
        <br>
        E-mail: mail@travelfly.org
              </div>
              <div class="button">
                <button>SEND MESSAGE</button>
              </div>
            </div>
            </div>`;

    var _changePageContent = function(pageName) {
        let contentName = pageName + "Content";
        $("#app").html(eval(contentName));

    };

    return {
        changePageContent: _changePageContent,
    }

})();
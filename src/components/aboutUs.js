import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AboutUs(props) {
  const [info, setInfo] = useState([]);
  // const [socials, setSocials] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    axios
      .get('https://sheelpriy.github.io/aboutUs.json')
      .then((response) => {
        setInfo(response.data.aboutUs);
        // setSocials(response.data.socials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="FAQ">
      <h1 style={styles.center}>About Us</h1>
      {info.map((faq, index) => {
        return (
          <div
            key={index}
            className="faq fadeInUp"
            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
          >
            <h2 className="question">{faq.question}</h2>
            <h2
              className="answer"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            ></h2>
          </div>
        );
      })}
      <div
        key={999}
        className="faq fadeInUp"
        style={{ animationDelay: `${0.5 + info.length * 0.1}s` }}
      >
        <h2 className="question">What Happens If You Get Coronavirus?</h2>
        <h2 className="answer"> Check out this impressive animation video to understand how Corona virus act on your body.</h2>
      </div>
      <div style={{width:"500px", margin:" 15px auto"}} >
        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/5DGwOJXSxqg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
    // <p>lets see what happens now. asfkskfhs dfksdafhlshdf sfjkasldfhashdf s fasdhjkf</p>
  );
}

const styles = {
  center: {
    textAlign: "center"
  }
}

export default AboutUs;

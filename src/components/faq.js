import React, {useState, useEffect} from 'react';
import axios from 'axios';

function FAQ(props) {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    getFAQs();
  }, []);

  const getFAQs = () => {
    axios
      .get('https://api.covid19india.org/faq.json')
      .then((response) => {
        setFaq(response.data.faq);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="FAQ">
      {faq.map((faq, index) => {
        return (
          <div
            key={index}
            className="faq fadeInUp"
            style={{animationDelay: `${0.5 + index * 0.1}s`}}
          >
            <h2 className="question">{faq.question}</h2>
            <h2
              className="answer"
              dangerouslySetInnerHTML={{__html: faq.answer}}
            ></h2>
          </div>
        );
      })}
      <div
            key={999}
            className="faq fadeInUp"
            style={{animationDelay: `${0.5 + faq.length * 0.1}s`}}
          >
            <h2 className="question">What Happens If You Get Coronavirus?</h2>
            <h2 className="answer"> Check out this impressive animation video to understand how Corona virus act on your body.</h2>
          </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5DGwOJXSxqg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default FAQ;

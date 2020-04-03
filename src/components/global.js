import React from 'react';

function Global(props) {
  // const [faq, setFaq] = useState([]);

  // useEffect(() => {
  //   getFAQs();
  // }, []);

  // const getFAQs = () => {
  //   axios
  //     .get('https://api.covid19india.org/faq.json')
  //     .then((response) => {
  //       setFaq(response.data.faq);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <>
      <span style={styles.waitingMessage}>
        {' '}
        It may take some time to load the data, Please wait.
      </span>
      <iframe
        src="https://coronavirus.thebaselab.com/"
        height="800"
        width="100%"
      ></iframe>
    </>
  );
}

const styles = {
  waitingMessage: {
    'font-family': 'sans-serif',
    'font-size': '10px',
    padding: '5px 10px',
    color: '#4d5d4d',
  },
};

export default Global;

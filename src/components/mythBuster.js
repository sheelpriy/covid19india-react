import React from 'react';

function MythBuster(props) {
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
      <iframe
        src="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters"
        height="800"
        width="100%"
      ></iframe>
    </>
  );
}

export default MythBuster;

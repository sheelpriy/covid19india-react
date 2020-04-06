import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MbCard from './subComponents/mbCard';
import mythsJson from '../myths.json';
function MythBuster(props) {
  const [myths, setMyths] = useState([]);

  useEffect(() => {
    console.log('-->', mythsJson);
    getMyths();
  }, []);

  const getMyths = () => {
    axios
      .get('https://sheelpriy.github.io/myths.json')
      .then((response) => {
        console.log('data', response.data);
        setMyths(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // setMyths(mythsJson);
  };

  const getKey = (myth) => myth.name;

  return (
    // <MbCard items={myths}></MbCard>
    <>
      {// myths.map((myth, i)=> console.log(myth))
      myths.map(function (myth) {
        return <MbCard key={getKey(myth)} myth={myth}></MbCard>;
      })}
    </>
  );
}

export default MythBuster;

import React from 'react';

function MbCard(myth, key) {
  console.log('myths', myth);
  return (
    <>
      <div style={styles.wrapper} key={myth.myth.name}>
        <h2 style={styles.myth}>
          <span style={styles.count}> MYTH #{myth.myth.id}: </span>
          {myth.myth.question}
        </h2>
        <h3 style={styles.buster}>
          <span style={{fontWeight: 600}}>Buster :</span> {myth.myth.answer}
        </h3>
        <img src={'../mb-old.png'} style={styles.image}></img>
      </div>

      {/* <div key={myth.myth.name}>{myth.myth.question}-{myth.myth.name} </div> */}
    </>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '15px',
    padding: '15px',
    marginBottom: '50px',
  },
  myth: {
    color: '#ce6665',
  },
  buster: {
    fontFamily: 'sans-serif',
    textTransform: 'inherit',
    color: '#012d01',
  },
  image: {
    width: '100%',
  },
  count: {
    fontFamily: 'sans-serif',
    fontWeight: 500,
    color: '#676565',
  },
};

export default MbCard;

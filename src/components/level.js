import React, {useState, useEffect} from 'react';

function Level(props) {
  const [data, setData] = useState(props.data);
  const [confirmed, setConfirmed] = useState(0);
  const [active, setActive] = useState(0);
  const [recoveries, setRecoveries] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [header, setHeader] = useState(props.data);

  useEffect(() => {
    // console.log('props', props);
    setData(props.data);
  }, [props, props.data]);

  useEffect(() => {
    const parseData = () => {
      let confirmed = 0;
      let active = 0;
      let recoveries = 0;
      let deaths = 0;
      data.forEach((state, index) => {
        if (index !== 0) {
          confirmed += parseInt(state.confirmed);
          active += parseInt(state.active);
          recoveries += parseInt(state.recovered);
          deaths += parseInt(state.deaths);
        }
      });
      setConfirmed(confirmed);
      setActive(active);
      setRecoveries(recoveries);
      setDeaths(deaths);
      setHeader(props.data[0]);
    };
    parseData();
  }, [data, props.data]);

  return (
    <div className="Level fadeInUp" style={{animationDelay: '0.8s'}}>
      <div className="level-item is-cherry">
        <h5>Confirmed </h5>
        <h4>
          [
          {header
            ? header.deltaconfirmed >= 0
              ? '+' + header.deltaconfirmed
              : '+0'
            : ''}
          ]
        </h4>
        <h1>{confirmed} </h1>
      </div>

      <div className="level-item is-blue">
        <h5 className="heading">Active</h5>
        <h4>&nbsp;</h4>
        {/* <h4>[{props.deltas ? props.deltas.confirmeddelta-(props.deltas.recovereddelta+props.deltas.deceaseddelta) >=0 ? '+'+(props.deltas.confirmeddelta-(props.deltas.recovereddelta+props.deltas.deceaseddelta)).toString() : '+0' : ''}]</h4>*/}
        <h1 className="title has-text-info">{active}</h1>
      </div>

      <div className="level-item is-green">
        <h5 className="heading">Recovered</h5>
        <h4>
          [
          {header
            ? header.deltarecovered >= 0
              ? '+' + header.deltarecovered
              : '+0'
            : ''}
          ]
        </h4>
        <h1 className="title has-text-success">{recoveries} </h1>
      </div>

      <div className="level-item is-gray">
        <h5 className="heading">Deceased</h5>
        <h4>
          [
          {header
            ? header.deltadeaths >= 0
              ? '+' + header.deltadeaths
              : '+0'
            : ''}
          ]
        </h4>
        <h1 className="title has-text-grey">{deaths}</h1>
      </div>
    </div>
  );
}

export default Level;

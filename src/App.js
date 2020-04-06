import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Icon from 'react-feather';

import './App.scss';

import Home from './components/home';
import Navbar from './components/navbar';
import Links from './components/links';
// import Cluster from './components/cluster';
import FAQ from './components/faq';
import Banner from './components/banner';
// import PatientDB from './components/patientdb';
import Global from './components/global';
import MythBuster from './components/mythBuster';

const history = require('history').createBrowserHistory;

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
    },
    // {
    //   pageLink: '/patientsDB',
    //   view: PatientDB,
    //   displayName: 'Patients DB',
    //   animationDelayForNavbar: 0.3,
    // },
    {
      pageLink: '/Global',
      view: Global,
      displayName: 'Global',
      animationDelayForNavbar: 0.4,
    },
    {
      pageLink: '/MythBuster',
      view: MythBuster,
      displayName: 'Myth Busters',
      animationDelayForNavbar: 0.4,
    },
    // {
    //   pageLink: '/clusters',
    //   view: Cluster,
    //   displayName: 'Clusters',
    //   animationDelayForNavbar: 0.4,
    // },
    {
      pageLink: '/links',
      view: Links,
      displayName: 'Links',
      animationDelayForNavbar: 0.5,
    },
    {
      pageLink: '/faq',
      view: FAQ,
      displayName: 'FAQ',
      animationDelayForNavbar: 0.6,
    },
  ];

  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              <Navbar pages={pages} />
              <Banner />
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />
                  );
                })}
              </Switch>
            </div>
          )}
        />
      </Router>

      <footer className="fadeInUp" style={{animationDelay: '2s'}}>
        {/* <img
          src="/icon.png"
          alt="http://cov19india.com | Coronavirus cases live dashboard"
        />*/}

        <h5>We stand with everyone fighting on the frontlines</h5>
        <div className="link">
          <a href="https://github.com/covid19india">covid19india</a>
        </div>
        <a
          href="https://github.com/covid19india/covid19india-react"
          className="button github"
        >
          <Icon.GitHub />
          <span>Open Sourced on GitHub</span>
        </a>
        <a
          className="button excel"
          href="https://bit.ly/patientdb"
          target="_noblank"
          style={style.hide}
        >
          <Icon.Database />
          <span>Crowdsourced Patient Database&nbsp;</span>
        </a>
        <a
          href="https://twitter.com/covid19indiaorg"
          target="_noblank"
          className="button twitter"
          style={{justifyContent: 'center', display: 'none'}}
        >
          <Icon.Twitter />
          <span>View updates on Twitter</span>
        </a>
        <a
          href="https://bit.ly/covid19crowd"
          className="button telegram"
          target="_noblank"
          style={style.hide}
        >
          <Icon.MessageCircle />
          <span>Join Telegram to Collaborate!</span>
        </a>
        <p style={style.inspired}>Inpired by https://www.covid19india.org/</p>
      </footer>
    </div>
  );
}

const style = {
  inspired: {
    display: 'block',
    fontFamily: 'sans-serif',
    fontSize: '10px',
    color: '#4179a9',
  },
  hide: {
    display: 'none',
  },
};
export default App;

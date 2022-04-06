import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import $ from 'jquery';
import React, { useState, useEffect } from 'react';

import { setCompetitionsData } from './actions';
import { setCompetitionData } from './actions';
import { setMatchData } from './actions';

import Main from './components/Main';

function App() {

  const token = "141056d3e3764f27819234a1272de7c0";

  const dispatch = useDispatch();

  const [mainState, setMainState] = useState("home");
  const [fetch, setFetch] = useState("false");

  const comp = useSelector(state => state.competitionData);
  const match = useSelector(state => state.matchData);

  const breadcrumbNav = (e) => {
    let url = "/";

    switch (e.target.dataset.crumbtype) {
      case "home":
        setMainState("home");
        dispatch(setCompetitionData({ competition: { name: "" } }));
        dispatch(setMatchData({ match: { homeTeam: { name: "" }, awayTeam: { name: "" } } }));
        setFetch("false");
        break;
      case "competition":
        url += e.target.dataset.crumb;
        setMainState("competition");
        dispatch(setMatchData({ match: { homeTeam: { name: "" }, awayTeam: { name: "" } } }));
        setFetch("comp");
        break;
      case "match":
        url = window.location.href;
        setMainState("match");
        setFetch("match");
        break;
      default:
        setMainState("home");
        break;
    }
    window.history.replaceState({ url }, url, url);
  }

  const selectCompetition = (props) => {
    $.ajax({
      headers: { 'X-Auth-Token': token },
      url: `https://api.football-data.org/v2/competitions/${props.id}/matches`,
      dataType: 'json',
      type: 'GET',
    }).done(function (response) {
      dispatch(setCompetitionData(response));
      let url = "/";
      url += response.competition.name;
      window.history.replaceState({ url }, url, url);
      setMainState("competition");
      setFetch("comp");
    });
  }

  const selectMatch = (props) => {
    $.ajax({
      headers: { 'X-Auth-Token': token },
      url: `https://api.football-data.org/v2/matches/${props.match.id}`,
      dataType: 'json',
      type: 'GET',
    }).done(function (response) {
      dispatch(setMatchData(response));
      let url = "/";
      url += response.match.competition.name + response.match.homeTeam.name + '_vs_' + response.match.awayTeam.name;
      window.history.replaceState({ url }, url, url);
      setMainState("match");
      setFetch("match");
    });
  }

  const intFunc = () => {
    selectCompetition(comp.competition);
  }

  const intFunc2 = () => {
    selectMatch(match);
  }

  useEffect(() => {
    let twoMinFetch = null;
    let oneMinFetch = null;
    if (fetch === "comp") {
      twoMinFetch = setInterval(intFunc, 120000);
    }
    if (fetch === "match") {
      oneMinFetch = setInterval(intFunc2, 60000);
    }
    return () => {
      clearInterval(twoMinFetch);
      clearInterval(oneMinFetch);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetch]);

  useEffect(() => {
    $.ajax({
      headers: { 'X-Auth-Token': token },
      url: 'http://api.football-data.org/v2/competitions/?plan=TIER_ONE',
      dataType: 'json',
      type: 'GET',
    }).done(function (response) {
      dispatch(setCompetitionsData(response));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header>Champ check</header>
      <div className="breadcrumbCont">
        <div onClick={breadcrumbNav} data-crumbtype='home' data-crumb='' className='breadcrumb'>Home</div>
        <div className={`${comp.competition.name === "" ? 'displayNone' : ''}`}>{'->'}</div>
        <div onClick={breadcrumbNav} data-crumbtype='competition' data-crumb={comp.competition.name} className={`breadcrumb ${comp.competition.name === "" ? 'displayNone' : ''}`}>{comp.competition.name}</div>
        <div className={`${match.match.homeTeam.name === "" ? 'displayNone' : ''}`}>{'->'}</div>
        <div onClick={breadcrumbNav} data-crumbtype='match' data-crumb={match.match.homeTeam.name + '_vs_' + match.match.awayTeam.name} className={`breadcrumb ${match.match.homeTeam.name === "" ? 'displayNone' : ''}`}>{match.match.homeTeam.name + '_vs_' + match.match.awayTeam.name}</div>
      </div>
      <Main
        setMainState={setMainState}
        mainState={mainState}
        selectCompetition={selectCompetition}
        selectMatch={selectMatch}
      ></Main>
    </div>
  );
}

export default App;

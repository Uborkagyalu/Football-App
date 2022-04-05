import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import $ from 'jquery';
import React, { useEffect } from 'react';

import { setFootballData } from './actions';

function App() {

  const dispatch = useDispatch();

  const data = useSelector(state => state.footballData);

  useEffect(() => {
    $.ajax({
      headers: { 'X-Auth-Token': '141056d3e3764f27819234a1272de7c0' },
      url: 'http://api.football-data.org/v2/competitions/',
      dataType: 'json',
      type: 'GET',
    }).done(function (response) {
      dispatch(setFootballData(response));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {data.competitions.map((d) => {
        return <div>{d.name}</div>
      })}
    </div>
  );
}

export default App;

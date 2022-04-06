import { useSelector } from 'react-redux';

import Competition from './Competition';
import Match from './Match';
import MatchDataSheet from './MatchDataSheet';

const Main = (props) => {

    const data = useSelector(state => state.competitionsData);
    const comp = useSelector(state => state.competitionData);
    const match = useSelector(state => state.matchData);

    switch (props.mainState) {
        case "home":
            return (
                data.competitions.map((d) => {
                    return <Competition
                        key={d.id}
                        setMainState={props.setMainState}
                        data={d}
                        selectCompetition={props.selectCompetition}
                        selectMatch={props.selectMatch}
                    ></Competition>
                })

            );
        case "competition":
            return (
                <div>
                    <div>
                        {comp.matches.filter(match => match.status === "LIVE").map((m) => {
                            return <Match
                                key={m.id}
                                setMainState={props.setMainState}
                                match={m}
                                selectCompetition={props.selectCompetition}
                                selectMatch={props.selectMatch}
                            ></Match>
                        })}
                    </div>
                    <div>
                        {comp.matches.filter(match => match.status === "IN_PLAY").map((m) => {
                            return <Match
                                key={m.id}
                                setMainState={props.setMainState}
                                match={m}
                                selectCompetition={props.selectCompetition}
                                selectMatch={props.selectMatch}
                            ></Match>
                        })}
                    </div>
                    <div>
                        {comp.matches.filter(match => match.status === "SCHEDULED").map((m) => {
                            return <Match
                                key={m.id}
                                setMainState={props.setMainState}
                                match={m}
                                selectCompetition={props.selectCompetition}
                                selectMatch={props.selectMatch}
                            ></Match>
                        })}
                    </div>
                    <div>
                        {comp.matches.filter(match => match.status === "PAUSED").map((m) => {
                            return <Match
                                key={m.id}
                                setMainState={props.setMainState}
                                match={m}
                                selectCompetition={props.selectCompetition}
                                selectMatch={props.selectMatch}
                            ></Match>
                        })}
                    </div>
                    <div>
                        {comp.matches.filter(match => match.status === "POSTPONED").map((m) => {
                            return <Match
                                key={m.id}
                                setMainState={props.setMainState}
                                match={m}
                                selectCompetition={props.selectCompetition}
                                selectMatch={props.selectMatch}
                            ></Match>
                        })}
                    </div>
                    <div>
                        {comp.matches.filter(match => match.status === "FINISHED").map((m) => {
                            return <Match
                                key={m.id}
                                setMainState={props.setMainState}
                                match={m}
                                selectCompetition={props.selectCompetition}
                                selectMatch={props.selectMatch}
                            ></Match>
                        })}
                    </div>
                </div>
            );
        case "match":
            return (
                <MatchDataSheet
                    match={match}
                ></MatchDataSheet>


            );
        default:
            props.setMainState("home");
    }
}

export default Main;
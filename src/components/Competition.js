
const Competition = (props) => {

    const clickHandler = () => {
        props.selectCompetition(props.data);
    }

    return (
        <div className='competition' onClick={clickHandler}>{props.data.name}</div>
    )
}

export default Competition;
import '../styles/buttonCalc.css';

export default function EqualsButton(props){
    return(
        <button className={props.cssButton} onClick={() => props.click()}>{props.character}</button>
    );
}
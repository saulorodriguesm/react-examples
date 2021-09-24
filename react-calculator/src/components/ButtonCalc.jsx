import '../styles/buttonCalc.css';

//Componente de função para os botões da calculadora
//O Componente recebe uma props que define seu css para uso no display grid,
//Também recebe uma props que é utilizada em na hook state e uma props para o caracetere
export default function ButtonCalc(props){
    return(
        <button className={props.cssButton} onClick={() => props.click(props.character)}>{props.character}</button>
    );
}
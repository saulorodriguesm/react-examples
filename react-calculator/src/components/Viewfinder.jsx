import React from 'react'
import '../styles/viewFinder.css';

//Componente para o visor da calculadora que renderiza um input apenas de leitura
//O input recebe como valor uma props usada como parâmetro na função que obtém os valores
class Viewfinder extends React.Component {
    render() {
        return <input type="text" readOnly value={this.props.value}></input>
    }
}

export default Viewfinder

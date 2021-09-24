import '../css/Modal.css';

//Componente de função para o modal
export default function Modal({display, value, click}){
    return(
        <div id="modal" className={display ? "":"hide"}>
            <div className="content">
                <div className="header">
                    <h1>Resultados</h1>
                    <span className="material-icons" onClick={()=> click(false)}>close</span>
                </div>
                <div className="results">
                    <ul>
                        <li>Rua: {value.logradouro}</li>
                        <li>Bairro: {value.bairro}</li>
                        <li>Cidade: {value.localidade}</li>
                        <li>Estado: {value.uf}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
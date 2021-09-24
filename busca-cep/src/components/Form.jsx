import '../css/Form.css';
import InputMask from 'react-input-mask'; //Máscara para input
//Componente de função para o formulário
export default function Form({evento, cep}){
    return(
       <form onSubmit={(e) => evento(e)}>
           <h1>Busca CEP</h1>
           <div className="field">
               <label htmlFor="description">CEP</label>
               <InputMask type="text" name="cep" mask="99999-999" onChange={e =>cep(e.target.value)}/>
           </div>
           <input type="submit" value="Buscar" className="inputButton"/>
       </form>
    );
}
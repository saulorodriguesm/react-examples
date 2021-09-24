import '../css/Select.css';

//Componente de função para o formulário
export default function Select({type, find, title, value, place}){
    return(
        <div className="select">
            <label htmlFor="valor">{title}</label>
            <select onChange={e =>type(e.target.value)} value={value}>
            <option value="" disabled hidden>{place}</option>
            {find?.map((item, index) =>(
                <option key={index} value={item.codigo}>{item.nome}</option>
            ))}
            </select>
        </div>
    );
}
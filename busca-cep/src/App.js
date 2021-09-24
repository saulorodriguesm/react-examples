import React from 'react';
import './css/Global.css';
import { useState } from 'react'; //Importação do UseState
import Form from './components/Form';
import Modal from './components/Modal';

function App() {

  const [cep, setCep] = useState(""); //state para obter o cep
  const [data, setData] = useState({ //state para os dados da requisição do CEP
bairro: "",
cep: "",
complemento: "",
ddd: "",
gia: "",
ibge: "",
localidade: "",
logradouro: "",
siafi: "",
uf: ""
});
  const [css, setCss] = useState(false); // state para controlar o css do componente modal
  const axios = require('axios'); //chamada do axios
  var finalcep //variável para pegar apenas os números do cep

  function searchCep(event){
    event.preventDefault(); //previnir comportamento padrão do form
    const regexCep =/[0-9]{5}-[0-9]{3}/ //validação regex para o cep

    if(cep.trim() === ""){
      alert("Preencha com o CEP")
    } else{
      if (regexCep.test(cep)) { //testar padrão de cep
        finalcep = cep.replace("-",""); //remove o traço para utilizar a variável na requisição 
        showCep(); 
      } 
      else {
        alert('Padrão de cep inválido')
      }
    }
  }

  function showCep(){
    axios.get(`https://viacep.com.br/ws/${finalcep}/json`) //requisição pelo axios 
    .then(res => setData(res.data)) //caso traga um resultado
    .catch(error => console.log(error)) // caso caia em um erro
    setCss(true); //chamada do modal
  }

  return (
    <>
    <Modal display={css} value={data} click={setCss}/> 
    <div className="grid">
      <Form evento={searchCep} cep={setCep} />
    </div> 
    </>

);
}

export default App;

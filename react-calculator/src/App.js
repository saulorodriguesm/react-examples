import React, { useState } from 'react'; //Importação do UseState
import '../src/styles/global.css'; //Css global do projeto
import ButtonCalc from './components/ButtonCalc';
import EqualsButton from './components/EqualsButton';
import Viewfinder from './components/Viewfinder';



function App() {
  const [count, setCount] = useState(""); //Declarando a hook 
  

  //Função que obtem os valores
  function getValue(value){
    if(count === "Não é possível dividir por 0"){ //Testa se a operação anterior foi uma tentativa de divisão por 0
      setCount(value) // Caso sim, o useState atualiza a tela pegando apenas o valor atual
    }else{
    setCount(count+value)
    }
  }
  
  //Função que calcula as operações
  function calculate(){  
   
    //teste de divisão por 0
   try {
     if(eval(count)===Infinity){
      setCount("Não é possível dividir por 0")
     } else{
       setCount(eval(count).toString())
     }
    
     
   } catch (error) {
    setCount("Não é possível realizar esta operação")
   }

  }
  //Função que apaga caracteres (Dando algum bug se utilizada após operações realizadas)
  function backspace(){
   setCount(count.substring(0, count.length -1)) 
}

//Função que limpa o visor
function clearAll(){
  setCount("") 
}
  
  //Estrutura da calculadora
  return (
  <div className="background">
    <div className="Calculator">
      <Viewfinder value={count}/>
      <div className="buttonsGrid">
      <EqualsButton character="⌫" cssButton="extendedButton" click={backspace}/>
      <EqualsButton character="CE" cssButton="normalButton" click={clearAll}/>
      <ButtonCalc character="*" cssButton="normalButton" click={getValue}/>
      <ButtonCalc character="7" cssButton="normalButton" click={getValue}/>
      <ButtonCalc character="8" cssButton="normalButton" click={getValue}/>
      <ButtonCalc character="9" cssButton="normalButton" click={getValue}/>
      <ButtonCalc character="/" cssButton="normalButton" click={getValue}/>
      <ButtonCalc character="4" cssButton="normalButton" click={getValue}/>
      <ButtonCalc character="5" cssButton="normalButton" click={getValue}/>
      <ButtonCalc character="6" cssButton="normalButton" click={getValue}/>
      <ButtonCalc character="-" cssButton="normalButton" click={getValue}/>
      <ButtonCalc character="1" cssButton="normalButton" click={getValue}/>
      <ButtonCalc character="2" cssButton="normalButton" click={getValue}/>
      <ButtonCalc character="3" cssButton="normalButton" click={getValue}/>
      <ButtonCalc character="+" cssButton="normalButton" click={getValue}/>
      <ButtonCalc character="." cssButton="normalButton" click={getValue}/>
      <ButtonCalc character="0" cssButton="normalButton" click={getValue}/>
      <EqualsButton character="=" cssButton="extendedButton" click={calculate}/>
     </div>
    </div>
  </div>
  );
  }

export default App;

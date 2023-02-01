// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import { useState } from 'react';
import Cards from './components/Card';

function App() {

  const [inputs, setInputs] = useState({
    tipo: "",
    pagamento: "Debito",
    valor: "",
    data: "",
  });

  const [listaPagamento, setListaPagamento] = useState([])

  function handleAdicionarPagamento(e) {
    e.preventDefault();
    setListaPagamento(antigaArray => [...antigaArray, inputs])
    console.log(listaPagamento);
  }


  function handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setInputs({
      ...inputs,
      [name]: value
    })
    console.log(inputs);
  }





  return (
    <div className='App'>
      <Form valores={handleInputChange}
        cadastrar={handleAdicionarPagamento} />
      {
        listaPagamento.map((itemPagamento) => {
          return (
            <Cards tipo={itemPagamento.tipo}
                   pagamento={itemPagamento.pagamento}
                   valor={itemPagamento.valor}
                   data={itemPagamento.data}

            />
          );
        })
      }
    </div>

  )
}

export default App;

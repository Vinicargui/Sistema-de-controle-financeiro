function Cards(props) {
    return (
        
            <div className="card">
                <h3 className="titulo">despesa</h3>
                <label>Tipo:</label>
                    <p>{props.tipo}</p> 
                <label>Forma de pagamento:</label>
                      {props.pagamento}
                <label>valor: </label>
                       <p>R$ {props.valor}</p>
                <label>data:</label>  
                     <p> {props.data}</p>

            </div>
    
    );
}

export default Cards;
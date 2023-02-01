function Cards(props) {
    return (
        <div className="container">
            <div className="card">
                <h3 className="titulo">despesa</h3>
                <label>Tipo: {props.tipo}</label>
                <label>Forma de pagamento:{props.pagamento}</label>
                <label>valor: R$ {props.valor}</label>
                <label>data: {props.data}</label>

            </div>
        </div>
    );
}

export default Cards;
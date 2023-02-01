function Formulario(props) {
    return (
        <div className="form-despesas">
            <h1>Lançamento de despesas</h1>
            <label className="titulo" for="">Tipo</label>
            <input type="text" name="tipo" onChange={props.valores} />

            <div className="pagamentos">
                <label for="">Forma de pagamento</label><br />

                <select class="forma-pagamento"  name="pagamento" onChange={props.valores}>
                    <option value="debito">Debito</option>
                    <option value="Credito">Credito</option>
                    <option value="dinheiro">Dinheiro</option>
                </select>
            </div>

            <label for="">Valor</label>
            <input type="text" name="valor" id="" onChange={props.valores} />

            <label for="">Data</label>
            <input type="date" name="data" onChange={props.valores} />

            <div className="btn">
                <button type="submit" onClick={props.cadastrar}>Cadastrar</button>
            </div>
        </div>


    )
}

export default Formulario 
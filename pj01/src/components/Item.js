import PropTypes from 'prop-types'
function Item({ marca, ano_lancamento}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}

Item.defaultProps = {
    marca: 'Faltou o nome da MARCA',
    ano_lancamento: 'N/A',
}

export default Item;
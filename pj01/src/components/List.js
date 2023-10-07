import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2023} />
                <Item marca="Fiat" ano_lancamento={2023} />
                <Item marca="Lamborghini" />
            </ul>
        </>
    )
}

export default List;
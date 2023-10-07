import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Fiat"/>
                <Item marca="Lamborgini"/>
            </ul>
        </>
    )
}

export default List;
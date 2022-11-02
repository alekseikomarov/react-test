const Pokemon = (props) => {
    return(
        <div className='kaart'>
            <img src={props.pokemon.sprites.front_default} />
            <div>Nimi: <b>{props.pokemon.name.toUpperCase()}</b></div>
            <div>ID: {props.pokemon.id}</div>
            <div>Kaal: {props.pokemon.weight}kg</div>
            <div>Kõrgus: {props.pokemon.height}ft</div>
        </div>
    )
}

export default Pokemon
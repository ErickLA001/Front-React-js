export default function Character (props) {
    const{characters, setCharacters } = props

    const resetCharacters = () => {
        setCharacters(null)
    }

    return(
        <div className="characteres">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>Volver al home</span>
            <div className="container-characters">
            {characters.map((character, index) =>(
                <div className="character-container" key={index}>
                    <div>
                    <img src={character.image} alt={character.name}/>
                </div>
                <div>
                    <h3>{character.name}</h3>
                    <h6>
                        {character.status === "Alive"? (
                            <>
                            <span className="alive " />
                            Vivo
                            </>
                        ) : (
                            <>
                            <span className="dead" />
                            Muerto
                            </>
                        )}
                    </h6>
                    <p>
                        <span className="text-gray">Episodios: </span>
                        <spa>{character.episode.length}</spa>
                    </p>
                    <p>
                        <span className="text-gray">Especie: </span>
                        <spa>{character.species}</spa>
                    </p>
                    </div>
                </div>    
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver al home</span>
        </div>
    );
}
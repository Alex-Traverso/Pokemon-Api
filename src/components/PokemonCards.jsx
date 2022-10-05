import React from 'react'; 

const PokemonCards = ( { id, name, image, type, hp, attack, defense, sAtt, sDef, speed, height, weight } ) => {
    
    const style = `${type} flip-card`;

    return (
        <div className={style}>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    <div className='pokemon-number'>
                        <p>#0{id}</p>
                    </div>
                    <img className='pokemon-img' src={image} alt={name} />
                    <div className='detail-wrapper'>
                        <h3 className='pokemon-name'>{name}</h3>
                        <p className='pokemon-type'>Type: {type}</p>
                    </div>
                </div>
                <div className="flip-card-back">
                    <div className='detail-wrapper'>
                    <h2 className='stats-title'>Stats</h2>
                    <p>Hp: <b>{hp}</b></p>
                    <p>Attack: <b>{attack}</b></p>
                    <p>Defense: <b>{defense}</b></p>
                    <p>Special Attack: <b>{sAtt}</b></p>
                    <p>Special Defense: <b>{sDef}</b></p>
                    <p>Speed: <b>{speed}</b></p>
                    <p>height: <b>{height}</b></p>
                    <p>Weight: <b>{weight}</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCards;
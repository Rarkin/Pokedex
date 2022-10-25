import React from "react";

const Card = ({name, type, id}) =>{
    return(
        <div>
            <img alt='pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
            <div>
                <h2>{name}</h2>
                <p>{type}</p>
            </div>
        </div>
    );
}

export default Card;
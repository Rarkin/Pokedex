import React from "react";
import Card from "./Card";

const CardList = ({pokemon}) =>{
    return(
        <div>
            {
                pokemon.map((user, i) => {
                    return(
                        <Card
                        key = {i}
                        id={pokemon[i].id}
                        name={pokemon[i].name}
                        type={pokemon[i].type}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList
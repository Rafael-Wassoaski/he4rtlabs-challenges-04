import React, {useState, useEffect} from "react";
import StyledField from "../styled-components/Field";
import Square from "./Square";
import grass from '../public/grass.png'
import useSearchPokemons from "../hooks/useSearchPokemons";

const Field = () => {
    const pokemons = useSearchPokemons();

    function generateField() {
        const squares = [];
        console.log(pokemons);
        for (let indexSquare = 0; indexSquare < 30; indexSquare++) {
            if (Math.floor(Math.random() * 2)) {
                squares.push(
                    <Square initialSprite={grass}
                            pokeSprite={pokemons[0].data.sprites.front_default}/>
                )
            }
        }
        return squares;
    }

    return (
        <StyledField>
            {
                generateField()
            }
        </StyledField>
    )
}

export default Field
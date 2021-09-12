import React, {useState} from 'react';
import StyledSquare from '../styled-components/Square';
import StyledSquareImage from '../styled-components/SquareImage'

const Square = ({initialSprite, pokeSprite}) => {
    const [field, setField] = useState(initialSprite);

    function capturePokemon() {
        setField(pokeSprite);
    }

    return (
        <StyledSquare>
            <StyledSquareImage src={field} onClick={capturePokemon.bind(this)}/>
        </StyledSquare>
    )
}

export default Square;
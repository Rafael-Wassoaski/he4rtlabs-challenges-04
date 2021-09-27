import React, {useState} from 'react';
import StyledSquare from '../styled-components/Square';
import StyledSquareImage from '../styled-components/SquareImage'
import ground from '../public/ground.png'
import {search} from "../api/api";
import ReactLoading from 'react-loading';


const Square = ({initialSprite, shouldHavePoke, setLoadingScreen}) => {
    const [field, setField] = useState(initialSprite);

    async function capturePokemon() {

        let sprite = {
            data: {
                sprites: {
                    front_default: ground
                }
            }
        };
        if (shouldHavePoke) {
            setLoadingScreen(true);
            sprite = await search('/api/pokemon');
        }
        setField(sprite.data.sprites.front_default);
        setLoadingScreen(false);
    }

    return (
        <StyledSquare>
            <StyledSquareImage src={field} onClick={capturePokemon.bind(this)}/>
        </StyledSquare>
    )
}

export default Square;
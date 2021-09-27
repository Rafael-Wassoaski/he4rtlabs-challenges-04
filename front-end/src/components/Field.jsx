import React, {Fragment, useState} from "react";
import StyledField from "../styled-components/Field";
import Square from "./Square";
import grass from '../public/grass.png'
import ReactLoading from "react-loading";
import {zIndex} from "material-ui/styles";

const Field = () => {
    const [isLoading, setIsLoading] = useState(false);

    function generateSquares() {
        const squares = [];
        for (let indexSquare = 0; indexSquare < 3; indexSquare++) {
            squares.push(
                <Square initialSprite={grass}
                        shouldHavePoke={Math.floor(Math.random() * 2)}
                        setLoadingScreen={setIsLoading}
                />
            )
        }
        return squares;
    }

    function generateField() {
        const divs = [];
        for (let indexDiv = 0; indexDiv < 10; indexDiv++) {
            const squares = generateSquares();
            divs.push(<div>
                {squares}
            </div>)
        }
        return divs;
    }

    return (
        <div style={{
            display: "inline-block",
            position: "relative"
        }}>
            <div>
                {isLoading ? <ReactLoading color={'#F4150A'} height={'100%'} width={'100%'}/> : null}
            </div>
            <StyledField>
                {
                    generateField()
                }
            </StyledField>
        </div>

    )
}

export default Field
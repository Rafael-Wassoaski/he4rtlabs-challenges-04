import React, {Fragment, useState} from 'react';
import StyledSquare from '../styled-components/Square';
import StyledSquareImage from '../styled-components/SquareImage'
import grass from '../public/grass.png'
import {Drawer, List, ListItem, Divider,} from "material-ui";

const Square = () => {
    const [field, setField] = useState(grass);
    return (
        <StyledSquare>
            <StyledSquareImage src={field}/>
        </StyledSquare>
    )
}

export default Square;
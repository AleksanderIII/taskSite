import React, { Fragment } from 'react';
import './ColorSelector.css'

const colors = [
    'gold',
    'orange',
    'chocolate',
    'yellowgreen',
    'olive',
]; 

const ColorSelector = (props) => {
    return(
        <Fragment>
            <h3>Task importance</h3>
            <ul>
                {
                    colors.map((elem, index) => 
                        <li key = {index}>
                            <div
                                className = {props.selectedColor == elem ? "color--selected": ""} 
                                id = {`${elem}`}
                                style = {{ backgroundColor: elem }}
                                onClick = {e => props.colorSelect(e.target.id)}
                            />
                        </li>
                    )
                }
            </ul>  
        </Fragment>
        
    )
}

export default ColorSelector
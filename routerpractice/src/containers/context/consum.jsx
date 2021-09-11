import React,{useContext} from 'react'

import context from './main'

function Consumer(){


    return(
        <>
        <context.Consumer>
        {value => <span>{value}</span>}
        <h5>hike</h5>
        </context.Consumer>

        </>
    )
}
export default Consumer;
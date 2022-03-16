import React from 'react';
import { Input } from './styles'

const BasicInput = (props) => {

    const { setSearch } = props

    return(
        <Input placeholder='Nome da carta' onChange={e => setSearch(e.target.value)}/>
    )
}

export default BasicInput;
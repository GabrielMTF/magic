import React from 'react'
import { Button } from './styles'

const BasicButton = (props) => {

    const { Pesquisar } = props

    return (
        <Button onClick={Pesquisar} >Pesquisar</Button>
    )
}

export default BasicButton;
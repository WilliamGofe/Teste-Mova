import React, { useEffect, useState } from 'react'

function OptionsFiltro1(props) {
    const [txtOption1,setTxtOption1] = useState('Escolha uma opção')
   
useEffect(()=>{
    if (props.dados.dados.confirma === true) {
        setTxtOption1('Região')
    }
})
    return(
        <>
    <option value=''>
       {txtOption1}
</option>
    <option value='região'>
        Região
</option>
    <option value='capital'>
        Capital
</option>
    <option value='lingua'>
        Língua
</option>
    <option value='pais'>
        País
</option>
    <option value='codigo'>
        Código de Ligação
</option>
        </>

 
    )
}

export default OptionsFiltro1
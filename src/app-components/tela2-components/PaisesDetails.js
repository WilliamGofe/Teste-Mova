import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import HeaderFixed from '../../rotas/HeaderFixed'
import { DivFlex, DivMaster, ImagePaises } from '../../temas/AppTema'
import HomePage from '../homepage/HomePage'

function PaisesDetails(props) {
const code = useParams()
const [detail, setDetail] = useState({})
const [imageBorder ,setImageBoder] = useState([])
const [language, setLanguage] = useState([])
const [imgBorder1 , setImageBorder1] = useState('')
const [imgBorder2 , setImageBorder2] = useState('')
const [imgBorder3 , setImageBorder3] = useState('')
const [voltarPagina, setVoltarPagina] = useState(false)

const back = {
    voltar: voltarPagina,
    setVoltar:setVoltarPagina
}


    const history = useHistory()      
    useEffect(()=>{ 
        detailPais() 
        flagBorder3(imageBorder[0])
        flagBorder2(imageBorder[1])
        flagBorder1(imageBorder[3])
        
          },[])  
    
    const detailPais = () =>{
        axios.get(`https://restcountries.eu/rest/v2/alpha/${code.code}
        `)
        .then((res)=>{
           setDetail(res.data)
            setLanguage(res.data.languages)
            setImageBoder(res.data.borders)
            
        }).catch((e)=>{
    
        })
    }



const flagBorder1 = (image) =>{
    axios.get(`https://restcountries.eu/rest/v2/alpha/${image}`)
    .then((res)=>{
       setImageBorder1(res.data)
    }).catch((e)=>{

    })
}
const flagBorder2 = (image) =>{
    axios.get(`https://restcountries.eu/rest/v2/alpha/${image}
    `)
    .then((res)=>{
       setImageBorder2(res.data)
    }).catch((e)=>{

    })
}
const flagBorder3 = (image) =>{
    axios.get(`https://restcountries.eu/rest/v2/alpha/${image}
    `)
    .then((res)=>{
       setImageBorder3(res.data)
       
    }).catch((e)=>{
        
    })
}

 const mapLanguages = language.map((lingua)=>{
    return <p>
        *{lingua.nativeName}</p>
 })


const region_back_page = () =>{
    props.dados.setConfirma(true)
    
     history.goBack()
    props.dados.setExataRegiao(detail.region)
}
console.log(props.dados)

    return(
        <DivMaster>
           <HeaderFixed voltar = {back}/>
    <DivFlex>
        
    <ImagePaises src = {detail.flag}></ImagePaises>
    <divFlexColoum>
        <p>Nome: {detail.name}</p>
    <p>Capital: {detail.capital}</p>
    <p onClick = {region_back_page}>Região: {detail.region}</p>
    <p>SubRegião: {detail.subregion}</p>
    <p>População: {detail.population}</p>
    <p>Linguas nativas:</p>
    {mapLanguages}  
    </divFlexColoum>
  
    </DivFlex> 
    

    <ImagePaises src = {imgBorder1.flag}></ImagePaises>
    <ImagePaises src = {imgBorder2.flag}></ImagePaises>
    <ImagePaises src = {imgBorder3.flag}></ImagePaises>
  
        </DivMaster>
        
    )
}
export default PaisesDetails
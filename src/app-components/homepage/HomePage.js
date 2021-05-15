import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AppTema, { AllImagens, ButtonHomePage, DivFlex, DivMaster, DivSelect, Label, SelectController } from '../../temas/AppTema'
import { ImagePaises } from '../../temas/AppTema'
import OptionsFiltro1 from './OptionsFiltro1'
import { useHistory } from 'react-router-dom'
import HeaderFixed from '../../rotas/HeaderFixed'

function HomePage(props) {

    const [loading, setLoading] = useState(true)
    const [filter2, setFilter2] = useState([])
    const [filter1, setFilter1] = useState('')
    const [valueFilter2, setValueFilter2] = useState('')
    const [informations, setInformations] = useState([])
    const [paisesFilter, setPaisesFilter] = useState([])
    const [confirm, setconfirm] = useState('false')
    const [inicio, setInicio] = useState(0)
    const [limit, setLimit] = useState(11)
    const [option2Null, setOption2Null] = useState('Escolha uma opção')
    

    const history = useHistory()
    useEffect(() => {
        Filter()
        allInformations()
        if (props.dados.confirma === true) {
            setFilter1('região')
            confirmation(props.dados.exataRegiao)
            setOption2Null(props.dados.exataRegiao)
        }
     
    }, [])


    const goDetailsPage = (code) => {
        history.push(`/${code}`)
        props.dados.setConfirma(false)
    }
    const pagination = []

    const allInformations = () => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then((res) => {

                setInformations(res.data)
                setLoading(false)

            }).catch((e) => {
                alert(`error ${e.messege}`)
            })
    }

    if (loading === false) {
        for (let index = inicio; index <= limit; index++) {
            const element = informations[index];
            pagination.push(element)

        }
    }

    const mapInformations = pagination.map((pais) => {
        let bandeira = pais.flag
        if (pagination === undefined) {
            let bandeira = 'loading..'
        }
        return (
            <div>
                <ImagePaises onClick={() => goDetailsPage(pais.alpha3Code)} src={bandeira}>

                </ImagePaises>

            </div>
        )
    })

    const proxPaginacao = () => {
        setInicio(inicio + 11)
        setLimit(limit + 11)
    }
    const backPaginacao = () => {
        if (inicio != 0) {
            setInicio(inicio - 11)
            setLimit(limit - 11)

        } else {
            setInicio(0)
            setLimit(11)


        }

    }

    const Filter = () => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then((res) => {
                setFilter2(res.data)

            }).catch((e) => {
                alert(`error ${e.messege}`)
            })
    }


    const optionsHandle = (e) => {
        setFilter1(e.target.value)
    }

   const filtroOption = filter2.map((filter) => {

        switch (filter1) {

            case 'região':
                return <option value={filter.region}>{filter.region}</option>


            case 'capital':
                return <option value={filter.capital}>{filter.capital}</option>


            case 'lingua':
                return <option value={filter.languages[0].name}>{filter.languages[0].name}</option>


            case 'pais':
                return <option value={filter.name}>{filter.name}</option>


            case 'codigo':
                return <option value={filter.callingCodes}>{filter.callingCodes}</option>

            default:

                break;
        }
    })


    const options2Handle = (e) => {
        setValueFilter2(e.target.value)
    }

    const renderFilter = () => {

        if (filter1 != '') {
            return (
                <div>
                    <Label for="filtrosTwo">Escolha um(a) {filter1}</Label>
                    <br />
                    <SelectController onChange={options2Handle}>
                        <option value='null'>
                            {option2Null}
                        </option>

                        {filtroOption}
                    </SelectController>
                    <br/>
                    <ButtonHomePage onClick={() => confirmation(valueFilter2)}>Pesquisar</ButtonHomePage>
                </div>
            )
        }
    }

    const confirmation = (info) => {
        props.dados.setConfirma(false)
        region(info)
        capital(info)
        lingua(info)
        pais(info)
        codigo(info)
    }
    const region = (region) => {
        axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
            .then((res) => {
                setPaisesFilter(res.data)
                setconfirm('true')
            }).catch((e) => {

            })

    }
    const capital = (capital) => {
        axios.get(`https://restcountries.eu/rest/v2/capital/${capital}`)
            .then((res) => {
                setPaisesFilter(res.data)
                setconfirm('true')
            }).catch((e) => {

            })
    }


    const lingua = (lingua) => {
        axios.get(`https://restcountries.eu/rest/v2/lang/${lingua}`)
            .then((res) => {
                setPaisesFilter(res.data)
                setconfirm('true')
            }).catch((e) => {

            })
    }
    const pais = (name) => {
        axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
            .then((res) => {
                setPaisesFilter(res.data)
                setconfirm('true')
            }).catch((e) => {

            })
    }
    const codigo = (codigo) => {
        axios.get(`https://restcountries.eu/rest/v2/callingcode/${codigo}`)
            .then((res) => {
                setPaisesFilter(res.data)
                setconfirm('true')
            }).catch((e) => {

            })
    }
    const mapPaisesFilter = paisesFilter.map((img) => {
        return (
            <div>
                <ImagePaises src={img.flag}>

                </ImagePaises>
            </div>
        )
    })
    const renderizaTelaCerta = () => {

        if (confirm === 'false') {
            return (
                <AllImagens>
                    {mapInformations}
                </AllImagens>
            )
        } else if (confirm === 'true') {
            return (
                <div>
                    {mapPaisesFilter}
                </div>
            )
        }
    }
    return (
        <DivMaster>

            <HeaderFixed></HeaderFixed>
            <DivFlex>
            <DivSelect>
            

            
                <Label for="filtros">Filtrar por:</Label>
                <br />
                <SelectController onChange={optionsHandle}>
                    <OptionsFiltro1 dados={props} />
                </SelectController>

                {renderFilter()}
                <ButtonHomePage onClick={proxPaginacao}>Próximo 👉 </ButtonHomePage>
            <ButtonHomePage onClick={backPaginacao}>Voltar 👈 </ButtonHomePage>
            </DivSelect>
            {renderizaTelaCerta()}

           
            </DivFlex>

        </DivMaster>


    )

}
export default HomePage
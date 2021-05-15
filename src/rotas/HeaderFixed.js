import React from 'react' 
import { ImageLogo, Header, ButtonBack, IconButton, TextButton } from '../temas/AppTema'
import icon from '../Img/icon.png'
import {useHistory} from 'react-router-dom'

function HeaderFixed(props) {
  const history = useHistory()

  const goBackHomePage = () => {
    history.push('/')
  
  }
  
  return(
        <Header>
        <ImageLogo src = 'https://blog.mova.vc/wp-content/uploads/2019/10/logo_menu_branco.png'></ImageLogo>
              
              <ButtonBack onClick = {goBackHomePage}>
                <IconButton src = {icon}>
                </IconButton>
                <TextButton>Voltar</TextButton>
              </ButtonBack>
            </Header>
        )
}
export default HeaderFixed
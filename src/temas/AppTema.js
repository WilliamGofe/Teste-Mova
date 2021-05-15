import styled from 'styled-components'

export const Header = styled.header`
background-color:#FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
display:flex;
justify-content: space-between;
align-items:center;
`
export const ImageLogo = styled.img`
width:92px;
height:61.66px;
padding: 8px;
box-sizing:border-box;
margin-left:48px;
`
export const ButtonBack = styled.div`
width:134px;
height:34px;
border: 1px solid #6D2080;
box-sizing: border-box;
display:flex;
justify-content: space-evenly;
align-items:center;
margin-right:32px;
`
export const IconButton = styled.img`
width:32px;
height:30px;

`
export const TextButton = styled.p`
font-weight:400; 
font-style:normal; 
font-size:18px; 
line-height:21,94px; 
color:#6D2080;

`
export const ImagePaises = styled.img`
width:150px;
height:100px;
padding:8px;

`
export const DivSelect = styled.div`
display:flex;
flex-direction:column;
`
export const Label = styled.label`
font-size:20px;
padding-top:25px;
`
export const SelectController = styled.select`
height:60px;
width:200px;
` 

export const AllImagens = styled.div`
 display:grid;
 grid-template-columns: 200px 200px 2px;
  grid-template-rows: 100px 125px 100px; 
  row-gap:15px;
`
 export const DivFlex = styled.div`
display:flex;
align-items:center;;
`
export const ButtonHomePage = styled.button `
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px;
  margin-top:16px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
&:hover{
    background-color:greenyellow;
}
`
export const DivMaster = styled.div`
background-color:grey;
width:100vw;
height:100vw;
`
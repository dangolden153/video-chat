import styled from 'styled-components'



export const Container = styled.section `
margin-top: 30px
`

export const Heading = styled.p `
    color: #04a9f4;
    font-size: 15px;
    margin: 0 0 5px 8px;
`

export const Background_color = styled.div `
background: #FFFFFF;
padding: 12px 0;

`
export const Input_box = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin: 0 7px;
`


 export const Select = styled.select `
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 5px 2px;
    background: #D9D9D9;
    color: grey;
    outline: none;
    cursor: pointer;
    width: 15%;
    height: 100%;
`

export const Input = styled.input `
flex: 1;
border: 1px solid grey;
background: #F3F3F3 ;
padding: 3px 15px;
height: 100%;
outline: none;

&:focus{
 outline: none;
}
`

export const Button_container = styled.div `
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Button = styled.button `
padding: 12px 21px;
background: #04a9f4 ;
color: white;
font-size: 15px;
font-weight: 300;
cursor: pointer;
border-radius: 5px;
text-transform: uppercase;
margin: 15px 0 0;
border: none;
outline: none;
transition: all 300ms ease;

&:hover{
    background: #0893ce;
}
`
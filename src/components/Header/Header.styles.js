import styled from 'styled-components'

export const Container = styled.section `
display: flex:
justify-content: center;
align-items: center;
padding: 0 8px;
`

export const Header_box = styled.div `
position: relative;
background : #E1267B ;
width: 100%;
border-radius: 9px;
display: flex;
justify-content: space-between;
padding: 10px 10px;
align-items: center;
box-shadow: 0px 4px 14px -3px rgba(0,0,0,.8) ;
`

export const Left_bar = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
`

export const Right_bar = styled.div `
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Logo_container = styled.div `
width: 50px;
height: 50px;
overflow: hidden;
border-radius: 50%;
background: white;
display: flex;
justify-content: center;
align-items: center;
`

export const Logo_name = styled.h2 `
font-size: 13px;
font-weight: bold;
color: #E1267B;
`

export const Logo_name_right = styled.h2 `
font-size: 13px;
font-weight: bold;
color: #04A9F4;

`

export const Amount = styled.h2 `
margin: 5px;
font-size: 19px;
font-weight: 600;
color: white;

`

export const Text = styled.p `
margin-top: 10px;
font-size: 13px;
font-weight: 600;
color: white;

`

export const Line = styled.div `
width: 1px;
height: 96%;
background: white;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`
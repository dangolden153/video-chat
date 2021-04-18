import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const Container = styled.section `
padding: 30px 0px;
`

export const Menu_contents = styled(Link) `
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 3px 25px;
border-top: 1px solid #EFEFEF;
`
export const Heading = styled.h2 `
margin-left: 15px;
color: white;
font-size: 15px;
`


export const Menu_text = styled.p `
font-size: 17px;
font-weight: 600;
color: #5F5F5F;
margin: unset;
text-transform: capitalize;
justify-self: flex-start;
width: 185px;
`

export const Activity_level = styled.p `
font-size: 17px;
font-weight: 600;
color: #5F5F5F;
margin: unset;
text-transform: capitalize;
width: 45px;
`
export const Background_color = styled.div`
background: #FFFFFF;
`
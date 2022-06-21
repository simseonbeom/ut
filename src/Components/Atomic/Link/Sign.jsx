
import styled from '@emotion/styled';


const SignLink = styled.a`
  background: #fff;
  padding: 8px;
  border-radius: 30px;
  margin-left: 12px;
  border: 2px solid #fff;
  color: black;
  :hover{
    background: gray;
    color: #fff;
    border: 2px solid gray;
  }
  :focus{
    border: 2px solid dodgerblue
  }
`

export default function Sign(){

  return(
    <SignLink href='/'>가입하기</SignLink>
  )
}



import styled from '@emotion/styled'


const GnbStyle = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  
  li{
    margin-right:10px;
  }
    
`



function Gnb() {
  
  return(
    <>
        <GnbStyle>
          <li>menu01</li>
          <li>menu02</li>
          <li>menu03</li>
          <li>menu04</li>
          <li>menu05</li>
        </GnbStyle>
    </>
  )
}

export default Gnb;

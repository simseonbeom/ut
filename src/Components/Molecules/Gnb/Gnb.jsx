
import styled from '@emotion/styled';


const GnbStyle = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: 24px;

  
  li{
    margin-right:10px;

    :last-child{
      margin-right:0;
    }


    a{
      padding: 4px 8px;
      border: 2px solid transparent;
      :focus{
        border: 2px solid dodgerblue;
      }
      :hover{
        background: gray;
      }
      border-radius: 30px;
    }
  }
    
`



function Gnb() {
  
  return(
    <>
        <GnbStyle>
          <li><a href="/">기업정보</a></li>
          <li><a href="/">안전</a></li>
          <li><a href="/">고객 지원</a></li>
          <li><a href="/">차량 서비스</a></li>
          <li><a href="/">기사지원</a></li>
        </GnbStyle>
    </>
  )
}

export default Gnb;

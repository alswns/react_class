import React from 'react';
import styled,{keyframes} from "styled-components";
const ShowDiv=styled.div`
display:block;
`;

// const Root=styled.a`
//   border: 1px solid red;
//   color:${props=>props.color};
//   ${props=>props.show||css`
//   opacity:0%;
//   `}  
//   /* margin: ${props=>props.margin}px;  */
// `
// const NoShowDiv=styled.div`
// display:none;
// `
const move=keyframes`
from{
  opacity:0;
}
to{
  opacity:1;
}
`;

const noMove=keyframes`
from{
  opacity:1;
}
to{
  opacity:0;
}
`;

const Img=styled.img`
animation:${props=>(props.show? move:noMove)} 1s linear infinite;
`;

const Wrapper = styled.div`
 padding : 15px;
 display : flex;
 align-items:center;
 
 label {
     font-size : 20px;
     margin-left:10px;
 }

 div {
     display:none;
 }
`;
const Input=styled.input`
&~div{
  display: ${props => props.checked?"block":"none"};
}
`

function App() {
  const checked=false
    return (
        <Wrapper> 
     <Input type="checkbox" id="check1" checked={checked}/>
     <label htmlFor="check1">체크해봐</label>
     <div>체크</div>
    </Wrapper>
    );   
}



export default App;

import React from 'react';
import './App.scss';

function App() {
  return (
   <div className='root'>
    <div className="top">
    <a href="https://mail.google.com/mail/?tab=rm&ogbl">Gmail </a>
    <a href="https://www.google.co.kr/imghp?hl=ko&tab=ri&ogbl">이미지 </a>
    <a href="" ><img src={require('./button.png')} alt=""/> </a>
    <a href=""><img src={require('./icon.png')} alt=""/> </a>
    </div>

    <div className="mid">
    
      <img src={require('./google.png')} width={272} height={92} className='google'></img>
    </div>
    
    <div className="middle">
      
      <img src={require("./돋보기.png")} height={44} className='img'/>
    <input placeholder="Google 검색 또는 URL입력" id="input" src={require('./search.png')}></input>
    <a href=""  className='mike'><img src={require("./mike.png")} height={44}/></a>
    </div>
    
    
    <div className="bot">
      <a href="https://www.naver.com"><img src={require("./naver.png")} alt=""/></a>


    </div>
    </div>
    
   
   
 
  );
}

export default App;

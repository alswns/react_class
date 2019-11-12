import React from "react";
import TodoItem from "./TodoItem";
 import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      value: ""
    };
  }
    del=(key)=>{
      this.setState(
        state => ({
          items: [
            ...state.items.slice(0, key),
            ...state.items.slice(key + 1)
          ]
        }),
      )
      
    }

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items
    });
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div id='as'>
      <div id='all'>
    <span id='today'><h1>오늘 할 일</h1></span>
        <div id='main'><input type='search' onChange={this.onChange} /> 
        <button onClick={this.onClickAdd}>추가</button> </div>
        

        <div id='over'>
        {this.state.items.map((value, idx) => (
          <div className='items'>
          <TodoItem key={idx} value={value} index={idx} del ={this.del} />
          </div>
          ))}
          </div>
      </div>
      </div>
    );
  }
}
export default App;
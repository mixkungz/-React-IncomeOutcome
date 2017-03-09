import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      "money":0,
      "type":"income",
      data :[]
    }
  }
  updateState(){
    this.setState({
      money:document.getElementById('inputmoney').value,
      type:document.getElementById('selecttype').value,
    });
  }

  submit(e){
    e.preventDefault();
    this.state.data.push({
      money:this.state.money,
      type:this.state.type
    })
    this.setState({
      money:0,
      type:"income"
    })
  }
  calculate(){
    let x =0;
    for(let i=0;i<this.state.data.length;i++){
      if(this.state.data[i].type ==='income'){
        x+=parseInt(this.state.data[i].money)
      }
      else{
        x-=parseInt(this.state.data[i].money)
      }
    }
    return x
  }
  render(){
    return(
        <div>
          <form onSubmit={this.submit.bind(this)}>
            <input id="inputmoney" type="number" name="money" value={this.state.money} onChange={this.updateState.bind(this)}/>
            <select id="selecttype" name="type" onChange={this.updateState.bind(this)}>
              <option value="income" selected>รายรับ</option>
              <option value="outcome">รายจ่าย</option>
            </select>
            <br />
            <button type="submit" >Submit</button>
            <input type="reset" value="Reset"/>
          </form>
          <p>{this.calculate()}</p>
          
        </div>
      );
  }
}


export default App

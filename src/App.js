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
    const swal = require('sweetalert2')
    e.preventDefault();
    if(this.state.money <= 0){
      swal({
        title: 'Error!',
        text: 'Money must more than 0',
        type: 'error',
        confirmButtonText: 'Continue'
      })
    }
    else{
      this.state.data.push({
        money:this.state.money,
        type:this.state.type
      })
      this.setState({
        money:0,
        type:"income"
      })
    }
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
  genIncomeLog(){
    let x ="";
    let runnum=1;
    for (let i = 0; i < this.state.data.length; i++) {
      if(this.state.data[i].type ==='income'){
        x+=runnum+"). "+this.state.data[i].money+'<br/>'
        runnum++
      }
    }
    return x
  }
  genOutcomeLog(){
    let x ="";
    let runnum=1;
    for (let i = 0; i < this.state.data.length; i++) {
      if(this.state.data[i].type ==='outcome'){
        x+=runnum+"). "+this.state.data[i].money+'<br/>'
        runnum++
      }
    }
    return x
  }
  render(){
    return(
        <div className="container" style={{textAlign:'center'}}>
          <form onSubmit={this.submit.bind(this)}>
            <input id="inputmoney" type="number" name="money" value={this.state.money} onChange={this.updateState.bind(this)}/>
            <select id="selecttype" name="type" onChange={this.updateState.bind(this)} style={{marginLeft:'1em'}}>
              <option value="income" selected>รายรับ</option>
              <option value="outcome">รายจ่าย</option>
            </select>
            <br />
            <div style={{marginTop:'1em'}}>
              <button type="submit" className="btn btn-success">Submit</button>
              <input type="reset" className="btn btn-danger" value="Reset" style={{marginLeft:'1em'}}/>
            </div>
          </form>
          <div className="row">
            <div className="col-xs-6">
              <p>รายรับ</p>
              <div dangerouslySetInnerHTML={{__html: this.genIncomeLog()}} />
            </div>
            <div className="col-xs-6">
              <p>รายจ่าย</p>
              <div dangerouslySetInnerHTML={{__html: this.genOutcomeLog()}} />
            </div>
          </div>
          <p>เหลือ : {this.calculate()}</p>
        </div>
      );
  }
}


export default App

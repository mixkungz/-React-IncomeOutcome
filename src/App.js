import React from 'react';
import 

class App extends React.Component{
  render(){
    return(
        <div>
          <form>
            <input type="text"/>
            <ButtonSubmit />
            <ButtonReset />
          </form>
        </div>
      );
  }
}
class ButtonSubmit extends React.Component{
  render(){
    return <input type="submit" value="Submit"/>;
  }
}
class ButtonReset extends React.Component{
  render(){
    return <input type="reset" value="Reset"/>;
  }
}
export default App

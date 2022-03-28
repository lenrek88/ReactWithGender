import './App.css';
import React from "react";


const URL = {
  GENDER: 'https://api.genderize.io',
  NATIONAL: 'https://api.nationalize.io'
}

function MagicButton(props) {
  return(
      <input type="submit"></input>
  );
}

function GenderLine(props) {
  return(
      <input type="text"></input>
  );
}


class App extends React.Component{
  constructor(props) {
    super(props);
    this.hundlerForm = this.hundlerForm.bind(this);
    this.state = {out: "Жмякай", value: ''}
  }
  hundlerForm (e) {
    e.preventDefault()
    console.log('hi')
    this.setState({
      name: e.target[0].value
    })
    console.log(this.state.name)
    const url = `${URL.GENDER}?name=${this.state.name}`;

    fetch(url)
        .then(response => response.json())
        .then(units => {
          if (units.gender === 'male' || units.gender === 'female') {
            this.setState({out : `${this.state.name} is ${units.gender}`})  ;
          } else
          {
            this.setState({out : `Error :(`})
          }
        });
    console.log(this.state.out)


  }


  render() {
    return (
        <header className="App-header">
          <h1>{this.state.out}</h1>
          <form onSubmit={this.hundlerForm} value={this.state.value}>
            <GenderLine/>
            <MagicButton/>
          </form>
        </header>



    )
  };

}

export default App;

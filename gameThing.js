const Stars = (props) => {
const numberOfStars = 1 + Math.floor(Math.random() * 9);
let stars = [];

	return (
  <div className="col-5">
    {_.range(numberOfStars).map(i =>
    	<i key={i} className="fa fa-star"></i>
    )}
  </div>
  );
}

const Answer = (props) => {
	return (
  <div className="col-5">
  	{props.selectedNumbers.map((number, i) =>
    	<span key={i} onClick={() => props.deselectNumber(number)}>{number}</span>
    )}
  </div>
  );
}

const Button = (props) => {
	return (
  <div className="col-2">
    <button>=</button>
  </div>
  );
}

const Numbers = (props) => {
	const arrayOfNumbers = _.range(1, 10);
  
  numberClassName = (number) => {
    return className = (props.selectedNumbers.includes(number)) ? 'selected' : ''; 
  }
  
	return (
  	<div className="card text-center">
    	<div>
    	  {Numbers.list.map((number, i) =>
        	<span key={i} onClick={() => props.selectNumber(number)} className={numberClassName(number)}>{number}</span>
        )}
    	</div>
    </div>
  );
};

Numbers.list = _.range(1,10);

class Game extends React.Component {
	state = {
  	selectedNumbers: [6, 4]
  };
  
  selectNumber = (number) => {
  	if (!this.state.selectedNumbers.includes(number)) {
      this.setState((prevState) => ({
        selectedNumbers: prevState.selectedNumbers.concat(number)
      }));
    }
  }
  
  deselectNumber = (number) => {
  	if (this.state.selectedNumbers.includes(number)) {
    	const index = this.state.selectedNumbers.indexOf(number);
      console.log(index);
    	this.setState((prevState) => ({
        selectedNumbers: prevState.selectedNumbers.splice(index, 1)
      }));
    }
  }
  
	render() {
  	return (
    	<div className="container">
    	  <h3>Play Nine</h3>
        <hr/>
        <div className="row">
          <Stars />
          <Button />
          <Answer deselectNumber={this.deselectNumber} selectedNumbers={this.state.selectedNumbers}/>
        </div>
        <br/>
        <Numbers selectNumber={this.selectNumber} selectedNumbers={this.state.selectedNumbers}/>
    	</div>
    );
  }
}


class App extends React.Component {
	render() {
  	return (
    	<Game/>
    );
  }
}




ReactDOM.render(<App/>, mountNode);

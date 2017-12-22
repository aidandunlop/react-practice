const Stars = (props) => {
  let stars = [];
  
    return (
    <div className="col-5">
      {_.range(props.numberOfStars).map(i =>
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
    let button, buttonClass;
    switch(props.answerIsCorrect) {
      case true:
        buttonClass = "btn-success"
        button = 
          <i className="fa fa-check"></i>
        break;
      case false:
        buttonClass = "btn-danger"
        button = 
          <i className="fa fa-times"></i>
        break;
      default:
        buttonClass = "btn-primary"
        button = "="
        break;
    }
    return (
      <div className="col-2">
        <button className={`btn ${buttonClass}`} onClick={props.checkAnswer} disabled={props.selectedNumbers.length === 0}>{button}</button>
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
      selectedNumbers: [],
      randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
      answerIsCorrect: null
    };
    
    selectNumber = (number) => {
      if (!this.state.selectedNumbers.includes(number)) {
        this.setState((prevState) => ({
          selectedNumbers: prevState.selectedNumbers.concat(number)
        }));
      }
    };
    
    deselectNumber = (number) => {
      if (this.state.selectedNumbers.includes(number)) {
        const index = this.state.selectedNumbers.indexOf(number);
        this.setState((prevState) => {
          return prevState.selectedNumbers.splice(index,1);
          // return arr;  
        });
      }
    };
    
    checkAnswer = () => {
      this.setState((prevState) => ({
          answerIsCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((a,b) => a + b, 0)
      }));
    };
    
    render() {
    const { selectedNumbers, randomNumberOfStars, answerIsCorrect } = this.state;
      return (
        <div className="container">
          <h3>Play Nine</h3>
          <hr/>
          <div className="row">
            <Stars numberOfStars={randomNumberOfStars}/>
            <Button checkAnswer={this.checkAnswer} answerIsCorrect={answerIsCorrect} selectedNumbers={selectedNumbers} />
            <Answer deselectNumber={this.deselectNumber} selectedNumbers={selectedNumbers}/>
          </div>
          <br/>
          <Numbers selectNumber={this.selectNumber} selectedNumbers={selectedNumbers}/>
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
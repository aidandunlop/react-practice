class Button extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.incrementVal);
    }
      render() {
        return(
        <button onClick={this.handleClick}>
          {(this.props.incrementVal > 0 ? '+':'') + this.props.incrementVal}
      </button>
    );
    }
  }
  
  const Result = (props) => {
      return (
        <div>{props.counter}</div>
    );
  };
  
  class App extends React.Component {
      state = { counter: 0 };
    
    incrementCounter = (incrementVal) => {
        this.setState((prevState) => ({
          counter: prevState.counter + incrementVal
      }));
    }
    
      render() {
        return (
      <div>
        <Button onClick={this.incrementCounter} incrementVal={2}/>
        <Button onClick={this.incrementCounter} incrementVal={4}/>
        <Button onClick={this.incrementCounter} incrementVal={-5}/>
        <Result counter={this.state.counter}/>
      </div>
      );
    }
  }
  
  ReactDOM.render(<App/>, mountNode)
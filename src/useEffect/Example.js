import React, { Component } from "react";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      A: 0,
      B: 0,
      C: 0,
    };
  }
  componentDidMount() {
    this.setState({ A: 1, B: 2 }, () => this.sum());
  }
  sum = () => {
    const { A, B } = this.state;
    this.setState({ C: A + B });
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.A !== this.state.A ||  prevState.B !== this.state.B ) {
        this.sum();
    }
  }
  handleChangleNumber = (event) => {
    const target = event.target;
    const value = +target.value;
    const name = target.name;
    this.setState({[name]:value})
  }
  render() {
    return (
      <div>
        <label>
          A:
          <input name="A" value={this.state.A} onChange={(e)=> this.handleChangleNumber(e)}/>
        </label>
        <br />
        <label>
          B:
          <input name="B" value={this.state.B} onChange={(e)=> this.handleChangleNumber(e)}/>
        </label>
        <br />
        <label>
          C:
          <input name="C" value={this.state.C} />
        </label>
      </div>
    );
  }
}
export default Example;

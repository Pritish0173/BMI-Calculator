class BMI extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        weight: "",
        heightft: "",
        heightin: "",
        result: ""
        
      }
    }

    render() {
      return (
        <div>
          <form >
            <h1>BMI</h1>
            <p> </p>
            <p>Weight</p>
            <input onChange={this.updateWeight} value={this.state.weight} /> Kg
            <p> </p>

            <p>Height</p>
            <input onChange={this.updateHeightft} value={this.state.heightft}/> ft 
            <input onChange={this.updateHeightin} value={this.state.heightin}/> in 
            <p> </p>
            <input type="button" value="Calculate" onClick={this.bmicalculate}/>
            <p> </p>
            <h4>{this.state.result}</h4>

          </form>


        </div>
      );
    }

    updateWeight = (event) => {
      this.setState({
        weight: event.target.value
      })
    }

    updateHeightft = (event) => {
      this.setState({
        heightft: event.target.value
      })
    }
    
    updateHeightin = (event) => {
      this.setState({
        heightin: event.target.value
      })
    }


    bmicalculate = () => {
      var Weight = parseFloat(this.state.weight);
      var Heightft = parseFloat(this.state.heightft);
      var Heightin = parseFloat(this.state.heightin);
      Heightft = Heightft*0.3048;
      Heightin = Heightin*0.0254;

      var Height = Heightft + Heightin;

      Height = Height*Height;

      var bmical = Weight/Height;
      
      if(bmical<18.5){
        this.setState({
          result: "Underweight",
        })
      }
      if(bmical>=18.5 && bmical<25.0){
        this.setState({
          result: "Normal",
        })
      }
      if(bmical>=25.0 && bmical<30.0){
        this.setState({
          result: "Overweight",
        })
      }
      if(bmical>=30.0){
        this.setState({
          result: "Obese",
        })
      }

    }
  }

  class Calculator extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        num1: "",
        num2: "",
        result: ""
      }
    }

    render() {
      return (

        <div>
            <h1>Calculator</h1>
            <p> </p>
            <p>Input 1</p>
            <input onChange={this.updateInputone} value={this.state.num1} />
            <p> </p>

            <p>Input 2</p>
            <input onChange={this.updateInputtwo} value={this.state.num2} />
            <p> </p>
            <input type="button" value="+" onClick={this.sum}  />
            <input type="button" value="-" onClick={this.sub}  />
            <input type="button" value="*" onClick={this.multiply}  />
            <input type="button" value="/" onClick={this.divide}  />
            <p> </p>
            <div id="resultbox"> Result: 
              <p id="showcalculation">{this.state.result}</p>
            </div> 

    
        </div>

      );
    }

    updateInputone = (event) => {
      this.setState({
        num1: event.target.value
      })
    }

    updateInputtwo = (event) => {
      this.setState({
        num2: event.target.value
      })
    }


    sum = () => {
      var number1 = parseInt(this.state.num1);
      var number2 = parseInt(this.state.num2);
      var res = number1 + number2;

      this.setState({
        result: res + "",
      })            


    }

    sub = () => {
      var number1 = parseInt(this.state.num1);
      var number2 = parseInt(this.state.num2);
      var res = number1 - number2;

      this.setState({
        result: res + "",
      })      

    }

    divide = () => {
      var number1 = parseInt(this.state.num1);
      var number2 = parseInt(this.state.num2);
      var res = number1/number2;

      this.setState({
        result: res + "",
      })      

    }

    multiply = () => {
      var number1 = parseInt(this.state.num1);
      var number2 = parseInt(this.state.num2);
      var res = number1*number2;

      this.setState({
        result: res + "",
      })  

    }
  }

ReactDOM.render(<BMI />, document.querySelector("#bmi"));
ReactDOM.render(<Calculator />, document.querySelector("#calculator"));
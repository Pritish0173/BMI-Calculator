class BMI extends React.Component {
    render() {
      return (
        <div>
          <form >
            {/* <h1>Hello</h1> */}
            <p>Weight</p>
            <input type="number" id="weight" name="weight" /> Kg
            <p> </p>

            <p>Height</p>
            <input type="number" id="heightft" name="heightft" /> ft 
            <input type="number" id="heightin" name="heightin" /> in 
            <p> </p>
            <input type="button" value="Calculate"  onClick={this.bmicalculate}/>
            <p> </p>
            <p id="showbmiresult"></p>

          </form>


        </div>
      );
    }
    bmicalculate = () => {
      var Weight = parseFloat(document.getElementById("weight").value);
      var Heightft = parseFloat(document.getElementById("heightft").value);
      var Heightin = parseFloat(document.getElementById("heightin").value);
      Heightft = Heightft*0.3048;
      Heightin = Heightin*0.0254;

      var Height = Heightft + Heightin;

      Height = Height*Height;

      var bmical = Weight/Height;
      var result;
      if(bmical<18.5){
        result = "Underweight";
      }
      if(bmical>=18.5 && bmical<25.0){
        result = "Normal";
      }
      if(bmical>=25.0 && bmical<30.0){
        result = "Overweight";
      }
      if(bmical>=30.0){
        result = "Obese"
      }


      document.getElementById("showbmiresult").innerHTML = result;



    }
  }

  class Calculator extends React.Component {

    render() {
      return (

        <div>
            <p>Input 1</p>
            <input type="number" id="num1" name="num1" />
            <p> </p>

            <p>Input 2</p>
            <input type="number" id="num2" name="num2" />
            <p> </p>
            <input type="button" value="+" onClick={this.sum}  />
            <input type="button" value="-" onClick={this.sub}  />
            <input type="button" value="*" onClick={this.divide}  />
            <input type="button" value="/" onClick={this.multiply}  />
            <p> </p>

    
        </div>

      );
    }

    sum = () => {
      var number1 = parseInt(document.getElementById('num1').value);
      var number2 = parseInt(document.getElementById('num2').value);
      var result = number1 + number2;

      result = result.toString();

      alert(result);

      document.getElementById("showcalculation").innerHTML = result; 

    }

    sub = () => {
      var number1 = parseInt(document.getElementById('num1').value);
      var number2 = parseInt(document.getElementById('num2').value);
      var result = number1 - number2;

      result = result.toString();

      alert(result);

      document.getElementById("showcalculation").innerHTML = result; 

    }

    divide = () => {
      var number1 = parseInt(document.getElementById('num1').value);
      var number2 = parseInt(document.getElementById('num2').value);
      var result = number1/number2;

      result = result.toString();

      alert(result);

      document.getElementById("showcalculation").innerHTML = result; 

    }

    multiply = () => {
      var number1 = parseInt(document.getElementById('num1').value);
      var number2 = parseInt(document.getElementById('num2').value);
      var result = number1*number2;

      result = result.toString();

      alert(result);

      document.getElementById("showcalculation").innerHTML = result; 

    }
  }

ReactDOM.render(<BMI />, document.querySelector("#bmi"));
ReactDOM.render(<Calculator />, document.querySelector("#calculator"));
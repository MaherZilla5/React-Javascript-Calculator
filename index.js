class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: 0,
            calculation: 0,
            displayCalc: "",
            newCalc: false

        }
        this.calculate = this.calculate.bind(this);
        this.clear = this.clear.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
   
    handleClick(e){
    const operators = /[+\-*/]/;

       if(this.state.newCalc === true && operators.test(e.target.value) === false){22
           this.setState({
            display: e.target.value,
            newCalc: false
           })
           return;
       } else{
        this.setState({
            newCalc: false
        })
       }

       if(e.target.value === "0" && this.state.display === 0){
        return;
       }
       if(this.state.display === 0){
        this.setState({
             display: e.target.value
        })
        return;
       }
       if(e.target.value === "."){
        let decimalTest = this.state.display.split(operators);
        if(decimalTest[decimalTest.length - 1].includes(".")){
            return;
        }
     
       }

       if(e.target.value !== "-" && operators.test(e.target.value)){
            let char = this.state.display[this.state.display.length - 1] || "";
            let secondChar = this.state.display[this.state.display.length - 2] || "";
            if(operators.test(char)){
            if(char === "-" && operators.test(secondChar)){
                this.setState({
                    display: this.state.display.slice(0,-2) + e.target.value
                })
                return;
            } 
              this.setState({
                  display: this.state.display.slice(0,-1) + e.target.value
              })
              return;
        }
          this.setState({
            display: this.state.display + e.target.value
          }) 
          return;
       }
       this.setState({
          display: this.state.display + e.target.value
       })
    }

    
    
    
    
    calculate(){
           this.setState({
              display: eval(this.state.display).toString(),
              newCalc: true
           })
    }
    clear(){
          this.setState({
            display: 0
          })
          if(this.state.newCalc === true){
            this.setState({
                newCalc: false
            })
          }
          return;
    }

    render(){
        return(<div>
         <div id = "creditBox">
<div>
<h1>Javascript React Calculator</h1>
  <h2 id = "nameBox">By Matthew Maher</h2>
  </div>
</div>
        <div id = "calcMain">
           
             
            <div id = "calcBox">
                <div id = "display-box">
            <h1 id = "display">{this.state.display}</h1>
                </div>
            <div id = "buttonBox">
                <div id = "numbersBox">
            <Button id = {"clear"} buttonText = {"AC"} click={this.clear}/>
          <Button id = {"divide"} buttonText={"/"} value={"/"} click={this.handleClick}/>
          <Button id = {"multiply"} buttonText={"*"} value={"*"} click={this.handleClick}/>
          <Button id = {"subtract"} buttonText={"-"} value={"-"} click={this.handleClick}/>
            

          <Button id = {"seven"} click = {this.handleClick} value = {"7"}buttonText={"7"}/>
            <Button id = {"eight"} click = {this.handleClick} value = {"8"}buttonText={"8"}/>
            <Button id = {"nine"} click = {this.handleClick} value = {"9"} buttonText={"9"}/>
            <Button id = {"add"} buttonText={"+"} value={"+"} click={this.handleClick}/>


            <Button id = {"four"} click = {this.handleClick} value = {"4"}buttonText={"4"}/>
            <Button id = {"five"} click = {this.handleClick} value = {"5"}buttonText={"5"}/>
            <Button id = {"six"} click = {this.handleClick} value = {"6"}buttonText={"6"}/>
            <Button id = {"decimal"} buttonText={"."} value={"."} click={this.handleClick}/>
           
           
            <Button id = {"one"} click = {this.handleClick} value = {"1"} buttonText={"1"}/>
            <Button id = {"two"} click = {this.handleClick} value = {"2"}buttonText={"2"}/>
            <Button id = {"three"} click = {this.handleClick} value = {"3"}buttonText={"3"}/>
            <Button id = {"zero"} buttonText={"0"} value={"0"} click={this.handleClick}/>
           </div>
           
          </div>
          <div id = "equalsBox">
          <Button  id = {"equals"} buttonText={"="} value={"="} click={this.calculate}/>
          </div>
        </div>

        </div>
        </div>);
    }

    
}


class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
            <button class = "buttonStyle" id = {this.props.id} onClick={this.props.click} value = {this.props.value}>{this.props.buttonText}</button>
        </div>);
    }
}


ReactDOM.render(<App/>, document.getElementById("root"));
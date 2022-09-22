import React,{Component} from "react";

class Life extends Component{

constructor(props){
    super(props);
    this.state = { action:''}
    console.log('1-Constructor');

}

static getDerivedStateFromProps(){
    console.log('2-getDerivedStateFromProps');
    return null;
}

componentDidMount(){
    console.log('4-ComponentDidMount');
}

componentWillUnmount(){
    console.log('5-ComponentWillUnmount');

}

render(){
    console.log('3-render');
        return(
            <div>LIFE</div>
        )
    }

}

export default Life;
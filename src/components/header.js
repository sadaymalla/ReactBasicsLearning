import React,{Component} from "react";


class Header extends Component {

    state = {
        keywords:''
    }

    inputChangeHandler = (event) =>{
            this.setState({
                keywords: event.target.value
            })
    }

    

    render(){

        console.log(this.state)
        
        return(
            <header>
                <div className="logo">Logo</div>
                <input
                    onChange={this.inputChangeHandler}
                />
            </header>
        )
        }
};




export default Header;
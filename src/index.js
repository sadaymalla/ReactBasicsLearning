import React, { Component } from "react";
import  ReactDOM  from "react-dom";
import './styles/style.css';
import JSON from './db.json';

import Header from "./components/header";
import Newslist from "./components/news_list";
import Footer from "./components/footer";
import Life from "./components/lifecycle";

class App extends Component{

    state={
        news:JSON,
        filtered:JSON,
        footerText:"I am happy footer",
        active:true
    }

    getKeywords = (event) => {
        console.log(event.target.value)

        let keywords = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1;
        });

        this.setState({
           filtered
        });
    }


    render(){

        const{news, footerText,filtered} = this.state;
            return(
            <>
                <Header
                    keywords={this.getKeywords} 
                />
                <Newslist news={filtered}>
                    <br/>
                    <h1>I am children</h1>
                </Newslist>

                {this.state.active ? <Life/> : null } 

                

                <button
                onClick={()=> this.setState({active:!this.state.active})}
                >Action</button>

                <Footer 
                    footerText={footerText}
                />
                
            </>
            )
        }
}

ReactDOM.render(<App/>,document.getElementById('root'));
import React from "react";
import NewsItem from "./news_list_item";

const newslist = (props) =>{

    const news = props.news.map((item)=>(
        <NewsItem item={item}  key={item.id} name="s" age="22"/>
       
    )) 
    
    return(
        <>
            {news}
            {props.children}
        </>
    )
}

export default newslist;
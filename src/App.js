import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=309174531d4b4343b1e1a793eb338e9f')
            .then((Response)=>Response.json())
            .then((findresponse)=>{
                console.log(findresponse.articles)
                this.setState({
                    data:findresponse.articles,

                })
            })

    }
    render() {
      return(
          <div>
            {
              this.state.data.map((dynamicData, key) =>
                 <div className={"item"}>
                   <div className={"subItem"}>
                      <h3>{dynamicData.title}</h3><hr>{}</hr>
                          <img src={dynamicData.urlToImage} alt=""/>
                             {dynamicData.description}
                              <a href={dynamicData.url}>read more</a>
                              <h3><em>by {dynamicData.author}</em></h3>
                               <h4>Published: {dynamicData.publishedAt}</h4>
                    </div>


                 </div>
                 )

            }
          </div>
        )
    }
}

export default App;















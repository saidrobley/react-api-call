import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
           // title: {}
        }
    }
    componentDidMount() {

        fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=309174531d4b4343b1e1a793eb338e9f')
            .then((Response)=>Response.json())
            .then((findresponse)=>{
                console.log(findresponse.articles)

                // console.log(findresponse.data)
                this.setState({
                    data:findresponse.articles,
                 //   title:findresponse.description,
                    //  data:findresponse.data,
                    //  data:findresponse,
                })
            })

    }
    render() {

        return(


            <div>

                {


                    this.state.data.map((dynamicData, key) =>
                        <table className={"pretty-table"}>
                            <tr>
                                <th>Author</th>
                                <th colSpan={"2"}>Title</th>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>Author: {dynamicData.author}</td>
                                <td>Title: {dynamicData.title}</td>

                            </tr>
                        </table>

                    )
                }
            </div>
        )
    }
}

export default App;















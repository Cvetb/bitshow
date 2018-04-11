import React, { Component } from "react";
import { fetchShowList } from "../services/ShowService";
import { ShowCard } from "./ShowCard";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: [],
            inputValue: "",
            
          };
}

componentDidMount() {
  fetchShowList()
  .then(showList => {
      this.setState({
          showList
          
      })
})

}

render() {
    return (
     <div className="container">
     <h4 className="center red-text text-darken-4"><b>TV SHOWS</b></h4>
     <div className="row">
     {this.state.showList.slice(0,50).map((show) => {
      return <ShowCard show={show} key={show.id} />
})}
     </div>
     </div>
    )
}
}
export  default Home;
import React, { Component, Fragment } from "react";
import { fetchShowById } from "../services/ShowService";
import { fetchSeasons } from "../services/SeasonService";
import { fetchCast } from "../services/CastService";



class ShowInfoPage extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            show: null,
            seasons: [],
            castList: []
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.fetchShowDetails(id);
    }

    componentWillReceiveProps(nextProps) {
        
        this.fetchShowDetails(nextProps.match.params.id);
    }

    fetchShowDetails = (id) => {
        fetchShowById(id)
            .then(show => {
                this.setState({
                    show
                })
            });

            fetchSeasons(id)
            .then(responseSeasons => this.setState({
                seasons: responseSeasons
            }));
            fetchCast(id)
            .then(responseCast => {
                
                this.setState({
                    castList : responseCast
                })
            })
    }
    

    render() {
        const { show, seasons, castList } = this.state;


        if (!show) {
            return <div className="progress top">
            <div className="indeterminate"></div>
        </div>
              
        }

    return (
        <Fragment>
                <div className="container">
                    
                <h4 className="center red-text text-darken-4">{show.name}</h4>
                        
                <div className="row">
                    <div className="col m5 offset-m1">
                        <img src={show.medium} alt="show" />
                    </div>
                    <div className="col m3">
                        <h5 className="teal-text">Seasons ({seasons.length})</h5>
                            <ul>
                                { seasons.map((season) => {
                                    return <li> 
                                        {season.premiereDate} - {season.endDate} </li>
                                })}
                            </ul>
                    </div>
                    <div className="col m3">
                        <h5 className="teal-text">Casts</h5>
                            <ul>
                                { castList.map((cast) => {
                                    return <li >{cast.name}</li>
                                })}
                            </ul>
                    </div> 
                </div> 
                    
                <h5 className="teal-text">Summary </h5>
                <p>{show.summary}</p>
            </div>     
        </Fragment>
        )
    }
}

export { ShowInfoPage };
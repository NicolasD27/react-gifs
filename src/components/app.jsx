import React, { Component } from 'react';
import SearchBar from './searchbar.jsx';
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";
import giphy from "giphy-api";


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gifs: [],
			selectedGifId: "xThta16WvyzBijGzJK"
		};	
	}

	search = (query) => {
		giphy("rIIWTIp91SVTbj0gzj07jisCxaZvI3Qq").search({
		    q: query,
		    limit: 10,
		    rating: 'g'
		}, (err, result) => {
		    this.setState(
		    	{ gifs: result.data }
		    	);
		});
	}
	selectGif = (id) => {
		this.setState({
			selectedGifId: id
		});
	}

	render() {
		return (
			<div>
			<div className="left-scene">
				<div className="form-search"><SearchBar searchFunction={this.search} /></div>
				<div className="selected-gif"><Gif id={this.state.selectedGifId} /></div>
			</div>
			<div className="right-scene">
				<GifList gifs={this.state.gifs} selectGif={this.selectGif} />
			</div>
			</div>
			);
	}
}
export default App;

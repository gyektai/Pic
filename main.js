import React from "react"
class Game extends React.Component {
	constructor(props) {
		super(props);
		this.allCards = ['DRINK A TON', 'NOW DRINK SOME MORE!', 'TAKE A SHOT', '2 SHOTS'];
		this.colors = ['green', 'orange', 'blue', 'pink', 'purple', 'cyan'];
		this.state = {
			cardNum: 0,
			card: this.allCards[0],
			bgColor: 0,
		};
	}


	render() {
		let color = this.colors[this.state.bgColor]
		return (
			<div className={`stretch bg-${color}`}>
				<div className="card-label">{this.state.card}</div>
				<button className={`next-card-btn bg-${color}`} onClick={this.nextCard}>NEXT CARD</button>
			</div>
		);
	}

	nextCard = () => {
		let addToCard = Math.floor(Math.random() * 3) + 1;
		let addToColor= Math.floor(Math.random() * 3) + 1;
		let newCardIndex = (this.state.cardNum + addToCard) % 4;
		let newColorIndex = (this.state.bgColor + addToColor) % 6;

		this.setState(state => ({
			cardNum: newCardIndex,
			card: this.allCards[newCardIndex],
			bgColor: newColorIndex,
		}));
	}
}

ReactDOM.render(<Game />, document.querySelector('#game'));
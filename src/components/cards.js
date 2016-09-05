import { h, Component } from 'preact';
import { Card, Icon, Layout, Button } from 'preact-mdl';

export default class Cards extends Component {

	render() {
		return (
			<div class="mdl-grid">
				<Card class="demo-card-wide mdl-card mdl-shadow--2dp centered">
					<Card.Title class="mdl-card__title mdl-card--expand">
						<h2 class="mdl-card__title-text">CARDS</h2>
					</Card.Title>
					<Card.Text>
						Self-contained pieces of paper with data.
					</Card.Text>
					<Card.Actions class="mdl-card--border">
						<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
						Get Started
						</a>
					</Card.Actions>
					<Card.Menu>
						<Button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
							<Icon>material-icons</Icon>
						</Button>
					</Card.Menu>
				</Card>
				<Card class="demo-card-square mdl-card mdl-shadow--2dp centered">
					<Card.Title class="mdl-card__title mdl-card--expand">
						<h2 class="mdl-card__title-text">CARDS SQUARE</h2>
					</Card.Title>
					<Card.Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Aenan convallis.
					</Card.Text>
					<Card.Actions class="mdl-card--border">
						<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
						View Updates
						</a>
					</Card.Actions>
				</Card>
				<Card class="demo-card-image mdl-card mdl-shadow--2dp centered">
					<Card.Title></Card.Title>
					<Card.Actions>
						<span class="demo-card-image__filename">Image.jpg</span>
					</Card.Actions>
				</Card>
			</div>
		);
	}
}

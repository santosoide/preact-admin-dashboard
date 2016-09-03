import { h, Component } from 'preact';
import { Card, Icon, Layout, Button } from 'preact-mdl';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/tomorrow-night-eighties.css';
import hljs from 'highlight.js/lib/highlight';

export default class Components extends Component {

	render() {
		return (
			<div>
				<div class="mdl-grid">
					<Card shadow="1" class="mdl-cell mdl-cell--6-col">
						<div class="mdl-card__title">
							<h5 class="mdl-card__title-text">Badges</h5>
						</div>
						<Card.Text>
							<Icon icon="favorite" badge="10"/>

							<span class="mdl-badge" data-badge="4">Inbox</span>

							<span class="mdl-badge" data-badge="♥">Mood</span>
						</Card.Text>
					</Card>
					<Card shadow="1" class="mdl-cell mdl-cell--6-col">
						<div class="mdl-card__title">
							<h5 class="mdl-card__title-text">Button</h5>
						</div>
						<Card.Text>
							<Button colored raised>Button</Button>

							<Button fab colored>
								<Icon>create</Icon>
							</Button>
						</Card.Text>
					</Card>
				</div>
			</div>
		);
	}
}

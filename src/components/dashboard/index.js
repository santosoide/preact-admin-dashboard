import { h, Component } from 'preact';
import { Card } from 'preact-mdl';

export default class Dashboard extends Component {

	render() {
		return (
			<div>
				<div class="mdl-grid">
					<Card shadow="1" class="mdl-cell mdl-cell--6-col">
						<div class="mdl-card__title">
							<h2 class="mdl-card__title-text">Basic Charts</h2>
						</div>
						<Card.Text>
							
						</Card.Text>
					</Card>
					<Card shadow="1" class="mdl-cell mdl-cell--6-col">
						<div class="mdl-card__title">
							<h2 class="mdl-card__title-text">Pie Charts</h2>
						</div>
						<Card.Text>

						</Card.Text>
					</Card>
				</div>
			</div>
		);
	}
}

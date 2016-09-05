import { h, Component } from 'preact';
import { Card, Icon, Layout } from 'preact-mdl';

export default class Badges extends Component {

	render() {
		return (
            <div class="mdl-grid">
				<Card class="demo-card-badges mdl-card mdl-shadow--2dp centered">
					<Card.Title class="mdl-card__title mdl-card--expand">
						<h2 class="mdl-card__title-text">Badges</h2>
					</Card.Title>
					<Card.Text>
                        <div class="demo">
                            <Icon badge="10">account_box</Icon>
                            <Icon badge="♥">account_box</Icon>

                            <Layout.Spacer/>
                            <br/>

                            <span class="mdl-badge" data-badge="4">Inbox</span>
                            <span class="mdl-badge" data-badge="♥">Mood</span>

                            <Layout.Spacer/>
                            <br/>

                            <a href="#">This link is followed by a badge.</a>
                            <span class="mdl-badge" data-badge="12"></span>
                        </div>

					</Card.Text>
				</Card>
			</div>
		);
	}
}

import { h, Component } from 'preact';
import { Card, Icon, Layout, Button } from 'preact-mdl';

export default class Buttons extends Component {

	render() {
		return (
			<div class="mdl-grid">
				<Card class="demo-card-badges mdl-card mdl-shadow--2dp centered">
					<Card.Title class="mdl-card__title mdl-card--expand">
						<h2 class="mdl-card__title-text">Button</h2>
					</Card.Title>
					<Card.Text>
						<div class="demo">
							<p>Button FAB</p>
							<Button raised colored fab>
								<Icon >add</Icon>
							</Button>

							<span class="spacer"></span>

							<Button raised colored fab ripple>
								<Icon >add</Icon>
							</Button>

							<span class="spacer"></span>

							<Button raised colored fab ripple disabled>
								<Icon >add</Icon>
							</Button>

							<Layout.Spacer/>
							<br/>
							
							<p>Button Raised</p>
							<Button raised>
								Button
							</Button>

							<span class="spacer"></span>

							<Button raised ripple>
								Button
							</Button>

							<span class="spacer"></span>

							<Button raised ripple disabled>
								Button
							</Button>

							<Layout.Spacer/>
							<br/>


							<p>Button Raised Colored</p>
							<Button raised colored>
								Button
							</Button>

							<span class="spacer"></span>

							<Button raised colored accent>
								Button
							</Button>

							<span class="spacer"></span>

							<Button raised ripple colored accent>
								Button
							</Button>

							<Layout.Spacer/>
							<br/>

							<p>Button Flat</p>
							<Button colored>
								Button
							</Button>

							<span class="spacer"></span>

							<Button colored accent>
								Button
							</Button>

							<span class="spacer"></span>

							<Button ripple colored accent effect>
								Button
							</Button>

							<Layout.Spacer/>
							<br/>

							<p>Icon Button</p>
							<Button icon>
								<Icon>mood</Icon>
							</Button>

							<span class="spacer"></span>

							<Button colored icon>
								<Icon>mood</Icon>
							</Button>
						</div>
					</Card.Text>
				</Card>
			</div>
		);
	}
}

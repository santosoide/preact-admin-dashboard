import { h, Component } from 'preact';
import { Layout, Button, Icon, Spinner } from 'preact-mdl';
import { route } from 'preact-router';
import { memoize, bind } from 'decko';
import { emit } from '../pubsub';
import config from '../config.json';

export default class Header extends Component {
	constructor() {
		super();
	}

	@memoize
	linkTo(url) {
		return () => route(url);
	}

	@bind
	toggleMenu() {
		emit('menu');
	}

	render({ }, { }) {

		return (
			<Layout.Header manual>
				<Layout.HeaderRow>
					<Button icon onClick={this.toggleMenu}><Icon icon="menu"/></Button>
					<Layout.Title>
						<span style="cursor:pointer;" onClick={this.linkTo('/')}>{config.name}</span>
					</Layout.Title>

					<Layout.Spacer />

					<Button icon>
						<Icon icon="more_vert"/>
					</Button>

				</Layout.HeaderRow>
			</Layout.Header>
		);
	}
}

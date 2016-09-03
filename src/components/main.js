import { h, Component } from 'preact';
import { Layout, Button, Icon } from 'preact-mdl';
import Router, { route } from 'preact-router';
import { bind, debounce } from 'decko';
import { emit, on, off } from '../pubsub';
import Components from './components';
import Form from './forms';
import Tables from './table';
import Dashboard from './dashboard';
import config from '../config.json';

export default class App extends Component {

	render() {
		return (
			<Layout.Content id="content">
				<Router>
					<Dashboard path="/"/>
					<Components path="/component"/>
					<Form path="/form"/>
					<Tables path="/table"/>
				</Router>

				<Button fab colored class="floating-action-button">
					<Icon>create</Icon>
				</Button>
			</Layout.Content>
		);
	}
}

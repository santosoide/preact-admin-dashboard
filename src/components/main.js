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

				<a href="https://github.com/cyberid41/preact-admin-dashboard" target="_blank" id="view-source" class="floating-action-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored mdl-color-text--white">View Source</a>
			</Layout.Content>
		);
	}
}

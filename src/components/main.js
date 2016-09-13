import { h, Component } from 'preact';
import { Layout, Button, Icon } from 'preact-mdl';
import Router, { route } from 'preact-router';
import { bind, debounce } from 'decko';
import { emit, on, off } from '../pubsub';
import Badges from './badges';
import Buttons from './button';
import Cards from './cards';
import Form from './forms';
import Layouts from './layout';
import Tables from './table';
import Dashboard from './dashboard';
import Login from './login';
import config from '../config.json';

export default class App extends Component {

	render() {
		return (
			<Layout.Content id="content">
				<Router>
					<Dashboard path="/" />
					<Badges path="/badges" />
					<Buttons path="/button" />
					<Cards path="/cards" />
					<Form path="/form" />
					<Layouts path="/layout" />
					<Tables path="/table" />
					<Login path="/login" />
				</Router>

				<a href="https://github.com/cyberid41/preact-admin-dashboard" target="_blank" id="view-source" class="floating-action-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored mdl-color-text--white">View Source</a>
			</Layout.Content>
		);
	}
}

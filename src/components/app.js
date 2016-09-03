import { h, Component } from 'preact';
import { Layout } from 'preact-mdl';
import Header from './header';
import Sidebar from './sidebar';
import Main from './main';


export default class App extends Component {
	render() {
		return (
			<Layout fixed-header={true} js={false}>
				<Sidebar />
				<Header />
				<Main />
			</Layout>
		);
	}
}

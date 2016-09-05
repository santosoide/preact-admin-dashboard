import { h, Component } from 'preact';
import { route } from 'preact-router';
import { Layout, Navigation, Button, Icon, Image} from 'preact-mdl';
import { bind } from 'decko';
import { on, off } from '../pubsub';
import config from '../config.json';
import SVG from 'preact-svg';
import image from '../assets/man-296678.svg';

export default class Sidebar extends Component {

	componentDidMount() {
		on('menu', this.open);
		on('route', this.close);
	}

	componentWillUnmount() {
		off('menu', this.open);
		off('route', this.close);
	}

	@bind
	go(e) {
		route(e);
		this.close();
	}

	@bind
	close() {
		this.base.classList.remove('is-visible');
		this.visible = false;
	}

	@bind
	open() {
		this.base.classList.add('is-visible');
		this.visible = true;
	}
	
	render() {
		let { Link } = Navigation;

		return (
			<Layout.Drawer js={false} class={this.visible?'is-visible':null}>
				<Button class="menu" icon onClick={this.close}><Icon icon="menu"/></Button>
				<header class="drawer-header">
					<SVG viewBox='5 9 90 86' style='float: left;'>
						<image
							width="100"
							height="100"
							xlinkHref={image}
						/>
					</SVG>
					<div class="avatar-dropdown">
						<span style="padding-left:22px;">hello@mukidi.co</span>
						<div class="mdl-layout-spacer"></div>
						<Button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
							<Icon icon="arrow_drop_down"/>
							<span class="visuallyhidden">Accounts</span>
						</Button>
						<ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
							<li class="mdl-menu__item">hello@mukidi.co</li>
							<li class="mdl-menu__item">info@mukidi.co</li>
							<li class="mdl-menu__item"><Icon icon="person add"/>Add another account...</li>
						</ul>
					</div>
				</header>

				<Navigation>
					<Link href="/" route={this.go}>Dashboard</Link>
					<Link href="/cards" route={this.go}>Cards</Link>
					<Link href="/form" route={this.go}>Form</Link>
					<Link href="/table" route={this.go}>Table</Link>
					<Link href="/login" route={this.go}>Login</Link>
				</Navigation>
			</Layout.Drawer>
		);
	}
}

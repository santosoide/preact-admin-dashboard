import { h, Component } from 'preact';
import { Layout, Navigation, Button, Icon, Image} from 'preact-mdl';
import SVG from 'preact-svg';
import image from '../assets/man-296678.svg';
import { bind } from 'decko';
import { on, off } from '../pubsub';

export default class Layouts extends Component {

	render() {
		return (
            <div class="demo">
                <div class="demo-layout-transparent mdl-layout mdl-js-layout">
                    <header class="mdl-layout__header mdl-layout__header--transparent">
                        <div class="mdl-layout__header-row">
                            <span class="mdl-layout-title">Title</span>
                            <div class="mdl-layout-spacer"></div>
                            <nav class="mdl-navigation">
                                <a class="mdl-navigation__link" href="">Link</a>
                                <a class="mdl-navigation__link" href="">Link</a>
                                <a class="mdl-navigation__link" href="">Link</a>
                                <a class="mdl-navigation__link" href="">Link</a>
                            </nav>
                        </div>
                    </header>
                    <div id="drawer" class="mdl-layout__drawer">
                        <span class="mdl-layout-title">Title</span>
                            <Button class="menu" icon ><Icon icon="menu"/></Button>
                        <nav class="mdl-navigation">
                            <a class="mdl-navigation__link" href="">Link</a>
                            <a class="mdl-navigation__link" href="">Link</a>
                            <a class="mdl-navigation__link" href="">Link</a>
                            <a class="mdl-navigation__link" href="">Link</a>
                        </nav>
                    </div>
                    <main class="mdl-layout__content">
                    </main>
                </div>
            </div>
		);
	}
}

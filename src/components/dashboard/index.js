import { h, Component } from 'preact';
import { Card } from 'preact-mdl';

export default class Dashboard extends Component {

	render() {
		return (
			<div>
				<Card shadow="1" class="demo-card-chart mdl-card mdl-shadow--2dp centered">
					<div class="mdl-card__title">
						<h2 class="mdl-card__title-text">SVG Bar Charts</h2>
					</div>
						<Card.Text>
							<figure>
								<figcaption>The 2016 Top Programming Languages</figcaption>
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" class="chart" width="480" height="260" aria-labelledby="title" role="img">
								<title id="title">A bart chart showing information</title>
								<g class="bar">
									<rect width="390" height="19"></rect>
									<text x="400" y="9.5" dy=".35em">100.0 C</text>
								</g>
								<g class="bar" transform="translate(0,20)">
									<rect width="382" height="19"></rect>
									<text x="392" y="9.5" dy=".35em">98.1 Java</text>
								</g>
								<g class="bar" transform="translate(0,40)">
									<rect width="382" height="19"></rect>
									<text x="392" y="9.5" dy=".35em">98.0 Python</text>
								</g>
								<g class="bar" transform="translate(0,60)">
									<rect width="373" height="19"></rect>
									<text x="383" y="9.5" dy=".35em">95.9 C++</text>
								</g>
								<g class="bar" transform="translate(0,80)">
									<rect width="341" height="19"></rect>
									<text x="351" y="9.5" dy=".35em">87,9 R</text>
								</g>
								<g class="bar" transform="translate(0,100)">
									<rect width="336" height="19"></rect>
									<text x="346" y="9.5" dy=".35em">86,7 C#</text>
								</g>
								<g class="bar" transform="translate(0,120)">
									<rect width="321" height="19"></rect>
									<text x="331" y="9.5" dy=".35em">82,2 Javascript</text>
								</g>
								<g class="bar" transform="translate(0,140)">
									<rect width="288" height="19"></rect>
									<text x="298" y="9.5" dy=".35em">74,5 Ruby</text>
								</g>
								<g class="bar" transform="translate(0,160)">
									<rect width="277" height="19"></rect>
									<text x="287" y="9.5" dy=".35em">71,9 Go</text>
								</g>
								<g class="bar" transform="translate(0,180)">
									<rect width="270" height="19"></rect>
									<text x="280" y="9.5" dy=".35em">70,1 Swift</text>
								</g>
								</svg>
							</figure>
						</Card.Text>
					</Card>
			</div>
		);
	}
}

import { h, Component } from 'preact';
import { Card } from 'preact-mdl';

export default class Table extends Component {

	render() {
		return (
			<div>
				<div class="mdl-grid">
					<Card shadow="1" class="mdl-cell mdl-cell--6-col">
						<div class="mdl-card__title">
							<h2 class="mdl-card__title-text">Basic Table</h2>
						</div>
						<Card.Text>
							<table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
								<thead>
								<tr>
									<th class="mdl-data-table__cell--non-numeric">Material</th>
									<th>Quantity</th>
									<th>Unit price</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td class="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
									<td>25</td>
									<td>$2.90</td>
								</tr>
								<tr>
									<td class="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
									<td>50</td>
									<td>$1.25</td>
								</tr>
								<tr>
									<td class="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
									<td>10</td>
									<td>$2.35</td>
								</tr>
								</tbody>
							</table>
						</Card.Text>
					</Card>
				</div>
			</div>
		);
	}
}

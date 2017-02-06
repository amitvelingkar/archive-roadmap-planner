import React from 'react';
import Cell from './Cell';

class Epic extends React.Component {
	constructor() {
		super();
		this.renderEpicSprints = this.renderEpicSprints.bind(this);
	}
	renderEpicSprints(key) {
		const { details, index } = this.props;
		const epicSprints = details.sprints;

		if (!epicSprints[key]) {
			// just an empty cell
			return (
				<span className='schedule-cell schedule-col-sprint' key={key}>
					<span>&nbsp;</span>
				</span>
			)
		}

		return (
			<span className={'schedule-cell schedule-col-sprint epic-status-'+epicSprints[key].status} key={key}>
				<Cell
					sprint = {key}
					people = {epicSprints[key].people}
					epic = {index}
				/>
			</span>
		)
	}
	render() {
		const { details, index, sprints } = this.props;

		return (
			<div className='schedule-row'>
				<span className='schedule-cell schedule-col-epic'>
					{details.rank} {index}
				</span>
				{Object.keys(sprints).map(this.renderEpicSprints)}
			</div>
		)
	}
}

export default Epic;

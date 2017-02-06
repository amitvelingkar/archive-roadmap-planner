import React from 'react';

import Epic from './Epic';

class Schedule extends React.Component {
	constructor() {
		super();
		this.renderSprints = this.renderSprints.bind(this);
	}
	renderSprints(key) {
		const sprint = this.props.sprints[key];
		return (
			<span className='schedule-cell schedule-col-sprint' key={key}>
				<span>{sprint.start}</span> to <span>{sprint.end}</span>
			</span>
		)
	}
	render() {
		return (
			<div>
				<div className='schedule-row'>
					<span className='schedule-cell schedule-col-epic'>Epics</span>
					{Object.keys(this.props.sprints).map(this.renderSprints)}
				</div>
				{
					Object
						.keys(this.props.epics)
						.map(key =>
							<Epic
								key={key}
								index={key}
								details={this.props.epics[key]}
								sprints={this.props.sprints}
							/>
						)
				}
				<button onClick={this.props.loadSampleData}>Load Sample Data</button>
			</div>
		)
	}
}

export default Schedule;

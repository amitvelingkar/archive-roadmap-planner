import React from 'react';
import ReactTooltip from 'react-tooltip';

class Cell extends React.Component {
	constructor() {
		super();
		this.renderPeople = this.renderPeople.bind(this);
	}
	renderPeople(key) {
		const person = this.props.people[key];
		let initials = person.match(/\b\w/g) || [];
		initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

		return (
			<span className='cell-person' key={key}>
				<span className='cell-person-text' data-tip={person}>{initials}</span>
				<ReactTooltip/>
			</span>
		)
	}
	render() {
		return (
			<span>
				{Object.keys(this.props.people).map(this.renderPeople)}
			</span>
		)
	}
}

export default Cell;

import React, { Component } from 'react'

class Visit extends Component {
	render(){
		// The output, plus were not gonna show the date over and over
		let output = [];
		let hasDated = false;

		// Loop through all the reocrds, each will get it's own table row
		this.props.visitRecord.records.forEach((record,index)=>{

			// Prepare the date
			let displayDate = (hasDated?'':this.props.visitRecord.date);
			hasDated = true;

			// Prepare the license, and wrap it in a td if were going to display it
			let displayLicense = null;
			if(this.props.showLic){
				displayLicense = (<td>{record.license_number}</td>)
			}

			// Prepare the output of the details line, pretty different if it's a visit or a violation
			let displayDetail = record.activity
			if(record.type==='violation'){
				displayDetail = <div key={'violation'+index} className="activity violation"><span className={'wac-code'}><a href={'http://apps.leg.wa.gov/wac/default.aspx?cite='+record.wac_code.replace(/\(.+\)/,'')} target="_blank" rel="noopener noreferrer">{record.wac_code}</a></span>{record.violation_type}<i>{record.penalty_type}</i></div>
			}

			// Add the row to th eoutput, then output
			output.push(<tr key={this.props.visitRecord.index+'-'+index}>
				<td className={'date'}>{displayDate}</td>
				{displayLicense}
				<td>{displayDetail}</td>
			</tr>)
		});
		return output
	}
}

export default Visit;
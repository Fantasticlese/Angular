import { Component } from '@angular/core';
import { Proposal } from './Proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://portfolio.joshythorup.com', 'Ruby on Rails', 150, 120, 15, 'jthorup@gmail.com')
	proposalTwo: Proposal = new Proposal(99, 'Shire Building Co', 'http://portfolio.joshythorup.com', 'Ruby on Rails', 150, 120, 15, 'jthorup@gmail.com')
	proposalThree: Proposal = new Proposal(300, 'More Mordor Bridges', 'http://portfolio.joshythorup.com', 'Ruby on Rails', 150, 120, 15, 'jthorup@gmail.com')

	proposals: Proposal[] = [
		this.proposalOne, 
		this.proposalTwo, 
		this.proposalThree
	]
}
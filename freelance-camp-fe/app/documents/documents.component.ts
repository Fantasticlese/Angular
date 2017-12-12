import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css']
})

export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"

	documents: Document [] = [
		{
			title: "My First Doc",
			description: "It's very round",
			file_url: 'http://google.com',
			updated_at: '12/8/2017',
			image_url: 'https://theopenmic.co/wp-content/uploads/2016/01/freelancer.jpg',
		},
		{
			title: "My Second Doc",
			description: "It's very round",
			file_url: 'http://google.com',
			updated_at: '12/8/2017',
			image_url: 'http://echeck.org/wp-content/uploads/2017/10/Best-And-Cheapest-Ways-to-Pay-Freelancers-Online-cover-image.png',
		},
		{
			title: "My Last Doc",
			description: "It's very round",
			file_url: 'http://google.com',
			updated_at: '12/8/2017',
			image_url: 'https://cdn.searchenginejournal.com/wp-content/uploads/2016/04/freelancersecrets.jpg',
		}
	]
}
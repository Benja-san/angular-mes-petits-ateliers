import { Component } from '@angular/core';

@Component({
  selector: 'app-wilders-search',
  templateUrl: './wilders-search.component.html',
  styleUrls: ['./wilders-search.component.scss'],
})
export class WildersSearchComponent {
  searchInput: string = '';
  constructor() {}
  ngOnInit(): void {}
}

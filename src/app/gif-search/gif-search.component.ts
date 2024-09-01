import { Component } from '@angular/core';
import { GiphyService } from '../giphy.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, MatInputModule, MatButtonModule,MatCardModule,MatGridListModule,MatAutocompleteModule]
})
export class GifSearchComponent {
  gifs: any[] = [];
  searchTerm: string = '';
  currentPage: number = 0;
  totalResults: number = 0;
  resultsPerPage: number = 10;  // Default limit
  limitOptions: number[] = [10, 20, 30, 50];  

  constructor(private giphyService: GiphyService) { }

  searchGifs() {
    if (this.searchTerm.trim()) {
      this.giphyService.searchGifs(this.searchTerm, this.currentPage * this.resultsPerPage, this.resultsPerPage).subscribe(response => {
        this.gifs = response.data;
        this.totalResults = response.pagination.total_count; 
      });
    }
  }

  nextPage() {
    this.currentPage++;
    this.searchGifs();
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.searchGifs();
    }
  }

  get hasNextPage(): boolean {
    return (this.currentPage + 1) * this.resultsPerPage < this.totalResults;
  }

  get hasPrevPage(): boolean {
    return this.currentPage > 0;
  }

  onLimitChange(event: any) {
    this.resultsPerPage = event.option.value;
    this.currentPage = 0;  // Reset to first page
    this.searchGifs();
  }
}
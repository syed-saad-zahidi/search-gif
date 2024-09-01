import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifSearchComponent } from './gif-search/gif-search.component'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,GifSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'search-gif';
}

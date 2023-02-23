import { Component } from '@angular/core';

@Component({
  selector: 'app-back-story',
  templateUrl: './back-story.component.html',
  styleUrls: ['./back-story.component.css']
})
export class BackStoryComponent {

  homeTown: string = "Narnia";
  profession: string = "Farmer";
  favoriteFood: string = "Pizza";
  hobby : string = "go to the movies";
  age: number = 34
}

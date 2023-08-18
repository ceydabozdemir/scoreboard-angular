import { Component } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private scoreService: ScoreService) {}

  addScore(player: string, score: string) {
    this.scoreService.addScore(player, parseInt(score, 10));
  }
}

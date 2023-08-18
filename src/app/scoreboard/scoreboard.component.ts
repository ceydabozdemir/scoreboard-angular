import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';
import { Score } from '../score.model';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  scores: Score[] = [];

  constructor(private scoreService: ScoreService) {}

  ngOnInit() {
    this.scores = this.scoreService.getScores();
  }
}

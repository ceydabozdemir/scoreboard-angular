import { Injectable } from '@angular/core';
import { Score } from './score.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private scores: Score[] = [];

  addScore(player: string, score: number) {
    this.scores.push({ player, score });
  }

  getScores() {
    return this.scores;
  }
}

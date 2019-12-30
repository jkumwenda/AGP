import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/shared/services/player.service';
import { Profile } from 'src/app/shared/interfaces/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  public moduleTitle = 'Players';
  private profiles: Profile[];

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  getPlayers() {
    this.playerService.getPlayers().then(
      result => {
        this.profiles = result as Profile[];
      },
      error => { }
    );
  }

  viewPlayer(playerId) {
    this.router.navigate(['/player', playerId]);
  }

  ngOnInit() {
    this.getPlayers();
  }

}

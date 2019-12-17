export class Club {
  pk_clubid: number;
  club: string;

  constructor(clubId, club: string) {
    this.club = club;
    this.pk_clubid = clubId;
  }
}

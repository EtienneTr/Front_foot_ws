export class Bets {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeTeamBadge: string;
  awayTeamBadge: string;
  competition: string;
  matchDate: string;
  winning: string;
  id_Odds: number;
  id_sport: number;
  id_result: number;
  Odds: {
    id: number,
    HomeBet: number;
    AwayBet: number;
    DrawBet: number;
  };
  Result: {
    id: number,
    goalsHomeTeam: number;
    goalsAwayTeam: number;
    matchResult: string;
  };
  Sport: {
    id: number;
    wording: string;
  };
}

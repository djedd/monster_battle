export interface Monster {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}

export interface MonsterBattleResult {
  winner: {
    id: string;
    name: string;
    attack: number;
    defense: number;
    hp: number;
    speed: number;
    type: string;
    imageUrl: string;
  };
  tie: boolean;
}

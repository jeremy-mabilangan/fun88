export interface IGames {
  id: number;
  name: string;
  category: string;
  img: string;
  provider: number;
  isFavorite?: boolean;
}

export interface IGameProviders {
  id: number;
  name: string;
  img: string;
  isSelected?: boolean;
}

import { PokeTypes } from "./PokeTypes";

export interface IPokemons {
    id: number,
    name: string,
    height: number,
    weight: number,
    types: Array<PokeTypes>
}
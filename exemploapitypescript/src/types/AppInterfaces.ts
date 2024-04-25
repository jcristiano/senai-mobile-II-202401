interface PokemonListInterface {
    count: number,
    next: string | null,
    previous: string | null,
    results: PokemonItemListInterface[];
}

interface PokemonItemListInterface {
    name: string,
    url: string;
}

export type {
    PokemonListInterface,
    PokemonItemListInterface
}
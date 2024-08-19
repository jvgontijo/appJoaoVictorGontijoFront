export interface Character {
    id: string;
    name: string;
    age: number;
    weapons: string[];
    appearance: {
        hairColor: string;
        eyeColor: string;
        height: number;
        weight: number;
        isVisible: boolean;
    };
    isBrought: boolean;
}

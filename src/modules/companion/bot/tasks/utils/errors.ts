export class TownInaccessibleError extends Error {
    public constructor(public town: string) {
        super(`${town} is inaccessible`);
    }
}

export class DungeonInaccessibleError extends Error {
    public constructor(public dungeon: string) {
        super(`${dungeon} is inaccessible`);
    }
}

export class TaskInterruptedError extends Error {
    public constructor() {
        super('Task interrupted');
    }
}

export class ImplementationNotNecessaryError extends Error {
    public constructor() {
        super('Implementation isn\'t necessary');
    }
}

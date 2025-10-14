interface CompanionFeature {
    fromJSON(json: Record<string, any>): void;
    toJSON(): Record<string, any>;
}

export default CompanionFeature;

class Show {
    constructor(show) {
        this.id = show.id;
        this.name = show.name.toUpperCase();
        this.medium = show.image.medium;
        this.original = show.image.original;
        this.summary = show.summary;
    }
}

export {Show};
class Word {
    constructor(value) {
        this.value = value;
      }
    guess () {
        this.status = 'guessed';
    }
    skip () {
        this.status = 'skipped';
    }
}

export default Word;
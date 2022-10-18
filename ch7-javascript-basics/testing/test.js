let musicQueue = {
    songs: ["Party Rock Anthem", "I Gotta Feeling", "Macarena"],
    nextSong: 0,

    // Add getter and setter for next property

    get next() {
        var currentSong;
        if (this.nextSong < this.songs.length) {
            this.nextSong++;
            currentSong = this.songs[this.nextSong];
        } else if (this.nextSong == this.songs.length) {
            this.nextSong = 0;
            currentSong = this.songs[this.nextSong];
        }
        return currentSong;
    },
    set next(nextSong) {
        this.nextSong = nextSong;
        if (nextSong > this.songs.length || nextSong < 0) {
            this.nextSong = 0;
        }
    },
};
// Run through the queue three times
for (let c = 0; c < musicQueue.songs.length * 3; c++) {
    console.log("Now playing: " + musicQueue.next);
}

// Test the next setter
musicQueue.next = 2;
console.log(musicQueue.next); // Macarena
musicQueue.next = 3;
console.log(musicQueue.next); // Party Rock Anthem
musicQueue.next = -1;
console.log(musicQueue.next); // Party Rock Anthem

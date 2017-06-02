class ClozeCard {
    constructor(text, cloze) {

        if (text.indexOf(cloze) < 0) {
            return console.error("The cloze text is not in the full text!");
        }

        this.fullText = text;
        this.cloze = cloze;

        if (this.fullText && this.cloze) {
            this.partial = this.CreatePartial(this.fullText, this.cloze);
        }

    }

    CreatePartial(allText, clozeText) {
        for (var i = 0; i < allText.length; ++i) {
            if (allText.substring(i, i + clozeText.length) == clozeText) {
                allText = allText.substring(0, i) + "..." + allText.substring(i + clozeText.length, allText.length);
            }
        }
        return allText;
    }

} // closes ClozeCard class

module.exports = ClozeCard;

// var georgeWash = new ClozeCard("George Washington is the first president.", "George Washington");
// console.log(georgeWash);
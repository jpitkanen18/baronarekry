import { readFileSync } from 'fs';

var firstDeck = <Card[]>JSON.parse(readFileSync('cards.json', 'utf-8'))

var secondDeck = <Card[]>JSON.parse(readFileSync('cards.json', 'utf-8'))


interface Card {
    suit: string;
    value: number;
    stringValue: string;
  }

function sortCards(cards: Card[]){
    let hearts: Card[] = []
    let diamonds: Card[] = []
    let clubs: Card[] = []
    let spades: Card[] = []
    let suits: Card[][]= [hearts, diamonds, clubs, spades]

    cards.forEach(card => {
        switch(true){
            case card.suit === "hearts" :
                hearts.push(card)
                break; 
            case card.suit === "diamonds" :
                diamonds.push(card)
                break; 
            case card.suit === "clubs" :
                clubs.push(card)
                break; 
            case card.suit === "spades" :
                spades.push(card)
                break; 
        }
    })
    suits.forEach(suit => {
        suit.sort((a, b) => a.value-b.value);
    })
    return suits.flat(1);

}

function printDeck(cards: Card[], order: String){
    console.log("\n" + order + " deck\n")
    cards.forEach(card => {
        let suit = card.suit[0].toUpperCase() + card.suit.slice(1);
        let number = card.stringValue[0].toUpperCase() + card.stringValue.slice(1);
        console.log(number + " of " + suit)
    })
}

function magicTrick(cards: Card[]){
    let magicDeck: Card[] = []
    cards.forEach(card => {
        if(card.value === 14){
            card.stringValue = "Queen"
            magicDeck.push(card)
        } else {
            magicDeck.push(card)
        }
    })
    magicDeck.forEach(card => {
        let number = card.stringValue[0].toUpperCase() + card.stringValue.slice(1);
        console.log(number + ": " + card.value)
    })
}

firstDeck = sortCards(firstDeck)

printDeck(firstDeck, "First")
printDeck(secondDeck, "Second")

magicTrick(firstDeck)
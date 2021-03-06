var suitRed = '#FF0000';
var suitBlack = '#000000';
var cardHeight = 200;
var cardWidth = 60;
var margin = -5;

var canvas = Snap(cardWidth * (52 + margin), cardHeight);
var totalCardWidth = cardWidth + margin;

function createCard(suit, value) {
  var card = {};
  card.suit = suit;
  card.value = value;
  switch (suit) {
    case 'hearts':
      card.color = suitRed;
      card.img = './images/hearts.svg';
      break;
    case 'diamonds':
      card.color = suitRed;
      card.img = './images/diamonds.svg';
    break;
    case 'clubs':
      card.color = suitBlack;
      card.img = './images/clubs.svg';
    break;
    case 'spades':
      card.color = suitBlack;
      card.img = './images/spades.svg';
    break;
  }

  switch (value) {
    case 14:
      card.name = 'A';
      break;
    case 13:
      card.name = 'K';
      break;
    case 12:
      card.name = 'Q';
      break;
    case 11:
      card.name = 'J';
      break;
    default:
      card.name = value;
  }

  return card;
}

function renderCard(x, y, card) {

    // TODO(bradleybossard): Clean up variable names.
    var centerX = cardWidth / 5;
    var centerY = cardHeight / 5;
    var cardGroup = canvas.group();
    var cardRect = canvas.rect(0, 0, cardWidth, cardHeight, 5, 5).attr({fill: '#EEEEEE', stroke:'#999999', strokeWidth: 1});

    var cardTransform = new Snap.Matrix();
    cardTransform.translate(x, y);
    cardGroup.transform(cardTransform);

    var text = canvas.text(centerX, centerY, card.name)
      .attr({'font-size': 15,
             'font-weight': 'bold',
             'text-anchor': 'middle',
             'fill': card.color});


  Snap.load(card.img, function(img) {

    var g = canvas.group();
    g.append(img);
    g.attr({fill: card.color});

    cardGroup.append(cardRect);
    cardGroup.append(text);
    var textBBox = text.getBBox();
    console.log(textBBox);

    // Scale the suit icon to be as wide as the text (no good for 10 though).
    var suiteWidth = g.getBBox().width;
    var scaleFactor = (textBBox.width) / suiteWidth;

    var t = new Snap.Matrix();
    t.translate(textBBox.x, textBBox.y + textBBox.height);
    t.scale(scaleFactor, scaleFactor);
    g.transform(t);
    
    cardGroup.append(g);
  });

/*
  var pips = [];
  var deltaY = cardHeight / value;
  for (var i = 0; i < value; i++) {
    pips.push(card.circle(cardWidth/2, deltaY * i, 10));
  }
*/
}

var suits = ['spades', 'hearts', 'clubs', 'diamonds'];
var cardCount = 0;

var cards = [];

for (var i = 0; i < suits.length; i++) {
  for (var j = 2; j < 15; j++) {
    var card = createCard(suits[i], j);
    renderCard(totalCardWidth * cardCount, 0, card);
    cards.push(card);

    cardCount++;
  }
}



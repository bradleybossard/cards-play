var suitRed = '#FF0000';var suitBlack = '#000000';var cardHeight = 100;var cardWidth = 60;var margin = 10;var canvas = Snap(cardWidth * (52 + margin), cardHeight);var totalCardWidth = cardWidth + margin;function renderCard(x, y, suit, value) {  var suitColor = '';  switch (suit) {    case 'hearts':    case 'diamonds':      suitColor = suitRed;    break;    case 'clubs':    case 'spades':      suitColor = suitBlack;    break;  }  var card = canvas.rect(x, y, cardWidth, cardHeight).attr({fill: '#EEEEEE'});  canvas.text(x + cardWidth/2, y + cardHeight/2, value).attr({fill: suitColor});/*  var pips = [];  var deltaY = cardHeight / value;  for (var i = 0; i < value; i++) {    pips.push(card.circle(cardWidth/2, deltaY * i, 10));  }*/}var suits = ['spades', 'hearts', 'clubs', 'diamonds'];var cardCount = 0;for (var i = 0; i < suits.length; i++) {  for (var j = 2; j < 15; j++) {    renderCard(totalCardWidth * cardCount, 0, suits[i], j);    cardCount++;  }}
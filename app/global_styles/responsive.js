import React, { Dimensions } from 'react-native';

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// First iteration of ratios
// const ratioX = x <= 375 ? (x <= 320 ? 0.75 : 0.875) : 1 ;
// const ratioY = y <= 568 ? (y <= 480 ? 0.75 : 0.875) : 1 ;
// const svgScaling = x <= 375 ? (x <= 320 ? 1 : 1.2) : 1.5;

const ratioX = x <= 768 ? (x <= 414 ? (x <= 375 ? (x <= 320 ? 0.75 : 0.875) : 1) : 1.5) : 2;
const ratioY = y <= 568 ? (y <= 480 ? 0.75 : 0.875) : 1;
const svgScaling = x <= 768 ? (x <= 414 ? (x <= 375 ? (x <= 320 ? 1 : 1.15) : 1.25) : 2) : 3;

const base_unit = 25;

const unit = base_unit * ratioX;

function em(value) {
  return unit * value;
}

export default Responsive = {
  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1.25),

  // CARD
  CARD_WIDTH: x - em(1.25) * 2,
  CARD_HEIGHT: (x - em(1.25) * 2) * (3/5),
  CARD_PADDING_X: em(1.875),
  CARD_PADDING_Y: em(1.25),

  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.25),
  FONT_SIZE_LARGER: em(2.25),
  FONT_SIZE_LARGE: em(1.75),

  // SVG
  SVG_SCALE: svgScaling,
};

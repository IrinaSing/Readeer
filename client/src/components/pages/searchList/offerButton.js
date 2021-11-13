import { offerBook } from '../../../handlers/offerButtonHandler.js';
import { unOfferBook } from '../../../handlers/unOfferButtonHandler.js';

// create a button component for offer
export const offerButtonComponentWithHandler = () => {
  const offerButton = offerButtonComponent();

  offerButton.addEventListener('click', offerBook);

  return offerButton;
};

export const offerButtonComponent = (text = 'Offer') => {
  const offerButton = buttonComponent(text);

  offerButton.className = 'offer-btn';
  offerButton.style.backgroundColor = '#F9D63E';
  offerButton.style.border = 'none';
  offerButton.disabled = true;

  return offerButton;
};

export const unOfferButtonComponent = (text = 'Unoffer') => {
  const unOfferButton = buttonComponent(text);

  unOfferButton.className = 'btn btn-danger';
  unOfferButton.addEventListener('click', unOfferBook);

  return unOfferButton;
};

const buttonComponent = (text = 'Offer') => {
  const button = document.createElement('button');
  button.id = text;
  button.className = 'btn btn-primary';
  button.innerText = text;
  button.style.borderRadius = '20px';
  button.style.height = '37px';
  button.style.width = '164px';

  return button;
};

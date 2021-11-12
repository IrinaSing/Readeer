import { offerBook } from '../../../handlers/offerButtonHandler.js';

// create a button component for offer
export const offerButtonComponentWithHandler = () => {
  const offerButton = offerButtonComponent();

  offerButton.addEventListener('click', offerBook);

  return offerButton;
};

export const offerButtonComponent = (text = 'Offer') => {
  const offerButton = document.createElement('button');
  offerButton.id = text;
  offerButton.className = 'offer-btn';
  offerButton.innerText = text;
  offerButton.style.backgroundColor = '#F9D63E';
  offerButton.style.borderRadius = '20px';
  offerButton.style.height = '37px';
  offerButton.style.width = '164px';
  offerButton.style.border = 'none';
  offerButton.disabled = true;

  return offerButton;
};

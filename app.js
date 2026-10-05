import { predict } from './predictor.mjs';

const form = document.getElementById('titanic-form');
const result = document.getElementById('titanic-result');
let model;

fetch('models/titanic.json').then(response => {
  if (!response.ok) throw new Error('Model could not be loaded.');
  return response.json();
}).then(data => {
  model = data;
  document.getElementById('titanic-accuracy').textContent = `Test accuracy: ${(model.accuracy * 100).toFixed(2)}%`;
  form.querySelector('button').disabled = false;
}).catch(error => {
  result.hidden = false;
  result.textContent = error.message;
});

form.addEventListener('submit', event => {
  event.preventDefault();
  result.hidden = false;
  try {
    const data = new FormData(form);
    const values = model.features.map(feature => model.categories[feature].indexOf(data.get(feature)));
    if (values.includes(-1)) throw new Error('Choose a valid option for every input.');
    const prediction = predict(model, values);
    result.textContent = `Model predicts: ${model.class_names[prediction].toLowerCase()}`;
  } catch (error) {
    result.textContent = error.message;
  }
});

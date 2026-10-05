export function decision(model, values) {
  if (values.length !== model.features.length || values.some(value => !Number.isFinite(value))) {
    throw new Error('Enter a valid value for every input.');
  }
  const scaled = values.map((value, index) => (value - model.mean[index]) / model.scale[index]);
  let score = model.intercept;
  for (let row = 0; row < model.support_vectors.length; row += 1) {
    let distance = 0;
    for (let column = 0; column < scaled.length; column += 1) {
      distance += (scaled[column] - model.support_vectors[row][column]) ** 2;
    }
    score += model.dual_coefficients[row] * Math.exp(-model.gamma * distance);
  }
  return score;
}

export function predict(model, values) {
  return model.classes[decision(model, values) > 0 ? 1 : 0];
}

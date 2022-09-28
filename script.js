import { textEnter, textOutput, button } from "./modules/elements.js";



const start = {
  "distance": {
    "unit": "m", "value": 0.5
  },

  convert_to: "ft"
}


const {
  unit = start.distance.unit,
  value = start.distance.value,
  convert_to,
} = start;


const coefficient_of_difference = {
  "cm": 0.01,
  "m": 1,
  "in": 0.025399936868299999304,
  "ft": 0.30479924241959999165,
  "mm": 0.001,
  "yd": 0.91439772725879997495,
  "km": 1000,
}

console.log(finish(unit, value, convert_to));



function finish(unit, value, convert_to) {

  function foo() {
    for (let keyOld in coefficient_of_difference) {
      if (keyOld == unit) {
        for (let keyNew in coefficient_of_difference) {
          if (keyNew == convert_to) {
            return Math.round(value * coefficient_of_difference[keyOld] / coefficient_of_difference[keyNew] * 100) / 100;
          }
        }
      }
    }
  }

  return {
    "unit": convert_to,
    "value": foo(),
  }

}


// Récupérer un num1 et le sauvegarder dans une variable
// Récupérer l'opérateur et le sauvegarder dans une variable + reset input
// Récupérer un num2 et le sauvegarder dans une variable
// Appeler la fonction operation et lui passer num1, operator et num2 en paramètres
// Utiliser la touche "=" pour faire un return de l'opération entre num1, operator et num2

// Boutons numériques

const numButtons = document.querySelectorAll(".num");

/* Operateur */

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const del = document.querySelector("#del");
const c = document.querySelector("#c");

const operatorButtons = document.querySelectorAll(".operator");

/* screen */

const screenText = document.querySelector("#screen");

/* Variables */

let operator = "+";
let numSave2 = "";
let numSave1 = "";
let operatorChosen = false;

// Quand on appuie pour la première fois sur une touche num, il se passe une opération : 0 + valeurNum (ex: j'appuie sur 1, il se passe 0 + 1)
// Ensuite, quand on appuie sur un opérateur, la précédente valeur numérique est sauvegardée et l'opérateur
// Quand on appuie à nouveau sur une touche num, l'opération se fait entre la précédente valeur, l'opérateur, et la nouvelle valeur
// Quand on rappuie à nouveau sur un opérateur, la précédente valeur numérique est sauvegardée etc etc etc...

// Boucles & event listeners

numButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (!operatorChosen) {
      handleSaveNum1(button.textContent);
      screenText.textContent = numSave1;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    operator = button.textContent;
    operatorChosen = true;
    console.log(operator);
    screenText.textContent = operator;
    numButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();

        if (operatorChosen) {
          operatorChosen = false;
          handleSaveNum2(button.textContent);
          screenText.textContent = numSave2;
        }
      });
    });
  });
});

equals.addEventListener("click", () => {
  handleEqual(numSave1, operator, numSave2);
});

console.log(numSave1);

// Fonctions

const handleSaveNum1 = (value) => {
  numSave1 += value;
  console.log(`Num1 = ${numSave1}`);
};

const handleSaveNum2 = (value) => {
  numSave2 += value;
  console.log(`Num2= ${numSave2}`);
};

const handleEqual = (n1, operator, n2) => {
  operation(Number(n1), operator, Number(n2));
  reset();
  operatorChosen = false;
};

const reset = () => {
  numSave1 = 0;
  numSave2 = 0;
  operator = "+";
};

const operation = (num1, operator = operator, num2) => {
  console.log(num1, operator, num2);
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("Opérateur non reconnu", operator);
      return;
  }

  console.log(result);
  screenText.textContent = result;
  return result;
};

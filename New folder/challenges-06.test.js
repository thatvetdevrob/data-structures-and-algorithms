'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');
const Mustache = require('mustache');

/* ------------------------------------------------------------------------------------------------

CHALLENGE 1 - Review

Use the characters data below for all of the challenges except challenge 2.

Write a function named templatingWithMustache that uses mustache to create the markup templates for each of the characters. Use the snippet as your guide for creating your templates. Return an array of template strings. Note: this function does not need to actually append the markup to the DOM.

------------------------------------------------------------------------------------------------ */
let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

let $ = createSnippetWithJQuery(`
<script id="template" type="x-tmpl-mustache">
<h2>{{ name }}</h2>
<h3>{{ spouse }}</h3>
{{#children}}
* {{.}}
{{/children}}
<p> {{ house }} </p>
</script>
`);




const templatingWithMustache = () => {

  let mustacheArray = [];
  characters.forEach(person => {

    let template = $('#template').html();
    let html = Mustache.render(template, person);
    mustacheArray.push(html);

  });

  return mustacheArray;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.

For example: (['name', 'duration', 'topics', 'finalExam']).
------------------------------------------------------------------------------------------------ */
const courseInfo = { name: 'Code 301', duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks'},
  topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
  finalExam: true
};

const getCourseKeys = (obj) => Object.keys(obj);
// Solution code here...


//no curlies if its in one line but if requested to do it another way i will take feedback.

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

const getHouses = (arr) => {
  let houses = [];

  arr.forEach(character => {
    houses.push(character.house);
  });

  return houses;
};

/*------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.

This function should take in an array of data and a character name and return a Boolean.

For example:
hasChildrenValues(characters, 'Cersei') will return true
hasChildrenValues(characters, 'Sansa') will return false
------------------------------------------------------------------------------------------------ */

const hasChildrenValues = (arr, character) => {
  let hasChildren = false;
  arr.forEach(obj => {
    if (obj.name === character) {
      let values = Object.values(obj);
      if (values[2].length) {
        hasChildren = true;
      }
    }
  });
  return hasChildren;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function named hasChildrenEntries that is similar to your hasChildrenValues function from challenge 4, but uses the data's entries instead of its values.

The input and output of this function are the same as the input and output from challenge 3.
------------------------------------------------------------------------------------------------ */

const hasChildrenEntries = (arr, character) => {
  // Solution code here...


/*
Too tired atm, maybe tomorrow....


             _,addba,
         _,adP"'\  "Y,                       _____
       ,P"  d"Y,  \  8                  ,adP"""""""Yba,_
     ,d" /,d' `Yb, ,P'              ,adP"'           `""Yba,
     d'   d'    `"""         _,aadP"""""""Ya,             `"Ya,_
     8  | 8              _,adP"'                              `"Ya,
     8    I,           ,dP"           __              "baa,       "Yb,
     I,   Ya         ,db___           `"Yb,      a       `"         `"b,
     `Y, \ Y,      ,d8888888baa8a,_      `"      `"b,                 `"b,
      `Ya, `b,    d8888888888888888b,               "ba,                `8,
        "Ya,`b  ,d8888888888888888888,   d,           `"Ya,_             `Y,
          `Ybd8d8888888888888888888888b, `"Ya,            `""Yba,         `8,
             "Y8888888888888888888888888,   `Yb,               `"Ya        `b
              d8888888888888888888888888b,    `"'            ,    "b,       8,
              888888888888888888888888888b,                  b      "b      `b
              8888888888888888888888888888b    b,_           8       "       8
              I8888888888888888888888888888,    `"Yb,_       `b,             8
               Y888888888888888888888888888I        `Yb,       8,            8
                `Y8888888888888888888888888(          `8,       "b     a    ,P
                  "8888""Y88888888888888888I           `b,       `b    8    d'
                    "Y8b,  "Y888PPY8888888P'            `8,       P    8    8
                        `b   "'  __ `"Y88P'    b,        `Y       "    8    8
    zzz                ""|      =""Y'   d'     `b,                     8    8
       .....            /         "' |  I       b             ,       ,P   ,P
          zzzzz.       (          _,"  d'       Y,           ,P       "    d'
              ......    |              I        `b,          d'            8
                        |              I          "         d,d'           8
                        |          ;   `b                  dP"          __,8_
                        |          |    `b                d"     _,,add8888888
                        ",       ,"      `b              d' _,ad88888888888888
                          \,__,a"          ",          _,add888888888888888888
                         _,aa888b           I       ,ad88888888888888888888888
                     _,ad88888888a___,,,gggd8,   ,ad88888888888888888888888888
                  ,ad888888888888b88PP""''  Y  ,dd8888888888888888888888888888
               ,ad8888888888888888'         `bd8888888888888888888888888888888
             ,d88888888888888888P'         ,d888888888888888888888888888888888
           ,d888888888888888888"         ,d88888888888888888888888888888888888
         ,d8888888888888888888P        ,d8888888888888888888888888888888888888
       ,d888888888888888888888b,     ,d888888888888888888888888888888888888888
      ,8888888888888888888888888888=888888888888888888888888888888888888888888
     d888888888888888888888888888=88888888888888888888888888888888888888888888
    d88888888888888888888888888=8888888888888888888888888888888888888888888888
   d8888888888888888888888888=888888888888888888888888888888888888888888888888
  d888888888888888888888888=88888888888888888888888888888888888888888888888888
 ,888888888888888888888888=888888888888888888888888888888888888888888888888888
 d8888888888888888888888=88888888888888888888888888888888888888888888888888888
,8888888888888888888888=888888888888888888888888888888888888888888888888888888
d888888888888888888888=88888888888888888888888888888888888888888  Normand   88
888888888888888888888=888888888888888888888888888888888888888888  Veilleux  88
888888888888888888888=88888888888888888888888888888888888888888888888888888888




*/
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named totalCharacters that takes in an array and returns the number of characters in the array.
------------------------------------------------------------------------------------------------ */

const totalCharacters = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named houseSize that takes in the array of characters and creates an object for each house containing the name of the house and the number of members.

All of these objects should be added to an array named "sizes". Return the "sizes" array from the function.

For example: [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, ... ].
------------------------------------------------------------------------------------------------ */

const houseSize = (arr) => {
  const sizes = [];
  // Solution code here...
  return sizes;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

As fans are well aware, "When you play the game of thrones, you win or you die. There is no middle ground."

We will assume that Alerie Tyrell is deceased. She missed her daughter's wedding. Twice.

Write a function named houseSurvivors. You may modify your houseSize function from challenge 6 to use as the basis of this function.

This function should create an object for each house containing the name of the house and the number of members. If the spouse is deceased, do not include him/her in the total number of family members.

All of these objects should be added to an array named "survivors". Return the "survivors" array from the function.

For example: [ { house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, ... ].
------------------------------------------------------------------------------------------------ */

const deceasedSpouses = ['Catelyn', 'Lysa', 'Robert', 'Khal Drogo', 'Alerie'];

const houseSurvivors = (arr) => {
  const survivors = [];
  // Solution code here...
  return survivors;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-06.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return html markup with the character', () => {
    const filledTemplates = templatingWithMustache();
    const $ = cheerio.load(filledTemplates[0]);
    expect($('h2').text()).toStrictEqual('Eddard');
  });
});

describe('Testing challenge 2', () => {
  test('It should return the keys from an object', () => {
    expect(getCourseKeys(courseInfo)).toStrictEqual(['name', 'duration', 'topics', 'finalExam']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array of the names of the houses', () => {
    expect(getHouses(characters)).toStrictEqual(['Stark', 'Arryn', 'Lannister', 'Targaryen', 'Tyrell', 'Greyjoy', 'Snow']);
    expect(getHouses(characters).length).toStrictEqual(7);
  });
});

describe('Testing challenge 4', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenValues(characters, 'Daenarys')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenValues(characters, 'Sansa')).toBeFalsy();
  });
});

xdescribe('Testing challenge 5', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenEntries(characters, 'Eddard')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenEntries(characters, 'Jon S.')).toBeFalsy();
  });
});

xdescribe('Testing challenge 6', () => {
  test('It should return the number of characters in the array', () => {
    expect(totalCharacters(characters)).toStrictEqual(26);
  });
});

xdescribe('Testing challenge 7', () => {
  test('It should return an object for each house containing the name and size', () => {
    expect(houseSize(characters)).toStrictEqual([{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, { house: 'Lannister', members: 5 }, { house: 'Targaryen', members: 5 }, { house: 'Tyrell', members: 4 }, { house: 'Greyjoy', members: 1 }, { house: 'Snow', members: 1 }]);
    expect(houseSize(characters).length).toStrictEqual(7);
  });
});

xdescribe('Testing challenge 8', () => {
  test('It should not include any deceased spouses', () => {
    expect(houseSurvivors(characters)).toStrictEqual([{ house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, { house: 'Lannister', members: 4 }, { house: 'Targaryen', members: 4 }, { house: 'Tyrell', members: 3 }, { house: 'Greyjoy', members: 1 }, { house: 'Snow', members: 1 }]);
  });
});


function createSnippetWithJQuery(html){
  return cheerio.load(html);
}

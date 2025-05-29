/**
 * Return value if the given parameters are matched or a string
 *
 * @param {String} firstName
 * @param {String} prop
 * @return {*}
 */

const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
    points: 0
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin']
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes']
  }
];

export function lookupProfile(firstName, prop) {
  const contact = contacts.find((user) => user.firstName === firstName);
  if (contact) {
    return prop in contact ? contact[prop] : 'No such property';
  }
  return 'No such contact';
}

/**
 * Record Collection
 *
 * @param {Number} id
 * @param {String} prop
 * @param {String} value
 * @return {Object}
 */

const collection = {
  2548: {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    album: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    album: 'ABBA Gold'
  }
};

export const updateRecords = (id, prop, value) => {
  const collectionCopy = JSON.parse(JSON.stringify(collection));

  if (!collectionCopy[id]) {
    return collectionCopy;
  }

  if (value === '') {
    delete collectionCopy[id][prop];
  } else if (prop === 'tracks') {
    collectionCopy[id][prop] = collectionCopy[id][prop] || [];
    collectionCopy[id][prop].push(value);
  } else {
    collectionCopy[id][prop] = value;
  }

  return collectionCopy;
};

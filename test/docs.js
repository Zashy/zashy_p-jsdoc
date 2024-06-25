/** What even is JSDoc? */
let oh = 'that'
/*
⬆ Oh, that
*//*
Why bother?
*/

/*
-adds types
-promotes documentation
-
*/

/**
 * @name Detail
 * @type {Object}
 * @property {string} name
 * @property {string} alias
 * @property {string} language
 */

/**
 *
 * @type {Detail}
 */
const item = {
  name: '',
  alias: '',
  language: ''
}


/**
 * {[Detail]}
 */
const details = [
  {
    name: 'Lena',
    alias: '永藍レナ',
    language: 'spanish'
  },
  {
    name: 'Meteora',
    alias: 'Mete',
    language: 'english'
  },
  {
    name: 'NaiLA',
    alias: '',
    language: 'indonesian'
  },
  {
    name: 'Hilda',
    alias: '',
    language: 'english'
  },
  {
    name: 'Hiyori Momose',
    alias: '桃瀬ひより',
    language: 'japanese'
  },
  {
    name: 'Pekuna',
    alias: '',
    language: 'spanish'
  },
  {
    name: 'Aiko',
    alias: '',
    language: 'english'
  },
  {
    name: 'Tsumugi Nen',
    alias: '紡ネン',
    language: 'japanese'
  },
  {
    name: 'Alice33',
    alias: '',
    language: 'english'
  },
  {
    name: 'Melba Toast',
    alias: '',
    language: 'english'
  },
  {
    name: 'Shizuku',
    alias: 'しずく',
    language: 'japanese'
  },
  {
    name: 'Neuro-sama',
    alias: 'ネウローサマ',
    language: 'english'
  },
]

/**
 *
 * @param {Detail} detail
 */
function detailMapper (detail) {
}

/**
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} WishGranter~Triforce
 * @property {boolean} hasCourage - Indicates whether the Courage component is present.
 * @property {boolean} hasPower - Indicates whether the Power component is present.
 * @property {boolean} hasWisdom - Indicates whether the Wisdom component is present.
 */

/**
 * A class for granting wishes, powered by the Triforce.
 * @class
 * @param {...WishGranter~Triforce} triforce - One to three {@link WishGranter~Triforce} objects
 * containing all three components of the Triforce.
 */
function WishGranter(triforce) {}


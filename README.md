# persian-preprocess

Persian (Farsi) text pre processing (normalize, number, punctuation, white space, stop word &amp; ...)

## Table of contents

-   [Installation](#installation)
-   [Setup](#setup)
-   [Usage](#usage)
-   [API Features](#api-features)
    -   [number](#number)
    -   [punctuation](#punctuation)
    -   [remove](#remove)
    -   [stopword](#stopword)
    -   [emoticon](#emoticon)
    -   [whitespace](#whitespace)
    -   [toString](#tostring)
    -   [toArray](#toarray)
    -   [toUnique](#tounique)
    -   [getDebug](#getdebug)
-   [Full Sample](#full-sample)
-   [Debug Info](#debug-info)
-   [Tests](#tests)

## [Installation](#installation)

```bash
npm install --save persian-preprocess
```

## [Setup](#setup)

```javascript
const persianPreProcess = require('persian-preprocess');
```

## [Usage](#usage)

| Parameter | Type    | Required | Descriptiopn        |
| --------- | ------- | -------- | ------------------- |
| text      | String  | Yes      | Text to process     |
| debug     | Boolean | Yes      | Debug system status |

```javascript
const text = 'text to process';
const debug = true;
const processedText = persianPreProcess(text, debug)
    .normalize()
    .number()
    .lowercase()
    .punctuation()
    .remove()
    .stopword()
    .emoticon()
    .whitespace();
```

-   Above code is just a sample of all pre process methods and because some of the methods require parameters this code won't work correctly. For complete functional sample please check [Full Sample](#full-sample)

## [API Features](#api-features)

| Normalization Methods       | Description                  |
| --------------------------- | ---------------------------- |
| [normalize](#normalize)     | Normalization process        |
| [number](#number)           | Change numbers locale        |
| [lowercase](#lowercase)     | Lowercase all characters     |
| [punctuation](#punctuation) | Remove punctuation           |
| [remove](#remove)           | Remove selected characters   |
| [stopword](#stopword)       | Remove stop words            |
| [emoticon](#emoticon)       | Remove emoticons             |
| [whitespace](#whitespace)   | Remove duplicate whitespaces |

| Result Methods        | Description                |
| --------------------- | -------------------------- |
| [toString](#tostring) | Get processed text         |
| [toArray](#toarray)   | Get list of all words      |
| [toUnique](#tounique) | Get list of unique words   |
| [getDebug](#getdebug) | Get pre process debug data |

### [normalize](#normalize)

Normalization process

| Parameter | Type   | Required | Descriptiopn                       |
| --------- | ------ | -------- | ---------------------------------- |
| config    | Object | No       | Normalization config (table below) |

| Configuration | Type    | Description                      | Sample Characters |
| ------------- | ------- | -------------------------------- | ----------------- |
| persian       | boolean | Normalize persian characters     | ﭐ ݓ ك ﻱ           |
| english       | boolean | Normalize english characters     | ᗩ ℳ Ѡ ⓡ ⒵         |
| arabic        | boolean | Normalize arabic characters      | ﷲ ﷺ               |
| number        | boolean | Normalize number characters      | ٥ ⑩               |
| math          | boolean | Normalize math characters        | ¼ ⅞               |
| html          | boolean | Normalize html characters        | \&nbsp; \&lt;     |
| punctuation   | boolean | Normalize punctuation characters | ʕ ʔ ℅ ٪           |
| special       | boolean | Normalize special characters     | ᴁ ǉ ﬆ             |

-   Default value for all configurations sets is **true** and the normalization process will use for all of them by default
-   Setting configurations value to **false** will ignore normalization process for the set

```javascript
// No configuration (using default value)
const processedText = persianPreProcess(text, debug).normalize();

// Default configuration (Same result with the code above)
const processedText = persianPreProcess(text, debug).normalize({
    persian: true,
    english: true,
    arabic: true,
    number: true,
    math: true,
    html: true,
    punctuation: true,
    special: true
});

// Ignore HTML characters normalization
const processedText = persianPreProcess(text, debug).normalize({
    html: false
});
```

### [number](#number)

Change numbers locale

| Parameter | Type                       | Required | Descriptiopn              |
| --------- | -------------------------- | -------- | ------------------------- |
| language  | Enum: 'persian', 'english' | Yes      | Numeric characters locale |

```javascript
// 0, 1 ... 9
const processedText = persianPreProcess(text, debug).number('english');

// ۰, ۱, ... ۹
const processedText = persianPreProcess(text, debug).number('persian');
```

### [lowercase](#lowercase)

Lowercase all characters

```javascript
// 'Hello' => 'hello'
const processedText = persianPreProcess(text, debug).lowercase();
```

### [punctuation](#punctuation)

Remove punctuation

| Parameter | Type   | Required | Descriptiopn                             |
| --------- | ------ | -------- | ---------------------------------------- |
| config    | Object | No       | Punctuation removal config (table below) |

| Configuration | Type            | Description          | Sample Characters     |
| ------------- | --------------- | -------------------- | --------------------- |
| basic         | boolean or null | Basic punctuations   | ' \" \\ \/ , ( \| )   |
| mark          | boolean or null | Special punctuations | \\r \\n \\t \\0       |
| diacritic     | boolean or null | Arabic diacritics    | ٌ ٍ ً ّ               |
| unicode       | boolean or null | Unicode punctuations | ZERO WIDTH NON-JOINER |

-   Default value for all configurations sets is **true** and the punctuations will remove using **space character**
-   Setting value to **null** will remove the punctuations and wont replace them with any character
-   Setting value to **false** will ignore punctuations removal for the set

```javascript
// No configuration (using default value)
const processedText = persianPreProcess(text, debug).punctuation();

// Default configuration (Same result with the code above)
const processedText = persianPreProcess(text, debug).punctuation({
    basic: true,
    mark: true,
    diacritic: true,
    unicode: true
});

// Ignore UNICODE punctuation removal
const processedText = persianPreProcess(text, debug).punctuation({
    unicode: false
});

/**
 * Using NULL as configuration value for basic punctuations
 *
 * Using true (default value): 'in-line' > 'in line'
 * Using null                : 'in-line' > 'inline'
 */
const processedText = persianPreProcess(text, debug).punctuation({
    basic: null
});
```

### [remove](#remove)

Remove selected characters

| Parameter | Type   | Required | Descriptiopn                           |
| --------- | ------ | -------- | -------------------------------------- |
| config    | Object | No       | Character removal config (table below) |

| Configuration | Type            | Description                | Sample Characters |
| ------------- | --------------- | -------------------------- | ----------------- |
| number        | boolean or null | Numeric characters         | 0 9 ۰ ۹           |
| persian       | boolean or null | Persian characters         | آ ا ی             |
| english       | boolean or null | English characters         | A Z a z           |
| length        | number          | Words with specific length |                   |

-   for **number**, **persian** and **english** configurations

    -   Default value is **false** and the character removal process will be ignored by default
    -   Setting value to **true** will remove all the chacters in set and replace them with **space character**
    -   Setting value to **null** will remove the characters and wont replace them with any character

-   Setting **length** configuration will remove all words with the length equal or less than given value

```javascript
/**
 * No configuration (using default value)
 * Using method with no configuration wont make any changes to text
 */
const processedText = persianPreProcess(text, debug).remove();

// Removing all characters
const processedText = persianPreProcess(text, debug).remove({
    number: true,
    persian: true,
    english: true
});

/**
 * Using NULL as configuration value for english characters
 *
 * Using true : 'in-line' > 'in line'
 * Using null : 'in-line' > 'inline'
 */
const processedText = persianPreProcess(text, debug).remove({
    english: null
});

/**
 * Using length configuration
 * 'this is a text' > 'this   text'
 */
const processedText = persianPreProcess(text, debug).remove({
    length: 2
});
```

### [stopword](#stopword)

Remove stop words

| Parameter | Type   | Required | Descriptiopn                          |
| --------- | ------ | -------- | ------------------------------------- |
| config    | Object | No       | Stopword removal config (table below) |

| Configuration | Type     | Description          | Sample Words |
| ------------- | -------- | -------------------- | ------------ |
| persian       | boolean  | Persian stopwords    | در با به     |
| english       | boolean  | English stopwords    | in at on     |
| custom        | string[] | List of custom Words |              |

-   for **persian** and **english** configurations

    -   Default value is **false** and the stopwords removal process will be ignored by default
    -   Setting value to **true** will remove all the stopwords in set

-   Setting **custom** configuration will remove all words in given list

```javascript
/**
 * No configuration (using default value)
 * Using method with no configuration wont make any changes to text
 */
const processedText = persianPreProcess(text, debug).stopword();

// Removing all stopwords
const processedText = persianPreProcess(text, debug).stopword({
    persian: true,
    english: true
});

/**
 * Using custom list configuration
 * 'this is a text' > ' is  text'
 */
const processedText = persianPreProcess(text, debug).stopword({
    custom: ['this', 'a']
});
```

### [emoticon](#emoticon)

Remove emoticons

| Parameter | Required | Descriptiopn                             |
| --------- | -------- | ---------------------------------------- |
| replace   | No       | Value of this parameter can only be NULL |

-   Be default (calling method with no parameter) all emoticons will remove using **space character**
-   Setting replace value to **null** will remove the emoticons and wont replace them with any character

```javascript
// No configuration (using default value)
const processedText = persianPreProcess(text, debug).emoticon();

/**
 * Using NULL as replace parameter value
 *
 * No parameter : 'I💓U' > 'I U'
 * Using null   : 'I💓U' > 'IU'
 */
const processedText = persianPreProcess(text, debug).emoticon(null);
```

### [whitespace](#whitespace)

Remove duplicate whitespaces

```javascript
// 'this is     a  text    ' => 'this is a text '
const processedText = persianPreProcess(text, debug).whitespace();
```

### [toString](#tostring)

Get processed text

```javascript
/**
 * text   : '❶ text and ❶ number'
 * result : '1 text and 1 number'
 */
const stringValue = processedText.toString();
```

### [toArray](#toarray)

Get list of all words

```javascript
/**
 * text   : '❶ text and ❶ number'
 * result : ['1', 'text', 'and', '1', 'number']
 */
const arrayList = processedText.toArray();
```

### [toUnique](#tounique)

Get list of unique words

```javascript
/**
 * text   : '❶ text and ❶ number'
 * result : ['1', 'text', 'and', 'number']
 */
const uniqueList = processedText.toUnique();
```

### [getDebug](#getdebug)

Get pre process debug data

```javascript
// See Full Sample
const debugInfo = processedText.getDebug();
```

### [Full Sample](#full-sample)

```javascript
const text = `
    استفاده از حرف ك عربی و کاراکتر خاص ﷼ و عدد عربی ٦
    انگلیسی: using ß character and ⅜ and &lt;  ⒄℅
    حط دوم انگلیسی: and special character: Ǌ
    شکلک:  😃 👦🏿 🚩 👱🏽 🍉 🏒 🚍 🥬
    انتهای متن
`;

const persianPreProcess = require('persian-preprocess');
const processedText = persianPreProcess(text, true)
    // Normalize
    .normalize()
    // Change number locale to persian
    .number('persian')
    // Lowercase all characters
    .lowercase()
    // Remove all punctuation except marks (i.e.: \n)
    .punctuation({
        mark: false
    })
    // Remove all numeric characters (not using space space character)
    .remove({
        number: null,
    })
    // Remove persian, english and two custom stop words
    .stopword({
        custom: ['حرف', 'خط']
    })
    // Remove emoticons
    .emoticon()
    // Remove duplicate whitespaces
    .whitespace();

const result = processedText.toString();
/**
استفاده عربی کاراکتر خاص ریال عدد عربی
 انگلیسی using b character
 انگلیسی special character nj
 شکلک
 انتهای متن
*/

console.log(processedText.getDebug());
/**
 * Setting debug parameter as true for persianPreProcess
 * will activate debug system and debug data will be like:
 */
{
  TOTAL: { duration: 0.054, change: -96, length: 212 },
  normilize: {
    duration: 0.018,
    change: 4,
    length: 216,
    match: [
      'ك',    'ß', '﷼',
      '٦',    '⒄', '⅜',
      '&lt;', '℅', 'Ǌ'
    ]
  },
  number: { duration: 0.001, change: 0, length: 216, match: [] },
  lowercase: { duration: 0, change: 0, length: 216 },
  punctuation: {
    duration: 0,
    change: 0,
    length: 216,
    match: [ ':', '/', '<', '%' ]
  },
  remove: {
    duration: 0,
    change: -5,
    length: 211,
    match: [ '۶', '۳', '۸', '۱', '۷' ]
  },
  stopword: {
    duration: 0.028,
    change: -6,
    length: 205,
    match: [
      'and',  ' دوم ',
      ' از ', ' ک ',
      ' و ',  ' حرف ',
      ' حط '
    ]
  },
  emoticon: {
    duration: 0.002,
    change: -10,
    length: 195,
    match: [
      '😃', '👦', '🏿',
      '🚩', '👱', '🏽',
      '🍉', '🏒', '🚍',
      '🥬'
    ]
  },
  whitespace: { duration: 0.001, change: -79, length: 116 }
}
```

## [Debug Info](#debug-info)

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| duration | Process time in millisecond                           |
| change   | Number of characters added or removed from Text value |
| length   | Text value length after process                       |
| match    | List of matched characters/words in process           |

## [Tests](#tests)

```bash
git clone https://github.com/webilix/persian-preprocess.git
npm install
npm test
```

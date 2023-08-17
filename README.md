# Nodash

Nodash is a native ESM implementation of the [Lodash](https://lodash.com) API.

## Installing

TODO

## Motivations

### Native API Calls

Lodash uses _custom implementations_ of modern browser APIs, which is great for projects targeting older versions of ECMAScript **without** a build process.

However, most modern JS projects implement some build pipeline, where high-level JS constructs are downleveled to an older target (e.g. `ES6`) at build time.

In contrast, Nodash leverages bleeding edge native API implementations where available:

```ts
export const toPairs = Object.entries;
```

This allows each project to individually target as high a JS target as necessary, taking advantage of native browser API calls and their superior debugging experience.

### Happy Case First

Lodash is highly tolerant to nullish input, which can be a benefit for JS projects without strong static typing.

However, this can be a frustrating source of bugs, where `undefined` or `null` data sources are silently handled.

```ts
_.forEach(undefined, (i) => console.log(i));
// *crickets*
```

It's also often a source of unnecessary inefficiency, where nil checks need to be run before iterating your well-behaved data source.

Nodash has a truthy API, where methods expect a well behaved data source. This forces you to explictly guard your input data.

```ts
Nodash.forEach(undefined, (i) => console.log(i));
// Uncaught TypeError: Cannot read properties of undefined (reading 'forEach')
```

### Immutability

Many of Lodash's methods are mutable, meaning that they perform in-place operations on their data source.

```ts
const myArray = [1, 2, 3];

console.log(_.reverse(myArray)); // => [3, 2, 1]
console.log(myArray); // => [3, 2, 1]
```

Nodash has an immutable-first API, unless the method expliclty declares otherwise.

```ts
const myArray = [1, 2, 3];

console.log(Nodash.reverse(myArray)); // => [3, 2, 1]
console.log(myArray); // => [1, 2, 3]
```

### First Class TypeScript Support

Nodash is written in [TypeScript](https://www.typescriptlang.org), and ships with its own type definitions. No need for `@types/nodash`!

## Lodash API Checklist

The following table lists all methods of the Lodash API, along with their Nodash implementation, testing, and coverage status.

| Method            | Implemented? | Tested? | Coverage? |
| ----------------- | ------------ | ------- | --------- |
| add               | ✅           |         |           |
| after             |              |         |           |
| ary               |              |         |           |
| assign            | ✅           |         |           |
| assignIn          |              |         |           |
| assignInWith      |              |         |           |
| assignWith        |              |         |           |
| at                |              |         |           |
| attempt           | ✅           |         |           |
| before            |              |         |           |
| bind              |              |         |           |
| bindAll           |              |         |           |
| bindKey           |              |         |           |
| camelCase         | ✅           |         |           |
| capitalize        |              |         |           |
| castArray         | ✅           |         |           |
| ceil              | ✅           |         |           |
| chain             |              |         |           |
| chunk             | ✅           |         |           |
| clamp             | ✅           |         |           |
| clone             |              |         |           |
| cloneDeep         |              |         |           |
| cloneDeepWith     |              |         |           |
| cloneWith         |              |         |           |
| commit            |              |         |           |
| compact           | ✅           |         |           |
| concat            |              |         |           |
| cond              |              |         |           |
| conforms          |              |         |           |
| conformsTo        |              |         |           |
| constant          | ✅           |         |           |
| countBy           |              |         |           |
| create            |              |         |           |
| curry             |              |         |           |
| curryRight        |              |         |           |
| date              | ✅           |         |           |
| debounce          |              |         |           |
| deburr            |              |         |           |
| defaultTo         |              |         |           |
| defaults          |              |         |           |
| defaultsDeep      |              |         |           |
| defer             |              |         |           |
| delay             |              |         |           |
| difference        | ✅           |         |           |
| differenceBy      | ✅           |         |           |
| differenceWith    |              |         |           |
| divide            | ✅           |         |           |
| drop              |              |         |           |
| dropRight         | ✅           |         |           |
| dropRightWhile    | ✅           |         |           |
| dropWhile         | ✅           |         |           |
| ~~each~~          | ✅           |         |           |
| ~~eachRight~~     | ✅           |         |           |
| endsWith          | ✅           |         |           |
| ~~entries~~       | ✅           |         |           |
| ~~entriesIn~~     |              |         |           |
| eq                | ✅           |         |           |
| escape            |              |         |           |
| escapeRegExp      |              |         |           |
| every             |              |         |           |
| extend            |              |         |           |
| extendWith        |              |         |           |
| fill              | ✅           |         |           |
| filter            |              |         |           |
| find              |              |         |           |
| findIndex         | ✅           |         |           |
| findKey           |              |         |           |
| findLast          |              |         |           |
| findLastIndex     | ✅           |         |           |
| findLastKey       |              |         |           |
| first             | ✅           |         |           |
| flatMap           |              |         |           |
| flatMapDeep       |              |         |           |
| flatMapDepth      |              |         |           |
| flatten           | ✅           |         |           |
| flattenDeep       |              |         |           |
| flattenDepth      | ✅           |         |           |
| flip              |              |         |           |
| floor             | ✅           |         |           |
| flow              |              |         |           |
| flowRight         |              |         |           |
| forEach           | ✅           |         |           |
| forEachRight      | ✅           |         |           |
| forIn             |              |         |           |
| forInRight        |              |         |           |
| forOwn            |              |         |           |
| forOwnRight       |              |         |           |
| fromPairs         | ✅           |         |           |
| functions         |              |         |           |
| functionsIn       |              |         |           |
| get               |              |         |           |
| groupBy           |              |         |           |
| gt                | ✅           |         |           |
| gte               | ✅           |         |           |
| has               |              |         |           |
| hasIn             |              |         |           |
| head              | ✅           |         |           |
| identity          | ✅           |         |           |
| inRange           | ✅           |         |           |
| includes          |              |         |           |
| indexOf           | ✅           |         |           |
| initial           | ✅           |         |           |
| intersection      | ✅           |         |           |
| intersectionBy    |              |         |           |
| intersectionWith  |              |         |           |
| invert            |              |         |           |
| invertBy          |              |         |           |
| invoke            |              |         |           |
| invokeMap         |              |         |           |
| isArguments       |              |         |           |
| isArray           | ✅           |         |           |
| isArrayBuffer     |              |         |           |
| isArrayLike       |              |         |           |
| isArrayLikeObject |              |         |           |
| isBoolean         | ✅           |         |           |
| isBuffer          | ✅           |         |           |
| isDate            | ✅           |         |           |
| isElement         |              |         |           |
| isEmpty           | ✅           |         |           |
| isEqual           |              |         |           |
| isEqualWith       |              |         |           |
| isError           | ✅           |         |           |
| isFinite          | ✅           |         |           |
| isFunction        |              |         |           |
| isInteger         | ✅           |         |           |
| isLength          |              |         |           |
| isMap             | ✅           |         |           |
| isMatch           |              |         |           |
| isMatchWith       |              |         |           |
| isNaN             |              |         |           |
| isNative          |              |         |           |
| isNil             | ✅           |         |           |
| isNull            | ✅           |         |           |
| isNumber          |              |         |           |
| isObject          |              |         |           |
| isObjectLike      |              |         |           |
| isPlainObject     |              |         |           |
| isRegExp          | ✅           |         |           |
| isSafeInteger     |              |         |           |
| isSet             |              |         |           |
| isString          | ✅           |         |           |
| isSymbol          |              |         |           |
| isTypedArray      |              |         |           |
| isUndefined       | ✅           |         |           |
| isWeakMap         |              |         |           |
| isWeakSet         |              |         |           |
| iteratee          |              |         |           |
| join              | ✅           |         |           |
| kebabCase         |              |         |           |
| keyBy             |              |         |           |
| keys              | ✅           |         |           |
| keysIn            |              |         |           |
| last              | ✅           |         |           |
| lastIndexOf       | ✅           |         |           |
| wrapperLodash     |              |         |           |
| lowerCase         |              |         |           |
| lowerFirst        | ✅           |         |           |
| lt                | ✅           |         |           |
| lte               | ✅           |         |           |
| map               |              |         |           |
| mapKeys           |              |         |           |
| mapValues         |              |         |           |
| matches           |              |         |           |
| matchesProperty   |              |         |           |
| max               | ✅           |         |           |
| maxBy             | ✅           |         |           |
| mean              | ✅           |         |           |
| meanBy            | ✅           |         |           |
| memoize           |              |         |           |
| merge             |              |         |           |
| mergeWith         |              |         |           |
| method            |              |         |           |
| methodOf          |              |         |           |
| min               | ✅           |         |           |
| minBy             | ✅           |         |           |
| mixin             |              |         |           |
| multiply          | ✅           |         |           |
| negate            |              |         |           |
| next              |              |         |           |
| noop              | ✅           |         |           |
| now               |              |         |           |
| nth               | ✅           |         |           |
| nthArg            | ✅           |         |           |
| omit              |              |         |           |
| omitBy            |              |         |           |
| once              |              |         |           |
| orderBy           |              |         |           |
| over              | ✅           |         |           |
| overArgs          |              |         |           |
| overEvery         | ✅           |         |           |
| overSome          | ✅           |         |           |
| pad               |              |         |           |
| padEnd            | ✅           |         |           |
| padStart          | ✅           |         |           |
| parseInt          | ✅           |         |           |
| partial           |              |         |           |
| partialRight      |              |         |           |
| partition         |              |         |           |
| pick              |              |         |           |
| pickBy            |              |         |           |
| plant             |              |         |           |
| property          |              |         |           |
| propertyOf        |              |         |           |
| pull              | ✅           |         |           |
| pullAll           | ✅           |         |           |
| pullAllBy         |              |         |           |
| pullAllWith       |              |         |           |
| pullAt            | ✅           |         |           |
| random            | ✅           |         |           |
| range             | ✅           |         |           |
| rangeRight        | ✅           |         |           |
| rearg             |              |         |           |
| reduce            |              |         |           |
| reduceRight       |              |         |           |
| reject            |              |         |           |
| remove            | ✅           |         |           |
| repeat            | ✅           |         |           |
| replace           | ✅           |         |           |
| rest              |              |         |           |
| result            |              |         |           |
| reverse           | ✅           |         |           |
| round             | ✅           |         |           |
| sample            | ✅           |         |           |
| sampleSize        |              |         |           |
| set               |              |         |           |
| setWith           |              |         |           |
| shuffle           |              |         |           |
| size              | ✅           |         |           |
| slice             | ✅           |         |           |
| snakeCase         |              |         |           |
| some              |              |         |           |
| sortBy            |              |         |           |
| sortedIndex       |              |         |           |
| sortedIndexBy     |              |         |           |
| sortedIndexOf     |              |         |           |
| sortedLastIndex   |              |         |           |
| sortedLastIndexBy |              |         |           |
| sortedLastIndexOf |              |         |           |
| sortedUniq        |              |         |           |
| sortedUniqBy      |              |         |           |
| split             | ✅           |         |           |
| spread            |              |         |           |
| startCase         |              |         |           |
| startsWith        | ✅           |         |           |
| stubArray         | ✅           |         |           |
| stubFalse         | ✅           |         |           |
| stubObject        | ✅           |         |           |
| stubString        |              |         |           |
| stubTrue          | ✅           |         |           |
| subtract          | ✅           |         |           |
| sum               |              |         |           |
| sumBy             |              |         |           |
| tail              | ✅           |         |           |
| take              | ✅           |         |           |
| takeRight         | ✅           |         |           |
| takeRightWhile    |              |         |           |
| takeWhile         |              |         |           |
| tap               |              |         |           |
| template          |              |         |           |
| templateSettings  |              |         |           |
| throttle          |              |         |           |
| thru              |              |         |           |
| times             | ✅           |         |           |
| toArray           |              |         |           |
| toFinite          |              |         |           |
| toInteger         |              |         |           |
| toIterator        |              |         |           |
| toJSON            |              |         |           |
| toLength          |              |         |           |
| toLower           | ✅           |         |           |
| toNumber          | ✅           |         |           |
| toPairs           | ✅           |         |           |
| toPairsIn         |              |         |           |
| toPath            | ✅           |         |           |
| toPlainObject     |              |         |           |
| toSafeInteger     |              |         |           |
| toString          | ✅           |         |           |
| toUpper           | ✅           |         |           |
| transform         |              |         |           |
| trim              | ✅           |         |           |
| trimEnd           | ✅           |         |           |
| trimStart         | ✅           |         |           |
| truncate          | ✅           |         |           |
| unary             |              |         |           |
| unescape          |              |         |           |
| union             | ✅           |         |           |
| unionBy           | ✅           |         |           |
| unionWith         |              |         |           |
| uniq              | ✅           |         |           |
| uniqBy            | ✅           |         |           |
| uniqWith          |              |         |           |
| uniqueId          |              |         |           |
| unset             |              |         |           |
| unzip             | ✅           |         |           |
| unzipWith         |              |         |           |
| update            |              |         |           |
| updateWith        |              |         |           |
| upperCase         |              |         |           |
| upperFirst        | ✅           |         |           |
| value             | ✅           |         |           |
| valueOf           |              |         |           |
| values            |              |         |           |
| valuesIn          |              |         |           |
| without           |              |         |           |
| words             |              |         |           |
| wrap              |              |         |           |
| xor               | ✅           |         |           |
| xorBy             |              |         |           |
| xorWith           |              |         |           |
| zip               | ✅           |         |           |
| zipObject         | ✅           |         |           |
| zipObjectDeep     |              |         |           |
| zipWith           |              |         |           |

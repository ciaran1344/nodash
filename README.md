# Nodash

Nodash is a native ESM implementation of the [Lodash](https://lodash.com) API.

Motivations:

TODO:

1.  Immutability
1.  Happy case
1.  Native API calls

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
| differenceBy      |              |         |           |
| differenceWith    |              |         |           |
| divide            | ✅           |         |           |
| drop              |              |         |           |
| dropRight         | ✅           |         |           |
| dropRightWhile    | ✅           |         |           |
| dropWhile         | ✅           |         |           |
| ~~each~~          | ✅           |         |           |
| ~~eachRight~~     | ✅           |         |           |
| endsWith          | ✅           |         |           |
| entries           |              |         |           |
| entriesIn         |              |         |           |
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
| unionBy           |              |         |           |
| unionWith         |              |         |           |
| uniq              | ✅           |         |           |
| uniqBy            |              |         |           |
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

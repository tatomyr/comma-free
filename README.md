# Commafree JS

The idea is to avoid using commas in javascript.
This touches arrays, objects and function arguments.
Indeed, we can split multiple items of these entities with whitespases instead of commas. 

Let's take a look how the code could be written in such way.
Array example:

```js
const arr = [1 2 5 ...rest]
```

or

```js
const arr = [
    1
    2
    5
    ...rest
]
```

Object example:

```js
const obj = { foo: 'bar' 'a key': 'a value' ...rest }
```

or 

```js
const obj = { 
    foo: 'bar' 
    'a key': 'a value' 
    ...rest 
}
```

Function arguments: 

```js
const f = (x y) => Math.sqrt(x ** 2 + y ** 2)
```

Full primer: 

```js
const countryCodes = [
    { country: 'Ukraine' code: '+380' }
    { country: 'US' code: '+1' }
    { country: 'Eldorado' code: '+000' }
]

const findCountryByPhone = phone => countryCodes
    .filter(({ code }) => phone.startsWith(code))
    .reduce(
        ($ item) => item.code.length > $.code.length ? item : $
        { code: '' }
    )

const findUserCountries = (name ...phones) => ({ 
    name
    countries: phones.map(findCountryByPhone)
})
```

The whole idea is to write more beautiful code.
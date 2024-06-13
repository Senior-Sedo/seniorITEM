# Get a random item from an array

One **straight** *forward* ***function*** ~~that~~ <mark>returns</mark> <sup>a</sup> <sub>random</sub> `item` from an **array** 😍

## Install
```shell
npm i @ssts/item
```
## Import
```js
import seniorITEM from "@ssts/item";
```
## Use
```ts
const randomItem = seniorITEM(["Item 1", "Item 2", "Item 3"]);
```

## Arguments
> Returns a random item from an array

| Order |  Parameter  |   Type   | Default  |
| :---: | :---------: | :------: | :-------: |
|   1   |    array    |  any[]   | required |

## Examples

```ts
import seniorITEM from "@ssts/item";

const snacks = ["Peanuts", "Chips", "Candy", "Chocolate", "Popcorn", "Cookies", "Donuts", "Ice cream", "Yogurt", "Brownies", "Cupcakes", "Gummies", "Muffins", "Your favorite drink lol"] as const;

const randomSnack = seniorITEM(snacks);
console.log(randomSnack);                   // 'Chips'

type Snacks = (typeof snacks)[number];
// It's okay With/Without a generic
console.log(seniorITEM(snacks));            // 'Cookies'
console.log(seniorITEM<Snacks>(snacks));    // 'Candy'

type Item = {
  key: string;
  name: string;
  imgSrc: string;
};
type Items = Item[];
const items: Items = [/* ... */];

console.log(seniorITEM(items));             // { key: "17", name: "Item 17", imgSrc: "https://picsum.photos/200" }
console.log(seniorITEM<Item>(items));       // { key: "5", name: "Item 5", imgSrc: "https://picsum.photos/200" }
```

___
---
---
---
***
>   Made With Chocolate By Senior Sedo 😎
>>  Be Chocolateful 💙😍
>>
>>  **ssts** stands for **s**enior-**s**edo-**t**ype**s**cript 💙
>>
>>  So instead of ~~@senior-sedo-typescript/rand-item~~
>>> `@ssts/item` for simplicity sake 😍
***
---
---
---
___
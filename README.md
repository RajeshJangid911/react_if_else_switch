# react-if-else-switch

Simplify conditional rendering in react.

### What is it, and what it does?

It is a simple package that provides multiple utility components for simplifying conditional rendering in react. By
using this package you can make your code more readable and maintainable as shown below.

## 1. `If`, `Then`, `Else`

### Example

#### 1. Before

```jsx
{
    age >= 18 ? inVotingList ? <span>You can vote.</span> :
        <span>You can't vote. Your name is not in voting list.</span> : <span>You are too young to vote.</span>
}
```

#### 2. After

```jsx
    <If condition={age >= 18}>
    <Then>
        <If condition={inVotingList}>
            <Then>
                <span>You can vote.</span>
            </Then>
            <Else>
                <span>You can't vote. Your name is not in voting list.</span>
            </Else>
        </If>
    </Then>
    <Else>
        <span>You are too young to vote.</span>
    </Else>
</If>
```

---

### Getting Started

1. Install via npm or yarn:

```
$ npm install react-if-else-switch
```

```
$ yarn add react-if-else-switch
```

2. Import in your component:

```jsx
import {If, Then, Else} from 'react-if-else-switch';
```

3. Use it like shown in the above example.

---

### Components

1. `If`
    * Wrapper component for `Then` and `Else`.
    * It takes a condition as a prop.
    * Anything other outside of `Then` and `Else` will be ignored.
    * If condition is truthy, then the children of `Then` will be rendered.
    * If condition is falsy, then the children of `Else` will be rendered.
2. `Then`
    * Must be used inside `If`.
    * Must contain children/child.
3. `Else`
    * Must be used inside `If`.
    * Must contain children/child.

---

#### Extra Notes

* You can use multiple `Then` or `Else` in a single `If`, in case if you need.
* You can nest them as per your need, as shown in the above example.

## 2. `Switch`, `Case`, `Default`

### Example

```jsx
<Switch expression={age}>
    <Case value={18}>
        <span>You are 18.</span>
    </Case>
    <Case value={21}>
        <span>You are 21.</span>
    </Case>
    <Default>
        <span>You are not 18 or 21.</span>
    </Default>
</Switch>
```

### Getting Started

1. Install via npm or yarn:

2. Import in your component:

```jsx
import {Switch, Case, Default} from 'react-if-else-switch';
```

3. Use it like shown in the above example.

### Components

1. `Switch`
    * Wrapper component for `Case` and `Default`.
    * It takes an expression as a prop.
    * It also takes two  optional  boolean props `fallthrough` and `enableMemo`.
    * By default both 'fallthrough' and 'enableMemo' are false.
    * After enabling memo feature, it will only re-render if the expression changes.
    * After enabling fallthrough you will need to pass a boolean `break` in the `Case` component wherever you want to
      stop fallthrough.
    * Anything else outside of `Case` and `Default` will be ignored.
2. `Case`
    * Must be used inside `Switch`.
    * It takes a value as a prop.
    * Must contain children/child.
    * Optional boolean prop `break` if fallthrough is enabled in `Switch`.
3. `Default`
* Must be used inside `Switch`.
* Must contain children/child.

### `Switch` fallthrough example

```jsx
<Switch expression={weekDayNo} fallthrough>
    <Case value={1}>
        Monday
    </Case>
    <Case value={2}>
        Tuesday
    </Case>
    <Case value={3}>
        Wednesday
    </Case>
    <Case value={4}>
        Thursday
    </Case>
    <Case value={5}>
        Friday
    </Case>
    <Case value={6}>
        Saturday
    </Case>
    <Case value={7} break>
        Sunday
    </Case>
    <Default>
        week day number must be between 1 and 7
    </Default>
</Switch>
```
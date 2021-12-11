# react-if-else-switch

Simplify conditional rendering in react.

### What is it, and what it does?

It is a simple package that provides multiple utility components for simplifying conditional rendering in react. 
By using this package you can make your code more readable and maintainable as shown below.

### Example

#### 1. Before

```jsx
    {age >= 18 ? inVotingList ? <span>You can vote.</span> : <span>You can't vote. Your name is not in voting list.</span> : <span>You are too young to vote.</span>}
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
import {If,Then,Else} from 'react-if-else-switch';
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


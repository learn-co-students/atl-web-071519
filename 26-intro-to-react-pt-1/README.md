# Intro to React Pt. 1

### SWABTs

- [ ] Visualize / Identify components on any Websites
- [ ] Explain what a component is conceptually in the UI
- [ ] Explain Babel's purpose in React
- [ ] Explain what a component actually is in code
- [ ] Using JSX to build custom components and render them in browser
- [ ] Props are to components as arguments are to functions

### Check out:
- [React Documentation](https://reactjs.org)

### Notes:

##### Imperative vs Declarative Programming
```javascript
// Imperative
const div = document.createElement('div')
div.textContent = "Hello World!"
const container = document.getElementById('container')
container.appendChild(div)

const div = document.createElement('div')
div.textContent = "Good Bye!"
const container = document.getElementById('container')
container.appendChild(div)

// Declarative
function addDiv(phrase){
  const div = document.createElement('div')
  div.textContent = phrase
  const container = document.getElementById('container')
  container.appendChild(div)
}

```

#### Examples
- [Airbnb](https://www.airbnb.co  m)
- [Shameless self-plug](https://shivangdave.com)
- [Maddie's Project](http://www.datr-atl.herokuapp.com/)

### Abstraction

#### 1. Static
````javascript
ReactDOM.render(
  <div>
    <h1> Hello, World! </h1>
    <h1> How you doin? </h1>
    <h1> Ssup? </h1>
  </div>,
  document.getElementById('root')
);
````

#### 2. Dynamic
````javascript
function greeting(phrase){
  return <h1>{phrase}</h1>
}

ReactDOM.render(
  <div>
    {greeting("Hello, World!")}
    {greeting("Hello, World!")}
    {greeting("Hello, World!")}
  </div>,
  document.getElementById('root')
)
````

#### 3. Static component with JSX
````javascript
function Greeting(){
  return <h1>Hello, World! </h1>
}

ReactDOM.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>,
  document.getElementById('root')
)
````

#### 4. Final Dynamic & Reusable
````javascript
function Greeting(props){
  return(
    <h1>{props.phrase}</h1>
  )
}

ReactDOM.render(
  <div>
    <Greeting phrase="Hello, World!"/>
    <Greeting phrase="How you doin?"/>
    <Greeting phrase="Ssup?"/>
  </div>,
  document.getElementById('root')
)
````

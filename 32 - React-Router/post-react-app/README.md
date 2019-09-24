## OUTLINE
10m Theoretical Prerequisites
 5m But what does React Router Actually Do?
 5m Setup and Components
40m Using the Router Components
===
60m Total

## Push state from window history 
window.history.pushState({}, null, 'page');
window.history.back();

## Install Router
npm install react-router && react-router-dom

## Add Router
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

## Router
We'll use this in one place in our application (and one place only). Very top level, essentially listening for when the route changes, and making that info accessible.

## Route
Conditionally render a certain component based on what the route looks like.

## Link
Changes the url we see in the browser, must have a 'to' prop.

## Switch
Pick one of the following routes (the first that matches), don't look at the others (like an if/ else if/ else if).

## Redirect
Forces a redirect to a particular route. We won't use this here.




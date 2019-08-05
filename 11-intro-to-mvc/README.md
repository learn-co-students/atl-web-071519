## Mod 2 (a preview) - 5 minutes

![sinatra](https://raw.githubusercontent.com/tiy-atl-js-jan-2017/slides/master/images/shake.gif)
![capybara](http://i.imgur.com/Jdt1rRf.gifv)

### Week 1

* Learn how to build MVC web apps with Sinatra

### Week 2

* See how to apply the exact same concepts in Rails
* With a few nice Rails helpers to make our lives easier
  * Fall back on "the simple way" if Rails isn't making things easier

## Today

### To Build...

A tiny library website.

* make a wonderful homepage
* list all the books
* get info on a single book
* If there's time: add a new book

### Timeline

<!-- * 10 minutes, getting familiar with HTTP requests and responses -->
* 10 minutes, making a homepage and talking MVC
* 10 minutes, making an index page for all books
* 10 minutes, making a show page for an individual book
* 10 minutes, making a form for a new book.

WHOO. That's most of CRUD in 1 day.

### Concepts

* MVC
* HTTP (Requests and Responses)
* Routes
* ERB
* Params
* If there's time: forms

### Getting Familiar with HTTP

* View http://blog.kingcons.io in browser
* inspect the Network tab.
* `curl http://blog.kingcons.io`
  * now do it with -v
  * wow! same thing...
* NOTE: there are other HTTP _verbs_ besides GET
  ... but we'll get to them later :)
* Important question: What happens after a response is sent?

#### Parts of a Request
- Verb
- Path
- Headers
- Body (optional)

#### Parts of a Response
- Status Code
- Headers
- Body

### Intro to Sinatra

What's the purpose of Sinatra? What does it do for us?

* Connects a set of routes to methods to generate a response
* I.e. It builds a routing table and uses that to answer each request.

Here's the plan:


* Tour of a sinatra app


* How do we connect actions in our app to pages?
  * Routes connect actions in our app to pages!
  * Example of a route: `GET '/good_doggos'`
    * A _Controller method_ is a snippet of code that runs to
      build the response for a _specific route_.
    * Routes and handlers together tell us how to generate them
      response for a specific request.


* How do communicate between our controller and our view?
  * ERB? Ahhhh. (Don't worry. It's just a templating language.)
  * A template is just a fancier version of string interpolation.
    * String interpolation lets us run snippets of code to fill in parts of a string.
    * Templates exist because we want to customize really big complicated strings. Like web pages! So we take the string and just stuff it in its own file.
  * So, what variables/methods are in scope in a view? 🤔🤔🤔


* What is the core idea of MVC?
  * Model-View-Controller, an architectural pattern
  * Splits the responsibility of our app up:
    * Models: manage the data
    * Controllers: that have the application logic
    * Views: that present an interface to the user
  * Code can easily get too messy if these are in the same file,
    let alone the same method. So break them into different parts!

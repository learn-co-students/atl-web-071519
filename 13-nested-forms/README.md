## Today

Good Morning! http://i.imgur.com/Jdt1rRf.gifv

### To Build...

A tiny library.

<!-- * make a wonderful homepage -->
<!-- * list all the books -->
<!-- * get info on a single book -->
<!-- * add a book to the library -->

<!-- * have a page for listing authors in the library -->
* have a form for adding an author and several of their books at once!

## Waking Up

* Warmup! Reminders about our final changes yesterday:
  <!-- * Route Priority -->
    * Give the form a page: `get '/books/new'`. Why can't we get to that page?
  <!-- * Mass Assignment -->
    * If ruby turns key: value arguments into a hash, could we just pass a hash?

### Process

* Migrations > Models > Routes > Handlers/Controller Method > Views

* Separate authors and books
   <!-- * Add author model and migrate books to have an author_id -->
   <!-- * Add a form for creating an author and several books at the same time -->
* Nice to have but maybe tomorrow:
  * Fix the original form to have a dropdown for author.
  * Have different authors and books controllers
  * Add validations and error handling!

### Why are forms hard?

* Well, they rely on _every part_ of MVC.
  * It relies on the model, for us to know what fields and inputs we need data for.
  * It relies on the controller/routes, for us to know where the form should be sent for processing.
  * It _is_ a view, and the way we define the inputs *determines how the controller sees the data*!

Also, somewhat surprisingly, a form is often split up between two routes:
  * One route sends the HTML for the page that displays the form
  * The other route receives the information in the form and processes it

We will get much more practice with this. Forms are hard but _so_ important.
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Card, Button, Menu } from 'semantic-ui-react'
import PostCard from './PostCard'
import PostForm from './PostForm'
import CardDetail from './CardDetail'
import { BrowserRouter } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom'

class App extends React.Component {
  state = {
    posts: null,
    showForm: false,
    itemsPerRow: 3,
    detailPost: null
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({ posts: json }))
  }

  increase = () => {
    console.log("increase")
    if (this.state.itemsPerRow > 7) {
      return null
    }
    this.setState({ itemsPerRow: this.state.itemsPerRow + 1 })
  }
  decrease = () => {
    if (this.state.itemsPerRow < 2) {
      return null
    }
    console.log("decrease")
    this.setState({ itemsPerRow: this.state.itemsPerRow - 1 })
  }

  showPosts = () => {
    this.setState({
      homePage: false,
      allPosts: true,
      showMenu: true
    })
  }

  showForm = () => {
    this.setState({
      allPosts: !this.state.allPosts,
      showForm: !this.state.showForm
    })
  }

  addNewPost = (post) => {
    console.log(post)
    let o = this.state.posts
    let b = [...this.state.posts, post]
    this.setState({ posts: b })
  }

  renderDetail = (e, match) => {
    if (this.state.posts) {
      console.log(this.state.posts)
      let matchingPost = this.state.posts.filter(post => post.id == match.params.id)
      console.log(matchingPost)
      return <CardDetail post={matchingPost} />
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/post/:id' render={({ e, match }) => {
            return (
              this.renderDetail(e, match)
            )
          }} />
          <Route exact path='/newPost' render={() => { return <PostForm addNewPost={this.addNewPost} /> }} />
          <Route exact path="/posts" render={() => {
            return (
              
                <Container>
                <Menu pointing secondary centered>
                  <Menu.Item >
                    <Link to='/newPost' ><Button
                    > Create A Post</Button>
                    </Link>
                  </Menu.Item>
                  <Menu.Item >
                    <h1>Application About Posting Things</h1>
                  </Menu.Item>
                  <Menu.Item>
                    <Button onClick={this.increase}>+</Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button onClick={this.decrease}>-</Button>
                  </Menu.Item>
                </Menu>
                <Card.Group itemsPerRow={this.state.itemsPerRow}>
                  {this.state.posts ? this.state.posts.map(post => <PostCard
                    key={post.id}
                    post={post} />) : <Card raised><h1>Loading...</h1></Card>}
                  </Card.Group>
                </Container>
              )
          }} />
          <Route path='/' render={() => {
            return (
              <div><h1 style={{ 'textAlign': 'center', 'fontSize': '12em' }} > Welcome to Poster  App</h1>
                <Link to='/posts'>
                  <Button
                    fluid
                  >
                    Click to continue to posts
              </Button>
                </Link>
              </div>)
          }}
          />
        </Switch>
        <Container>
        </Container>
      </BrowserRouter>


    )
  }

}

export default App;

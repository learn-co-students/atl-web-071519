import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class CardDetail extends React.Component {
    render() {
        let post = this.props.post[0]
        return (
            <Link to="/posts" >
                <Card fluid>
                    <Card.Content>
                        <Card.Header> { post.title} </Card.Header>
                        <Card.Meta> User ID: {post.userId} </Card.Meta>
                        <Card.Description> {post.body} </Card.Description>
                    </Card.Content>
                </Card>
            </Link>
        )
    }
}

export default CardDetail
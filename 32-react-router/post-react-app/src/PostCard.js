import React from 'react'
import { Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class PostCard extends React.Component {
    render() {
        return (
            <Card fluid >
                <Link to={`/post/${this.props.post.id}`}>
                    <Card.Content>
                        <Card.Header>{this.props.post.title}</Card.Header>
                        <Card.Meta>User ID: {this.props.post.userId}</Card.Meta>
                        <Card.Description>
                        {this.props.post.body}
                        </Card.Description>
                </Card.Content>
                </Link>
            </Card>
        )
    }
}

export default PostCard
import React from 'react';
import data from './data';
import { Link } from 'react-router-dom';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    return (
      <div  className='m-top-bot-15'>
        {this.state.data.map((post) => {
          return (
            <div key={post.slug}>
              <Link to={`/post/${post.slug}`}>
                <h2 className='fs-22 m-bot-15 m-left-25'>{post.title}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Articles;

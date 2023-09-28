import React from 'react';
import data from './data';

class SingleArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
    };
  }

  componentDidMount() {
    let { slug } = this.props.match.params;

    const article = data.find((post) => post.slug === slug);

    if (article) {
      this.setState({ article });
    } else {
      console.error(`Article with slug "${slug}" not found.`);
    }
  }

  render() {
    if (!this.state.article) {
      return <div>...Loading</div>;
    }
    return (
      <div className='m-left-25 m-top-25'>
        <h2 className='fs-25'>{this.state.article.title}</h2>
        <p className='fs-18'>{this.state.article.author}</p>
      </div>
    );
  }
}

export default SingleArticle;

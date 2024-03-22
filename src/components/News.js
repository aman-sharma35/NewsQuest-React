import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }

  async updateNews() {
    this.props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  // handlePrevClick = async () => {
  //   this.setState({page : this.state.page - 1});
  //   this.updateNews();
  // }

  // handleNextClick = async () => {
  //   this.setState({page : this.state.page + 1});
  //   this.updateNews();
  // }
  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  };
  render() {
    return (
      <>

        <h1 className='text-center' style={{ margin: "20px" }}>NewsQuest - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={!this.state.loading && <Spinner />}
        >
          <div className='container my-3'>
            <div className='row'>
              {/* map() method: The map() method is the most commonly used function to iterate over an array of data in JSX. 
          You can attach the map() method to the array and use a callback function that gets called for each iteration. */}
              {this.state.articles.map((element) => {
                return <div className='col-md-3' key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* {this.state.loading && <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>} */}
      </>
    )
  }
}

export default News


// ~~~~Comments~~~~
// componentDidMount() method: This method gets invoked once the component has been rendered. As a result, the constructor
// of our application gets executed first, followed by the ‘render method,’ and at last, the ComponentDidMount() method is invoked.
// Note: ComponentDidMount() is a lifecycle method.
// Async keyword is used to make a function asynchronous. Async can wait inside its body to resolve for some of the promises. The await keyword will stop the execution until a defined task is completed. In our case, it will wait for the promise to be resolved.
// Math.ceil() method We have a total of 38 results so if we render 20 News on one page then it will take 1.9 pages to render all the NewsItems.
// But, we want to display two pages. Thus, To overcome this issue we would use math.ceil() method. This method rounds a number up to the next largest integer. 
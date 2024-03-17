import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0a9ef1f3dd6e43af82b4622b475f31fa&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handlePrevClick = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0a9ef1f3dd6e43af82b4622b475f31fa&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ 
      articles: parsedData.articles,
      page: this.state.page - 1
    })
  }

  handleNextClick = async () => {
    console.log("Next");
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0a9ef1f3dd6e43af82b4622b475f31fa&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ 
        articles: parsedData.articles,
        page: this.state.page + 1
      })
  }
  render() {
    return (
      <div className='container my-3'>

        <h1>NewsQuest - Top Headlines</h1>
        <div className='row'>
          {/* map() method: The map() method is the most commonly used function to iterate over an array of data in JSX. 
          You can attach the map() method to the array and use a callback function that gets called for each iteration. */}
          {this.state.articles.map((element) => {
            return <div className='col-md-3' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
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
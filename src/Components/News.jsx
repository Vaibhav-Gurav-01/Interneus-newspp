import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import '../index.css';
import InfiniteScroll from 'react-infinite-scroll-component';



export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'technology'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }


    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // ====================================================================================================================

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `InterNeus - ${this.capitalizeFirstLetter(this.props.category)}`;
    }

    // ====================================================================================================================

    async UpdateNews() {
        this.props.setProgress(10);

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;


        this.setState({ loading: true });
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData);

        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        });

        this.props.setProgress(100);
    }

    // ====================================================================================================================

    async componentDidMount() {
        this.UpdateNews()
    }

    handlePervClick = async () => {
        await this.setState({ page: this.state.page - 1 })
        this.UpdateNews();
    }

    handleNextClick = async () => {

        let nextCal = this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
        if (nextCal) {

        }
        else {
            await this.setState({ page: this.state.page + 1 }, () => { this.UpdateNews(); });
        }
    }

    // ====================================================================================================================
    async componentDidUpdate(prevProps) {
        if (prevProps.searchQuery !== this.props.searchQuery) {
            await this.UpdateNews();
        }
    }

    //====================================================================================================================
    fetchMoreData = async () => {

        this.setState({ page: this.state.page + 1 })

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;



        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData);

        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults
        });

    };

    //====================================================================================================================

    render() {
        return (

            <>
                <h3 className='text-center ' style={{ margin: '30px', color: "black", fontFamily: "Copperplate Gothic", fontWeight: "bold" }} >InterNeus - Top  {this.capitalizeFirstLetter(this.props.category)} Headlines </h3>

                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner />}
                >

                    <div className='container my-2 '>
                        <div className="row"  >
                            {this.state.articles.map((element) => {
                                return (<>
                                    <div className="col-md-4" key={element.content}>

                                        <NewsItem title={element.title} source={element.source.name} publishedAt={element.publishedAt} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />


                                    </div>
                                </>
                                )
                            })
                            }
                        </div>
                    </div>

                </InfiniteScroll>
                

                {/* <div className="container  d-grid gap-2  d-md-flex justify-content-md-end my-5">

                    <button type="button" className="btn btn-secondary " disabled={this.state.page <= 1} onClick={this.handlePervClick}>&larr; Previous</button>

                    <button type="button" className="btn btn-dark " disabled={this.nextCal} onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </ >

        )
    }
}
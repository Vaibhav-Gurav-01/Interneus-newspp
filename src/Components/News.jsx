import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import '../index.css'



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

    // ====================================================================================================================
    
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1
        }
    }

    // ====================================================================================================================

    async Testfunc() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7ad390df7e1a4320a3b6404d2374c112&page=${this.state.page}&pagesize=${this.props.pageSize}`

        this.setState({ loading: true });
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData);

        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        });
    }

    // ====================================================================================================================
    
    async componentDidMount() {
        this.Testfunc()
    }

    handlePervClick = async () => {
        await this.setState({ page: this.state.page - 1 })
        this.Testfunc();
    }

    handleNextClick = async () => {

        let nextCal = this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
        if (nextCal) {

        }
        else {
            await this.setState({ page: this.state.page + 1 }, () => { this.Testfunc(); });
        }
    }

    // ====================================================================================================================
    
    render() {
        return (

            <div className='container my-2 '>
                <h3 className='text-center ' style={{ margin: '30px', color: "black", fontFamily: "Copperplate Gothic", fontWeight: "bold" }} >InterNeus - Top Headlines</h3>


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
                {this.state.loading && <Spinner />}

                <div className="container  d-grid gap-2  d-md-flex justify-content-md-end my-5">

                    <button type="button" className="btn btn-secondary " disabled={this.state.page <= 1} onClick={this.handlePervClick}>&larr; Previous</button>

                    <button type="button" className="btn btn-dark " disabled={this.nextCal} onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div >

        )
    }
}
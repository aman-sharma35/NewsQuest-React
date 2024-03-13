import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "COLLIN BINKLEY and KRUTIKA PATHI",
      "title": "At US universities, record numbers of Indian students seek brighter prospects — and overseas jobs",
      "description": "Pranay Karkale is spending years of savings and $60,000 in student loans to pursue a master’s degree in the United States, yet he considers himself lucky. At home in India, it’s common to hear about families selling off their land to send children to universi…",
      "url": "https://apnews.com/4df3d86ed204762e34fc17a838218964",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/d4c65aaca79043f98c12ec475ac52a6e/3000.jpeg",
      "publishedAt": "2024-03-11T04:08:11Z",
      "content": "Pranay Karkale is spending years of savings and $60,000 in student loans to pursue a master’s degree in the United States, yet he considers himself lucky. At home in India, it’s common to hear about … [+7132 chars]"
    },
    {
      "source": {
        "id": "news-com-au",
        "name": "News.com.au"
      },
      "author": null,
      "title": "Dad’s act after wife found dead in wheelie bin",
      "description": "The husband of a young mother whose body was found stuffed inside a wheelie bin on an isolated road in Victoria flew to India with their son and handed him to in-laws before disappearing, according to Indian police.",
      "url": "https://www.news.com.au/national/victoria/crime/indian-police-say-husband-of-mum-found-in-wheelie-bin-dropped-son-off-at-inlaws-before-disappearing/news-story/641da11ec1d97789fc5c0ffea19e867f",
      "urlToImage": "https://content.api.news/v3/images/bin/d9b9591b3b4d96999d0e94f5fbd792d2",
      "publishedAt": "2024-03-10T22:48:00Z",
      "content": "The husband of a young mother whose body was found stuffed inside a wheelie bin on an isolated road in Victoria flew to India with their son and handed him to in-laws before disappearing, according t… [+3823 chars]"
    },
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "'Exposed' England have 'thinking' to do - McCullum",
      "description": "England have been \"exposed\" in India and have some \"deep thinking\" ahead, according to coach Brendon McCullum.",
      "url": "http://www.bbc.co.uk/sport/cricket/68528077",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/15836/production/_132881188_brendonmccullum.jpg",
      "publishedAt": "2024-03-10T18:07:26.5901567Z",
      "content": "England have lost seven of their past 12 Tests\r\nEngland have been \"exposed\" in India and have some \"deep thinking\" ahead, according to coach Brendon McCullum.\r\nThe tourists won the first Test but the… [+5395 chars]"
    },
    {
      "source": {
        "id": "business-insider-uk",
        "name": "Business Insider (UK)"
      },
      "author": "Kieran Corcoran",
      "title": "Ambani wedding: Rush of private jets prompts extra VIP passport facility",
      "description": "Asia's richest family, the Ambanis, are hosting a lavish pre-wedding party for scion Anant in Gujarat, India, causing airport chaos.",
      "url": "http://uk.businessinsider.com/ambani-wedding-rush-private-jets-prompts-extra-vip-passport-facility-2024-3",
      "urlToImage": "https://i.insider.com/65e1fc22ce7f1785b2e55826?width=1200&format=jpeg",
      "publishedAt": "2024-03-01T15:17:09Z",
      "content": "The party of the month (year?) is underway in India, and the local airport is pulling out all the stops to cope.\r\nThe Ambani family is hosting a bash for one of its scions, Anant, to get married to R… [+1760 chars]"
    },
    {
      "source": {
        "id": "business-insider-uk",
        "name": "Business Insider (UK)"
      },
      "author": "Katie Warren, Jyoti Mann",
      "title": "Meet the Ambanis, India's richest family, who live in a $1 billion home",
      "description": "Mukesh Ambani is worth $111 billion and is throwing a lavish three-day pre-wedding party for his son where Rihanna is set to perform.",
      "url": "http://uk.businessinsider.com/ambani-richest-family-in-asia-india-lifestyle-home-wedding-photos-2018-12",
      "urlToImage": "https://i.insider.com/5c17e211404f4d49b774fb15?width=1200&format=jpeg",
      "publishedAt": "2024-03-01T10:33:12Z",
      "content": "Mukesh Ambani, the richest person in India and 11th-richest person in the world, is kicking off pre-wedding celebrations for his son Anant in Gujarat this weekend. \r\nMukesh Ambani is worth $111 billi… [+1223 chars]"
    },
    {
      "source": {
        "id": "fortune",
        "name": "Fortune"
      },
      "author": "Emma Hinchliffe, Paige McGlauflin",
      "title": "Why a former SoftBank partner is tackling mid-career drop-off for working mothers",
      "description": "Former SoftBank partner and Facebook India director Kirthiga Reddy is the cofounder of Laddrr, a resource hub for working mothers aiming to prevent mid-career drop-off.",
      "url": "https://fortune.com/2022/06/01/former-softbank-partner-tackling-mid-career-drop-off-for-working-mothers/",
      "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/Kirthiga1.jpg?resize=1200,600",
      "publishedAt": "2022-06-01T13:22:34Z",
      "content": "Skip to Content"
    },
    {
      "source": {
        "id": "the-hindu",
        "name": "The Hindu"
      },
      "author": "Ananth Krishnan",
      "title": "Dalai Lama’s close aides targeted on Pegasus spyware list",
      "description": "‘Analysis indicates that the Indian govt. was selecting the potential targets’",
      "url": "https://www.thehindu.com/news/international/dalai-lamas-close-aides-targeted-on-pegasus-spyware-list/article35474285.ece",
      "urlToImage": "https://www.thehindu.com/news/international/dvshb0/article35474284.ece/ALTERNATES/LANDSCAPE_615/thjc-DalaiLama",
      "publishedAt": "2021-07-22T15:47:01Z",
      "content": "Several of the top India-based aides to the Tibetan spiritual leader, the Dalai Lama, figure on the list of potential targets for spying using the Pegasus spyware, according to a report on Thursday. … [+2399 chars]"
    },
    {
      "source": {
        "id": "rte",
        "name": "RTE"
      },
      "author": "RTÉ News",
      "title": "UK continues with reopening plan despite concerns",
      "description": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.",
      "url": "https://www.rte.ie/news/uk/2021/0515/1221764-uk-indian-variant/",
      "urlToImage": "https://img.rasset.ie/0016cb40-1600.jpg",
      "publishedAt": "2021-05-15T09:33:48Z",
      "content": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.\r\nPrim… [+5066 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Rajat Pandit",
      "title": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China",
      "description": "India News:  The Army is now exploring the possibility of procuring 350 light tanks, which can also be transported by air, to augment its firepower in high-altitu",
      "url": "http://timesofindia.indiatimes.com/india/army-explores-procurement-of-350-light-tanks-for-mountainous-terrain-after-border-standoff-with-china/articleshow/82217825.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82217908,width-1070,height-580,imgsize-264639,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T08:29:00Z",
      "content": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Army explores procurement of 350 light tanks for mou… [+58 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Times Of India",
      "title": "PBKS vs MI Live Score, IPL 2021: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways",
      "description": "IPL Live Score: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways. Stay with TOI to get IPL live score, playing 11, scorecard, highlights and ball by ball score updates of the 17th IPL match between Punjab Kings and Mumbai Indians.",
      "url": "http://timesofindia.indiatimes.com/sports/cricket/ipl/live-blog/punjab-kings-vs-mumbai-indians-pbks-vs-mi-live-score-ipl-2021-17th-match-chennai/liveblog/82214950.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82214950,width-1070,height-580,imgsize-157009,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T05:44:49Z",
      "content": "Ravi Bishnoi return on the cards?\r\nDeepak Hooda showed what he is capable of, but greater consistency would be needed from him if the team has to prosper. They bet on Australian pace imports Jhye Ric… [+3131 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "PTI",
      "title": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment",
      "description": "India News: Drug firm Zydus Cadila on Friday said it has received restricted emergency use approval from the Indian drug regulator for the use of Pegylated Interf",
      "url": "http://timesofindia.indiatimes.com/india/zydus-cadila-gets-dcgi-nod-for-hepatitis-drug-for-covid-19-treatment/articleshow/82214909.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82214921,width-1070,height-580,imgsize-98052,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T05:43:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Bloomberg",
      "title": "Even record death toll may hide extent of India’s Covid crisis",
      "description": "India News: Bodies piling up at crematoriums and burial grounds across India are sparking concerns that the death toll from a ferocious new Covid-19 wave may be m.",
      "url": "http://timesofindia.indiatimes.com/india/even-record-death-toll-may-hide-extent-of-indias-covid-crisis/articleshow/82213444.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82213819,width-1070,height-580,imgsize-232887,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T04:41:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Dipak K Dash",
      "title": "Government to provide 5 kg free food grains to poor for May & June",
      "description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
      "url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T04:23:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "'Inappropriate': PM Modi objects to 'protocol break' during meeting; Delhi CM expresses regret",
      "description": "India News: Delhi chief minister Arvind Kejriwal on Friday faced flak for sharing a live telecast of an \"in-house\" meeting with Prime Minister Narendra Modi where",
      "url": "http://timesofindia.indiatimes.com/india/delhi-cmo-expresses-regret-over-televised-address-during-meeting-with-pm-modi/articleshow/82213159.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82213159,width-1070,height-580,imgsize-134672,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T03:54:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Times Of India",
      "title": "Coronavirus in India live updates: Zydus' Virafin gets DCGI nod for Covid treatment",
      "description": "In yet another grim milestone, India recorded 3.3 lakh new Covid-19 cases, and 2,263 deaths in a day. Meanwhile, active cases crossed the 24-lakh mar",
      "url": "http://timesofindia.indiatimes.com/india/coronavirus-in-india-covid-19-vaccine-cases-lockdown-live-updates-23-april-2021/liveblog/82205841.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82205841,width-1070,height-580,imgsize-148788,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-22T16:20:06Z",
      "content": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment\r\nMake Covid-19 vaccination affordable, accessible through Jan Aushadi scheme: IMA\r\nThe IMA has demanded that the Covid-19 vaccine … [+4487 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>

        <h2>NewsQuest - Top Headlines</h2>
        <div className='row'>
          {/* map() method: The map() method is the most commonly used function to iterate over an array of data in JSX. 
          You can attach the map() method to the array and use a callback function that gets called for each iteration. */}
          {this.state.articles.map((element) => {
            return <div className='col-md-3' key={element.url}>
              <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News

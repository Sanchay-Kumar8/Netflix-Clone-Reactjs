const URLS = {
    trending: '/trending/all/day',
    originals : '/discover/movie?sort_by=popularity.desc',
    rated: '/movie/top_rated',
    action: '/discover/movie?with_genre=28',
    comedy: '/discover/movie?with_genre=35',
    horror: '/discover/movie?with_genre=27',
    romance: '/discover/movie?with_genre=10749',
    documentaries: '/discover/movie?with_genre=99',
};

const RowData = [ {
    title: 'Trending',
    url: '/trending/all/day',
},
{
    title : 'Originals',
    url : '/discover/movie?sort_by=popularity.desc',
},
{
    title : 'Rated',
    url : '/movie/top_rated',
},
{
    title : 'Action',
    url : '/discover/movie?with_genre=28'
},
{
    title: 'Comedy',
    url : '/discover/movie?with_genre=35'
},
{
    title : 'Horror',
    url : '/discover/movie?with_genre=27'
},
{
    title : 'Romance',
    url : '/discover/movie?with_genre=10749'
}
]

export default RowData;
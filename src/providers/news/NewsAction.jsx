const GetCurrentDate = () =>{
    const requiredDate = new Date(Date.now()).toLocaleDateString("en-In")

    const day = requiredDate.split("/")[0]
    const month = requiredDate.split("/")[1] - 1;
    const year = requiredDate.split("/")[2]

    return `${year} - ${month} - ${day}`
}

const currentDate = GetCurrentDate();


export const fetchNews = async (Topic) =>{
    // const response = await fetch(`https://newsapi.org/v2/everything?q=${Topic}&from=${currentDate}&sortBy=publishedAt&apiKey=bb48682e820f414ba82501f4b6a003d8`)
    const response = await fetch(`https://newsapi.org/v2/everything?q=${Topic}&from=${currentDate}&sortBy=publishedAt&apiKey=bb48682e820f414ba82501f4b6a003d8`)
    const data = await response.json()
    // return data.articles

    const filteredArticles = await data.articles.filter(article => article.title !== "[Removed]");

    return filteredArticles;

}

export const DeleteNews = (index) =>{
    return index;
}
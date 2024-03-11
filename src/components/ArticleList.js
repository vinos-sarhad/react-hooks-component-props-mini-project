import Article from "./Article"

function ArticleList({articles}){
    console.log(articles[2].id)



    const articleList=articles.map((article)=>{
        return (
            <>
        <Article key={article.id} title={article.title} />
        
        <small>{article.date}</small>
        <p>{article.preview}</p>
        </>
        )
    
    })
    return(
        <>
        
        <main>{articleList} </main>
        </>
    )
}

export default ArticleList;
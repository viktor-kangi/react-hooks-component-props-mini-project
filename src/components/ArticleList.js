import React from "react";
import Article from "./Article"


function ArticleList ({posts}) {

    const articleElements = posts.map((props) => {
       return ( <Article key={props.id} title={props.title} date={props.date} preview={props.preview} />)
    })
    return (
        <main>
            {articleElements}
        </main>
    )
}

export default ArticleList
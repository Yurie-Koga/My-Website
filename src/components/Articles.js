import React from "react";

function Articles() {
  const Articles = [
    {
      title: "Article 1",
      starter: "bla bla bla"
    },
    {
      title: "Article 2",
      starter: "bla bla bla"
    },
    {
      title: "Article 3",
      starter: "bla bla bla"
    }
  ];

  //   let list = [];
  //   for (let i in Articles) list.push(<article><h1>{Articles.title}</h1>{Articles.starter}</article>)

  let imageId = Math.floor(Math.random() * 1000);
  let imageUrl = "url(https://picsum.photos/id/" + imageId + "/300)";

  return (
    <div className="article-content">
      <div
        className="article article-image rounded"
        style={{ "--imageUrl": imageUrl }}
      >
        <article>
          <h1>{Articles[0].title}</h1>
          {Articles[0].starter}
        </article>
      </div>

      <div
        className="article article-image rounded"
        style={{ "--imageUrl": imageUrl }}
      >
        <article>
          <h1>{Articles[1].title}</h1>
          {Articles[1].starter}
        </article>
      </div>

      <div
        className="article article-image rounded"
        style={{ "--imageUrl": imageUrl }}
      >
        <article>
          <h1>{Articles[2].title}</h1>
          {Articles[2].starter}
        </article>
      </div>
    </div>
  );
}

export default Articles;

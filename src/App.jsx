import {useState } from 'react'


function App() {
  const [list, setList] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ])

  const handleDate = () => {
    const sortedDate = [...list].sort((a, b) => {
      const dateA = Date.parse(a.date);
      const dateB = Date.parse(b.date);
      if(dateA === dateB) {
        return b.views - a.views;
      } 
      return dateB - dateA;
    })
    console.log(sortedDate);
    setList(sortedDate);
  }

  const handleViews = () => {
    const sortedViews = [...list].sort((a, b) => {
      if(a.views === b.views) {
        return Date.parse(b.date) - Date.parse(a.date);
      }
      return b.views - a.views;
    });
    console.log(sortedViews);
    setList(sortedViews);
  } 

  return (
    <>
      <div>
        <h1>Date and Views Table</h1>
        <button onClick={handleDate}>Sort by Date</button>
        <button onClick={handleViews}>Sort by Views</button>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, idx)=> (
              <tr key={idx}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App

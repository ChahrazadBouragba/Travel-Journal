import Header from "./comonents/Header";
import Cards from "./comonents/Cards";







function App() {

  const travelCards = data.map(item => {
    return (
      <Cards
            key= {item.id}
            {...item}
      />
    )
  })


  return (
    <div className="ravelJournal">
      <Header/>
      {travelCards}
    </div>
  );
}

export default App;

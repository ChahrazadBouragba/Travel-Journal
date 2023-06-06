import Header from "./comonents/Header";
import Cards from "./comonents/Cards";
import data from "../data";






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

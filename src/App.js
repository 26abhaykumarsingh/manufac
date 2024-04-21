import "./App.css";
import data from "./assets/wineData.json";
import StatsTable from "./components/StatsTable.tsx";

function App() {
  //categorizing the data based on the classes, key will be class, value will be different values of flavanoids
  let classesFlav = {};
  for (let i = 0; i < data.length; i++) {
    const alcoholClass = data[i].Alcohol;

    if (!classesFlav[alcoholClass]) {
      classesFlav[alcoholClass] = [];
    }

    classesFlav[alcoholClass].push(parseFloat(data[i].Flavanoids.toString()));
  }

  //categorizing the data based on the classes, key will be class, value will be different values of gamma
  let classesGam = {};
  for (let i = 0; i < data.length; i++) {
    const alcoholClass = data[i].Alcohol;

    //calculating gamma
    // Gamma = (Ash * Hue) / Magnesium.

    let gamma =
      (parseFloat(data[i].Ash.toString()) *
        parseFloat(data[i].Hue.toString())) /
      parseFloat(data[i].Magnesium.toString());

    if (!classesGam[alcoholClass]) {
      classesGam[alcoholClass] = [];
    }

    classesGam[alcoholClass].push(gamma);
  }
  return (
    <div className="App">
      <StatsTable classes={classesFlav} name={"Flavanoids"} />
      <StatsTable classes={classesGam} name={"Gamma"} />
      {/* <GammaTable /> */}
    </div>
  );
}

export default App;

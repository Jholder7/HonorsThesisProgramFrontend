import './App.css';
import SourceCodeViewer from "./SourceCodeViewer";
import ToolPanel from "./ToolPanel";

function App() {
  return (
    <div className="App">
      <header>
        <title>Document</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="App.css" />
      </header>
      <div className="body">
        <SourceCodeViewer/>
        <ToolPanel/>
      </div>
    </div>
  );
}

export default App;

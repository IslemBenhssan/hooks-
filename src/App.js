import { useState } from 'react';
import './App.css';
import { moviesData } from './data';
import MovieList from './components/MovieList';
import AddNewMovie from './components/AddNewMovie';
function App() {
const [data,setData] = useState(moviesData);
const handleDelete=(id)=>setData(data.filter(el=>el.id!==id));
return (
    <div className="App">
      <AddNewMovie/>
      <MovieList list={data} handleDelete={handleDelete}/>
    
    </div>
  );

}
export default App;

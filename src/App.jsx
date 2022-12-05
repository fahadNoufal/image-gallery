import TopBar from "./components/topBar";
import Cards from "./components/cards";
import SearchBar from "./components/searchBar";
import ErrorCard from "./components/ErrorCard";
import { useState, useEffect } from "react";

function App() {

  const [images,setImages]=useState([]);
  const [term ,setTerm] =useState("");
  const [isLoading,setIsLoading]=useState(true);
  const PIXABAY_API_KEY='31041851-025c6ff124e7ba42148af4fc6';

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setIsLoading(false);
      })
      .catch(err=>(console.log(err)))
    
  },[term])

  console.log(images)

  function loading(){
    return (<h1 className="text-3xl font-bold font-serif text-center my-20">
              Loading...
            </h1>)
  }

  let allCards=images.map(image=>{
    return(
      <Cards
        key={image.id}
        title={image.user}
        imageUrl={image.webformatURL}
        views={image.views}
        likes={image.likes}
        tags={image.tags}
      />
    )
  })

  function handleSearch(word){
    setTerm(word)
    setIsLoading(true)
  }

  return (
    <div className="App sm:mx-10 lg:mx-16 xl:mx-20 pb-16">
      <TopBar/>
      <SearchBar
        onSearch={handleSearch}
      />
      
      <div className="card-container sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4">
        {isLoading? loading():allCards}
      </div>
      
      
      {(images.length===0 && !isLoading)?<ErrorCard/>:""}

    </div>
  );
}

export default App;

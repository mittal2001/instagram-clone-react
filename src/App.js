import React,{useState} from 'react'
import './App.css';
import Post from './Post.js';

function App() {
  // const [posts,setPosts] = useState([
  //   {
  //     username:"Tanmay Mittal" ,
  //     caption:"Its a sunny day" ,
  //     imageurl:"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
  //   },
  //   {
  //     username : "Tanmay Mittal" ,
  //     caption : "Its a sunny day" ,
  //     imageurl : "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
  //   }
  // ]);
  return (
    <div className="App">
      <div className="app_header">
         <img className="app_header_image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt=''/>
      </div>
      {/* header */}

      <Post  />
      <Post username="Ayush kumar" caption="Its a sunny day" imageurl="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"/>
      <Post username="Aastha Gour" caption="Its a sunny day" imageurl="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"/>
      <Post username="Uttpal Parasher" caption="Its a sunny day" imageurl="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"/>

    
      
    

    </div>
    // post
    // post
  );
}

export default App;

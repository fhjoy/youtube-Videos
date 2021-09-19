import React from "react";
import SearchBar from './SearchBar'
import youtube from "../api/youtube";
import VideoList from "./VideoList";


class App extends React.Component{
 state = {videos: [], selectedVideo: null }

 onTermSubmit = async term => {
  const res = await youtube.get('/search',{
     params:{
       q: term,
     }
   })

   this.setState({videos: res.data.items})
 }

 onVideoSelect = video =>{
   console.log(video)
 }

  render(){
    return(
      <div className = "ui container">
        <SearchBar onFormSubmit = {this.onTermSubmit} />
        <VideoList onVideoSelect = {this.onVideoSelect} 
        videos = {this.state.videos} />
        {/* There are {this.state.videos.length} Videos found */}
      </div>
    )
  }
}

export default App;
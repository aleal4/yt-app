import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video){
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`


  return (
    <div>
      <div className="Ui embed">
        <iframe title="video player" width="780" height="460" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail

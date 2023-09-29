import React from 'react'
import { Image } from 'react-bootstrap'
import Ifeed from '../../assets/types/Ifeed'

interface Props {
  feed: Ifeed
}

const Feed: React.FC<Props> = ({ feed }) => {
  return (
    <div className="img-container gallery-item">
      <a target="_blank" href={feed.permalink} rel="noreferrer">
        <Image id={feed.id} src={feed.media_url} className="gallery-image" />
        <div className="image-overlay">{feed.caption}</div>
      </a>
    </div>
  )
}
export default Feed

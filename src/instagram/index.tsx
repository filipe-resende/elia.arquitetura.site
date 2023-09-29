import React, { useEffect } from 'react'
import './style.css'
import { Container } from 'react-bootstrap'
import Feed from './feed'
import SpinnerLoading from '../spinner'
import { getDataFromInstagramApi } from '../assets/redux/reducers/instagram'
import { useSelector, useDispatch } from 'react-redux'

const Instagram: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataFromInstagramApi())
  }, [])

  interface RootState {
    instagram: Data
  }

  interface Data {
    data: feed[]
    paging: Paging
  }

  interface feed {
    media_url: string
    permalink: string
    media_type: string
    id: string
    caption: string
  }

  interface Paging {
    cursors: Cursors
    next: string
  }

  interface Cursors {
    before: string
    after: string
  }

  const feed = useSelector((state: RootState) => state.instagram.data)
  return (
    <Container fluid style={{ padding: '2%' }}>
      <div className="gallery">
        {feed.length ? (
          feed
            .filter(
              feed =>
                feed.media_type === 'IMAGE' ||
                feed.media_type === 'CAROUSEL_ALBUM'
            )
            .slice(0, 4)
            .map(feed => <Feed key={feed.id} feed={feed} />)
        ) : (
          <SpinnerLoading />
        )}
      </div>
    </Container>
  )
}
export default Instagram

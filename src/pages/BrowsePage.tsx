import React, { useState, useEffect } from 'react'
import BrowseHeaderWrapper from '../components/Header/BrowseHeaderWrapper'
import BrowseNavbar from '../components/Header/BrowseNavbar'
import Logo from '../components/Header/Logo'
import FeatureWrapperBrowse from '../components/Feature/FeatureWrapperBrowse'
import FeatureTitleBrowse from '../components/Feature/FeatureTitleBrowse'
import FeatureSubTitleBrowse from '../components/Feature/FeatureSubTitleBrowse'
import PlayButton from '../components/Header/PlayButton'
import HeaderLink from '../components/Header/HeaderLink'
import AllSlidesWrapper from '../components/Movies/AllSlidesWrapper'
import SlideWrapper from '../components/Movies/SlideWrapper'
import SlideTitle from '../components/Movies/SlideTitle'
import AllCardsWrapper from '../components/Movies/AllCardsWrapper'
import CardWrapper from '../components/Movies/CardWrapper'
import CardImage from '../components/Movies/CardImage'
import CardTitle from '../components/Movies/CardTitle'
import CardDescription from '../components/Movies/CardDescription'
import CardFeatureWrapper from '../components/Movies/CardFeatureWrapper'
import CardFeatureClose from '../components/Movies/CardFeatureClose'
import PlayerVideo from '../components/Movies/PlayerVideo'
import PlayerOverlay from '../components/Movies/PlayerOverlay'
import FooterCompound from '../compounds/FooterCompound'
import Loader from 'react-loader-spinner'
import SpinnerWrapper from '../components/Movies/SpinnerWrapper'
import seriesData from '../data/series.json'
import filmsData from '../data/films.json'

function BrowsePage() {
  let series: MovieType[] = seriesData
  series = [
    {
      title: 'Documentaries',
      data: series.filter((item) => item.genre === 'documentaries'),
    },
    {
      title: 'Comedies',
      data: series.filter((item) => item.genre === 'comedies'),
    },
    {
      title: 'Children',
      data: series.filter((item) => item.genre === 'children'),
    },
    {
      title: 'Crime',
      data: series.filter((item) => item.genre === 'crime'),
    },
    {
      title: 'Feel-Good',
      data: series.filter((item) => item.genre === 'feel-good'),
    },
  ]
  console.log('series2', series)

  let films: MovieType[] = filmsData
  films = [
    {
      title: 'Drama',
      data: films.filter((item) => item.genre === 'drama'),
    },
    {
      title: 'Thriller',
      data: films.filter((item) => item.genre === 'thriller'),
    },
    {
      title: 'Children',
      data: films.filter((item) => item.genre === 'children'),
    },
    {
      title: 'Suspense',
      data: films.filter((item) => item.genre === 'suspense'),
    },
    {
      title: 'Romance',
      data: films.filter((item) => item.genre === 'romance'),
    },
  ]

  const [category, setCategory] = useState('films')
  const currentCategory = category === 'films' ? films : series
  const [showCardFeature, setShowCardFeature] = useState(false)
  const [activeItem, setActiveItem] = useState<MovieType>({})
  const [showPlayer, setShowPlayer] = useState(false)
  const [loading, setLoading] = useState(true)

  function handleFilmsClick() {
    setCategory('films')
    const element = document.getElementById('movies')
    element?.scrollIntoView()
  }

  function handleSeriesClick() {
    setCategory('series')
    const element = document.getElementById('movies')
    element?.scrollIntoView()
  }

  useEffect(() => {
    if (series[0].data!.length > 1) {
      setLoading(false)
    }
  }, [series])

  if (loading) {
    return (
      <SpinnerWrapper>
        <Loader type='ThreeDots' color='white' height={100} width={100} />
      </SpinnerWrapper>
    )
  }

  return (
    <>
      <BrowseHeaderWrapper>
        <BrowseNavbar>
          <Logo />
          <HeaderLink onClick={handleFilmsClick}>Films</HeaderLink>
          <HeaderLink onClick={handleSeriesClick}>Series</HeaderLink>
        </BrowseNavbar>
        <FeatureWrapperBrowse>
          <FeatureTitleBrowse>Watch Patman Now</FeatureTitleBrowse>
          <FeatureSubTitleBrowse>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks, the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he is part of the world
            around him.
          </FeatureSubTitleBrowse>
          <PlayButton onClick={() => setShowPlayer(true)}>Play</PlayButton>
          {showPlayer ? (
            <PlayerOverlay onClick={() => setShowPlayer(false)}>
              <PlayerVideo src='./videos/video.mp4' type='video/mp4' />
            </PlayerOverlay>
          ) : null}
        </FeatureWrapperBrowse>
      </BrowseHeaderWrapper>

      <AllSlidesWrapper id='movies'>
        {currentCategory.map((slideItem) => (
          <SlideWrapper key={`${category}-${slideItem.title?.toLowerCase()}`}>
            <SlideTitle>{slideItem.title!}</SlideTitle>
            <AllCardsWrapper>
              {slideItem.data?.map((cardItem) => (
                <CardWrapper key={cardItem.docId!}>
                  <CardImage
                    onClick={() => {
                      setShowCardFeature(true)
                      setActiveItem(cardItem)
                    }}
                    src={`../images/${category}/${cardItem.genre}/${cardItem.slug}/small.jpg`}
                  />
                </CardWrapper>
              ))}
            </AllCardsWrapper>
            {showCardFeature &&
            slideItem.title?.toLowerCase() === activeItem.genre ? (
              <CardFeatureWrapper
                style={{
                  backgroundImage: `url(../images/${category}/${activeItem.genre}/${activeItem.slug}/large.jpg)`,
                }}
              >
                <CardTitle>{activeItem.title!}</CardTitle>
                <CardDescription>{activeItem.description!}</CardDescription>
                <CardFeatureClose onClick={() => setShowCardFeature(false)} />
                <PlayButton onClick={() => setShowPlayer(true)}>
                  Play
                </PlayButton>
                {showPlayer ? (
                  <PlayerOverlay onClick={() => setShowPlayer(false)}>
                    <PlayerVideo src='../videos/video.mp4' type='video/mp4' />
                  </PlayerOverlay>
                ) : null}
              </CardFeatureWrapper>
            ) : null}
          </SlideWrapper>
        ))}
      </AllSlidesWrapper>
      <FooterCompound />
    </>
  )
}

export default BrowsePage


/*---> Interfaces <---*/
interface MovieType {
  description?: string
  docId?: string
  genre?: string
  id?: string
  maturity?: string
  slug?: string
  title?: string
  data?: MovieType[]
}

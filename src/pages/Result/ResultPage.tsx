import sampleVideo from 'constants/videos/sample.mp4'
import { FC, useEffect, useState } from 'react'
import {
  ContentContainer,
  ContentLoadingContainer,
  ContentLoadingSpin,
  ContentLoadingTitleTypo,
  ContentVideo,
  ContentVideoContainer,
  ContentVideoTitleTypo,
  HeaderContainer,
  HeaderLogoTypo,
  HeaderMenuContainer,
  HeaderMenuShareButton,
  Root,
} from './styled'

type ResultPageProps = {
  className?: string
}

type LoadingType = 'LOADING' | 'NONE'

export const ResultPage: FC<ResultPageProps> = ({ className }) => {
  const [loading, setLoading] = useState<LoadingType>('LOADING')

  const handleLoading = (type: LoadingType) => () => {
    if (type === 'LOADING') {
      setLoading('LOADING')
      return
    }
    if (type === 'NONE') {
      setLoading('NONE')
      return
    }
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      handleLoading('NONE')()
    }, 5000)
  }, [])

  return (
    <Root className={className}>
      <HeaderContainer>
        <HeaderLogoTypo>영상 자동 생성 시스템</HeaderLogoTypo>
        <HeaderMenuContainer>
          <HeaderMenuShareButton />
        </HeaderMenuContainer>
      </HeaderContainer>
      <ContentContainer>
        {loading === 'LOADING' && (
          <ContentLoadingContainer>
            <ContentLoadingTitleTypo>영상 생성 중</ContentLoadingTitleTypo>
            <ContentLoadingSpin tip="Loading..." size={'large'} />
          </ContentLoadingContainer>
        )}
        {loading === 'NONE' && (
          <ContentVideoContainer>
            <ContentVideoTitleTypo>자동 편집된 영상</ContentVideoTitleTypo>
            <ContentVideo src={sampleVideo} autoPlay controls muted />
          </ContentVideoContainer>
        )}
      </ContentContainer>
    </Root>
  )
}

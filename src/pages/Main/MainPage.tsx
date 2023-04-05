import { FC, useState } from 'react'
import {
  ContentAddButton,
  ContentAddButtonIcon,
  ContentAddButtonTypo,
  ContentAddContainer,
  ContentCard,
  ContentCardContainer,
  ContentCardDeleteButton,
  ContentCardDeleteButtonIcon,
  ContentCardDeleteButtonTypo,
  ContentCardFieldContainer,
  ContentCardTimePickerFieldContainer,
  ContentCardTitleTypo,
  ContentContainer,
  ContentInputField,
  ContentSelectField,
  ContentTimePickerField,
  HeaderContainer,
  HeaderLogoTypo,
  HeaderMenuContainer,
  HeaderMenuShareButton,
  Root,
} from './styled'

type MainPageProps = {
  className?: string
}

const videoSelectOptionsSampleData = [
  { value: 'VIDEO_A', label: 'A 영상' },
  { value: 'VIDEO_B', label: 'B 영상' },
  { value: 'VIDEO_C', label: 'C 영상' },
  { value: 'VIDEO_D', label: 'D 영상' },
]

const speedRateOptions = [
  { value: 0.5, label: '0.5 배속' },
  { value: 1.0, label: '1.0 배속' },
  { value: 1.5, label: '1.5 배속' },
  { value: 2.0, label: '2.0 배속' },
]

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const [actionList, setActionList] = useState<{}[]>([{}])

  const handleActionList = (type: 'ADD' | 'DELETE', actionIndex?: number) => () => {
    if (type === 'ADD') {
      setActionList((prev) => [...prev, {}])
      return
    }
    if (type === 'DELETE') {
      setActionList((prev) => prev.filter((_, index) => index !== actionIndex))
      return
    }
  }

  return (
    <Root className={className}>
      <HeaderContainer>
        <HeaderLogoTypo>영상 자동 생성 시스템</HeaderLogoTypo>
        <HeaderMenuContainer>
          <HeaderMenuShareButton />
        </HeaderMenuContainer>
      </HeaderContainer>
      <ContentContainer>
        <ContentCardContainer>
          {actionList.map((actionItem, index) => (
            <ContentCard key={`content_card_${index}`}>
              <ContentCardTitleTypo>액션 {index + 1}</ContentCardTitleTypo>
              <ContentCardFieldContainer>
                <ContentSelectField placeholder={'영상을 선택해주세요.'} options={videoSelectOptionsSampleData} />
                <ContentCardTimePickerFieldContainer>
                  <ContentTimePickerField placeholder="시작 시간을 입력해주세요." />
                  <ContentTimePickerField placeholder="끝 시간을 입력해주세요." />
                </ContentCardTimePickerFieldContainer>
                <ContentSelectField placeholder={'배속을 선택해주세요.'} options={speedRateOptions} />
                <ContentInputField addonBefore="자막" placeholder="자막을 입력해주세요." />
              </ContentCardFieldContainer>
              <ContentCardDeleteButton type={'primary'} onClick={handleActionList('DELETE', index)}>
                <ContentCardDeleteButtonTypo>액션 삭제</ContentCardDeleteButtonTypo>
                <ContentCardDeleteButtonIcon />
              </ContentCardDeleteButton>
            </ContentCard>
          ))}
        </ContentCardContainer>
        <ContentAddContainer>
          <ContentAddButton type={'primary'} onClick={handleActionList('ADD')}>
            <ContentAddButtonTypo>액션 추가</ContentAddButtonTypo>
            <ContentAddButtonIcon />
          </ContentAddButton>
        </ContentAddContainer>
      </ContentContainer>
    </Root>
  )
}

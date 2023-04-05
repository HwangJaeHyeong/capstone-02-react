import { FC, useState } from 'react'
import {
  ContentAddButton,
  ContentAddButtonIcon,
  ContentAddButtonTypo,
  ContentAddContainer,
  ContentCard,
  ContentCardCollapse,
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
  ContentSubmitButton,
  ContentSubmitButtonTypo,
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

const effectSelectOptionsSampleData = [
  { value: 'EFFECT_A', label: 'A 효과' },
  { value: 'EFFECT_B', label: 'B 효과' },
  { value: 'EFFECT_C', label: 'C 효과' },
  { value: 'EFFECT_D', label: 'D 효과' },
  { value: 'EFFECT_NULL', label: '효과 없음' },
]

const speedRateOptions = [
  { value: 0.5, label: '0.5 배속' },
  { value: 1.0, label: '1.0 배속' },
  { value: 1.5, label: '1.5 배속' },
  { value: 2.0, label: '2.0 배속' },
]

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const [actionList, setActionList] = useState<{}[]>([{}, {}, {}])

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
              <ContentCardCollapse>
                <ContentCardCollapse.Panel
                  key={`content_card_${index}_1`}
                  header={<ContentCardTitleTypo>액션 {index + 1}</ContentCardTitleTypo>}
                >
                  <ContentCardFieldContainer>
                    <ContentInputField addonBefore="제목" placeholder="액션 제목을 입력해주세요." />
                    <ContentSelectField placeholder={'영상을 선택해주세요.'} options={videoSelectOptionsSampleData} />
                    <ContentSelectField placeholder={'효과를 선택해주세요.'} options={effectSelectOptionsSampleData} />
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
                </ContentCardCollapse.Panel>
              </ContentCardCollapse>
            </ContentCard>
          ))}
        </ContentCardContainer>
        <ContentAddContainer>
          <ContentAddButton type={'primary'} onClick={handleActionList('ADD')}>
            <ContentAddButtonTypo>액션 추가</ContentAddButtonTypo>
            <ContentAddButtonIcon />
          </ContentAddButton>
        </ContentAddContainer>
        <ContentSubmitButton>
          <ContentSubmitButtonTypo>영상 제작하기</ContentSubmitButtonTypo>
        </ContentSubmitButton>
      </ContentContainer>
    </Root>
  )
}

import { ShareAltOutlined } from '@ant-design/icons'
import { Spin, Typography } from 'antd'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 80px 0;
`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px #c9c9c9 solid;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`

export const HeaderLogoTypo = styled(Typography)`
  &&& {
    font-size: 32px;
    font-weight: 700;
  }
`

export const HeaderMenuContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const HeaderMenuShareButton = styled(ShareAltOutlined)`
  font-size: 24px;
  cursor: pointer;
`

export const ContentContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-top: 20px;
`

export const ContentLoadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ContentLoadingTitleTypo = styled(Typography)`
  font-size: 24px;
  font-weight: 500;
`

export const ContentLoadingSpin = styled(Spin)`
  margin-top: 20px;
`

export const ContentVideoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ContentVideoTitleTypo = styled(Typography)`
  &&& {
    font-size: 24px;
    font-weight: 500;
  }
`

export const ContentVideo = styled.video`
  width: 100%;
`

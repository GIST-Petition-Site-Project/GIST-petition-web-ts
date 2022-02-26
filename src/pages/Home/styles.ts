import styled from '@emotion/styled'
import theme from '@style/theme'
// import MainImg from '@assets/img/gist_summer.jpg'
import MainImg from '@assets/img/main2.png'
import { keyframes } from '@emotion/react'
import { Box } from '@chakra-ui/react'

const MainBackgroundImage = styled.div`
  position: relative;
  background-image: url(${MainImg});
  height: 440px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const InnerWrap = styled(Box)`
  backdrop-filter: blur(1.5px);
  height: 100%;
`

const DashBoard = styled(Box)`
  position: absolute;
  display: flex;
  margin: auto;
  right: 0;
  height: 88px;
  flex-direction: column;
  font-weight: bold;
  color: ${theme.color.WHITE};
  line-height: 1.5em;
  letter-spacing: 0.1em;
`

const firstRowIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const secondRowIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  50%{
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const SloganFirstRow = styled.span`
  animation: ${firstRowIn} linear 1000ms forwards;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`

const SloganSecondRow = styled.span`
  animation: ${secondRowIn} linear 2000ms forwards;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`
const PetitionsWrapper = styled.div`
  padding-bottom: 60px;
  .petitions_title {
    display: flex;
    text-align: center;
    padding-top: 4rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid #ccc;
    > span {
      font-size: 20px;
      font-weight: bold;
    }
  }
`

export {
  MainBackgroundImage,
  InnerWrap,
  DashBoard,
  SloganFirstRow,
  SloganSecondRow,
  PetitionsWrapper,
}

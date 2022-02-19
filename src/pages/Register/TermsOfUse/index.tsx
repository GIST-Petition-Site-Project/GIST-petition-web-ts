import { CheckIcon } from '@chakra-ui/icons'
import { Box, Divider } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAgree } from '../../../redux/register/registerSlice'
import { RootState } from '../../../redux/store'
import {
  TermsOfUseCollapse,
  TermsOfUseCheckIcon,
  TermsOfUseIcon,
  List,
  TermsOfUseBtn,
  TermsOfUseCheckFlex,
  TermsOfUseTotalBox,
} from './styles'

const TermsOfUse = (): JSX.Element => {
  const [firstOpen, setFirstOpen] = useState(false)
  const [secondOpen, setSecondOpen] = useState(false)
  const agreeInfo = useSelector((state: RootState) => state.register.agreeInfo)
  const dispatch = useDispatch()

  const handleAgree = (value: string) => {
    switch (value) {
      case 'total':
        if (agreeInfo.private && agreeInfo.service) {
          dispatch(setAgree('Total'))
          return
        }
        dispatch(setAgree('Total'))
        return
      case 'service':
        dispatch(setAgree('Service'))
        return
      case 'private':
        dispatch(setAgree('Private'))
        return
      default:
        throw Error('Clicked Wrong Btn')
    }
  }

  const handleClick = (e: any) => {
    const target = e.currentTarget
    const value = target.dataset.value
    value && handleAgree(value)
  }
  return (
    <section>
      <List>
        <TermsOfUseCheckFlex as="label">
          <TermsOfUseCheckIcon
            onClick={handleClick}
            aria-label="Call Segun"
            size="sm"
            icon={<CheckIcon />}
            data-value="total"
            isclicked={
              agreeInfo.private && agreeInfo.service ? 'true' : 'false'
            }
          />
          <TermsOfUseTotalBox ml={2}>전체 약관 동의</TermsOfUseTotalBox>
        </TermsOfUseCheckFlex>
      </List>
      <Divider orientation="horizontal" borderBottomWidth="2.5px" mb={4} />
      <List>
        <TermsOfUseCheckFlex as="label">
          <TermsOfUseCheckIcon
            aria-label="Call Segun"
            size="sm"
            icon={<CheckIcon />}
            onClick={handleClick}
            data-value="service"
            isclicked={agreeInfo.service ? 'true' : 'false'}
          />
          <Box ml={2}>서비스 이용약관 동의</Box>
        </TermsOfUseCheckFlex>
        <TermsOfUseBtn
          onClick={() => {
            if (secondOpen === true) {
              setSecondOpen(!secondOpen)
            }
            setFirstOpen(!firstOpen)
          }}
        >
          <TermsOfUseIcon></TermsOfUseIcon>
        </TermsOfUseBtn>
      </List>
      <Divider orientation="horizontal" />
      <TermsOfUseCollapse in={firstOpen}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        at, quia officiis nesciunt quod blanditiis aperiam repellendus
        praesentium numquam ullam maxime, vel consequuntur est dolore tempore
        excepturi rerum ipsa perspiciatis?
      </TermsOfUseCollapse>
      <List>
        <TermsOfUseCheckFlex as="label">
          <TermsOfUseCheckIcon
            aria-label="Call Segun"
            size="sm"
            icon={<CheckIcon />}
            onClick={handleClick}
            data-value="private"
            isclicked={agreeInfo.private ? 'true' : 'false'}
          />
          <Box ml={2}>개인정보수집 및 이용동의</Box>
        </TermsOfUseCheckFlex>
        <TermsOfUseBtn
          onClick={() => {
            if (firstOpen === true) {
              setSecondOpen(!firstOpen)
            }
            setSecondOpen(!secondOpen)
          }}
        >
          <TermsOfUseIcon></TermsOfUseIcon>
        </TermsOfUseBtn>
      </List>
      <Divider orientation="horizontal" />
      <TermsOfUseCollapse in={secondOpen}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        at, quia officiis nesciunt quod blanditiis aperiam repellendus
        praesentium numquam ullam maxime, vel consequuntur est dolore tempore
        excepturi rerum ipsa perspiciatis?
      </TermsOfUseCollapse>
    </section>
  )
}

export default TermsOfUse

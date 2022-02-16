import { Flex, FormControl, useDisclosure } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { getStateOfAgreement, postAgreePetition } from '../../../utils/api'
import { AgreementTextArea, AgreementWriteButton } from './styles'
import { useNavigate } from 'react-router-dom'
import NeedLoginModal from '../../../components/NeedLoginModal'

const AgreementForm = ({ petitionId }: PetitionId): JSX.Element => {
  const [input, setInput] = useState<AgreePetition>({
    description: '청원에 동의합니다.',
  })
  const [isConsented, setIsConsented] = useState(false)
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput({ description: e.target.value })
  }
  const navigate = useNavigate()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await postAgreePetition(petitionId, input)
      if (response?.status === 401) {
        onOpen()
        console.log('로그인 해야함')
      } else if (response?.status || 500 < 401) {
        navigate(0)
        setIsConsented(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const checkAgreeByMe = async (id: string) => {
    try {
      const response = await getStateOfAgreement(id)
      setIsConsented(response?.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkAgreeByMe(petitionId)
  }, [petitionId])
  const { isOpen, onOpen, onClose } = useDisclosure()

  // postAgreePetition
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Flex h="60px">
            <AgreementTextArea
              rows={1}
              _focus={{ outline: 'none' }}
              onChange={handleChange}
            >
              청원에 동의합니다.
            </AgreementTextArea>
            <AgreementWriteButton
              _focus={{ outline: 'none' }}
              disabled={isConsented}
              type="submit"
              colorScheme={'none'}
            >
              {!isConsented ? '동의하기' : '동의완료'}
            </AgreementWriteButton>
          </Flex>
        </FormControl>
      </form>
      <NeedLoginModal disclosure={{ isOpen, onClose }}></NeedLoginModal>
    </>
  )
}

export default AgreementForm

import logo from '../../assets/img/logo_light.png'
import { Header, Inner, Logo, Logo__Image, Menu, ItemName } from './style'
import { getUsersMe } from '../../utils/api/getUsersMe'
import { setLogin, setLogout } from '../../redux/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useAppSelect } from '../../redux/store.hooks'
import { postLogout } from '../../utils/api/postLogout'

const NavBar = (): JSX.Element => {
  const dispatch = useDispatch()
  const isSessionValid = async () => {
    try {
      const status = await getUsersMe()
      if (status < 400) {
        dispatch(setLogin())
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = async () => {
    try {
      const status = await postLogout()
      console.log(status)
      dispatch(setLogout())
    } catch (error) {
      console.log(error)
    }
  }

  isSessionValid()
  return (
    <Header>
      <Inner>
        <Logo>
          <a href="/">
            <Logo__Image alt="logo" src={logo} />
          </a>
        </Logo>
        <Menu>
          <li className="item">
            <ItemName className="item__menu">
              <a href="/write">청원하기</a>
            </ItemName>
          </li>
          <li className="item">
            <ItemName className="item__menu">
              <a href="/posts">모든 청원</a>
            </ItemName>
          </li>
          <li className="item">
            <ItemName className="item__menu">나의 청원</ItemName>
          </li>
          <li className="item">
            <ItemName className="item__menu">
              {useAppSelect(select => select.auth.isAuthorized) ? (
                <a onClick={handleLogout}>로그아웃</a>
              ) : (
                <a href="/login">로그인</a>
              )}
            </ItemName>
          </li>
        </Menu>
      </Inner>
    </Header>
  )
}

export default NavBar

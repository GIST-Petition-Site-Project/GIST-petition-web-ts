import logo from '../../assets/img/new_logo.svg'
import { ReactComponent as MobMenuIcon } from '../../assets/img/menu_icon.svg'
import { Header, Logo, TopMenu, ItemName, MobMenuButton } from './styles'
import { useState } from 'react'
import { Divider, ListItem } from '@chakra-ui/react'
import MyMenu from './MyMenu'
import { Link } from 'react-router-dom'
import Inner from '../Inner'

const NavBar = (): JSX.Element => {
  const [opened, setOpened] = useState<boolean>(false)
  const closeMenu = () => {
    if (opened) {
      setOpened(!opened)
    }
  }

  return (
    <Header>
      <Inner>
        <Logo>
          <Link to="/" onClick={closeMenu}>
            <img alt="logo" src={logo} />
          </Link>
        </Logo>
        <TopMenu open={opened}>
          <div onClick={closeMenu}>
            <ListItem>
              <ItemName>
                <Link to="/write">청원하기</Link>
              </ItemName>
            </ListItem>
            <ListItem>
              <ItemName>
                <Link to="/petitions">모든 청원</Link>
              </ItemName>
            </ListItem>
            <ListItem>
              <ItemName>
                <Link to="/answer">답변된 청원</Link>
              </ItemName>
            </ListItem>
            <Divider></Divider>
            <ListItem>
              <MyMenu />
            </ListItem>
          </div>
        </TopMenu>
        <MobMenuButton
          colorScheme={'black'}
          onClick={() => {
            setOpened(!opened)
          }}
          display={{ base: 'block', md: 'none' }}
          open={opened}
        >
          <MobMenuIcon />
        </MobMenuButton>
      </Inner>
    </Header>
  )
}

export default NavBar

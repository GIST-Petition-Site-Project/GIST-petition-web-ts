import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getRetrieveAllPost } from '../../../utils/api/getRetrieveAllPost'
import posts from '../posts.json'
import {
  PetitionAgreement,
  PetitionCategory,
  PetitionDate,
  PetitionItem,
  PetitionSubject,
  PostsAgreement,
  PostsCategory,
  PostsDate,
  PostsHead,
  PostsHeadWrap,
  PostsSelect,
  PostsSubject,
  PostsText,
  PostsTitle,
} from './styles'

function PetitionList() {
  const [postList, setPostList] = useState([
    {
      accepted: 0,
      agreements: [
        {
          createdAt: '2022-01-13T04:51:16.369Z',
          userId: 0,
        },
      ],
      answered: true,
      category: 'string',
      createdAt: '2022-01-13T04:51:16.369Z',
      description: 'string',
      id: 0,
      title: 'string',
      updatedAt: '2022-01-13T04:51:16.369Z',
      userId: 0,
    },
  ])

  const getAllPost = async () => {
    try {
      const status = await getRetrieveAllPost()
      if (status[0] < 400) {
        setPostList(status[1])
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllPost()
  }, [])
  // const getAll
  return (
    <>
      <PostsTitle>
        <PostsText>모든 청원</PostsText>
        <PostsSelect
          placeholder="전체"
          defaultValue={'전체'}
          //width 바꾸면 button과 select창이 따로놀아
          w={'128px'}
        >
          <option value="기숙사">기숙사</option>
          <option value="학적">학적</option>
          <option value="취업">취업</option>
        </PostsSelect>
      </PostsTitle>

      <PostsHead>
        <PostsHeadWrap>
          <PostsCategory>분류</PostsCategory>
          <PostsSubject>제목</PostsSubject>
          <PostsDate>날짜</PostsDate>
          <PostsAgreement>참여인원</PostsAgreement>
        </PostsHeadWrap>
      </PostsHead>

      <ul>
        {postList.map(post => (
          <PetitionItem key={post.id}>
            <PetitionCategory>{post.category}</PetitionCategory>
            <PetitionSubject>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </PetitionSubject>
            <PetitionDate>{post.createdAt}</PetitionDate>
            <PetitionAgreement>{post.accepted}</PetitionAgreement>
          </PetitionItem>
        ))}
      </ul>
      <Outlet />
    </>
  )
}

export default PetitionList
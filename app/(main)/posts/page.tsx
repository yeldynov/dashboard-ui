import PostsTable from '@/components/posts/PostTable'
import BackButton from '@/components/BackButton'
import PostsPagination from '@/components/posts/PostPagination'

const PostsPage = () => {
  return (
    <>
      <BackButton text='Go Back' link='/' />
      <PostsTable />
      <PostsPagination />
    </>
  )
}

export default PostsPage

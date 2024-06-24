import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '@/components/ui/table'
import Link from 'next/link'
import posts from '@/data/posts'
import { Post } from '@/types/posts'

interface PostTableProps {
  limit?: number
  title?: string
}

const PostsTable = ({ limit, title }: PostTableProps) => {
  return (
    <div className='mt-10'>
      <h3 className='mb-4 text-2xl font-semibold'>{title ? title : 'Posts'}</h3>
      <Table>
        <TableCaption>A list of recent posts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className='hidden md:table-cell'>Author</TableHead>
            <TableHead className='hidden text-right md:table-cell'>
              Date
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className='font-medium'>{post.title}</TableCell>
              <TableCell className='hidden md:table-cell'>
                {post.author}
              </TableCell>
              <TableCell className='hidden text-right md:table-cell'>
                {post.date}
              </TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <button className='px-4 py-2 text-xs font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default PostsTable

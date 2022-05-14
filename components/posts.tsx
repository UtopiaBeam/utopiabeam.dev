import { Post } from '../utils'
import Card from './card'

interface Props {
  posts: Post[]
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map(post => (
        <Card
          key={`card-${post.sys.id}`}
          {...post}
          date={post.sys.firstPublishedAt}
          url={`/blog/${post.slug}`}
          tags={post.tagsCollection.items.map(t => t.name)}
        />
      ))}
    </div>
  )
}

export default Posts

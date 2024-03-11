const dummy = (blogs) => {
  // ...
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((acc, blog) => acc + blog.likes, 0)
}

// finds out which blog has the most likes
const favoriteBlog = (blogs) => {
  if (!blogs?.length) return []
  const { _id, url, __v, ...keepAttrs } = blogs
    .reduce((acc, blog) => {
      return (acc.likes > blog.likes ? acc : blog)
    }, blogs[0])
  return keepAttrs
}

// returns the author who has the largest amount of blogs
const mostBlogs = (blogs) => {
  if (!blogs?.length) return []
  const authors = blogs.reduce((authorCount, blog) => {
    authorCount[blog.author] = (authorCount[blog.author] || 0) + 1
    return authorCount
  }, {})
  const maxBlog = Math.max(...Object.values(authors))
  const authorWithMaxBlog = Object.entries(authors).filter((author) => author[1] === maxBlog)[0]
  return {
    'author': authorWithMaxBlog[0],
    'blogs': authorWithMaxBlog[1]
  }
}

// returns the author whose blog posts have the largest amount of likes
const mostLikes = (blogs) => {
  if (!blogs?.length) return []
  const authors = blogs.reduce((authorCount, blog) => {
    authorCount[blog.author] = (authorCount[blog.author] || 0) + blog.likes
    return authorCount
  }, {})
  const maxLikes = Math.max(...Object.values(authors))
  const authorWithMaxLikes = Object.entries(authors).filter((author) => author[1] === maxLikes)[0]
  return {
    'author': authorWithMaxLikes[0],
    'likes': authorWithMaxLikes[1]
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helpers')

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }
]


test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: 'id0',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    }
  ]

  const listWithTwoBlog = [
    {
      _id: 'id1',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    },
    {
      _id: 'id2',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 2,
      __v: 0
    }
  ]
  test('when list has no blog, equals zero like', () => {
    const result = listHelper.totalLikes([])
    assert.strictEqual(result, 0)
  })

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 5)
  })

  test('when list has two blogs, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithTwoBlog)
    assert.strictEqual(result, 7)
  })
})


describe('favorite blog', () => {

  test('when list has many entries, return the blog with most like', () => {
    assert.deepStrictEqual(listHelper.favoriteBlog(blogs),
      {
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        likes: 12
      }
    )
  })

  test('when list is empty or null, return empty', () => {
    assert.deepEqual(listHelper.favoriteBlog(null), [])
    assert.deepEqual(listHelper.favoriteBlog([]), [])
  })

})


describe('most blog', () => {

  test('when list has many entries, return the author with most blog', () => {
    assert.deepStrictEqual(listHelper.mostBlogs(blogs),
      {
        author: "Robert C. Martin",
        blogs: 3
      }
    )
  })

  test('when list is empty or null, return empty', () => {
    assert.deepEqual(listHelper.mostBlogs(null), [])
    assert.deepEqual(listHelper.mostBlogs([]), [])
  })

})

describe('max likes', () => {

  test('when list has many entries, return the author with most likes', () => {
    assert.deepStrictEqual(listHelper.mostLikes(blogs),
      {
        author: "Edsger W. Dijkstra",
        likes: 17
      }
    )
  })

  test('when list is empty or null, return empty', () => {
    assert.deepEqual(listHelper.mostLikes(null), [])
    assert.deepEqual(listHelper.mostLikes([]), [])
  })

})
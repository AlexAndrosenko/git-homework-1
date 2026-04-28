/* eslint-env jest */
const axios = require('axios')
const baseURL = 'https://jsonplaceholder.typicode.com'

test('checking resource', async () => {
    const response = await axios.get(`${baseURL}/posts/1`)

    expect(response.status).toBe(200)
    expect(response.data).toHaveProperty('id', 1)
})

test('users check', async () => {
    const response = await axios.get(`${baseURL}/users`)
    const users = response.data

    expect(Array.isArray(users)).toBe(true)
    expect(users.length).toBeGreaterThan(0)
    expect(users[0]).toHaveProperty('name')
    const lastIndex = users.length - 1
    expect(users[lastIndex]).toHaveProperty('name')
})

test('post create', async () => {
    const newPost = {
        title: 'Hot news post',
        body: 'Breaking neeews!!!!',
        userId: 1,
    }

    const response = await axios.post(`${baseURL}/posts`, newPost)
    expect(response.status).toBe(201)

    expect(response.data.title).toBe(newPost.title)
    expect(response.data.body).toBe(newPost.body)
    expect(response.data.userId).toBe(newPost.userId)

    expect(response.data).toHaveProperty('id')
    console.log('Post ID:', response.data.id)
})

test('post update', async () => {
    const updatedTitle = {
        title: 'Supa dupa title',
    }

    const response = await axios.patch(`${baseURL}/posts/1`, updatedTitle)

    expect(response.status).toBe(200)

    expect(response.data.title).toBe(updatedTitle.title)

    expect(response.data).toHaveProperty('body')
    expect(response.data).toHaveProperty('userId')
    expect(response.data.id).toBe(1)
})

test('delete post', async () => {
    const response = await axios.delete(`${baseURL}/posts/1`)

    expect(response.status).toBe(200)

    expect(response.data).toEqual({})
})

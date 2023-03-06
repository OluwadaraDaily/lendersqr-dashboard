const baseUrl = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1`

export const getAllUsers = async () => {
  const response = await fetch(`${baseUrl}/users`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })

  return await response.json()
}

export const getUser = async (id) => {
  const response = await fetch(`${baseUrl}/users/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  return await response.json()
}
import React, { useState } from 'react'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './api'

function App() {
  const [users, setUsers] = useState(api.users.fetchAll())

  return (
    <div>
      <SearchStatus number={users.length} />
      <Users users={users} />
    </div>
  )
}

export default App

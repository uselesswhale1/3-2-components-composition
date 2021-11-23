import Qualities from './qualities'
import Bookmark from './bookmark'
import React, { useState } from 'react'

const User = ({ user }) => {
  const handleDelete = (userId) => {
    console.log('hi', userId)
  }
  const [bookmark, setBookmark] = useState(0)
  const onToggleBookMark = (id) => {
    console.log(id)
    bookmark ? (
      <Bookmark status={setBookmark(0)} />
    ) : (
      <Bookmark status={setBookmark(1)} />
    )
  }

  return (
    <>
      <tr>
        <td>{user.name}</td>
        <td>
          <Qualities qualities={user.qualities} />
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}/5</td>
        <td>
          <button
            onClick={() => {
              handleDelete(user._id)
            }}
            className="btn bg-danger"
          >
            Delete
          </button>
        </td>
        <td>
          <Bookmark
            status={bookmark}
            onClick={() => onToggleBookMark(user._id)}
          />
        </td>
      </tr>
    </>
  )
}

export default User

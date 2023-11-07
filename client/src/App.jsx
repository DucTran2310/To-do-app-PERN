import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import ListHeaders from './components/ListHeaders'
import ListItem from './components/ListItem'
import Auth from './components/Auth'

const App = () => {
  const [tasks, setTasks] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const authToken = cookies.AuthToken
  const userEmail = cookies.Email

  const getData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URI}/todos/${userEmail}`,)
      if (response.status === 200) {
        const json = await response.json()
        setTasks(json)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => getData, [])

  console.log(tasks)

  //Sort by date
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && 
        <>
        <ListHeaders listName={'🏝️ Holiday tick list'} getData={getData} />
        <p className="user-email">Welcome back {userEmail}</p>
      {sortedTasks?.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
        </>
      }
    </div>
  )
}

export default App
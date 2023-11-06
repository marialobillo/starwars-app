import { useParams } from 'react-router-dom'
import Menu from '../components/Menu'
import { useState, useEffect } from 'react'
import { getPerson } from '../api'


const Profile = () => {
  const { id } = useParams()
  const [person, setPerson] = useState<any>({})

  useEffect(() => {

    const fetchPerson = async () => {
      const data = await getPerson(id)
      setPerson(data)
    }
    fetchPerson()
  }, [])

  console.log('person', person)
  return (
    <div className="bg-black">
      <Menu />
      <div className="rounded-xl bg-black w-2/4 mx-auto p-8">
        {person && (
          <div className="flex flex-col mx-0 items-center justify-center text-cyan-300 gap-2">
            <p className="text-3xl">{person.name}</p>
            <p>Gender: {person.gender}</p>
            <p>Height: {person.height}</p>
            <img 
             className="rounded-xl shadow-cyan-400 shadow-lg hover:shadow-2lg"
           src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" />
          </div>
          
        )}
       
        
      </div>
      
      </div>
  )
}

export default Profile
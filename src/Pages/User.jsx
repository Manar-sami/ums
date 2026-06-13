import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

function User() {

  const getusers=async()=>{
  
      const data= await axios.get('https://ums12.runasp.net/api/users');
      console.log(data.data);
      return data.data;
  }
   
 const { data, isLoading, isError } = useQuery({
    queryKey:['users'],
    queryFn:getusers,
    staleTime:1000*60*5,

  })
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <h1>Error...</h1>
  }

  return (
    <>
  
  <div className="bg-white border border-gray-200 rounded-xl p-6">

    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <span className="text-base font-medium">All users</span>
        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full usernum"></span>
      </div>
      <button className="px-3 py-1.5 text-xs bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer">
        + Add
      </button>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse ">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-3 py-2.5 border-b border-gray-100 w-10">#</th>
            <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-3 py-2.5 border-b border-gray-100">Name</th>
            <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-3 py-2.5 border-b border-gray-100">Email</th>
            <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-3 py-2.5 border-b border-gray-100 w-16">Age</th>
            <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-3 py-2.5 border-b border-gray-100">Actions</th>
          </tr>
        </thead>
        <tbody className="user">

         
      {data.users.map((user)=>(

         <tr className="hover:bg-gray-50 transition">
            <td className="px-3 py-3 text-gray-400 border-b border-gray-100">{user.id}</td>
            <td className="px-3 py-3 font-medium border-b border-gray-100">{user.name}</td>
            <td className="px-3 py-3 text-blue-500 border-b border-gray-100">{user.email}</td>
            <td className="px-3 py-3 border-b border-gray-100">{user.age}</td>
            <td className="px-3 py-3 text-gray-400 border-b border-gray-100">
              <div class="flex gap-1.5">
                <Link to={`/user-details/${user.id}`} class="px-2 py-1 text-xs border border-gray-200 rounded-md text-gray-500 hover:bg-gray-50 transition cursor-pointer">View</Link>
                <button class="px-2 py-1 text-xs border border-gray-200 rounded-md text-gray-500 hover:bg-gray-50 transition cursor-pointer">Edit</button>
                <button class="px-2 py-1 text-xs border border-red-100 rounded-md text-red-500 hover:bg-red-50 transition cursor-pointer">Delete</button>
              </div>
            </td>
            
          </tr>
      ))}
   

          

        </tbody>
      </table>
    </div>
  </div>
    </>
  )
}

export default User



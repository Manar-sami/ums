import axios from 'axios'
import { useQuery } from '@tanstack/react-query'


function User() {

  const getusers=async()=>{
  
      const data= await axios.get('http://ums12.runasp.net/api/users');
      console.log(data.data.users);
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
  
  <div class="bg-white border border-gray-200 rounded-xl p-6">

    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
        <span class="text-base font-medium">All users</span>
        <span class="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full usernum"></span>
      </div>
      <button class="px-3 py-1.5 text-xs bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer">
        + Add
      </button>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm border-collapse ">
        <thead>
          <tr class="bg-gray-50">
            <th class="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-3 py-2.5 border-b border-gray-100 w-10">#</th>
            <th class="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-3 py-2.5 border-b border-gray-100">Name</th>
            <th class="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-3 py-2.5 border-b border-gray-100">Email</th>
            <th class="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-3 py-2.5 border-b border-gray-100 w-16">Age</th>
            <th class="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-3 py-2.5 border-b border-gray-100">Actions</th>
          </tr>
        </thead>
        <tbody class="user">

         
      {data.users.map((user,index)=>(

         <tr class="hover:bg-gray-50 transition">
            <td class="px-3 py-3 text-gray-400 border-b border-gray-100">{user.id}</td>
            <td class="px-3 py-3 font-medium border-b border-gray-100">{user.name}</td>
            <td class="px-3 py-3 text-blue-500 border-b border-gray-100">{user.email}</td>
            <td class="px-3 py-3 border-b border-gray-100">{user.age}</td>
            <td class="px-3 py-3 text-gray-400 border-b border-gray-100">
             
            </td>
            <td class="px-3 py-3 border-b border-gray-100">
              <div class="flex gap-1.5">
                
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



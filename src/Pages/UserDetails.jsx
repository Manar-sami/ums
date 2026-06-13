import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();


  const getUserDetails = async () => {
    const response = await axios.get(`https://ums12.runasp.net/api/users/${id}`);
    console.log(response.data.data);
    return response.data.data;
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['userDetails', id],
    queryFn: getUserDetails,
    staleTime: 1000 * 60 * 5,
  })


  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>Error...</h1>
  }

  
  return (
<div class="bg-gray-50 min-h-screen p-8 font-sans text-gray-900">

  <Link to="/users" class="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition mb-6 cursor-pointer">
    <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Back to users
  </Link>

  <h1 class="text-xl font-medium mb-6">User details</h1>

  <div class="bg-white border border-gray-200 rounded-xl p-8 max-w-lg">

   
    <div class="flex justify-center mb-8">
      <div class="w-24 h-24 rounded-full bg-blue-50 border border-gray-200 overflow-hidden flex items-center justify-center">
        <svg class="w-10 h-10 text-blue-200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
      </div>
    </div>

  
    <div class="flex flex-col gap-4">

      <div class="flex flex-col gap-1">
        <span class="text-xs font-medium text-gray-400 uppercase tracking-wider">Name</span>
        <span class="text-sm text-gray-900 px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg">{data.name}</span>
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-xs font-medium text-gray-400 uppercase tracking-wider">Email</span>
        <span class="text-sm text-blue-500 px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg">{data.email}</span>
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-xs font-medium text-gray-400 uppercase tracking-wider">Age</span>
        <span class="text-sm text-gray-900 px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg">{data.age}</span>
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-xs font-medium text-gray-400 uppercase tracking-wider">Image</span>
        <span class="text-sm text-gray-400 px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg">{data.image}</span>
      </div>

    </div>

  </div>

</div>
  )
}

export default UserDetails;
import { useForm } from "react-hook-form";
import { useState } from "react";

function Create() {

    const{register,handleSubmit}=useForm();
    
    const createUser=()=>{
      console.log("user created");
    }
 
return (
   <>

   <form  onSubmit={handleSubmit(createUser)}  className="bg-white border border-gray-200 rounded-xl p-6">
    <h2 className="text-lg font-medium mb-4">Create new user</h2>
    <div className="flex flex-col gap-4">
        <label htmlFor="name">Name</label>

      <input type="text"id="name" placeholder="Name" className="px-3 py-2 border border-gray-200 
      rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("name")}/>

      <label htmlFor="email">Email</label>

      <input type="email"  id="email" placeholder="Email" className="px-3 py-2 border border-gray-200 
      rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("email")}/>

      <label htmlFor="age">Age</label>

      <input type="number"  id="age" placeholder="Age" className="px-3 py-2 border border-gray-200 
      rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("age")}/>

      <label htmlFor="image">Image URL</label>

      <input type="text" id="image" placeholder="Image URL" className="px-3 py-2 border border-gray-200
       rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("image")}/>

      <button type="submit" className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600
       transition cursor-pointer">
        Create User
      </button>
    </div>
  </form>
   </>
  )
}

export default Create;
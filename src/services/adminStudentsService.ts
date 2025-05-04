import {domainName} from "../App";
import Cookie from "js-cookie";



//     const token = Cookie.get("token"); 
//   const response = await fetch(`${domainName}admin/students`, {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//     },
//   });
//   console.log("token", token);  
//   console.log("response", response);
// console.log("hello");
//   if(response.ok)
//     {
//         return response;
//     }
//   if (!response.ok) {
//     throw new Error("Failed to fetch students");
//   }
// };

export const fetchStudents = async () => {
    const token = Cookie.get("token"); 
    const response = await fetch(`${domainName}admin/students`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch students");
    }
  
    const data = await response.json(); // ✅ parse JSON
    console.log("data", data.Studetns.users);
    return data.Studetns.users; // ✅ return the parsed data
    
  };
  
export const toggleStudentActive = async (id, active) => {
  const response = await fetch(`${domainName}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ active }),
  });

  if (!response.ok) {
    throw new Error("Failed to update student status");
  }
  return await response.json();
};

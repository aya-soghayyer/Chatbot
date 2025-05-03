import { useState, useEffect } from 'react';
import {domainName} from "../../App";
import Cookie from "js-cookie";

const useAdminGetCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(domainName);

    

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const token = Cookie.get("token");
                
                const response = await fetch(`${domainName}admin/courses`,
                    {
                      method: "GET", 
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                      }}
                    ); 
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                console.log(response);
                const data = await response.json();
                setCourses(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return { courses, loading, error };
};

export default useAdminGetCourses;
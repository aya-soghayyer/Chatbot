import { useEffect, useState, useCallback } from "react";
import Cookie from "js-cookie";
import { domainName } from "../../App";

const useAdminGetCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    try {
      const token = Cookie.get("token");
      const response = await fetch(`${domainName}admin/courses`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log("Courses data:", data); // Debugging line
      

      if (!response.ok) {
        throw new Error(data.detail || "Failed to fetch courses");
      }

      const parsedCourses = data.Courses?.courses || [];
      console.log(parsedCourses) // Assumes nested structure
      setCourses(parsedCourses);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return { courses, loading, error, refetch: fetchCourses };
};

export default useAdminGetCourses;

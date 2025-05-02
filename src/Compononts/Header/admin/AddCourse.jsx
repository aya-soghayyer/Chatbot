import React from 'react'
import SideBar from "../../ui/admin/SideBar";
import Header from "../../ui/admin/Header";
import { useState } from "react";

function AddCourse() {
    const [form, setForm] = useState({
        id: "",
        name: "",
        hours: "",
        teacher: "",
        time: "",
        days: {
          Sunday: false,
          Monday: false,
          Tuesday: false,
          Wednesday: false,
          Thursday: false,
        },
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
    
      const handleDayChange = (day) => {
        setForm({
          ...form,
          days: { ...form.days, [day]: !form.days[day] },
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        // Submit form logic here
      };
    
  return (
<>
<div className='flex gap-5 items-start'>
      <SideBar  />
      <Header>
      <div className="flex items-center  h-[33rem] justify-center">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg p-3 w-full max-w-md text-white"
      >
        <h2 className="text-2xl font-normal mb-6 text-center">Add new Course</h2>

        {["id", "name", "hours", "teacher", "time"].map((field) => (
          <div className="mb-4 flex" key={field}>
            <label className="flex mb-1 w-full capitalize">{`Course ${field}`}</label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white/40 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <div className="mb-6">
          <label className="block mb-2">Course days</label>
          <div className="grid grid-cols-3 gap-3 text-sm">
            {Object.keys(form.days).map((day) => (
              <label key={day} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.days[day]}
                  onChange={() => handleDayChange(day)}
                  className="accent-blue-400"
                />
                {day}
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-gradient-to-r from-gradientPurple to-gradientSkyBlue px-4 py-2 rounded-full text-white shadow hover:opacity-90"
          >
            Save course
          </button>
          <button
            type="button"
            onClick={() => console.log("Cancelled")}
            className="border border-white px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
      </Header>
    </div>
</>
)
}

export default AddCourse
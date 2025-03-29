
function ResetPassword() {
  return (
<>
    <div className="bg-darkBlue backdrop-blur-xl z-30 grid text-white p-6 w-1/3 rounded-xl items-center absolute -top-44 right-96">
        <h1 className="py-2 text-lg">Change Password</h1>
        <hr />
        <form className="grid justify-center items-center p-3">
            <label htmlFor="current">Current Password:</label>
            <input type="password" id="current" name="current" className="border p-3 2xl:p-5 h-12 md:h-10 2xl:h-14 w-full bg-slate-500/75 border-white rounded-md" required/>
            <label htmlFor="new">New Password:</label>
            <input type="password" id="new" name="new" required/>
            <label htmlFor="confirm">Confirm Password:</label>
            <input type="password" id="confirm" name="confirm" required/>
            <div className="flex gap-4 py-5">
                <button className="px-8 rounded-xl font-extralight bg-gradient-to-r from-gradientPurple to-gradientSkyBlue">Save</button>
                <button className="px-8 rounded-xl font-extralight border">Cancel</button>
            </div>


        </form>
    </div>

    </>  )
}

export default ResetPassword
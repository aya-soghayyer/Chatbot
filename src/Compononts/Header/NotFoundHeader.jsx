import notFound from '../../assets/images/notFound.svg'

function NotFoundHeader() {
    return (
        <>
            <div className=' w-[50%] z-10 '>
                <img className=' ml-[10%] mt-[10%]' src={notFound} alt="Not Found photo" />
            </div>
        </>
    )
}

export default NotFoundHeader
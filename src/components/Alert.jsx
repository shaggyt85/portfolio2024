
const Alert = ({type, text}) => {
    return (
        <div className='absolute top-16 left-0 right-0 flex justify-center items-center'>
            <div className={`${type === 'danger' ? 'bg-red-700' : 'bg-blue-700'} p-2 text-indigo-100 leading-none rounded-full flex lg:inline-flex`} role="alert">
                <p className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} flex items-center rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}>{type === 'danger' ? 'Failed' : 'Success'}</p>
                <p className="m-2 text-left">{text}</p>
            </div>
        </div>
    )
}

export default Alert
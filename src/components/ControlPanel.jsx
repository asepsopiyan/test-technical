import Equipment from "./Equipment"


const ControlPanel = () => {
    return (
        <div className={`col-span-1 bg-gray-500 w-20 flex items-center justify-center`}>
            <div className='flex-col'>
                <div className='flex gap-4 flex-wrap'>
                    <Equipment equipName={"Control Panel"} />
                </div>
            </div>
        </div>
    )
}

export default ControlPanel
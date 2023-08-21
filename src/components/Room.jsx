
import Equipment from './Equipment';

const Room = ({ name, size }) => {


    return (
        <div className={`bg-gray-500 h-64 flex items-center justify-center p-2`}>
            <div className='flex-col'>
                <h1 className='mb-4'>{name}</h1>
                <div className='flex gap-4 flex-wrap'>
                    <Equipment equipName={"Lampu1"} />
                    <Equipment equipName={"Lampu2"} />
                    <Equipment equipName={"AC"} />
                    <Equipment equipName={"Stop Kontak"} />
                </div>
            </div>
        </div>
    );
};

export default Room;

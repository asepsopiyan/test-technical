import React from 'react';
import ControlPanel from '../components/ControlPanel';
import Room from '../components/Room';


const Dashboard = () => {
    return (
        <div className="border border-4 p-2 border-black">
            <div className="grid grid-cols-2 gap-4">

                <div className="col-span-2">
                    <Room name="Ruang Tamu" />
                </div>

                <div className="col-span-1">
                    <Room name="Kamar Mandi" />
                </div>

                <div className="col-span-1 grid grid-cols-1 gap-4">
                    <div className="flex-1">
                        <Room name="Kamar Tidur" />
                    </div>
                    <div className="flex-1">
                        <Room name="Kamar Tidur" />
                    </div>
                </div>

                <ControlPanel />

            </div>
        </div>
    );
}

export default Dashboard;

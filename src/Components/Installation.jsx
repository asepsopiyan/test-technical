/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import datas from '../utils/data';

function Installation() {
  const [formData, setFormData] = useState({
    roomId: '',
    equipmentId: '',
    equipmentName: '',
    qty: 0,
    status: 'OFF',
  });
  const [submittedDataList, setSubmittedDataList] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'equipmentId') {
      const selectedRoom = datas.room.find((room) => room.id === parseInt(formData.roomId));
      const selectedEquipment = selectedRoom?.equipment.find((equipment) => equipment.id === parseInt(value));
      setFormData((prevData) => ({
        ...prevData,
        equipmentId: value,
        equipmentName: selectedEquipment ? selectedEquipment.name_equipment : '',
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedRoom = datas.room.find((room) => room.id === parseInt(formData.roomId));
    const roomName = selectedRoom ? selectedRoom.room_name : 'Unknown Room';

    setSubmittedDataList((prevDataList) => [...prevDataList, {...formData, roomName}]);
    setFormData({
      roomId: '',
      roomName: '',
      equipmentId: '',
      equipmentName: '',
      qty: 0,
      status: 'OFF',
    });

    console.log(formData)
  };

  return (
    <div>
      <h2 className='sub-title'>Add Property for Room</h2>
      <form onSubmit={handleSubmit}>
        <div className='room-input'>
          <label htmlFor="roomId">Room:</label>
          <select
            id="roomId"
            name="roomId"
            value={formData.roomId}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a room</option>
            {datas.room.map((room) => (
              <option key={room.id} value={room.id}>
                {room.room_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="equipmentId">Equipment:</label>
          <select
            id="equipmentId"
            name="equipmentId"
            value={formData.equipmentId}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an equipment</option>
            {datas.room.find((room) => room.id === parseInt(formData.roomId, 10))
              ?.equipment.map((equipment) => (
                <option
                  key={`${formData.roomId}-${equipment.id}`}
                  value={equipment.id}
                >
                  {equipment.name_equipment}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="qty">Quantity:</label>
          <input
            type="number"
            id="qty"
            name="qty"
            value={formData.qty}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='status-input'>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="OFF">OFF</option>
            <option value="ON">ON</option>
          </select>
        </div>
        <div>
          <button type="submit" className='add-property'>Add Property</button>
        </div>
      </form>

      {submittedDataList.length > 0 && (
        <div className='submitted-data'>
          <h3>Submitted Data List</h3>
          <ul>
            {submittedDataList.map((data, index) => (
              <li key={index}>
                <p>Room: {data.roomName}</p>
                <p>Equipment: {data.equipmentName}</p>
                <p>Quantity: {data.qty}</p>
                <p>Status: {data.status}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Installation;

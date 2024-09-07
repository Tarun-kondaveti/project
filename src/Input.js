import React, { useState } from 'react';
import styles from './Input.module.css';
import { Link } from 'react-router-dom';

const Input = () => {
    const [formData, setFormData] = useState({
        mineName: '',
        mineType: '',
        mineSize: '',
        location: '',
        excavationEquipmentType: '',
        excavationNumEquipment: '',
        excavationHours: '',
        transportVehicleType: '',
        transportNumVehicles: '',
        transportDistance: '',
        equipmentType: '',
        equipmentNumEquipment: '',
        equipmentHours: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // You can handle form submission here
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h2 className={styles.head2}> Mine Details</h2>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Mine Name:</label>
                    <input
                        type="text"
                        name="mineName"
                        value={formData.mineName}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Mine Type (Underground/Open-cast):</label>
                    <input
                        type="text"
                        name="mineType"
                        value={formData.mineType}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Mine Size:</label>
                    <input
                        type="text"
                        name="mineSize"
                        value={formData.mineSize}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Location (State or Region):</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>

                <h2 className={styles.head2}>Activity-wise Data</h2>
                <h3 className={styles.head2}>Excavation</h3>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Type of Equipment Used (Diesel/Electric):</label>
                    <input
                        type="text"
                        name="excavationEquipmentType"
                        value={formData.excavationEquipmentType}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Number of Equipment:</label>
                    <input
                        type="number"
                        name="excavationNumEquipment"
                        value={formData.excavationNumEquipment}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Operating Hours per Day:</label>
                    <input
                        type="number"
                        name="excavationHours"
                        value={formData.excavationHours}
                        onChange={handleChange}
                    />
                </div>

                <h3 className={styles.head2}>Transportation</h3>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Type of Vehicles Used (Diesel/Electric):</label>
                    <input
                        type="text"
                        name="transportVehicleType"
                        value={formData.transportVehicleType}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Number of Vehicles:</label>
                    <input
                        type="number"
                        name="transportNumVehicles"
                        value={formData.transportNumVehicles}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Distance Traveled per Day (km):</label>
                    <input
                        type="number"
                        name="transportDistance"
                        value={formData.transportDistance}
                        onChange={handleChange}
                    />
                </div>

                <h3 className={styles.head2}>Equipment Usage</h3>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Type of Equipment (Generators/Pumps):</label>
                    <input
                        type="text"
                        name="equipmentType"
                        value={formData.equipmentType}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Number of Equipment:</label>
                    <input
                        type="number"
                        name="equipmentNumEquipment"
                        value={formData.equipmentNumEquipment}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Operating Hours per Day:</label>
                    <input
                        type="number"
                        name="equipmentHours"
                        value={formData.equipmentHours}
                        onChange={handleChange}
                    />
                </div>

                <Link to="/emission"><button type="submit" className={styles.submitButton}>Submit</button></Link>
            </form>
        </div>
    );
};

export default Input;

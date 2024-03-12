import React, { useState } from 'react';

const MyForm = () => {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
   
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        
        <form>
            <label htmlFor="password">Enter Student ID's</label>
            <div class="input-group mb-3">
                <input
                    type={showPassword ? 'text' : 'password'}
                    class="form-control" id="deleteStudent"
                    value={password}
                    placeholder="Student id's"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span class="input-group-text bg-warning p-0 m-0" id="basic-addon2">
                    <button className='btn  btn-sm' type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? 'Hide' : 'Show'} ID's
                    </button></span>
            </div>
        </form>
    );
};

export default MyForm;

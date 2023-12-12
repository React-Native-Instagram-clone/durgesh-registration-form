import { useState } from 'react';
import Input from './components/Input';
import { FaUser, FaEnvelope, FaLock, FaMapMarkerAlt, FaBirthdayCake, FaMobileAlt } from 'react-icons/fa';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
    age: '',
    dob: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className='circle bottom-left'></div>
      <div className='circle top-right'></div>
      <div className='glassomorphic-form'>
        <h2 className="mb-2">User Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Reusable Input components */}
          <Input
            icon={FaUser}
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter your username"
          />

          <Input
            icon={FaEnvelope}
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <Input
            icon={FaLock}
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />

          <Input
            icon={FaMapMarkerAlt}
            label="Address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter your address"
          />

          <Input
            icon={FaBirthdayCake}
            label="Age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            placeholder="Enter your age"
          />

          <Input
            icon={FaBirthdayCake}
            label="Date of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            placeholder="Select your date of birth"
          />

          <Input
            icon={FaMobileAlt}
            label="Mobile Number"
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            placeholder="Enter your mobile number"
          />
          <button type="submit" className="btn btn-primary mt-2">
            Register
          </button>
        </form>
      </div>
    </>

  );
}

export default App;

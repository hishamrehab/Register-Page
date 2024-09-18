import './App.css'
import { useForm } from "react-hook-form";
import { IoMdArrowDropdown } from "react-icons/io";
import React, { useState } from "react";
import CountryOptions from './countryOptions';
function App() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCompanySizeOpen, setIsCompanySizeOpen] = useState(false);


  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
  };



  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCountryDropdownToggle = () => {
    setIsCountryDropdownOpen(!isCountryDropdownOpen);
  };

  const handleServicesDropdownToggle = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };



  const handleCompanySizeToggle = () => {
    setIsCompanySizeOpen(!isCompanySizeOpen);
  };


  return (
    <div className='form-content container'>
      <h1 className='form-heading'>
        <span className='let'>LET’S </span>
        <span className='get'>GET</span>
        <span className='intocuh'>in TOUCH</span></h1>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-content">

          <div className='form-content-right'>

            {/* Full Name */}
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                {...register("fullName", { required: "Full Name is required" })}
              />
              {errors.fullName && <p>{errors.fullName.message}</p>}
              {console.log(errors.fullName)}
            </div>



            {/* Job Title */}
            <div className="form-group">
              <label>Job Title</label>

              <div className="dropdown-wrapper" onClick={handleDropdownToggle}>
                <select
                  {...register("jobTitle", { required: "Job Title is required" })}
                  onBlur={() => setIsDropdownOpen(false)}
                  onFocus={() => setIsDropdownOpen(true)}
                  className='selectItems'

                >
                  <option value="" disabled selected hidden>
                  </option>
                  <option value="business owner" className="dropdown-option">
                    <span c>
                      Business Owner
                    </span>
                  </option>
                  <option value="marketing manager" className="dropdown-option custom-dropdown">Marketing Manager</option>
                  <option value="financial manager" className="dropdown-option">Financial Manager</option>
                  <option value="export manager" className="dropdown-option">Export Manager</option>
                  <option value="sales manager" className="dropdown-option">Sales Manager</option>
                </select>


                <IoMdArrowDropdown
                  className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
                  color={isDropdownOpen ? "#E9C568" : "#FFFFFF"}
                />
              </div>

              {errors.jobTitle && <p>{errors.jobTitle.message}</p>}
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            {/* Sector */}
            <div className="form-group">
              <label>Your Sector</label>
              <input
                type="text"
                {...register("sector", { required: "Sector is required" })}
              />
              {errors.sector && <p>{errors.sector.message}</p>}
            </div>

          </div>

          <div className='form-content-left'>
            {/* Phone Number */}
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                {...register("phoneNumber", { required: "Phone number is required" })}
              />
              {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            </div>


            {/* Country */}

            <div className="form-group">
              <label>Country</label>
              <div className="dropdown-wrapper" onClick={handleCountryDropdownToggle}>
                <select
                  {...register("country", { required: "Country is required" })}
                  onBlur={() => setIsDropdownOpen(false)}
                  onFocus={() => setIsDropdownOpen(true)}
                  className=' selectItems '

                >
                  <option value="" disabled selected hidden>
                  </option>
                  <CountryOptions />
                </select>


                <IoMdArrowDropdown
                  className={`dropdown-arrow ${isCountryDropdownOpen ? 'open' : ''}`}
                  color={isCountryDropdownOpen ? "#E9C568" : "#FFFFFF"}
                />
              </div>
              {errors.country && <p>{errors.country.message}</p>}
            </div>


            {/* Services Type */}

            <div className="form-group">
              <label>Services Type</label>
              <div className="dropdown-wrapper" onClick={handleServicesDropdownToggle}>
                <select
                  {...register("servicesType", { required: "Services Type is required" })}
                  className=' selectItems'
                >

                  <option value="" disabled selected hidden ></option>
                  <option value="Web Design" className="dropdown-option">Select service type</option>
                  <option value="Web Design" className="dropdown-option">Web Design</option>
                  <option value="Business Services" className="dropdown-option">

                    Business Services </option>
                </select>

                <IoMdArrowDropdown
                  className={`dropdown-arrow ${isServicesDropdownOpen ? 'open' : ''}`}
                  color={isServicesDropdownOpen ? "#E9C568" : "#FFFFFF"}
                />

              </div>
              {errors.servicesType && <p>{errors.servicesType.message}</p>}
            </div>


            {/* Company Size */}


            <div className="form-group">
              <label>Company Size</label>
              <div className="dropdown-wrapper" onClick={handleCompanySizeToggle}>
                <select {...register("companySize", { required: "Company size is required" })} className=' selectItems'>
                  <option value="" disabled selected hidden></option>
                  <option value="Small" className="dropdown-option">Small</option>
                  <option value="Medium" className="dropdown-option">Medium</option>
                  <option value="Large" className="dropdown-option">Large</option>
                </select>

                <IoMdArrowDropdown
                  className={`dropdown-arrow ${isCompanySizeOpen ? 'open' : ''}`}
                  color={isCompanySizeOpen ? "#E9C568" : "#FFFFFF"}
                />
                {errors.companySize && <p>{errors.companySize.message}</p>}
              </div>
            </div>

          </div>





          <div className="form-group" style={{
            margin: "auto"
          }}>
            <label>Preferred Call Time</label>
            <input
              type="time"
              {...register("preferredCallTime", { required: false })}
            />
          </div>

        </div>
        <div className='checkboxContainer' >
          <label className='AgreeTerms'>
            <input
              type="checkbox"
              {...register("agreeTerms", { required: "You must agree to the terms" })}
              className='checkbox'
            />
            <span>Agree to the terms and conditions</span>
          </label>
          {errors.agreeTerms && <p>{errors.agreeTerms.message}</p>}
        </div>

        <button className='submitButton' type="submit">Send</button>
      </form>

    </div>
  );
}

export default App;
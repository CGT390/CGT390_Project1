import { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import "./Apply.css";

const Apply = () => {
  // Form state variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [position, setPosition] = useState("");
  const [availability, setAvailability] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  });
  const [shiftPreference, setShiftPreference] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [startDate, setStartDate] = useState("");
  const [previousExperience, setPreviousExperience] = useState("");
  const [whyWorkHere, setWhyWorkHere] = useState("");
  const [references, setReferences] = useState("");
  const [hasTransportation, setHasTransportation] = useState("");
  const [isOver18, setIsOver18] = useState("");

  const handleAvailabilityChange = (day) => {
    setAvailability(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Collect all form data
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      dateOfBirth,
      position,
      availability,
      shiftPreference,
      hoursPerWeek,
      startDate,
      previousExperience,
      whyWorkHere,
      references,
      hasTransportation,
      isOver18
    };

    console.log("Form submitted:", formData);
    
    // Show success notification
    alert("Thank you for your application! We'll review it and get back to you soon.");
    
    // Reset form
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCity("");
    setState("");
    setZipCode("");
    setDateOfBirth("");
    setPosition("");
    setAvailability({
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    });
    setShiftPreference("");
    setHoursPerWeek("");
    setStartDate("");
    setPreviousExperience("");
    setWhyWorkHere("");
    setReferences("");
    setHasTransportation("");
    setIsOver18("");
    
    // TODO: Handle form submission (send to backend, etc.)
  };

  return (
    <ContentWrapper>
      <Header text="Apply Now" />
      
      <div className="apply-container">
        <div className="apply-intro">
          <h2>Join the Gumby's Team!</h2>
          <p>
            We're always looking for enthusiastic team members to join our crew. 
            Fill out the application below and we'll get back to you as soon as possible.
          </p>
        </div>

        <form className="apply-form" onSubmit={handleSubmit}>
          
          {/* Personal Information */}
          <section className="form-section">
            <h3 className="section-title">Personal Information</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Street Address *</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="state">State *</label>
                <input
                  type="text"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code *</label>
                <input
                  type="text"
                  id="zipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth *</label>
              <input
                type="date"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Are you 18 years or older? *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="isOver18"
                    value="yes"
                    checked={isOver18 === "yes"}
                    onChange={(e) => setIsOver18(e.target.value)}
                    required
                  />
                  Yes
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="isOver18"
                    value="no"
                    checked={isOver18 === "no"}
                    onChange={(e) => setIsOver18(e.target.value)}
                    required
                  />
                  No
                </label>
              </div>
            </div>
          </section>

          {/* Position & Availability */}
          <section className="form-section">
            <h3 className="section-title">Position & Availability</h3>

            <div className="form-group">
              <label htmlFor="position">Position Applying For *</label>
              <select
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              >
                <option value="">Select a position</option>
                <option value="driver">Delivery Driver</option>
                <option value="cook">Pizza Cook</option>
                <option value="cashier">Cashier</option>
                <option value="shift-manager">Shift Manager</option>
                <option value="general">General Team Member</option>
              </select>
            </div>

            <div className="form-group">
              <label>Days Available to Work *</label>
              <div className="checkbox-group">
                {Object.keys(availability).map((day) => (
                  <label key={day} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={availability[day]}
                      onChange={() => handleAvailabilityChange(day)}
                    />
                    {day.charAt(0).toUpperCase() + day.slice(1)}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="shiftPreference">Shift Preference *</label>
              <select
                id="shiftPreference"
                value={shiftPreference}
                onChange={(e) => setShiftPreference(e.target.value)}
                required
              >
                <option value="">Select shift preference</option>
                <option value="morning">Morning (10am - 3pm)</option>
                <option value="afternoon">Afternoon (3pm - 8pm)</option>
                <option value="evening">Evening (8pm - Close)</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="hoursPerWeek">Desired Hours Per Week *</label>
              <select
                id="hoursPerWeek"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(e.target.value)}
                required
              >
                <option value="">Select hours</option>
                <option value="10-20">10-20 hours</option>
                <option value="20-30">20-30 hours</option>
                <option value="30-40">30-40 hours</option>
                <option value="40+">40+ hours</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="startDate">Available Start Date *</label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Do you have reliable transportation? *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="hasTransportation"
                    value="yes"
                    checked={hasTransportation === "yes"}
                    onChange={(e) => setHasTransportation(e.target.value)}
                    required
                  />
                  Yes
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="hasTransportation"
                    value="no"
                    checked={hasTransportation === "no"}
                    onChange={(e) => setHasTransportation(e.target.value)}
                    required
                  />
                  No
                </label>
              </div>
            </div>
          </section>

          {/* Experience & Additional Info */}
          <section className="form-section">
            <h3 className="section-title">Experience & Additional Information</h3>

            <div className="form-group">
              <label htmlFor="previousExperience">
                Previous Work Experience (especially in food service)
              </label>
              <textarea
                id="previousExperience"
                value={previousExperience}
                onChange={(e) => setPreviousExperience(e.target.value)}
                rows="4"
                placeholder="Please describe any relevant work experience..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="whyWorkHere">
                Why do you want to work at Gumby's? *
              </label>
              <textarea
                id="whyWorkHere"
                value={whyWorkHere}
                onChange={(e) => setWhyWorkHere(e.target.value)}
                rows="4"
                placeholder="Tell us why you'd be a great fit for our team..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="references">
                References (Name, Relationship, Phone Number)
              </label>
              <textarea
                id="references"
                value={references}
                onChange={(e) => setReferences(e.target.value)}
                rows="3"
                placeholder="List any professional or personal references..."
              />
            </div>
          </section>

          {/* Submit Button */}
          <div className="form-actions">
            <button type="submit" className="submit-button">
              Submit Application
            </button>
          </div>

        </form>
      </div>
    </ContentWrapper>
  );
};

export default Apply;
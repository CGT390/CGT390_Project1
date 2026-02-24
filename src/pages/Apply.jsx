import { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import "./Apply.css";

const Apply = () => {
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
    monday: false, tuesday: false, wednesday: false,
    thursday: false, friday: false, saturday: false, sunday: false
  });
  const [shiftPreference, setShiftPreference] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [startDate, setStartDate] = useState("");
  const [previousExperience, setPreviousExperience] = useState("");
  const [whyWorkHere, setWhyWorkHere] = useState("");
  const [references, setReferences] = useState("");
  const [hasTransportation, setHasTransportation] = useState("");
  const [isOver18, setIsOver18] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAvailabilityChange = (day) => {
    setAvailability(prev => ({ ...prev, [day]: !prev[day] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFirstName(""); setLastName(""); setEmail(""); setPhone("");
    setAddress(""); setCity(""); setState(""); setZipCode("");
    setDateOfBirth(""); setPosition("");
    setAvailability({ monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false });
    setShiftPreference(""); setHoursPerWeek(""); setStartDate("");
    setPreviousExperience(""); setWhyWorkHere(""); setReferences("");
    setHasTransportation(""); setIsOver18("");
  };

  return (
    <ContentWrapper>
      <Header text="Apply Now" />

      {showSuccess && (
        <div className="apply-overlay" onClick={() => setShowSuccess(false)}>
          <div className="apply-notification" onClick={e => e.stopPropagation()}>
            <div className="apply-notification-icon">✓</div>
            <h3>Application Submitted!</h3>
            <p>Thanks for applying! We'll review your application and be in touch soon.</p>
            <button className="apply-notification-close" onClick={() => setShowSuccess(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="apply-intro">
        <p className="apply-intro-label">Now Hiring</p>
        <h2 className="apply-intro-title">Join the Gumby's Team</h2>
        <p>
          We're always looking for enthusiastic team members to join our crew.
          Fill out the application below and we'll get back to you as soon as possible.
        </p>
      </div>

      <form className="apply-form" onSubmit={handleSubmit}>

        {/* Personal Information */}
        <section className="apply-section">
          <h3 className="apply-section-title">Personal Information</h3>

          <div className="apply-row">
            <div className="apply-group">
              <label className="apply-label" htmlFor="firstName">First Name *</label>
              <input className="apply-input" type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} required />
            </div>
            <div className="apply-group">
              <label className="apply-label" htmlFor="lastName">Last Name *</label>
              <input className="apply-input" type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} required />
            </div>
          </div>

          <div className="apply-row">
            <div className="apply-group">
              <label className="apply-label" htmlFor="email">Email *</label>
              <input className="apply-input" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="apply-group">
              <label className="apply-label" htmlFor="phone">Phone Number *</label>
              <input className="apply-input" type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} required />
            </div>
          </div>

          <div className="apply-group">
            <label className="apply-label" htmlFor="address">Street Address *</label>
            <input className="apply-input" type="text" id="address" value={address} onChange={e => setAddress(e.target.value)} required />
          </div>

          <div className="apply-row">
            <div className="apply-group">
              <label className="apply-label" htmlFor="city">City *</label>
              <input className="apply-input" type="text" id="city" value={city} onChange={e => setCity(e.target.value)} required />
            </div>
            <div className="apply-group">
              <label className="apply-label" htmlFor="state">State *</label>
              <input className="apply-input" type="text" id="state" value={state} onChange={e => setState(e.target.value)} required />
            </div>
            <div className="apply-group">
              <label className="apply-label" htmlFor="zipCode">ZIP Code *</label>
              <input className="apply-input" type="text" id="zipCode" value={zipCode} onChange={e => setZipCode(e.target.value)} required />
            </div>
          </div>

          <div className="apply-row">
            <div className="apply-group">
              <label className="apply-label" htmlFor="dateOfBirth">Date of Birth *</label>
              <input className="apply-input" type="date" id="dateOfBirth" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} required />
            </div>
            <div className="apply-group">
              <label className="apply-label">Are you 18 or older? *</label>
              <div className="apply-radio-group">
                <label className="apply-radio-label">
                  <input type="radio" name="isOver18" value="yes" checked={isOver18 === "yes"} onChange={e => setIsOver18(e.target.value)} required />
                  Yes
                </label>
                <label className="apply-radio-label">
                  <input type="radio" name="isOver18" value="no" checked={isOver18 === "no"} onChange={e => setIsOver18(e.target.value)} />
                  No
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Position & Availability */}
        <section className="apply-section">
          <h3 className="apply-section-title">Position &amp; Availability</h3>

          <div className="apply-row">
            <div className="apply-group">
              <label className="apply-label" htmlFor="position">Position Applying For *</label>
              <select className="apply-select" id="position" value={position} onChange={e => setPosition(e.target.value)} required>
                <option value="">Select a position</option>
                <option value="driver">Delivery Driver</option>
                <option value="cook">Pizza Cook</option>
                <option value="cashier">Cashier</option>
                <option value="shift-manager">Shift Manager</option>
                <option value="general">General Team Member</option>
              </select>
            </div>
            <div className="apply-group">
              <label className="apply-label" htmlFor="shiftPreference">Shift Preference *</label>
              <select className="apply-select" id="shiftPreference" value={shiftPreference} onChange={e => setShiftPreference(e.target.value)} required>
                <option value="">Select preference</option>
                <option value="morning">Morning (10am – 3pm)</option>
                <option value="afternoon">Afternoon (3pm – 8pm)</option>
                <option value="evening">Evening (8pm – Close)</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div className="apply-group">
            <label className="apply-label">Days Available *</label>
            <div className="apply-checkbox-grid">
              {Object.keys(availability).map(day => (
                <label key={day} className="apply-checkbox-label">
                  <input type="checkbox" checked={availability[day]} onChange={() => handleAvailabilityChange(day)} />
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div className="apply-row">
            <div className="apply-group">
              <label className="apply-label" htmlFor="hoursPerWeek">Desired Hours / Week *</label>
              <select className="apply-select" id="hoursPerWeek" value={hoursPerWeek} onChange={e => setHoursPerWeek(e.target.value)} required>
                <option value="">Select hours</option>
                <option value="10-20">10–20 hours</option>
                <option value="20-30">20–30 hours</option>
                <option value="30-40">30–40 hours</option>
                <option value="40+">40+ hours</option>
              </select>
            </div>
            <div className="apply-group">
              <label className="apply-label" htmlFor="startDate">Available Start Date *</label>
              <input className="apply-input" type="date" id="startDate" value={startDate} onChange={e => setStartDate(e.target.value)} required />
            </div>
          </div>

          <div className="apply-group">
            <label className="apply-label">Reliable transportation? *</label>
            <div className="apply-radio-group">
              <label className="apply-radio-label">
                <input type="radio" name="hasTransportation" value="yes" checked={hasTransportation === "yes"} onChange={e => setHasTransportation(e.target.value)} required />
                Yes
              </label>
              <label className="apply-radio-label">
                <input type="radio" name="hasTransportation" value="no" checked={hasTransportation === "no"} onChange={e => setHasTransportation(e.target.value)} />
                No
              </label>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="apply-section">
          <h3 className="apply-section-title">Experience &amp; Additional Info</h3>

          <div className="apply-group">
            <label className="apply-label" htmlFor="previousExperience">Previous Work Experience (especially food service)</label>
            <textarea
              className="apply-textarea"
              id="previousExperience"
              value={previousExperience}
              onChange={e => setPreviousExperience(e.target.value)}
              rows="4"
              placeholder="Describe any relevant work experience..."
            />
          </div>

          <div className="apply-group">
            <label className="apply-label" htmlFor="whyWorkHere">Why do you want to work at Gumby's? *</label>
            <textarea
              className="apply-textarea"
              id="whyWorkHere"
              value={whyWorkHere}
              onChange={e => setWhyWorkHere(e.target.value)}
              rows="4"
              placeholder="Tell us why you'd be a great fit..."
              required
            />
          </div>

          <div className="apply-group">
            <label className="apply-label" htmlFor="references">References (Name, Relationship, Phone)</label>
            <textarea
              className="apply-textarea"
              id="references"
              value={references}
              onChange={e => setReferences(e.target.value)}
              rows="3"
              placeholder="List any professional or personal references..."
            />
          </div>
        </section>

        <div className="apply-actions">
          <button type="submit" className="apply-submit">
            Submit Application
          </button>
        </div>

      </form>
    </ContentWrapper>
  );
};

export default Apply;
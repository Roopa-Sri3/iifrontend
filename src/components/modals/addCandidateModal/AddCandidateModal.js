import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { IsModalOpen, GetModalData } from '../../../store/selector/app/app';
import Modal from '../../core/modal/Modal';
import MultiSelect from '../../core/multiselect/multiselect';
import './AddCandidateModal.css';

const AddCandidateModal = () => {

  const IsAddCandidateModalOpen = useSelector(
    (state) => IsModalOpen(state, 'AddCandidateModal'),
  );
  const storeModalData = useSelector(GetModalData);

  const [fullName,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [mobileNumber,setMobileNumber] = useState('');
  const [yearsOfExperience,setYearsOfExperience] = useState('');
  const [selectedPrimarySkills, setSelectedPrimarySkills] = useState([]);
  const [selectedSecondarySkills, setSelectedSecondarySkills] = useState([]);
  const [rRNumber,setRRNumber] = useState('');

  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [yearsOfExperienceError, setYearsOfExperienceError] = useState('');
  const [
    selectedPrimarySkillsError,
    setSelectedPrimarySkillsError
  ] = useState('');
  const [
    selectedSecondarySkillsError,
    setSelectedSecondarySkillsError
  ] = useState('');

  const handlePrimarySkills = (selectedValues) => {
    setSelectedPrimarySkills(selectedValues);
  };
  const handleSecondarySkills = (selectedValues) => {
    setSelectedSecondarySkills(selectedValues);
  };

  const options = [
    {id:1, label:'Java', value:'Java'},
    {id:2, label:'Python', value:'Python'},
    {id:3, label:'C', value:'C'},
    {id:4, label:'C++', value:'C++'},
    {id:5, label:'PHP', value:'PHP'}
  ];

  useEffect(() => {
    if (storeModalData && storeModalData.mode === 'EDIT') {
      // Need to set the state with modal data.
    }
  }, [storeModalData]);

  const validateForm = () => {
    let isValid = true;
    if (!fullName) {
      setFullNameError('Please enter full name');
      isValid = false;
    }
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      setMobileNumberError('Enter valid number');
      isValid = false;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter email');
      isValid = false;
    }
    if (!yearsOfExperience || isNaN(yearsOfExperience) || yearsOfExperience < 0)
    {
      setYearsOfExperienceError('Please enter years of experience');
      isValid = false;
    }
    if(selectedPrimarySkills.length === 0){
      setSelectedPrimarySkillsError('Primary skill is required');
    }
    if(selectedSecondarySkills.length === 0){
      setSelectedSecondarySkillsError('Secondary skill is required');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    console.log('selectedPrimarySkills values:',selectedPrimarySkills);
    console.log('selectedSecondarySkills values:',selectedSecondarySkills);
    if (isValid) {
      console.log('Form is valid. Submitting...');
    } else {
      console.log('Form is invalid. Please correct the errors.');
    }
  };

  return (
    <div>
      <Modal
        show={IsAddCandidateModalOpen}
        size='modal-lg'
        modalHeader='Add Candidate'
      >
        <div className='container'>
          <form className='my-form' onSubmit={handleSubmit}>
            <div className='row'>
              <div className={cx('col-6','add-candidate-field')}>
                <label
                  htmlFor="fullName"
                  className='add-candidate-field-label-mandatory'
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className={`form-input ${fullNameError ?
                    'add-candidate-field-error' : ''}`}
                  placeholder='Candidate Name'
                  value={fullName}
                  onChange={(e) => {setFullName(e.target.value);
                    setFullNameError('');}}
                  autoComplete='off'
                  minLength="4"
                />
                {fullNameError &&
                <p className='validation-error'>{fullNameError}</p>}
              </div>
              <div className={cx('col-6','add-candidate-field')}>
                <label
                  htmlFor='email'
                  className='add-candidate-field-label-mandatory'
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className={`form-input ${emailError ?
                    'add-candidate-field-error' : ''}`}
                  placeholder='Candidate Email'
                  value={email}
                  onChange={(e) => {setEmail(e.target.value);
                    setEmailError('');}}
                  autoComplete='off'
                />
                {emailError && <p className='validation-error'>{emailError}</p>}
              </div>
            </div>
            <div className='row'>
              <div className={cx('col-6','add-candidate-field')}>
                <label
                  htmlFor="mobileNumber"
                  className='add-candidate-field-label-mandatory'
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobileNumber"
                  className={`form-input ${mobileNumberError ?
                    'add-candidate-field-error' : ''}`}
                  placeholder='Candidate Mobile'
                  value={mobileNumber}
                  onChange={(e) => {setMobileNumber(e.target.value);
                    setMobileNumberError('');}}
                  pattern="[0-9]{10}"
                  autoComplete='off'/>
                {mobileNumberError &&
                <p className='validation-error'>{mobileNumberError}</p>}
              </div>
              <div className={cx('col-6','add-candidate-field')}>
                <label
                  htmlFor="yearsOfExperience"
                  className='add-candidate-field-label-mandatory'
                >
                  Years of Experience
                </label>
                <input
                  type="text"
                  id="yearsOfExperience"
                  className={`form-input ${yearsOfExperienceError ?
                    'add-candidate-field-error' : ''}`}
                  placeholder='Candidate Experience'
                  value={yearsOfExperience}
                  onChange={(e) => {setYearsOfExperience(e.target.value);
                    setYearsOfExperienceError('');}}
                  autoComplete='off'
                  min='0'
                />
                {yearsOfExperienceError &&
                <p className='validation-error'>{yearsOfExperienceError}</p>}
              </div>
            </div>
            <div className='row'>
              <div className={cx('col-6','add-candidate-field')}>
                <label
                  htmlFor='primaryTechSkills'
                  className='add-candidate-field-label-mandatory'
                >
                  Primary Tech Skills
                </label>
                <MultiSelect
                  id="primaryTechSkills"
                  label=""
                  className={
                    `form-input ${selectedPrimarySkillsError ?
                      'add-candidate-field-error' : ''}`
                  }
                  options={options}
                  onChange={handlePrimarySkills}
                  maxSelection="1"
                  selectedValues={selectedPrimarySkills}
                />
                {selectedPrimarySkillsError &&
                <p className='validation-error'>
                  {selectedPrimarySkillsError}
                </p>}
              </div>
              <div className={cx('col-6','add-candidate-field')}>
                <label
                  htmlFor='secondaryTechSkills'
                  className='add-candidate-field-label-mandatory'
                >
                  Secondary Tech Skills
                </label>
                <MultiSelect
                  id="secondaryTechSkills"
                  label=""
                  className={
                    `form-input ${selectedSecondarySkillsError ?
                      'add-candidate-field-error' : ''}`
                  }
                  options={options}
                  onChange={handleSecondarySkills}
                  maxSelection="3"
                />
                {selectedSecondarySkillsError &&
                <p className='validation-error'>
                  {selectedSecondarySkillsError}
                </p>}
              </div>
            </div>
            <div className='row'>
              <div className={cx('col-6','add-candidate-field')}>
                <label htmlFor="rRNumber" className='add-candidate-field-label'>
                  RR#
                </label>
                <input
                  type="text"
                  id="rRNumber"
                  className="form-input"
                  value={rRNumber}
                  onChange={(e) => setRRNumber(e.target.value)}
                  autoComplete='off'
                  pattern="[0-9]{10}"
                />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddCandidateModal;

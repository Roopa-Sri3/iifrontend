import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import Modal from "../../core/modal/Modal";
import MultiSelect from "../../core/multiselect/multiselect";
import Checkbox from "../../core/checkbox/checkbox";
import AddCandidateModalHeader from "./AddCandidateModalHeader";
import AddCandidateModalActions from "./AddCandidateModalActions";
import {closeModal} from "../../../store/reducers/app/app";
import { IsModalOpen, GetModalData } from "../../../store/selector/app/app";
import { GetStoreSkills } from "../../../store/selector/dashboard/dashboard";
import "./AddCandidateModal.css";

const AddCandidateModal = ({
  handleAddOrEditCandidate = () => {}
}) => {
  const dispatch = useDispatch();
  const options = useSelector(GetStoreSkills);

  const IsAddCandidateModalOpen = useSelector(
    (state) => IsModalOpen(state, "AddCandidateModal"),
  );

  const storeModalData = useSelector(GetModalData);

  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [mobileNumber,setMobileNumber] = useState("");
  const [yearsOfExperience,setYearsOfExperience] = useState("");
  const [selectedPrimarySkills, setSelectedPrimarySkills] = useState([]);
  const [selectedSecondarySkills, setSelectedSecondarySkills] = useState([]);
  const [rRNumber,setRRNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isPrimarySkillSelected, setIsPrimarySkillSelected] = useState(false);

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [yearsOfExperienceError, setYearsOfExperienceError] = useState("");
  const [selectedPrimarySkillsError, setSelectedPrimarySkillsError] = useState("");
  const [selectedSecondarySkillsError, setSelectedSecondarySkillsError] = useState("");

  const handlePrimarySkills = (selectedValues) => {
    setSelectedPrimarySkills(selectedValues);
    setSelectedPrimarySkillsError("");
    setIsPrimarySkillSelected(selectedValues.length > 0);
  };

  const handleSecondarySkills = (selectedValues) => {
    setSelectedSecondarySkills(selectedValues);
  };

  useEffect(() => {
    if (storeModalData && storeModalData.mode === "EDIT") {
      const candidateData = {...storeModalData};
      setFullName(candidateData.fullName);
      setEmail(candidateData.email);
      setMobileNumber(candidateData.mobileNumber);
      setYearsOfExperience(candidateData.yearsOfExperience);
      setSelectedPrimarySkills(candidateData.selectedPrimarySkills);
      setIsPrimarySkillSelected(true);
      setSelectedSecondarySkills(candidateData.selectedSecondarySkills);
      setRRNumber(candidateData.rRNumber);
    }
    else {
      setFullName("");
      setEmail("");
      setMobileNumber("");
      setYearsOfExperience("");
      setSelectedPrimarySkills([]);
      setSelectedSecondarySkills([]);
      setRRNumber("");
    }
  }, [storeModalData]);

  const validateForm = () => {
    let isValid = true;
    if (!fullName) {
      setFullNameError("Please enter full name");
      isValid = false;
    }
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      setMobileNumberError("Enter valid number");
      isValid = false;
    }
    if (!email || !/^\S+@gmail.com/.test(email)) {
      setEmailError("Please enter email");
      isValid = false;
    }
    if (!yearsOfExperience || isNaN(yearsOfExperience) || yearsOfExperience < 0)
    {
      setYearsOfExperienceError("Please enter years of experience");
      isValid = false;
    }
    if(selectedPrimarySkills.length === 0){
      setSelectedPrimarySkillsError("Primary skill is required");
      isValid = false;
    }

    return isValid;
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setMobileNumber("");
    setYearsOfExperience("");
    setSelectedPrimarySkills([]);
    setSelectedSecondarySkills([]);
    setIsPrimarySkillSelected(false);
    setRRNumber("");
    setIsChecked(false);
    setFullNameError("");
    setEmailError("");
    setMobileNumberError("");
    setYearsOfExperienceError("");
    setSelectedPrimarySkillsError("");
    setSelectedSecondarySkillsError("");
  };

  const handleCloseModal = () => {
    resetForm();
    dispatch(closeModal());
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid){
      const formData = {
        fullName,
        email,
        mobileNo:mobileNumber,
        yearsOfExperience,
        primaryTechSkill : selectedPrimarySkills[0].value,
        secondaryTechSkill :
        selectedSecondarySkills.map(skill => skill.value),
        rrNo:rRNumber,
        shareLink:isChecked,
      };

      handleAddOrEditCandidate({
        ...formData,
        mode: storeModalData && storeModalData.mode,
        formData: console.log(JSON.stringify(formData)),
      });
      resetForm();
      dispatch(closeModal());
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Modal
        show={IsAddCandidateModalOpen}
        size='modal-lg'
        modalHeader={<AddCandidateModalHeader onClose={handleCloseModal} />}
      >
        <div className='container'>
          <form className='my-form' onSubmit={handleSubmit}>
            <div className='row'>
              <div className={cx("col-6","add-candidate-field")}>
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
                    "add-candidate-field-error" : ""}`}
                  placeholder='Candidate Name'
                  value={fullName || ""}
                  onChange={(e) => {setFullName(e.target.value);
                    setFullNameError("");}}
                  autoComplete='off'
                  minLength="4"
                />
                {fullNameError &&
                <p className='validation-error'>{fullNameError}</p>}
              </div>
              <div className={cx("col-6","add-candidate-field")}>
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
                    "add-candidate-field-error" : ""}`}
                  placeholder='Candidate Email'
                  value={email || ""}
                  onChange={(e) => {setEmail(e.target.value);
                    setEmailError("");}}
                  autoComplete='off'
                />
                {emailError && <p className='validation-error'>{emailError}</p>}
              </div>
            </div>
            <div className='row'>
              <div className={cx("col-6","add-candidate-field")}>
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
                    "add-candidate-field-error" : ""}`}
                  placeholder='Candidate Mobile'
                  value={mobileNumber  || ""}
                  onChange={(e) => {setMobileNumber(e.target.value);
                    setMobileNumberError("");}}
                  pattern="[0-9]{10}"
                  autoComplete='off'/>
                {mobileNumberError &&
                <p className='validation-error'>{mobileNumberError}</p>}
              </div>
              <div className={cx("col-6","add-candidate-field")}>
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
                    "add-candidate-field-error" : ""}`}
                  placeholder='Candidate Experience'
                  value={yearsOfExperience || ""}
                  onChange={(e) => {setYearsOfExperience(e.target.value);
                    setYearsOfExperienceError("");}}
                  autoComplete='off'
                  min='0'
                />
                {yearsOfExperienceError &&
                <p className='validation-error'>{yearsOfExperienceError}</p>}
              </div>
            </div>
            <div className='row'>
              <div className={cx("col-6","add-candidate-field")}>
                <label
                  htmlFor='primaryTechSkills'
                  className='add-candidate-field-label-mandatory'
                >
                  Primary Tech Skills
                </label>
                <MultiSelect
                  id="primaryTechSkills"
                  label=""
                  className={cx("form-input", {
                    "add-candidate-field-error": selectedPrimarySkillsError,
                  })}
                  options={options || []}
                  onChange={handlePrimarySkills}
                  maxSelection="1"
                  selectedValues={selectedPrimarySkills}
                  error={selectedPrimarySkillsError}
                />
                {selectedPrimarySkillsError &&
                <p className='validation-error'>
                  {selectedPrimarySkillsError}
                </p>}
              </div>
              <div className={cx("col-6","add-candidate-field")}>
                <label
                  htmlFor='secondaryTechSkills'
                  className={cx("add-candidate-field-label", {
                    "drop-box-header-disabled": !isPrimarySkillSelected,
                  })}
                >
                  Secondary Tech Skills
                </label>
                <MultiSelect
                  id="secondaryTechSkills"
                  label=""
                  className={
                    `form-input ${selectedSecondarySkillsError ?
                      "add-candidate-field-error" : ""}`
                  }
                  options={options || []}
                  onChange={handleSecondarySkills}
                  maxSelection="3"
                  selectedValues={selectedSecondarySkills}
                  disabled={!isPrimarySkillSelected}
                />
              </div>
            </div>
            <div className='row'>
              <div className={cx("col-6","add-candidate-field")}>
                <label htmlFor="rRNumber" className='add-candidate-field-label'>
                  RR#
                </label>
                <input
                  type="text"
                  id="rRNumber"
                  className="form-input"
                  value={rRNumber || ""}
                  onChange={(e) => setRRNumber(e.target.value)}
                  autoComplete='off'
                  pattern="[0-9]{10}"
                />
              </div>
            </div>
            {(storeModalData && storeModalData.mode !== "EDIT") && (
              <div className='row'>
                <div className='col-12'>
                  <Checkbox
                    id='mycheckbox'
                    label="Share link with candidate"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </div>
              </div>
            )}
          </form>
          <AddCandidateModalActions
            onSubmit={handleSubmit}
            validateForm={validateForm}
            isChecked={isChecked}
          />
        </div>
      </Modal>
    </div>
  );
};

export default AddCandidateModal;

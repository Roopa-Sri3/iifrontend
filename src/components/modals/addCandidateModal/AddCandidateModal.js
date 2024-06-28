import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import Modal from "../../core/modal/Modal";
import MultiSelect from "../../core/multiselect/multiselect";
import Checkbox from "../../core/checkbox/checkbox";
import AddCandidateModalHeader from "./AddCandidateModalHeader";
import AddCandidateModalActions from "./AddCandidateModalActions";
import {closeModal, setAlert, increaseCandidateTillDate } from "../../../store/reducers/app/app";
import { AddCandidate, EditCandidate } from "../../../store/reducers/dashboard/dashboard.js";
import { IsModalOpen, GetModalData } from "../../../store/selector/app/app";
import { GetStoreSkills } from "../../../store/selector/dashboard/dashboard";
import "./AddCandidateModal.css";

const AddCandidateModal = ({fetchCandidates}) => {
  const dispatch = useDispatch();
  const options = useSelector(GetStoreSkills);
  const IsAddCandidateModalOpen = useSelector(
    (state) => IsModalOpen(state, "AddCandidateModal"),
  );
  const storeModalData = useSelector(GetModalData);

  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [mobileNumber,setMobileNumber] = useState("");
  const [years,setYears] = useState("");
  const [months,setMonths] = useState("");
  const [selectedPrimarySkills, setSelectedPrimarySkills] = useState([]);
  const [selectedSecondarySkills, setSelectedSecondarySkills] = useState([]);
  const [rRNumber,setRRNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isPrimarySkillSelected, setIsPrimarySkillSelected] = useState(false);

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [yearsOfExperienceError, setYearsOfExperienceError] = useState("");
  const [monthsOfExperienceError, setMonthsOfExperienceError] = useState("");
  const [selectedPrimarySkillsError, setSelectedPrimarySkillsError] = useState("");
  const [selectedSecondarySkillsError, setSelectedSecondarySkillsError] = useState("");

  const handlePrimarySkills = (selectedValues) => {
    setSelectedPrimarySkills(selectedValues);
    setSelectedPrimarySkillsError("");
    setIsPrimarySkillSelected(selectedValues.length > 0);

    const updatedSecondarySkills = selectedSecondarySkills.filter(
      (skill) => !selectedValues.some(
        (primarySkill) => primarySkill.value === skill.value)
    );
    setSelectedSecondarySkills(updatedSecondarySkills);
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
      setYears(candidateData.yearsOfExperience);
      setMonths(candidateData.months);
      setSelectedPrimarySkills(candidateData.selectedPrimarySkills);
      setIsPrimarySkillSelected(true);
      setSelectedSecondarySkills(candidateData.selectedSecondarySkills);
      setRRNumber(candidateData.rrNo);
    }
    else {
      setFullName("");
      setEmail("");
      setMobileNumber("");
      setYears("");
      setMonths("");
      setSelectedPrimarySkills([]);
      setSelectedSecondarySkills([]);
      setRRNumber("");
    }
  }, [storeModalData]);

  const validateForm = () => {
    let isValid = true;
    if(fullName.trim() === ""){
      setFullNameError("Please enter Full name");
      isValid = false;
    } else if ((fullName.length < 2) || (fullName.length > 50) || !/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(fullName.trim()) || /\s{2,}/.test(fullName.trim()) || /\bnull\b/i.test(fullName.trim())) {
      setFullNameError("Please enter valid name");
      isValid = false;
    }

    if (email === "") {
      setEmailError("Please enter email address");
      isValid = false;
    } else if (!/^[a-zA-Z0-9.-]+@gmail\.com$/.test(email)) {
      setEmailError("Please enter valid email address");
      isValid = false;
    }

    if (mobileNumber === "") {
      setMobileNumberError("");
    } else if (!/^\d{10}$/.test(mobileNumber) || mobileNumber === "0000000000") {
      setMobileNumberError("Please enter valid mobile number");
      isValid = false;
    }

    if (years === "" || months === "") {
      if (years === "" && months === "") {
        setYearsOfExperienceError("Please enter years of experience");
        setMonthsOfExperienceError("Please enter years of experience");
        isValid = false;
      } else if(years === ""){
        setYearsOfExperienceError("Please enter years of experience");
        isValid = false;
      } else if (months === "") {
        setMonthsOfExperienceError("Please enter years of experience");
        isValid = false;
      }
    } else {
      if ((!/^\d+$/.test(years) || years < 0 || years > 25) && (!/^\d+$/.test(months) || months < 0 || months > 11)) {
        setYearsOfExperienceError("Please enter valid years of experience");
        setMonthsOfExperienceError("Please enter valid years of experience");
        isValid = false;
      } else if (!/^\d+$/.test(years) || years < 0 || years > 25) {
        setYearsOfExperienceError("Please enter valid years of experience");
        isValid = false;
      } else if (!/^\d+$/.test(months) || months < 0 || months > 11) {
        setMonthsOfExperienceError("Please enter valid years of experience");
        isValid = false;
      }
    }

    if(selectedPrimarySkills.length === 0){
      setSelectedPrimarySkillsError("Please enter Primary tech skills");
      isValid = false;
    }

    return isValid;
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setMobileNumber("");
    setYears("");
    setMonths("");
    setSelectedPrimarySkills([]);
    setSelectedSecondarySkills([]);
    setIsPrimarySkillSelected(false);
    setRRNumber("");
    setIsChecked(false);
    setFullNameError("");
    setEmailError("");
    setMobileNumberError("");
    setYearsOfExperienceError("");
    setMonthsOfExperienceError("");
    setSelectedPrimarySkillsError("");
    setSelectedSecondarySkillsError("");
  };

  const handleCloseModal = () => {
    resetForm();
    dispatch(closeModal());
  };

  const capitalizedFullName = fullName.trim().replace(/\b\w/g, function(char) {
    return char.toUpperCase();
  });

  const handleAddOrEditCandidate = ({
    mode,
    candidateId,
    ...formData
  }) => {
    const handleSuccess = () => {
      let message;
      if (mode === "EDIT"){
        message = "Candidate details updated successfully";
      } else{
        message = formData.shareLink ? "Candidate added and link shared successfully" : "Candidate added successfully";
      }
      dispatch(setAlert({
        message,
        messageType: "success"
      }));
      resetForm();
      dispatch(closeModal());
      dispatch(increaseCandidateTillDate());
      fetchCandidates();
    };

    const handleError = (error) => {
      if((error.errorMessage === "Email and Mobile Number already exist") || (error.errorMessage === "Email already exists") || (error.errorMessage === "Mobile Number already exists")){
        const message = error.errorMessage;
        dispatch(setAlert({
          message,
          messageType: "failure"
        }));
      }
      else{
        const message = (mode !== "EDIT" && formData.shareLink) ? "Failed to send link and add candidate" : "Failed to add candidate";
        dispatch(setAlert({
          message,
          messageType: "failure"
        }));
      }
    };

    if (mode === "EDIT") {
      dispatch(EditCandidate({
        data: {
          candidateId,
          ...formData
        },
        onSuccess: handleSuccess,
        onError: handleError
      }));
    } else {
      dispatch(AddCandidate({
        data: { ...formData },
        onSuccess: handleSuccess,
        onError: handleError
      }));
    }
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid){
      const formData = {
        fullName:capitalizedFullName,
        email,
        mobileNo:mobileNumber,
        yearsOfExperience: years,
        months,
        primaryTechSkill : selectedPrimarySkills[0].value,
        secondaryTechSkill : selectedSecondarySkills.map(skill => skill.value),
        rrNo:rRNumber,
        shareLink:isChecked,
      };

      handleAddOrEditCandidate({
        ...formData,
        mode: storeModalData && storeModalData.mode,
        candidateId: storeModalData.candidateId,
      });
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Modal
        show={IsAddCandidateModalOpen}
        size="modal-lg"
        modalHeader={<AddCandidateModalHeader onClose={handleCloseModal} />}
      >
        <div className="container">
          <form className="my-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className={cx("col-6","add-candidate-field")}>
                <label
                  htmlFor="fullName"
                  className="add-candidate-field-label-mandatory"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className={`form-input ${fullNameError ?
                    "add-candidate-field-error" : ""}`}
                  placeholder="Candidate Name"
                  value={fullName || ""}
                  onChange={(e) => {setFullName(e.target.value);
                    setFullNameError("");}}
                  autoComplete="off"
                />
                {fullNameError &&
                <p className="validation-error">{fullNameError}</p>}
              </div>
              <div className={cx("col-6","add-candidate-field")}>
                <label
                  htmlFor="email"
                  className="add-candidate-field-label-mandatory"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className={`form-input ${emailError ?
                    "add-candidate-field-error" : ""}`}
                  placeholder="Candidate Email"
                  value={email || ""}
                  onChange={(e) => {setEmail(e.target.value);
                    setEmailError("");}}
                  autoComplete="off"
                />
                {emailError && <p className="validation-error">{emailError}</p>}
              </div>
            </div>
            <div className="row">
              <div className={cx("col-6","add-candidate-field")}>
                <label
                  htmlFor="mobileNumber"
                  className="add-candidate-field-label"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobileNumber"
                  className={`form-input ${mobileNumberError ?
                    "add-candidate-field-error" : ""}`}
                  placeholder="Candidate Mobile"
                  value={mobileNumber  || ""}
                  onChange={(e) => {setMobileNumber(e.target.value);
                    setMobileNumberError("");}}
                  autoComplete="off"/>
                {mobileNumberError &&
                <p className="validation-error">{mobileNumberError}</p>}
              </div>
              <div className={cx("col-6", "add-candidate-field")}>
                <label
                  htmlFor="yearsOfExperience"
                  className="add-candidate-field-label-mandatory"
                >
                  Years of Experience
                </label>
                <div className="experience-input-container">
                  <div className="experience-input-field">
                    <input
                      type="text"
                      id="years"
                      className={`form-input ${yearsOfExperienceError ? "add-candidate-field-error" : ""}`}
                      value={years === null || years === undefined ? "" : years }
                      onChange={(e) => {
                        setYears(e.target.value);
                        setYearsOfExperienceError("");
                      }}
                      autoComplete="off"
                    />
                    <span>Years<p>(0-25)</p></span>
                  </div>
                  <div className="experience-input-field">
                    <input
                      type="text"
                      id="months"
                      className={`form-input ${monthsOfExperienceError ? "add-candidate-field-error" : ""}`}
                      value={months === null ||  months === undefined ? "" : months }
                      onChange={(e) => {
                        setMonths(e.target.value);
                        setMonthsOfExperienceError("");
                      }}
                      autoComplete="off"
                    />
                    <span>Months<p>(0-11)</p></span>
                  </div>
                </div>
                {yearsOfExperienceError &&
                  <p className="validation-error">{yearsOfExperienceError}</p>
                }
                {(!yearsOfExperienceError && monthsOfExperienceError) &&
                  <p className="validation-error">{monthsOfExperienceError}</p>
                }
              </div>
            </div>
            <div className="row">
              <div className={cx("col-6","add-candidate-field")}>
                <label
                  htmlFor="primaryTechSkills"
                  className="add-candidate-field-label-mandatory"
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
                <p className="validation-error">
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
                  selectedValues={selectedPrimarySkills.length === 0 ? [] : selectedSecondarySkills}
                  disabled={!isPrimarySkillSelected}
                  excludedOptions={selectedPrimarySkills}
                />
              </div>
            </div>
            <div className="row">
              <div className={cx("col-6","add-candidate-field")}>
                <label htmlFor="rRNumber" className="add-candidate-field-label">
                  RR#
                </label>
                <input
                  type="text"
                  id="rRNumber"
                  className="form-input"
                  value={rRNumber || ""}
                  onChange={(e) => setRRNumber(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>
            {(storeModalData && storeModalData.mode !== "EDIT") && (
              <div className="row">
                <div className="col-12">
                  <Checkbox
                    id="mycheckbox"
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

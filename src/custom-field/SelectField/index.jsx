import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { FormGroup, Label, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";
SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
  onChange: () => {},
};

function SelectField(props) {
  const {
    field,
    form,
    options,
    label,
    placeholder,
    disabled,
    onChange,
  } = props;
  const { name, value } = field;
  // const selectedOption = options.find((option) => option.value === value);

  const handleSelectedOptionChange = (selectedOption) => {
    // const selectedValue = selectedOption
    //   ? selectedOption.value
    //   : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedOption,
      },
    };
   
    field.onChange(changeEvent);
  };

  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        id={name}
        {...field}
        value={value}
        onChange={(event) => {
          handleSelectedOptionChange(event);
          onChange(event);
        }}
        placeholder={placeholder}
        isDisabled={disabled}
        options={options}
      />
      <div className={showError ? "is-invalid" : ""}></div>
      <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
    </FormGroup>
  );
}

export default SelectField;

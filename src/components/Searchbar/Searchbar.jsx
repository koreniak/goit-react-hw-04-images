import { memo } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';
import { SlMagnifier } from 'react-icons/sl';

const validationSchema = object({
  query: string().required()
});

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, {setSubmitting, resetForm}) => {
    onSubmit(values);
    setSubmitting(false);
    resetForm();
  };

  return <Formik
    initialValues={{ query: "" }}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
  >
    {({ isSubmitting }) =>
      <SearchbarHeader>
        <SearchForm>
          <SearchFormButton type="submit" disabled={isSubmitting}>
            <SlMagnifier />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>}
  </Formik>
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default memo(Searchbar);
import React from 'react'
import{Formik,Form,Field, ErrorMessage} from 'formik';
import*as Yup from 'yup'
function EmpolyeeForm() {
  var initialValues={
    firstname:'',
    lastname:'',
    age:''
  }
  var onSubmit=function(values){console.log(values)}
  var validationSchema = Yup.object({
    firstname:Yup.string().required("Firs"),
    lastname:Yup.string().required("las"),
    age:Yup.string().required("ag"),
  })
  return (
    <div className='container'>
      <h1>EmployeeForm</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {
          (EmpolyeeForm)=>{
            return <Form>
              <Field name="firstname">
              </Field>
              <ErrorMessage name='firstname' component="div"></ErrorMessage>
              <br />
              <Field name="lastname">
              </Field>
              <ErrorMessage name='lastname' component="div"></ErrorMessage>
              <br />
              <Field name="age">
              </Field>
              <ErrorMessage name='age' component="div"></ErrorMessage>
              <br />
              <button>add duoly</button>
            </Form>
          }
        }
      </Formik>
    </div>
  )
}

export default EmpolyeeForm
import React from 'react'
import { useEffect } from 'react';
import { useFormik } from'formik';
import*as Yup from 'yup';

function Student() {
  var studentForm=useFormik({
    initialValues:{
        firstname:'',
        lastname:'',
        age:'',
        country:'',
        gender:''
    },
    validationSchema:Yup.object({
      firstname:Yup.string("only string").min(3,"kanika").required("must enter firstname"),
      age:Yup.number().required("must fill age")
    }),
    onSubmit:(values)=>{
        console.log(values)
    }
  })
    
    return (
        <div className='container'>
          {console.log(studentForm.touched)}
        <h1>Student Registration</h1>
        <form onSubmit={studentForm.handleSubmit}>
            <input type="text" name="firstname" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>
            <br />
            <i>{studentForm.touched.firstname&&studentForm.errors.firstname}</i>
            <br />
            <input type="text" name="lastname" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>
            <br />
            <br />
            <input type="text" name="age" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>
            <br />
            <span>{studentForm.touched.age && studentForm.errors.age}</span>
            <br />
            <input type="radio"{...studentForm.getFieldProps('gender')} value="male" />:Male
            <input type="radio"{...studentForm.getFieldProps('gender')} value="female" />:Female
            <input type="radio"{...studentForm.getFieldProps('gender')} value="others" />:Others
            <button>register</button>
        </form>
    </div>
  )
}
export default Student

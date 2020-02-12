import React from 'react';
import { useForm } from 'react-hook-form';
import { axiosWithoutAuth } from '../../configs/Axios'
import '../../styles/Forms.css'

export default function DevBurnoutSignupForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
   var send = JSON.stringify(data);
   return axiosWithoutAuth()
   .post("/signup/newburn", send)
   .then(res => {
     console.log(res)
   }).catch(
     error => {
       console.log(error)
     }
   )

  }
  console.log(errors);
  
  return (
    <form className='mnFrm'onSubmit={handleSubmit(onSubmit)}>
      <input className='frmCmpt frmInpt' type="text" placeholder="First name" name="fname" ref={register({required: true, maxLength: 80})} />
      <input className='frmCmpt frmInpt' type="text" placeholder="Last name" name="lname" ref={register({required: true, maxLength: 100})} />
      <input className='frmCmpt frmInpt' type="text" placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input className='frmCmpt frmInpt' type="tel" placeholder="Mobile number" name="phone" ref={register({required: true, minLength: 6, maxLength: 12})} />
      <input className='frmCmpt frmInpt' type="text" placeholder="How did you hear about us?" name="refer" ref={register} />
      <p className="label">What is the Best time to contact you?</p>
      <select className='frmCmpt frmSel' name="ctcTime" ref={register}>
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
      </select>
      <p className="label">Do you have any dev experience?</p>
      <select className='frmCmpt frmSel' name="exp" ref={register}>
        <option value="Yes Professional">Yes Professional</option>
        <option value="Yes Not in a professional setting">Yes Not in a professional setting</option>
        <option value="No">No</option>
      </select>
      <p className="label">If so, How Much</p>
      <select className='frmCmpt frmSel' name="howmuch" ref={register}>
        <option value="NA">N/A</option>
        <option value="<1 Year">Less than 1 Year</option>
        <option value="1-2 Years">1-2 Years</option>
        <option value="2-5 Years">2-5 Years</option>
        <option value="5+Years">5+Years</option>
      </select>
      <p className="label">Do you want Day or Evening Courses?</p>
      <select className='frmCmpt frmSel' name="courseTime" ref={register}>
        <option value="Day">Day</option>
        <option value=" Evening"> Evening</option>
      </select>
      <p className="label">Can you commit to a 40+ hour per week School Schedule?</p>
      <select className='frmCmpt frmSel' name="commit" ref={register}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <p className="label">Are you interested in being a Team Lead? (Previous dev experience required)</p>
      <select className='frmCmpt frmSel' name="tL" ref={register}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <textarea name="why" className="frmCmpt frmTxtarea" placeholder="Why do you want to be a developer?"></textarea>
      <input className='frmCmpt frmInpt frmBtn' type="submit" />
      <input type="reset" className="frmCmpt frmInpt frmBtn"/>
    </form>
  );
}
import React from 'react';
import { useForm } from 'react-hook-form';
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
export default function DevBurnoutSignup() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    fetch('/',{
      method: "POST",
      headers: {"Content-Type":"application/x-www-form-urlencoded"},
      body: encode({"form-name": "DevBurnout", data})
    })
    console.log(data).then(()=> alert('success')).catch(error => alert(error))
  }
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" name="fname" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" name="lname" ref={register({required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" name="phone" ref={register({required: true, minLength: 6, maxLength: 12})} />
      <select name="contact" ref={register}>
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
      </select>
      <input type="text" placeholder="How did you hear about us?" name="refer" ref={register} />
      <select name="exp" ref={register}>
        <option value="Yes Professional">Yes Professional</option>
        <option value="Yes Not in a professional setting">Yes Not in a professional setting</option>
        <option value="No">No</option>
      </select>
      <select name="howmuch" ref={register}>
        <option value="<1 Year">Less than 1 Year</option>
        <option value="1-2 Years">1-2 Years</option>
        <option value="2-5 Years">2-5 Years</option>
        <option value="5+Years">5+Years</option>
      </select>
      <select name="courseTime" ref={register}>
        <option value="Day">Day</option>
        <option value=" Evening"> Evening</option>
      </select>
      <select name="commit" ref={register}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <select name="tL" ref={register}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <input type="submit" />
    </form>
  );
}
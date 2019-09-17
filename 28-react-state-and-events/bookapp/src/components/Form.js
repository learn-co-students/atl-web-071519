import React from 'react';

const Form = () => {
  return(
    <form>
      <input type='text' name='title' placeholder='title' />
      <input type='text' name='author' placeholder='author' />
      <input type='text' name='author' placeholder='Image Url' />
      <input type='submit' value='Submit' />
    </form>
  )
}

export default Form;

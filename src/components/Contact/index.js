import React from 'react';

const Contact = () => (
  <div className='content-container' id='contact'>
    <div id='contact'>
      <div className='page-header text-center'>
        <h2 className='display-4 text-left font-weight-extra-bold'>
          Let's work together on
          <br />
          your next project
        </h2>
      </div>
      <div className='row mt-4'>
        <div className='form-group col-12 col-md-6'>
          <label htmlFor='fullName'>Full Name</label>
          <input
            type='text'
            className='form-control'
            id='fullName'
            placeholder='Enter full name'
          />
        </div>
        <div className='form-group col-12 col-md-6'>
          <label htmlFor='emailAddress'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='emailAddress'
            placeholder='Enter email'
          />
          <small id='emailHelp' className='form-text text-muted'>
            Your email will not be shared with anyone else.
          </small>
        </div>
        <div className='form-group col-12'>
          <label htmlFor='message'>Message</label>
          <textarea className='form-control' id='message' rows='3'></textarea>
        </div>
      </div>
      <button type='button' className='btn button-shadow mt-4 mx-auto'>
        Send Message
      </button>
    </div>
  </div>
);

export default Contact;

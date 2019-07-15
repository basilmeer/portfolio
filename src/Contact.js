import React from 'react';

function Contact() {
  return(
    <div className="mt-5" id="contact">
      <div className="page-header text-center">
        <h3>Contact</h3>
      </div>
      <div className="row mt-4">
        <div className="form-group col-12 col-md-6">
          <label for="fullName">Full Name</label>
          <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group col-12 col-md-6">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group col-12">
          <label for="exampleInputEmail1">Message</label>
          <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>
      </div>
      <button type="button" class="btn btn-outline-primary">Submit</button>
    </div>
  );
}

export default Contact;
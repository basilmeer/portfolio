const Contact = () => (
  <div className='mx-auto mt-20 flex max-w-[960px] flex-col font-light' id='contact'>
    <div>
      <div className='text-center'>
        <h2 className='text-left text-4xl font-black md:text-6xl'>
          Let&apos;s work together on
          <br />
          your next project
        </h2>
      </div>
      <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className='col-span-1'>
          <label htmlFor='fullName'>Full Name</label>
          <input
            type='text'
            className='mt-2 w-full border border-[#ced4da] px-5 py-[30px] font-thin outline-none transition-all focus:border-[#585858] focus:shadow-[0_0_0_0.2rem_rgba(0,0,0,0.25)]'
            id='fullName'
            placeholder='Enter full name'
          />
        </div>
        <div className='col-span-1'>
          <label htmlFor='emailAddress'>Email address</label>
          <input
            type='email'
            className='mt-2 w-full border border-[#ced4da] px-5 py-[30px] font-thin outline-none transition-all focus:border-[#585858] focus:shadow-[0_0_0_0.2rem_rgba(0,0,0,0.25)]'
            id='emailAddress'
            placeholder='Enter email'
          />
          <small id='emailHelp' className='mt-1 block text-sm text-gray-500'>
            Your email will not be shared with anyone else.
          </small>
        </div>
        <div className='col-span-1 md:col-span-2'>
          <label htmlFor='message'>Message</label>
          <textarea className='mt-2 w-full border border-[#ced4da] p-5 font-thin outline-none transition-all focus:border-[#585858] focus:shadow-[0_0_0_0.2rem_rgba(0,0,0,0.25)]' id='message' rows='3'></textarea>
        </div>
      </div>
      <button
        type='button'
        className='mx-auto mt-4 inline-block border-2 border-black bg-transparent px-[25px] py-[15px] text-lg font-normal text-black shadow-[8px_8px_0_0_#000] transition-all duration-300 hover:bg-black hover:text-white hover:shadow-none'
      >
        Send Message
      </button>
    </div>
  </div>
);

export default Contact;

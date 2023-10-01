import React, { useState } from 'react'
import { db } from '../components/firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

const ContactPage = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const userCollectionRef = collection(db, 'contactdata')

  const handleSubmit = async (event) => {
    event.preventDefault() // Prevent the default form submission behavior

    // Validation logic
    if (!name || !email || !message) {
      // Display an error message to the user
      setSubmissionStatus('Please fill in all required fields.')
      return // Prevent further processing
    }

    try {
      // Status
      setSubmissionStatus('Sending...')

      // Send the data to Firestore and await the result
      await addDoc(userCollectionRef, {
        name,
        email,
        message
      })

      // Update submission status to 'Sent successfully!'
      setSubmissionStatus('Sent successfully!')

      // You can also clear the form fields here if needed
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      // Handle any errors that occur during Firestore operation
      setSubmissionStatus('Error sending message')
      console.error('Error sending message:', error.message)
    }
  }

  return (
    <>
      <section id='contact' className='flex flex-col h-screen w-auto items-center justify-center bg-white dark:bg-black pt-20 px-5'>

        <section className='font-rajdhani'>
          <div className='py-8 lg:py-12 px-4 mx-auto max-w-screen-md'>
            <h2 className='font-rajdhani mb-4 text-4xl tracking-tight font-extrabold text-center text-black dark:text-white'>Contact Me</h2>
            <p className='font-rajdhani mb-8 lg:mb-16 font-light text-center text-black dark:text-white sm:text-xl'>Feel free to reach me through the contact form below</p>
            <form action='#' id='contactForm' className='space-y-8 justify-center'>
              <div>
                <label htmlFor='name' className='font-rajdhani block mb-2 text-sm font-medium text-black dark:text-white'>Your name*</label>
                <input onChange={(event) => setName(event.target.value)} type='text' id='name' autoComplete='name' className='font-rajdhani block p-3 w-full text-sm text-black bg-neutral-100 shadow-md rounded-lg border border-gray-300 focus:ring-1 focus:outline-none focus:ring-black' placeholder='Write your name here' required />
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium text-black dark:text-white'>Your email*</label>
                <input onChange={(event) => setEmail(event.target.value)} type='email' id='email' autoComplete='email' className='block p-3 w-full text-sm text-black bg-neutral-100 rounded-lg border border-gray-300 shadow-md focus:ring-1 focus:outline-none focus:ring-black' placeholder='your@email.com' required />
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='message' className='block mb-2 text-sm font-medium text-black dark:text-white'>Your message*</label>
                <textarea onChange={(event) => setMessage(event.target.value)} id='message' rows='6' className='block p-3 w-full text-sm text-black bg-neutral-100 rounded-lg border border-gray-300 shadow-md focus:ring-1 focus:outline-none focus:ring-black' placeholder='Leave a comment...' required />
              </div>

              <div className='flex justify-center'>
                <button onClick={handleSubmit} disabled={submissionStatus === 'Sending...'} id='submitBtn' type='submit' className='inline-flex mt-5 py-2.5 px-5 mr-2 gap-3 text-sm font-medium border border-1 shadow-sm rounded-lg text-black dark:text-white border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-bg ease-in-out duration-500'>{submissionStatus || 'Send message'}</button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  )
}

export default ContactPage

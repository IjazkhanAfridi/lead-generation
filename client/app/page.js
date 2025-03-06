'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function Home() {
  const [leads, setLeads] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await axios.get('https://lead-generation-l6xs.onrender.com/leads');
      console.log('response: ', response);
      setLeads(response.data);
    } catch (error) {
      console.error('Error fetching leads', error);
    }
  };

  const onSubmit = async (data) => {
    try {
      await axios.post('https://lead-generation-l6xs.onrender.com/leads', data);
      fetchLeads();
      reset();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding lead', error);
    }
  };

  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      {/* Navbar */}
      <nav className='bg-white shadow-md p-4 flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Lead Manager</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        >
          Create Lead
        </button>
      </nav>

      {/* Leads List */}
      <div className='flex-grow p-6 w-full max-w-2xl mx-auto'>
        <h2 className='text-xl font-bold mb-4'>Leads</h2>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          {leads.length === 0 ? (
            <p className='text-center text-gray-500'>No leads found</p>
          ) : (
            <ul>
              {leads.map((lead) => (
                <li key={lead._id} className='p-2 border-b'>
                  <p className='font-medium'>
                    {lead.name} ({lead.email})
                  </p>
                  <p className='text-sm text-gray-500'>Status: {lead.status}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-white shadow-md p-4 text-center text-gray-600'>
        Lead Manager &copy; {new Date().getFullYear()}
      </footer>

      {/* Modal for Creating Lead */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/30 transition-all ease-in-out duration-300'>
          <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
            <h2 className='text-xl font-bold text-center mb-4'>
              Add a New Lead
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <div>
                <label className='block font-medium'>Name</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className='w-full p-2 border rounded'
                />
                {errors.name && (
                  <p className='text-red-500 text-sm'>{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className='block font-medium'>Email</label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                      message: 'Invalid email',
                    },
                  })}
                  className='w-full p-2 border rounded'
                />
                {errors.email && (
                  <p className='text-red-500 text-sm'>{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className='block font-medium'>Status</label>
                <select
                  {...register('status')}
                  className='w-full p-2 border rounded'
                >
                  <option value='New'>New</option>
                  <option value='Engaged'>Engaged</option>
                  <option value='Proposal Sent'>Proposal Sent</option>
                  <option value='Closed-Won'>Closed-Won</option>
                  <option value='Closed-Lost'>Closed-Lost</option>
                </select>
              </div>
              <div className='flex justify-end space-x-2'>
                <button
                  type='button'
                  onClick={() => setIsModalOpen(false)}
                  className='bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

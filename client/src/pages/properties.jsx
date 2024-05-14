import React, {useState, useEffect} from 'react'
import Button from '../components/atoms/Buttons/Button';
import {PropertiesInput , PropertiesOptions, PropertiesContainer} from '../styles/globalStyles.styles';

export default function Properties() {
  const [searchData, setSearchData] = useState({
    search: '',
    min_rent: '',
    max_rent: '',
    beds: '',
    bath: '',
    property_type: '',
    pets: '',
    sort: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('im here')
    
  }

  const handleInput = (event) => {
    setSearchData({...searchData, [event.target.name]: event.target.value });
  }


  return (
    <PropertiesContainer className='mx-auto flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8'>
      <p className='text-center text-[20px] mt-[50px]'>
        We want to make your experience in finding your next dream home an enjoyable one! Find houses to buy or rent in by 
        selecting from our list of homes, or by entering your search criteria below. Give us a call today and we will help you find the perfect property that suit your needs!
      </p>

      <div className='bg-[#eae8ec] mt-[50px] w-full p-[20px]'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-8 w-full gap-y-[20px] gap-x-[30px] mb-[20px]'>
            <div className='col-span-4'>
              <label>Search</label>
              <PropertiesInput onChange={handleInput} type="text" name="search" className='w-full'/>
            </div>

            <div className='col-span-1'>
              <label>Min Rent</label>
              <PropertiesInput onChange={handleInput} type="text" name="min_rent" className='w-full'/>
            </div>

            <div className='col-span-1'>
              <label>Max Rent</label>
              <PropertiesInput onChange={handleInput} type="text" name="max_rent" className='w-full'/>
            </div>

            <div className='col-span-1'>
              <label>Beds</label>
              <PropertiesOptions onChange={handleInput} type="text" name="beds" className='w-full'/>
            </div>

            <div className='col-span-1'>
              <label>Bath</label>
              <PropertiesOptions onChange={handleInput} type="text" name="bath" className='w-full'/>
            </div>

            <div className='col-span-3'>
              <label>Property Type</label>
              <PropertiesOptions onChange={handleInput} type="text" name="property_type" className='w-full'/>
            </div>

            <div className='col-span-2'>
              <label>Pets</label>
              <PropertiesOptions onChange={handleInput} type="text" name="pets" className='w-full'/>
            </div>

            <div className='col-span-3'>
              <label>Sort</label>
              <PropertiesOptions onChange={handleInput} type="text" name="sort" className='w-full'/>
            </div>
          </div>
          <div className='flex justify-center'>
            <Button type='submit' category="primary" txt={'Submit'} value="Submit" />
          </div>
        </form>

      </div>
    </PropertiesContainer>
  )
}

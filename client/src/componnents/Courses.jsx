import React from 'react'

function Courses() {
  const array=[
    {title:'Duration:52Weeks(572hrs.) Qualification:Graduation ',dec:'Individual is responsible to develop & implement new software & database and to maintain & update existing software & database to improve the performance.',img:'https://www.hartronkarnal.com/images/pgdca.png' },
    {title:'Duration:52weeks(576hrs.) Qualification: 10+2',dec:'Individual is responsible for developing, and testing new applications with team and to maintain & improve the performance of existing software.',img:'https://www.hartronkarnal.com/images/dca.png'},
    {title:'Duration:52weeks(576hrs.) Qualification: 10+2',dec:'Responsible for organizing, maintaining accounting & statistical records. Prepare and provide financial reports to management when required.',img:'https://www.hartronkarnal.com/images/dcaa.png'},
    {title:'Duration:26weeks(288hrs.) Qualification: 10',dec:'Individual is responsible for operating computer and peripheral equipment to process data, according to operating instructions.',img:'https://www.hartronkarnal.com/images/ccdl.png'},
    {title:'Duration:26weeks(288hrs.) Qualification: 10',dec:'Responsible for supporting the Accountant and management team by completing routine clerical and accounting tasks.',img:'https://www.hartronkarnal.com/images/cccba.png'},
    {title:'Duration:26weeks(288hrs.) Qualification: 10',dec:'In this course Communication & Employability Skills Responsible for designing or creating graphics and multimedia web sites.',img:'https://www.hartronkarnal.com/images/ccwdm.png'},
   
   
    
  ]

  return (

    <div className=' '>
      
<h1 className='font-bold text-8xl mx-6 my-14  flex justify-center'>Courses</h1>


      <div className='flex flex-wrap justify-evenly items-center pt-2 gap-2'>

        

       {
        array.map((value)=>
        (
          <div className='flex flex-col border rounded-md mt-5 my-7 shadow-md justify-center'>
            <div className='px-[50px]'>
            <img className='h-[240px] w-[340px] ' src={value.img} alt=""  />
            </div>
          <div className='flex flex-col gap-5 justify-center bg-gray-200'>
          <h1 className='max-w-[200px] flex justify-center font-bold'>{value.title}</h1>
          <p className='flex justify-center text-center max-w-[400px]'>{value.dec}</p>
          
          <button className= 'flex justify-center items-center py-3 bg-orange-300 font-semibold rounded-lg shadow-md my-2'>Know More</button>
        
          

          </div>
          </div>
        
        ))
       }


      </div>
    </div>


  )
}

export default Courses
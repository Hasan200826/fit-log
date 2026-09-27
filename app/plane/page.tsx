import MyPlaneDeshBord from '@/components/MyPlaneDeshBord';
import PlaneHeading from '@/components/PlaneHeading';
import React from 'react';

const page = () => {
  return (
    <div className=' py-4'>
      <PlaneHeading/>
      <MyPlaneDeshBord/>
    </div>
  );
};

export default page;
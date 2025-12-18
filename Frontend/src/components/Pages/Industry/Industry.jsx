import React from 'react'
import IndustryBanner from './IndustryBanner'
import 'bootstrap/dist/css/bootstrap.min.css';
import TabSection from './IndustryTab/TabSection';
import SecondBanner from '../../Layouts/Body/SecondBanner';

const Industry = () => {
  return (
    <div>
        <IndustryBanner/>
        <TabSection/>
        <SecondBanner/>
    </div>
  )
}

export default Industry
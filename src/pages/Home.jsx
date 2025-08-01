import React from 'react'
import Herosection from '../components/Herosection'
import AchievementsSection from '../components/AchievementsSection'
import LeadershipTimeline from '../components/LeadershipTimeline'
import DigitalHealthVision from '../components/DigitalHealthVision'
import InstitutionCenters from '../components/InstitutionCenters'
import SonographyContributions from '../components/SonographyContributions'
import KeyHighlights from '../components/KeyHighlights'
import ContactEnquiry from '../components/ContactEnquiry'

const index = () => {
  return (
    <>
      <Herosection />
      <AchievementsSection />
      <LeadershipTimeline />
      <DigitalHealthVision />
      <InstitutionCenters />
      <SonographyContributions />
      <KeyHighlights />
      <ContactEnquiry />
        
    </>
  )
}

export default index

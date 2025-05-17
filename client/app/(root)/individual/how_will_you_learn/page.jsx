"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'
import HowWillYouLearnHero from './how-will-you-learn-hero-section';
import LearnerJourney from './learner-journey-section';
import Assesment from './assesment-sesction';
import LevelsExplained from './levels-explained-section';
import EntryRequirements from './entry-requirements-sections';
import FAQ from './faq-section';
import Assignments from './assignments-section';
import Cost from './cost-section';
import Credibility from './credibility-section';
import PersonalDetails from './personal-details-section';
import Progression from './progression-section';
import StudentSupport from './student-support-section';
import Support from './support';

function page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleHashScroll = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Wait for the page to render before scrolling
    setTimeout(handleHashScroll, 100);

  }, []);

  if (isClient) {
    return (
      <>
        <div className='willLearn-bg'>
          <div className="content">
            <Header />
            <HowWillYouLearnHero />
          </div>
        </div>
        <LearnerJourney />
        <Assesment />
        <LevelsExplained />
        <EntryRequirements />
        <FAQ />
        <Assignments />
        <Cost />
        <Credibility />
        <PersonalDetails />
        <Progression />
        <StudentSupport />
        <Support />
        <Footer />
      </>
    );
  }
}

export default page
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
    const urlParam = new URLSearchParams(window.location.search);
    const section_name = urlParam.get('section');

    if (section_name === "learner_journey") {
      const scrollToSection = () => {
        const element = document.getElementById('learner_journey');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 20,
            behavior: 'smooth',
          });
        } else {
          setTimeout(scrollToSection, 100);
        }
      };

      scrollToSection();
    }
    if (section_name === "assessment") {
      const scrollToSection = () => {
        const element = document.getElementById('assessment');
        if (element) {
          window.scrollTo({
            top: 1250,
            behavior: 'smooth',
          });
        } else {
          setTimeout(scrollToSection, 100);
        }
      };

      scrollToSection();
    }
    if (section_name === "levels_explained") {
      const scrollToSection = () => {
        const element = document.getElementById('levels_explained');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 20,
            behavior: 'smooth',
          });
        } else {
          setTimeout(scrollToSection, 100);
        }
      };

      scrollToSection();
    }
    if (section_name === "support") {
      const scrollToSection = () => {
        const element = document.getElementById('support');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 20,
            behavior: 'smooth',
          });
        } else {
          setTimeout(scrollToSection, 100);
        }
      };

      scrollToSection();
    }

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
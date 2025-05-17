"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function EntryRequirements() {

  const [isclickSection1, setclickSection1] = useState(false);
  const [isclickSection2, setclickSection2] = useState(false);
  const [isclickSection3, setclickSection3] = useState(false);
  const [isclickSection4, setclickSection4] = useState(false);
  const [isclickSection5, setclickSection5] = useState(false);

  // useEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);

  //     gsap.fromTo(
  //       ".entry-left",
  //       { opacity: 0, x: -50 },
  //       { 
  //         opacity: 1, x: 0, duration: 1, ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: ".entry-section",
  //           start: "top 80%", 
  //           end: "bottom 20%",
  //           toggleActions: "play reverse play reverse", // Works when scrolling up and down
  //           once: false,
  //         }
  //       }
  //     );

  //     gsap.fromTo(
  //       ".entry-left1",
  //       { opacity: 0, x: -50 },
  //       { 
  //         opacity: 1, x: 0, duration: 1, ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: ".entry-section1",
  //           start: "top 80%", 
  //           end: "bottom 20%",
  //           toggleActions: "play reverse play reverse",
  //           once: false,
  //         }
  //       }
  //     );

  //     gsap.fromTo(
  //       ".entry-left2",
  //       { opacity: 0, x: -50 },
  //       { 
  //         opacity: 1, x: 0, duration: 1, ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: ".entry-section2",
  //           start: "top 80%", 
  //           end: "bottom 20%",
  //           toggleActions: "play reverse play reverse",
  //           once: false,
  //         }
  //       }
  //     );

  //   }, []);

  return (
    <>
      <div className='w-full font-sans pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 entry-section '>
        <div className='w-full flex items-start font-bold flex-col lg:h-full'>
          <div className="w-full lg:grid lg:grid-cols-1">
            <div className="w-full flex items-start flex-col lg:h-full">
              <span className="text-[9vw] lg:text-[3vw] font-sans font-bold">
                Entry Requirements
              </span>
            </div>
          </div>

          <div className='w-full bg-white pt-10 pb-10 text-[#2E2E27] flex flex-col'>

            <div className='w-full flex flex-col items-start justify-start gap-3 entry-left'>
              <span className='w-full flex justify-between items-center border-t pt-5 pb-2 text-black capitalize' onClick={() => setclickSection1(!isclickSection1)}>
                University entry level 3 programme requirements
                <img src="/Icon/arrow.png" alt="arrow" className="w-6 h-6" />
              </span>
              {isclickSection1 && (
                <>
                  <div className='description2 text-[14px] lg:text-[16px] lg:description text-[#2E2E27] flex flex-col gap-4'>
                    <span>
                      For entry on the Level 3 qualification learners would generally be aged 16 or above. For learners who have recently been in education or training the entry profile is likely to include one of following:
                    </span>
                    <div className='pl-3'>
                      <li>5 or more GCSEs at grades C and above</li>
                      <li>other related level 2 subjects</li>
                      <li>other equivalent international qualifications</li>
                    </div>
                    <span>
                      Learners must also have an appropriate standard of English to enable them to access relevant resources and complete the course modules and assignments. Mature learners may present a more varied profile of achievement that is likely to include relevant work experience (paid and/or unpaid), participation and/or achievement of relevant qualifications.
                    </span>
                  </div>
                </>
              )}
            </div>
            <div className='w-full flex flex-col items-start justify-start gap-3 entry-section1'>
              <span className='text-black entry-left1 flex justify-between items-center border-t pt-5 pb-2 w-full mt-3 capitalize' onClick={() => setclickSection2(!isclickSection2)}>
                Graduate level 6 programme requirements
                <img src="/Icon/arrow.png" alt="arrow" className="w-6 h-6" />
              </span>
              {isclickSection2 && (
                <>
                  <span className='description2 text-[14px] lg:text-[16px] lg:description text-[#2E2E27] entry-left1'>
                    To enrol on the Level 6 programme, you must be 21+ years old and have at least 3 years of relevant experience. Learners will be expected to hold a level 4/5 qualification or an equivalent to the first 2 years of a degree. In certain circumstances, students with considerable experience but no formal qualifications may be considered.
                  </span>
                </>
              )}
            </div>
            <div className='w-full flex flex-col items-start justify-start gap-3 entry-section1'>
              <span className='text-black entry-left1 flex justify-between items-center border-t pt-5 w-full mt-3 capitalize' onClick={() => setclickSection3(!isclickSection3)}>
                Postgraduate level 7 programme requirements
                <img src="/Icon/arrow.png" alt="arrow" className="w-6 h-6" />
              </span>
              {isclickSection3 && (
                <>
                  <span className='description2 text-[14px] lg:text-[16px] lg:description text-[#2E2E27] entry-left1'>
                    To enrol on the Level 7 programme, you must be 21+ years old and have at least 3 years of management experience. Learners will be expected to hold a level 6 qualification or a first degree. In certain circumstances, managers with considerable experience but no formal qualifications may be considered.
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default EntryRequirements;
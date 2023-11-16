import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'
import { useActiveSectionContext } from '@/context/active-section-context';
import { SectionName } from './types';

export default function useSectioninView(sectionName:SectionName, threshold = 0.75) {
    const {ref, inView} = useInView({ threshold,});
    const {setActiveSection, timeOfLastClick} =  useActiveSectionContext();

useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000){
        setActiveSection(sectionName);
    }
},
[inView, setActiveSection, timeOfLastClick, sectionName]
);

  
}

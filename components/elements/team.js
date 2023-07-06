import React from 'react';
import team from "../../static_data/team.json";
import useAnimatedElement from '../../util/inView';
import AnimatedSentence from '../../components/elements/SentenceAnimation';


const RecentWorksComponent = () => {
  const threshold = 0.6;
  const elements = useAnimatedElement(threshold);
  let c = 0;

  return (
    <div className='container'>
    <AnimatedSentence className="text-5xl font-bold text-CS_text_color pb-10" sentence="EXPERT TEAM MEMBERS" useInView={elements[c++]} />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {team.map((e, i) => (
            <div key={i} className={(elements[c].inView ? 'our-team-card overflow-hidden animate__animated animate__fadeInUp ' : ' opacity-0')} style={{ animationDelay: `${i * .05}s` }} >
                <img ref={elements[c++].ref}
                    className={"h-96 w-full transition duration-500 brightness-90 object-cover"}
                    src={e.image} />
                <div className="info w-full h-full flex flex-col justify-end p-5 text-white font-bold">
                    <span className="text-2xl">{e.name}</span>
                    <span className="text-xl">{e.job}</span>
                    <div className="flex gap-2 mt-5 ">
                        {
                            e.socialData.map((ee, i) => (
                                <a key={i} href={ee.url} className="w-10 h-10 p-2 bg-CS_text_active hover:bg-transparent border-solid border-2 border-CS_text_active text-CS_text_color rounded-md hover:-translate-y-3 transition duration-500 cursor-pointer">
                                    <img src={ee.socialData} />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        ))
        }
    </div>
</div>
  );
};

export default RecentWorksComponent;

import ResumeCard from "../ResumeCard/ResumeCard";


function AdditionalSkills() {
    return (
        <div
            id="Experience"
            className={`w-full flex flex-col gap-10 py-12 px-3 md:px-6  border-b-2 border-white overflow-hidden`}
        >
            <div className=" font-titleFont flex flex-col text-center gap-4">
                <h2 className="text-3xl md:text-4xl text-white font-bold">Additional skills & Experience</h2>
            </div>
            {/* part one */}
            <div className="w-full flex flex-col md:flex-row justify-between gap-8">
                <div>

                    <div className="mt-1 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                        <ResumeCard
                            title="Training grant at AraTech Company"
                            subTitle="Five-month training opportunity"
                            result="100%"
                            des="The opportunity was to train as a Full Stack developer in several web fields, through which I gained a lot of experience."
                        />
                        <ResumeCard
                            title="Web Development Course at Techno Home"
                            subTitle="Continuous web training for a period of four months"
                            result="95%"
                            des="The training was mainly based on the web and back-end in particular, specifically the ASP.NET Core framework."
                        />
                    </div>
                </div>
                {/* part Two */}

                <div>

                    <div className=" w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                        <ResumeCard
                            title="Working within a passionate team"
                            subTitle="Remote collaboration to increase skills and software development"
                            result="Online"
                            des="I worked within a team that was passionate about developing and raising the capabilities of creating websites. It was a unique experience and provided me with a lot of skills."
                        />
                        <ResumeCard
                            title="Continuous learning"
                            subTitle="Ability to keep up with the latest updates"
                            result="100%"
                            des="The technical field is developing very rapidly, so I seek to keep pace with this speed and development and increase my experience and skills."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdditionalSkills;
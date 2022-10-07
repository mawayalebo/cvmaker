const ExperienceList: React.FC = ()=>{
    return(
        <section>
            <div className="border border-blue-200 rounded-md border-1 border-solid p-3 mt-2 bg-slate-200">
                <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-3">
                        <div>
                            <span>Northam</span>
                        </div>
                        <div>
                            <span>Fitter & Turner</span>
                        </div>
                        <div>
                            <span>2018 - 2022</span>
                        </div>
                        <div>
                            <div>Delete Button</div>
                        </div>
                        <div>
                            <div>Edit Button</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div>
                            <span>Northam</span>
                        </div>
                        <div>
                            <span>Fitter & Turner</span>
                        </div>
                        <div>
                            <span>2018 - 2022</span>
                        </div>
                        <div>
                            <div>Delete Button</div>
                        </div>
                        <div>
                            <div>Edit Button</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default ExperienceList
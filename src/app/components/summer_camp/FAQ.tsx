import React from 'react';

const FAQ = () => {
    return (
        <section>
            <div id="FAQ" className="max-w-screen-xl px-[5%] min-h-sceen pt-[5%] pb-[5%] flex">
                <div className="flex  items-start">
                    <h2 className="font-bold text-3xl md:text-8xl mt-5 tracking-tight">
                        FAQ
                    </h2>
                </div>
                <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8 text-xl">
                    <div className="pb-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> What is the official language?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                The official language is English, and the staff members are proficient in both Japanese and English.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> What should I pack?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                ・Cash (for souvenirs and dining expenses) <br />
                                ・Passport (with visa) <br />
                                ・Clothing  (Washing machine available. If you plan to cycle or hike, comfortable clothing and shoes are recommended.)
                                Personal water bottle (Natural water from Rishiri Island can be consumed) <br />
                                ・Laptop <br />
                                ・Charger <br />
                                ・Writing utensils <br />
                                ・Necessary medications <br />

                                A detailed packing list will be provided after your application is confirmed.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> What is the transportation option to Rishiri Island?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                There are options to travel by either plane or ferry, but we recommend using a flight. Details will be provided after your application is confirmed.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> What is the weather like in Rishiri?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                Summer on Rishiri Island is often sunny with an average temperature of 20 degrees Celsius, and it's generally dry. However, mornings and evenings can be chilly, so please make sure to bring some jackets and long-sleeved clothing with you.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> What is the food like?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                Participants will have the opportunity to cook together, dine at nearby restaurants, and enjoy a barbecue. Rishiri Island, known for its thriving fishing industry, offers an abundance of delicious seafood, which is deeply intertwined with the island's culture.
                                Please note that providing a dedicated menu for vegetarians may be challenging due to the island's culinary culture.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> Do I need to bring a backpack, or can I bring a rolling suitcase on the summer camp?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                You can leave your luggage at the accommodation, so feel free to choose either option.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

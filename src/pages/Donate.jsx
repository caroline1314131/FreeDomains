import { Heart, Github } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer-section";

export function Donate() {
    return (
        <div className="min-h-screen bg-[#1A1A1A] font-sans">
            <Header />

            <main className="pt-[calc(6rem+var(--incident-height,0px))] pb-12 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Hero + CTA */}
                    <div className="text-center mb-8">
                        <div className="inline-block p-3 bg-[#FF6B35] rounded-xl mb-4 border-3 border-white shadow-[6px_6px_0px_0px_#FFD23F]">
                            <Heart className="w-8 h-8 text-white fill-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
                            SUPPORT US
                        </h1>
                        <p className="text-base md:text-lg text-[#E5E3DF] max-w-xl mx-auto mb-6 leading-relaxed">
                            Supporting <span className="text-[#FFD23F] font-bold">free infrastructure</span> for <span className="text-[#FFD23F] font-bold">14k+ developers</span> worldwide
                        </p>

                        {/* Main CTA */}
                        <a
                            href="https://github.com/sponsors/sudheerbhuvana"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 bg-[#FFD23F] text-[#1A1A1A] px-8 py-4 font-black text-base md:text-lg uppercase tracking-wide border-3 border-white hover:bg-white transition-all duration-150 shadow-[6px_6px_0px_0px_#FF6B35] hover:shadow-[3px_3px_0px_0px_#FF6B35] hover:translate-x-[3px] hover:translate-y-[3px] mb-3"
                        >
                            <Github className="w-5 h-5" />
                            SPONSOR ON GITHUB
                            <Heart className="w-5 h-5" />
                        </a>

                        <p className="text-[#888] text-xs">Even $1 makes a difference ❤️</p>
                    </div>

                    {/* Simple Text Content */}
                    <div className="bg-white p-8 md:p-10 border-3 border-white shadow-[8px_8px_0px_0px_#FFD23F]">
                        <div className="space-y-6 text-[#1A1A1A]">
                            {/* The Reality */}
                            <div>
                                <p className="text-base leading-relaxed">
                                    Stackryze is one of the fastest-growing platforms offering <strong className="text-[#FF6B35]">free domains and DNS</strong>, with fast and active support from our team.
                                </p>
                            </div>

                            {/* Costs */}
                            <div>
                                <p className="text-base leading-relaxed">
                                    It costs <strong className="text-[#FF6B35] text-xl">~$20 per month</strong> to keep the servers running, plus additional costs for domain renewals. I personally cover these expenses and work on Stackryze <strong className="text-[#FF6B35]">completely for free as a student.</strong>
                                </p>
                            </div>

                            {/* The Vision */}
                            <div>
                                <p className="text-base leading-relaxed">
                                    If we receive enough community support, we plan to introduce <strong className="text-[#138808]">new domain extensions</strong> and expand the ecosystem.
                                </p>
                            </div>

                            <div className="bg-[#FFF9E6] border-l-4 border-[#FFD23F] p-4">
                                <p className="text-sm text-[#1A1A1A] italic">
                                    "Let's not make money the barrier to having a better name on the internet."
                                </p>
                            </div>

                            <div>
                                <p className="text-base leading-relaxed">
                                    If Stackryze has helped you, please consider donating. Even a small contribution makes a real difference. <strong>Thank you for supporting Stackryze ❤️</strong>
                                </p>
                            </div>

                            <hr className="border-[#E5E3DF]" />

                            {/* Can't Donate */}
                            <div>
                                <p className="text-base leading-relaxed mb-3">
                                    <strong className="text-[#1A1A1A]">Can't donate?</strong> You can still help:
                                </p>
                                <p className="text-sm text-[#4A4A4A]">
                                    ⭐ <a href="https://github.com/stackryze/FreeDomains" target="_blank" rel="noreferrer" className="font-bold text-[#1A1A1A] underline hover:text-[#FF6B35]">Star us on GitHub</a> •
                                    📢 Share with friends •
                                    🐛 Report bugs •
                                    💻 Contribute code
                                </p>
                            </div>

                            {/* Footer */}
                            <div className="text-center pt-4">
                                <p className="text-sm text-[#888] italic">
                                    Built by Stackryze • 100% Open Source • All for public benefit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

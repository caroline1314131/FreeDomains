import { useState, useLayoutEffect, useRef } from "react";
import { X, Heart, ArrowRight } from "lucide-react";

export function IncidentAnnouncement() {
    const [showModal, setShowModal] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const bannerRef = useRef(null);

    useLayoutEffect(() => {
        const updateHeight = () => {
            if (bannerRef.current) {
                const height = dismissed ? 0 : bannerRef.current.offsetHeight;
                document.documentElement.style.setProperty('--incident-height', `${height}px`);
            }
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
            document.documentElement.style.removeProperty('--incident-height');
        };
    }, [dismissed]);

    if (dismissed) return null;

    return (
        <>
            {/* Support Banner */}
            <div ref={bannerRef} className="bg-gradient-to-r from-amber-50 to-orange-50 border-b-2 border-orange-200 w-full fixed top-0 left-0 right-0 z-[100]">
                <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <Heart className="w-5 h-5 text-orange-500 flex-shrink-0" />
                            <p className="text-sm font-medium text-orange-900">
                                <span className="font-bold">Support Stackryze:</span> It costs ~$20/month to keep the servers running. I cover this personally as a student.{" "}
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="text-orange-700 hover:text-orange-900 underline font-bold"
                                >
                                    Learn more
                                </button>
                            </p>
                        </div>
                        <button
                            onClick={() => setDismissed(true)}
                            className="p-1.5 hover:bg-orange-100 rounded-lg transition-colors flex-shrink-0"
                            aria-label="Dismiss"
                        >
                            <X className="w-4 h-4 text-orange-500" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border-2 border-orange-100">
                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-amber-50 to-orange-50 p-6 border-b-2 border-orange-100 flex items-start justify-between">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-orange-100 rounded-lg">
                                    <Heart className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#1A1A1A]">Support Stackryze Servers</h2>
                                    <p className="text-sm text-orange-700 mt-1">Help keep the platform running for everyone</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowModal(false)}
                                className="p-2 hover:bg-orange-100 rounded-lg transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5 text-[#4A4A4A]" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-5 text-[#1A1A1A]">
                            <p className="text-base leading-relaxed text-gray-700">
                                Stackryze is one of the fastest-growing platforms offering <strong>free domains and DNS</strong>, with fast and active support from our team.
                            </p>

                            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                                <p className="text-sm text-orange-900 leading-relaxed">
                                    It costs <strong>~$20 per month</strong> to keep the servers running, plus additional costs for domain renewals. I personally cover these expenses and work on Stackryze <strong>completely for free as a student.</strong>
                                </p>
                            </div>

                            <p className="text-base leading-relaxed text-gray-700">
                                If we receive enough community support, we plan to introduce <strong>new domain extensions</strong> and expand the ecosystem.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <p className="text-sm text-gray-600 italic">
                                    "Let's not make money the barrier to having a better name on the internet."
                                </p>
                            </div>

                            <p className="text-base text-gray-700">
                                If Stackryze has helped you, please consider donating. Even a small contribution makes a real difference. <strong>Thank you for supporting Stackryze ❤️</strong>
                            </p>
                        </div>

                        {/* Footer Buttons */}
                        <div className="sticky bottom-0 bg-white border-t-2 border-[#E5E3DF] p-4 flex gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 bg-white border-2 border-[#E5E3DF] text-[#1A1A1A] py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors"
                            >
                                Close
                            </button>
                            <a
                                href="https://github.com/sponsors/sudheerbhuvana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-[#FF6B35] text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                            >
                                Donate <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

import useTimer from "./useTimer"

function App() {
    const { timer, currentPhase, start } = useTimer()

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex flex-col">
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 w-full max-w-lg border border-white/20">
                    <div className="text-center space-y-6">
                        {/* App Title */}
                        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-200 via-violet-200 to-indigo-200 bg-clip-text text-transparent mb-4 tracking-wide px-2 leading-tight">
                            Nightreign Timer
                        </h1>

                        {/* Current Phase */}
                        <h2 className="text-2xl font-semibold text-white/90 tracking-wide">
                            {currentPhase || "The Night... is far from over"}
                        </h2>

                        <div className="bg-black/20 rounded-2xl p-6 border border-white/10">
                            <p className="text-sm text-gray-300 mb-2 uppercase tracking-wider">
                                Time Remaining
                            </p>
                            <p className="text-5xl font-mono font-bold text-white">{timer}</p>
                            <p className="text-lg text-gray-400 mt-1">seconds</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {/* start phase 1 */}
                            <button
                                onClick={() => start("Phase 1")}
                                className={`
                                relative overflow-hidden px-4 py-3 rounded-lg font-semibold text-sm
                                transition-all duration-300 transform hover:scale-102 active:scale-98
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
                                ${
                                    currentPhase === "Phase 1"
                                        ? "bg-emerald-500/80 text-white shadow-lg shadow-emerald-500/25 focus:ring-emerald-400 cursor-not-allowed"
                                        : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 focus:ring-blue-400"
                                }
                            `}
                                disabled={currentPhase === "Phase 1"}
                            >
                                <span className="relative z-10">Phase 1</span>
                                {currentPhase === "Phase 1" && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-75 animate-pulse"></div>
                                )}
                            </button>

                            {/* start closing 1 */}
                            <button
                                onClick={() => start("Phase 1 Closing")}
                                className={`
                                relative overflow-hidden px-4 py-3 rounded-lg font-semibold text-sm
                                transition-all duration-300 transform hover:scale-102 active:scale-98
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
                                ${
                                    currentPhase === "Phase 1 Closing"
                                        ? "bg-emerald-500/80 text-white shadow-lg shadow-emerald-500/25 focus:ring-emerald-400 cursor-not-allowed"
                                        : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-indigo-500/25 focus:ring-indigo-400"
                                }
                            `}
                                disabled={currentPhase === "Phase 1 Closing"}
                            >
                                <span className="relative z-10">P1 Closing</span>
                                {currentPhase === "Phase 1 Closing" && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-75 animate-pulse"></div>
                                )}
                            </button>

                            {/* start phase 2 */}
                            <button
                                onClick={() => start("Phase 2")}
                                className={`
                                relative overflow-hidden px-4 py-3 rounded-lg font-semibold text-sm
                                transition-all duration-300 transform hover:scale-102 active:scale-98
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
                                ${
                                    currentPhase === "Phase 2"
                                        ? "bg-emerald-500/80 text-white shadow-lg shadow-emerald-500/25 focus:ring-emerald-400 cursor-not-allowed"
                                        : "bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg shadow-violet-500/25 focus:ring-violet-400"
                                }
                            `}
                                disabled={currentPhase === "Phase 2"}
                            >
                                <span className="relative z-10">Phase 2</span>
                                {currentPhase === "Phase 2" && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-75 animate-pulse"></div>
                                )}
                            </button>

                            {/* start closing 2 */}
                            <button
                                onClick={() => start("Phase 2 Closing")}
                                className={`
                                relative overflow-hidden px-4 py-3 rounded-lg font-semibold text-sm
                                transition-all duration-300 transform hover:scale-102 active:scale-98
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
                                ${
                                    currentPhase === "Phase 2 Closing"
                                        ? "bg-emerald-500/80 text-white shadow-lg shadow-emerald-500/25 focus:ring-emerald-400 cursor-not-allowed"
                                        : "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg shadow-pink-500/25 focus:ring-pink-400"
                                }
                            `}
                                disabled={currentPhase === "Phase 2 Closing"}
                            >
                                <span className="relative z-10">P2 Closing</span>
                                {currentPhase === "Phase 2 Closing" && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-75 animate-pulse"></div>
                                )}
                            </button>
                        </div>

                        {/* Reset button - separate row */}
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-102 active:scale-98 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg shadow-red-500/25"
                        >
                            Reset Timer
                        </button>
                    </div>
                </div>
            </div>

            {/* Static Footer */}
            <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-4 px-6">
                <div className="max-w-lg mx-auto text-center">
                    <p className="text-gray-500 text-xs mt-1">
                        By using this timer, you agree to NOT have your data collected. Source code on{" "}
                        <a
                            href="https://github.com/gegehprast/nightreigntimer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default App

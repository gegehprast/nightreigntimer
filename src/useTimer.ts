import { useEffect, useRef, useState } from "react"

const PHASE_1_DURATION = 270 // 4 minutes 30 seconds
const PHASE_1_CLOSING_DURATION = 180 // 3 minutes
const PHASE_2_DURATION = 210 // 3 minutes 30 seconds
const PHASE_2_CLOSING_DURATION = 180 // 3 minutes

// const PHASE_1_DURATION = 5
// const PHASE_1_CLOSING_DURATION = 3
// const PHASE_2_DURATION = 4
// const PHASE_2_CLOSING_DURATION = 3

export type Phase = "Phase 1" | "Phase 1 Closing" | "Phase 2" | "Phase 2 Closing"

const melinaNotif = new Audio("/melina-tts-file.wav")
melinaNotif.volume = 1.0
melinaNotif.load()

const useTimer = () => {
    const [isMelinaMuted, setIsMelinaMuted] = useState(false)
    const [timer, setTimer] = useState(PHASE_1_DURATION)
    const [currentPhase, setCurrentPhase] = useState<Phase | null>(null)
    const intervalRef = useRef<number | null>(null)

    // Get the next phase in the sequence
    function getNextPhase(phase: Phase): Phase | null {
        switch (phase) {
            case "Phase 1":
                return "Phase 1 Closing"
            case "Phase 1 Closing":
                return "Phase 2"
            case "Phase 2":
                return "Phase 2 Closing"
            case "Phase 2 Closing":
                return null // End of sequence
            default:
                return null
        }
    }

    // Get duration for a phase
    function getPhaseDuration(phase: Phase): number {
        switch (phase) {
            case "Phase 1":
                return PHASE_1_DURATION
            case "Phase 1 Closing":
                return PHASE_1_CLOSING_DURATION
            case "Phase 2":
                return PHASE_2_DURATION
            case "Phase 2 Closing":
                return PHASE_2_CLOSING_DURATION
        }
    }

    // Start a specific phase or auto-continue from current
    function startPhase(phase: Phase) {
        setCurrentPhase(phase)
        const duration = getPhaseDuration(phase)
        setTimer(duration)

        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }

        intervalRef.current = setInterval(() => {
            setTimer((prev) => {
                // when 60 seconds left on a timer, play audio
                if (["Phase 1", "Phase 2"].includes(phase) && prev === 63) {
                    melinaNotif.play().catch((e) => {
                        console.error("Failed to play audio:", e)
                    })
                }

                if (prev <= 1) {
                    // Timer reached 0, check for next phase
                    const nextPhase = getNextPhase(phase)

                    if (nextPhase) {
                        // Auto-start next phase
                        setTimeout(() => startPhase(nextPhase), 100)
                    } else {
                        // End of sequence
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current)
                        }
                        setCurrentPhase(null)
                    }

                    return 0
                }
                return prev - 1
            })
        }, 1000)
    }

    function start(phase: Phase = "Phase 1") {
        startPhase(phase)
    }

    function muteMelina() {
        melinaNotif.muted = true
        setIsMelinaMuted(true)
    }

    function unmuteMelina() {
        melinaNotif.muted = false
        setIsMelinaMuted(false)
    }

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])

    return { timer, currentPhase, start, isMelinaMuted, muteMelina, unmuteMelina }
}

export default useTimer

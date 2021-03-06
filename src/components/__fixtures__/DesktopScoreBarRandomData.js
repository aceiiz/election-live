import { useState, useEffect } from "react"
import _ from "lodash"

let initialState = {
  complete: 0,
  data: [],
}

export function useRandomScoreBarData() {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    const interval = setInterval(() => {
      setState(state => {
        const complete = state.complete
          ? Math.min(state.complete + 0.05, 1)
          : 0.3
        return {
          complete,
          data: getRandomScoreBarData(complete),
        }
      })
    }, 15000)

    return () => clearInterval(interval)
  }, [])
  return state.data
}

export function getRandomScoreBarData(complete = 0.0) {
  return [
    {
      id: 8,
      type: "zone",
      name: "เพือไทย",
      color: "#cf1e38",
      count: (_.random(80, 150) * complete) | 0,
    },
    {
      id: 83,
      type: "zone",
      name: "พลังประชารัฐ",
      color: "#1f68dd",
      count: (_.random(40, 75) * complete) | 0,
    },
    {
      id: 1,
      type: "zone",
      name: "ประชาธิปัตย์",
      color: "#06aff3",
      count: (_.random(80, 100) * complete) | 0,
    },
    {
      id: 15,
      type: "zone",
      name: "ภูมิใจไทย",
      color: "#209fa0",
      count: (_.random(10, 30) * complete) | 0,
    },
    {
      id: 12,
      type: "zone",
      name: "ชาติไทยพัฒนา",
      color: "#ff72a8",
      count: (_.random(5, 10) * complete) | 0,
    },
    {
      id: 10,
      type: "zone",
      name: "ชาติพัฒนา",
      color: "#ffaf41",
      count: (_.random(5, 10) * complete) | 0,
    },
    {
      id: 68,
      type: "zone",
      name: "อนาคตใหม่",
      color: "#ef7824",
      count: (_.random(0, 10) * complete) | 0,
    },
    {
      id: 39,
      type: "zone",
      name: "เสรีรวมไทย",
      color: "#b49e31",
      count: (_.random(0, 2) * complete) | 0,
    },
    {
      id: 84,
      type: "zone",
      name: "เศรษฐกิจใหม่",
      color: "#6e2fff",
      count: (_.random(0, 2) * complete) | 0,
    },
  ]
}

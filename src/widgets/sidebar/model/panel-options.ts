export const activityOptions = ["도보", "자전거", "자동차"] as const;

export const toggleOptions = [
  { key: "avoidHighway", label: "고속도로는 피함", enabled: true },
  { key: "distanceMarker", label: "거리 마커 표시", enabled: true },
  { key: "elevation", label: "고도 표시", enabled: false },
  { key: "bikeRoad", label: "자전거도로 표시", enabled: false },
] as const;

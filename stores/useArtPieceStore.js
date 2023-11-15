import { create } from 'zustand'
const initialArtPieces = [
  {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: {
      height: 2432,
      width: 1920,
      type: "jpg",
    },
  },
  {
    slug: "blue-and-red",
    artist: "Jung-Hua Lui",
    name: "Blue and Red",
    imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
    year: "2019",
    genre: "Abstract Painting",
    colors: ["#3f9eab", "#dfa597", "#323f6a", "#88d9ce", "#5a614c"],
    dimensions: {
      height: 2560,
      width: 1920,
      type: "jpg",
    },
  },
];
export const useArtPieceStore = create(() => ({
    ArtPieces: initialArtPieces,
      
}))










export const useLightsStore = create((set, get) => ({
    lights: initialLights,
    switches: [],
    numOfSwitchedOnLights: () => get().lights.reduce((prev, curr) => prev + (curr.isOn ? 1 : 0), 0),
    handleToggle: (lightId) => set(state => ({
        lights: produce(state.lights, draft => {
            const light = draft.find(light => light.id === lightId)
            light.isOn = !light.isOn
        })
    })),
    switchAllLights: (shouldSwitchOn) => set(state => ({
        lights: produce(state.lights, draft => {
            draft.forEach(light => light.isOn = shouldSwitchOn)
        })
    }))
}))
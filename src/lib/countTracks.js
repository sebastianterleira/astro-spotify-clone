export const  countTrack = (totalTracks) => {
  const arr = []

  for (let index = 1; index <= totalTracks; index++) {
    arr.push(index)
  }
  return arr
}
const setBodyClass = (intervals, currentTime) => {
  let className = ""
  intervals.forEach(interval => {
    if (interval[0] < currentTime) {
      className = interval[1]
    }
  })
  document.body.className = `mspfa p1 ${className}`

  // console.log(className)
}

const classIntervals = [
  [2, "wide"],
  [4, ""],
  [5, "zoom cap"],
  [6, "zoom"],
  [11, "zoom prep"],
  [12, "zoom prep bars daveground"],
  [14, "zoom prep daveground"],
  [16, "zoom prep cols red"],
  [18, "zoom prep red"],
  [19, "zoom"],
  [20, "zoom cap"],
  [25, ""],
]

setInterval(() => {

  if (document.querySelector("#play")) {
    document.getElementById("play").onclick = () => {
      document.querySelector("video").play()
      document.querySelector("#play").remove()
    }
  }

  if (document.querySelector(".p1 video")) {
    let vidTime = document.querySelector(".p1 video").currentTime
   
    setBodyClass(classIntervals, vidTime)

  }



}, 100);


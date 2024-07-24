
const getIDFromUrl = (url) => {
    const vehicleURLSplit = url.split("/");
    const staffURLSplit = url.split("/");

  return (
    vehicleURLSplit[6],
    staffURLSplit[6]
  )
}

export default getIDFromUrl
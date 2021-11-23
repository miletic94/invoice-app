
 export const useDateString = (dateString) => {
    const options = {day:"numeric", month:"short", year:"numeric"}
    const date = new Date(dateString)
    return date.toLocaleDateString("en-GB", options)
}
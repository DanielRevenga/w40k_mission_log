import { useRef } from "react"

export const SubstractCounter = ({ className, substractPoints, setTotalPoints, missionPoints }) => {

   const timer = useRef(null)

   const onClickSubstractHandler = (event) => {
      substractPoints(lastPointsCounter => {
         const newPoints = lastPointsCounter - 1

         if (newPoints < 0) return 0
         else if (newPoints > 15) return 15

         return newPoints
      })

      if (setTotalPoints && missionPoints > 0) {
         setTotalPoints(lastTotalPointsCounter => {
            const newPoints = lastTotalPointsCounter - 1

            if (newPoints < 10) return 10
            else if (newPoints > 100) return 100

            return newPoints
         })
      }
   }

   const onMouseDownHandler = (event) => {

      timer.current = setInterval(() => {
         substractPoints(lastPointsCounter => {
            const newPoints = lastPointsCounter - 1

            if (newPoints < 0) return 0
            else if (newPoints > 15) return 15

            return newPoints
         })

         if (setTotalPoints && missionPoints > 0) {
            setTotalPoints(lastTotalPointsCounter => {
               const newPoints = lastTotalPointsCounter - 1

               if (newPoints < 10) return 10
               else if (newPoints > 100) return 100

               return newPoints
            })
         }
      }, 500)
   }

   const onMouseUpHandler = (event) => {
      clearTimeout(timer.current)
   }

   const onMouseLeaveHandler = (event) => {
      clearTimeout(timer.current)
   }



   return (
      <div
         className={className}
         onClick={onClickSubstractHandler}
      // onMouseDown={onMouseDownHandler}
      // onMouseUp={onMouseUpHandler}
      // onMouseLeave={onMouseLeaveHandler}
      >
         -
      </div>
   )
}

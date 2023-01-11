import { useRef } from "react"

export const AddCounter = ({ className, addPoints, setTotalPoints, max, missionPoints }) => {

   const timer = useRef(null)

   const onClickAddHandler = (event) => {

      addPoints(lastPointsCounter => {
         const newPoints = lastPointsCounter + 1

         if (newPoints < 0) return 0
         else if (newPoints > max) return max

         return newPoints
      })

      if (setTotalPoints && missionPoints < max) {
         setTotalPoints(lastTotalPointsCounter => {
            const newPoints = lastTotalPointsCounter + 1

            if (newPoints < 10) return 10
            else if (newPoints > 100) return 100

            return newPoints
         })
      }
   }

   const onMouseDownHandler = (event) => {

      timer.current = setInterval(() => {
         addPoints(lastPointsCounter => {
            const newPoints = lastPointsCounter + 1

            if (newPoints < 0) return 0
            else if (newPoints > max) return max

            return newPoints
         })

         if (setTotalPoints && missionPoints < max) {
            setTotalPoints(lastTotalPointsCounter => {
               const newPoints = lastTotalPointsCounter + 1

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
         onClick={onClickAddHandler}
      // onMouseDown={onMouseDownHandler}
      // onMouseUp={onMouseUpHandler}
      // onMouseLeave={onMouseLeaveHandler}
      >
         +
      </div>
   )
}


export const AddCounter = ({ className, addPoints }) => {

   const onClickAddHandler = (event) => {
      addPoints(lastPointsCounter => lastPointsCounter + 1)
   }

   return (
      <div className={className} onClick={onClickAddHandler}>
         +
      </div>
   )
}

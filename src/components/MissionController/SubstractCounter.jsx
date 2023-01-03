
export const SubstractCounter = ({ className, substractPoints }) => {

   const onClickSubstractHandler = (event) => {
      substractPoints(lastPointsCounter => lastPointsCounter - 1)
   }

   return (
      <div className={className} onClick={onClickSubstractHandler}>
         -
      </div>
   )
}

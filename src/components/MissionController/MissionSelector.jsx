

export const MissionSelector = ({ className }) => {

   return (
      <select name="mission" className={`mission-selector ${className}`}>
         <option value="0">Misión elegante</option>
         <option value="1">Misión sucia</option>
         <option value="2">Misión ratuna</option>
         <option value="3">Misión descabellada</option>
         <option value="4">Misión gatuna</option>
      </select>
   )
}

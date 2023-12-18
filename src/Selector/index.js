
import SelectItem from "./SelectItems"
function SelectTimesPage() {
    return <div>
        <h1>Counties</h1>
        <SelectItem data={['Nutan', 'Shekhar', 'Mohan', 'Ram']} />
        <h1>Cities</h1>
        <SelectItem data={['Delhi', 'Mumbai', 'Kolkata']} />
    </div>
}
export default SelectTimesPage;




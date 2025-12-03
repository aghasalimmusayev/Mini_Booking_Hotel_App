import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/SliceHook"
import { fetchCountries } from "../redux/slices/CountrySlice"
import { fetchBoardTypes } from "../redux/slices/BoardTypesSlice"
import { fetchHotels } from "../redux/slices/HotelSlice"
import { Hotel } from '../types/HotelBookingTypes'
import Calendar from "./childComponents/Calendar"
import BoardType from "./childComponents/BoardType"
import Summary from "./childComponents/Summary"
import { fetchCitizens } from "../redux/slices/CitizenSlice"

function BookingForm() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchCountries())
        dispatch(fetchBoardTypes())
        dispatch(fetchHotels())
        dispatch(fetchCitizens())
    }, [dispatch])
    const countryData = useAppSelector((state => state.countries.items))
    const boardTypes = useAppSelector((state) => state.boardTypes.items)
    const hotels = useAppSelector((state) => state.hotels.items)
    const citizens = useAppSelector((state) => state.citizens.items)
    const citizenName = citizens.map(c => c.citizen)
    const [day, setDay] = useState(0)
    const [bType, setBType] = useState('')
    const [citizen, setCitizen] = useState('')
    const [country, setCountry] = useState('')
    const [hotelName, setHotelName] = useState('')
    const [selectedHotel, setSlectedHotel] = useState<Hotel | undefined>(undefined)
    const [total, setTotal] = useState(0)
    const activeBoardTypeName = boardTypes.find(b => b.code === bType);
    const hotelsByCountry = (country: string) => {
        if (!country) return []
        const ctrObj = countryData?.find(c => c.name == country)
        return hotels?.filter(h => h.countryId === ctrObj?.id)
    }
    useEffect(() => {
        const h = hotels.find(h => h.name === hotelName)
        setSlectedHotel(h)
    }, [hotelName])
    useEffect(() => {
        const hotelPrice = (selectedHotel?.price ?? 0) * day
        const mealPrice = (activeBoardTypeName?.price ?? 0) * day
        setTotal(hotelPrice + mealPrice)
    }, [selectedHotel, activeBoardTypeName, day])

    return (
        <div className="mt-10 w-[600px] m-auto p-10">
            <form action="" className="flex flex-col gap-2 p-5 border rounded-2xl bg-slate-200">
                <h3 className="w-fit m-auto">Booking Hotel</h3>
                <div>
                    <label htmlFor="" className="inline-block w-20">Citizen</label>
                    <select
                        name="Contries"
                        id=""
                        onChange={(e) => setCitizen(e.target.value)}
                        value={citizen}
                        className="w-[250px] bg-slate-100 p-2 rounded">
                        <option value="" hidden>Your Citizen</option>
                        {citizenName?.
                            sort()
                            .map((c, index) => (
                                <option key={index} value={c}>{c}</option>
                            ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="" className="inline-block w-20">Country</label>
                    <select
                        name="Contries"
                        id=""
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
                        className="w-[250px] bg-slate-100 p-2 rounded">
                        <option value="" hidden>Destination Country</option>
                        {countryData?.map((c) => (
                            <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                    </select>
                </div>
                {country &&
                    <div>
                        <label htmlFor="" className="inline-block w-20">Hotel</label>
                        <select name=""
                            className="w-[250px] p-2 rounded bg-slate-100"
                            onChange={(e) => setHotelName(e.target.value)}>
                            <option value="" hidden>Select Hotel in {country}</option>
                            {hotelsByCountry(country).map(h => (
                                <option key={h.id} value={h.name}>{h.name}</option>
                            ))}
                        </select>
                    </div>
                }
                <Calendar day={day} setDay={setDay} />
                <BoardType setBType={setBType} boardTypes={boardTypes} />
            </form>
            <Summary
                citizen={citizen}
                country={country}
                day={day}
                hotelName={hotelName}
                selectedHotel={selectedHotel}
                activeBoardTypeName={activeBoardTypeName}
                total={total}
            />
        </div>
    )
}

export default BookingForm

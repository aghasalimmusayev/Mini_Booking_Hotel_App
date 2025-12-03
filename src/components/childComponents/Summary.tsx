import { Hotel, BoardType } from '../../types/HotelBookingTypes'

interface SummaryProps {
    citizen: string,
    country: string,
    day: number,
    hotelName: string,
    selectedHotel: Hotel | undefined,
    activeBoardTypeName: BoardType | undefined,
    total: number
}

export default function Summary({ citizen, country, day, hotelName, selectedHotel, activeBoardTypeName, total }: SummaryProps) {
    return (
        <div className="bg-slate-200 rounded-2xl p-5 mt-5">
            <p>Summary:</p>
            {citizen && <p className="ml-5">Citizen: {citizen ? citizen : ''}</p>}
            {country && <p className="ml-5">Country: {country ? country : ''}</p>}
            {day > 0 && <p className="ml-5">{day} {day <= 1 ? 'day' : 'days'}</p>}
            {hotelName &&
                <p className="ml-5 flex justify-between">
                    <span>Selected Hotel: {hotelName} (for a night)</span>
                    <span>{selectedHotel?.price} $</span>
                </p>}
            {activeBoardTypeName &&
                <p className="ml-5 flex justify-between">
                    <span>{activeBoardTypeName.name} - {activeBoardTypeName.descriptions}</span>
                    <span>{activeBoardTypeName.price} $</span>
                </p>
            }
            {total > 0 &&
                <div>
                    {selectedHotel &&
                        <p className="ml-5 flex justify-between">
                            <span>Room price for {day} {day <= 1 ? 'day' : 'days'}:</span>
                            <span> {(selectedHotel?.price ?? 0) * day} $</span>
                        </p>}
                    {activeBoardTypeName &&
                        <p className="ml-5 flex justify-between">
                            <span>BoardType price for {day} {day <= 1 ? 'day' : 'days'}:</span>
                            <span>{(activeBoardTypeName?.price ?? 0) * day} $</span>
                        </p>}
                    {selectedHotel && activeBoardTypeName &&
                        <p>Total: {total} $</p>}
                </div>}
        </div>
    )
}

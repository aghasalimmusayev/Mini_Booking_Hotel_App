import React, { useEffect, useState } from "react"

interface CalendarProp {
    day: number,
    setDay: React.Dispatch<React.SetStateAction<number>>
}

function Calendar({ day, setDay }: CalendarProp) {

    const [startDay, setStartDay] = useState('')
    const [endDay, setEndDay] = useState('')

    useEffect(() => {
        if (!startDay || !endDay) {
            setDay(0)
            return
        }
        const firstDay = new Date(startDay)
        const lastDay = new Date(endDay)
        const dayMS = lastDay.getTime() - firstDay.getTime()
        const day = dayMS / (1000 * 60 * 60 * 24)
        setDay(dayMS >= 0 ? day : 0)
    }, [startDay, endDay])

    return (
        <div className="mt-5">
            <div className="flex gap-3">
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Start date</label>
                    <input type="date" value={startDay} onChange={(e) => setStartDay(e.target.value)}
                        className="px-1" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">End date</label>
                    <input type="date" value={endDay} onChange={(e) => setEndDay(e.target.value)}
                        className="px-1" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Staying for:</label>
                    <div>{day} {day <= 1 ? 'day' : 'days'}</div>
                </div>
            </div>
        </div>
    )
}

export default Calendar

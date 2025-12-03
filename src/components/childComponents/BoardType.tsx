import React from 'react'
import { BoardType } from '../../types/HotelBookingTypes'

interface BoardTypeProp {
    setBType: React.Dispatch<React.SetStateAction<string>>,
    boardTypes: BoardType[]
}

function BoardType({ setBType, boardTypes }: BoardTypeProp) {

    return (
        <div>
            <div className="flex flex-col gap-1">
                {boardTypes?.map(bt => (
                    <div key={bt.code} className="flex items-center cursor-pointer w-fit">
                        <input
                            type="radio"
                            name="BoardType"
                            value={bt.code}
                            onChange={(e) => setBType(e.target.value)}
                            id={bt.code}
                            className="mt-1 cursor-pointer" />
                        <label htmlFor={bt.code} className="pl-2 cursor-pointer">{bt.code}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BoardType




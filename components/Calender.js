import React from 'react'
import { Fugaz_One } from 'next/font/google'
import { gradients, baseRating } from '@/utils/index'
const months = { 'january': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec'}
const monthsArr = Object.keys(months)
const now = new Date()
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

const data = {
  "15": 2, "16": 4, "17": 1, "18": 3
}

const Calender = (props) => {
  const {demo} = props
  const year = 2024
  const month = 'July'
  // creates a JavaScript Date object representing the first day of a specified month in a given year. 
  const monthNow = new Date(year, Object.keys(months).indexOf(month), 1)
  console.log('calneday month',monthNow)
  const firstDayOfMonth = monthNow.getDay()
  console.log('first',firstDayOfMonth)
  const daysInMonth = new Date(year, Object.keys(months).indexOf(month) + 1, 0).getDate()
  //Object.keys(months).indexOf(month) + 1 moves to the next month (August), and setting the day to 0 gives you the last day of the previous month (July).
  const daysToDisplay = firstDayOfMonth + daysInMonth
  console.log(daysToDisplay)
  const numRows = (Math.floor(daysToDisplay / 7)) + (daysToDisplay % 7 ? 1 : 0)
  console.log('numrows', numRows)
  return (
    <div className="flex flex-col overflow-hidden gap-1 py-4 sm:py-6 md:py-10">
     {[...Array(numRows).keys()].map((row, rowIndex) => {
      return (
        <div key={rowIndex} className='grid grid-cols-7 gap-1'>
            {dayList.map((dayOfWeek, dayOfWeekIndex) => {
                                let dayIndex = (rowIndex * 7) + dayOfWeekIndex - (firstDayOfMonth - 1)

                                let dayDisplay = dayIndex > daysInMonth ? false : (row === 0 && dayOfWeekIndex < firstDayOfMonth) ? false : true

                                let isToday = dayIndex === now.getDate()

                                if (!dayDisplay) {
                                    return (
                                        <div className='bg-white' key={dayOfWeekIndex} />
                                    )
                                }

                                let color = demo ?
                                gradients.indigo[baseRating[dayIndex]] :
                                dayIndex in data ?
                                    gradients.indigo[data[dayIndex]] :
                                    'white'
                                return (
                                  <div style={{ background: color }} className={'text-xs  sm:text-sm border border-solid p-2 flex items-center gap-2 text-center justify-between rounded-lg ' + (isToday ? ' border-indigo-400' : ' border-indigo-100') + (color === 'white' ? ' text-indigo-400' : ' text-white')} key={dayOfWeekIndex}>
                                      <p>{dayIndex}</p>
                                  </div>
                              )

                            })}
                        </div>
      )
     })}
    </div>
  )
}

export default Calender
// import React, {FC, useEffect, useState} from "react";
// import {Input, Option, Popover, PopoverContent, PopoverHandler, Select, Typography,} from "@material-tailwind/react";
// import {DayPicker} from "react-day-picker";
// import {format} from "date-fns";
// import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/16/solid";
// import {Trip} from "../../Modal/Trip.ts";
//
// interface TripDetailsProps {
//     // handleChange?: (e: any) => void;
//     setTrip: (trip: Trip) => void;
// }
//
// export const TripDetails: FC<TripDetailsProps> = ({setTrip}) => {
//     const [startDate, setStartDate] = React.useState();
//     const [endDate, setEndDate] = React.useState();
//
//     useEffect(() => {
//         setTrip((prevTrip) => ({
//             ...prevTrip,
//             startDate: startDate ? format(startDate, 'MM/dd/yyyy') : '',
//         }))
//     }, [startDate])
//
//     useEffect(() => {
//         setTrip((prevTrip) => ({
//             ...prevTrip,
//             endDate: endDate ? format(endDate, 'MM/dd/yyyy') : '',
//         }))
//     }, [endDate])
//
//     const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
//         const {name, value} = e.target;
//         setTrip((prevTrip) => ({
//             ...prevTrip,
//             [name]: value, // Dynamically update the specific field
//         }));
//     };
//
//     return (
//         <>
//             <div className="flex flex-col mt-8">
//                 <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
//                     <div className="w-full">
//                         <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="mb-2 font-bold"
//                         >
//                             Description
//                         </Typography>
//                         <Input
//                             size="lg"
//                             name="description"
//                             placeholder="Goa Vacation"
//                             labelProps={{
//                                 className: "hidden",
//                             }}
//                             onChange={handleChange}
//                             className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
//                         />
//                     </div>
//                     <div className="w-full">
//                         <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="mb-2 font-bold"
//                         >
//                             Origin
//                         </Typography>
//                         <Input
//                             size="lg"
//                             name="origin"
//                             placeholder="Delhi"
//                             labelProps={{
//                                 className: "hidden",
//                             }}
//                             onChange={handleChange}
//                             className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
//                         />
//                     </div>
//                     <div className="w-full">
//                         <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="mb-2 font-bold"
//                         >
//                             Destination
//                         </Typography>
//                         <Input
//                             size="lg"
//                             name="destination"
//                             placeholder="Goa"
//                             labelProps={{
//                                 className: "hidden",
//                             }}
//                             onChange={handleChange}
//                             className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
//                         />
//                     </div>
//                 </div>
//                 <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
//                     <div className="w-full">
//                         <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="mb-2 font-bold"
//                         >
//                             Start Date
//                         </Typography>
//                         <Popover placement="bottom">
//                             <PopoverHandler>
//                                 <Input
//                                     size="lg"
//                                     placeholder="Select a Date"
//                                     value={startDate ? format(startDate, 'MM/dd/yyyy') : ""}
//                                     labelProps={{
//                                         className: "hidden",
//                                     }}
//                                     className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
//                                 />
//                             </PopoverHandler>
//                             <PopoverContent>
//                                 <DayPicker
//                                     mode="single"
//                                     selected={startDate}
//                                     onSelect={setStartDate as any}
//                                     showOutsideDays
//                                     className="border-0"
//                                     classNames={{
//                                         caption:
//                                             "flex justify-center py-2 mb-4 relative items-center",
//                                         caption_label: "text-sm !font-medium text-gray-900",
//                                         nav: "flex items-center",
//                                         nav_button:
//                                             "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
//                                         nav_button_previous: "absolute left-1.5",
//                                         nav_button_next: "absolute right-1.5",
//                                         table: "w-full border-collapse",
//                                         head_row: "flex !font-medium text-gray-900",
//                                         head_cell: "m-0.5 w-9 !font-normal text-sm",
//                                         row: "flex w-full mt-2",
//                                         cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
//                                         day: "h-9 w-9 p-0 !font-normal",
//                                         day_range_end: "day-range-end",
//                                         day_selected:
//                                             "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
//                                         day_today: "rounded-md bg-gray-200 text-gray-900",
//                                         day_outside:
//                                             "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
//                                         day_disabled: "text-gray-500 opacity-50",
//                                         day_hidden: "invisible",
//                                     }}
//                                     components={{
//                                         IconLeft: ({...props}) => (
//                                             <ChevronLeftIcon
//                                                 {...props}
//                                                 className="h-4 w-4 stroke-2"
//                                             />
//                                         ),
//                                         IconRight: ({...props}) => (
//                                             <ChevronRightIcon
//                                                 {...props}
//                                                 className="h-4 w-4 stroke-2"
//                                             />
//                                         ),
//                                     }}
//                                 />
//                             </PopoverContent>
//                         </Popover>
//                     </div>
//                     <div className="w-full">
//                         <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="mb-2 font-bold"
//                         >
//                             End Date
//                         </Typography>
//                         <Popover placement="bottom">
//                             <PopoverHandler>
//                                 <Input
//                                     size="lg"
//                                     placeholder="Select a Date"
//                                     value={endDate ? format(endDate, 'MM/dd/yyyy') : ""}
//                                     labelProps={{
//                                         className: "hidden",
//                                     }}
//                                     className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
//                                 />
//                             </PopoverHandler>
//                             <PopoverContent>
//                                 <DayPicker
//                                     mode="single"
//                                     selected={endDate}
//                                     onSelect={setEndDate as any}
//                                     showOutsideDays
//                                     className="border-0"
//                                     classNames={{
//                                         caption:
//                                             "flex justify-center py-2 mb-4 relative items-center",
//                                         caption_label: "text-sm !font-medium text-gray-900",
//                                         nav: "flex items-center",
//                                         nav_button:
//                                             "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
//                                         nav_button_previous: "absolute left-1.5",
//                                         nav_button_next: "absolute right-1.5",
//                                         table: "w-full border-collapse",
//                                         head_row: "flex !font-medium text-gray-900",
//                                         head_cell: "m-0.5 w-9 !font-normal text-sm",
//                                         row: "flex w-full mt-2",
//                                         cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
//                                         day: "h-9 w-9 p-0 !font-normal",
//                                         day_range_end: "day-range-end",
//                                         day_selected:
//                                             "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
//                                         day_today: "rounded-md bg-gray-200 text-gray-900",
//                                         day_outside:
//                                             "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
//                                         day_disabled: "text-gray-500 opacity-50",
//                                         day_hidden: "invisible",
//                                     }}
//                                     components={{
//                                         IconLeft: ({...props}) => (
//                                             <ChevronLeftIcon
//                                                 {...props}
//                                                 className="h-4 w-4 stroke-2"
//                                             />
//                                         ),
//                                         IconRight: ({...props}) => (
//                                             <ChevronRightIcon
//                                                 {...props}
//                                                 className="h-4 w-4 stroke-2"
//                                             />
//                                         ),
//                                     }}
//                                 />
//                             </PopoverContent>
//                         </Popover>
//                     </div>
//                     <div className="w-full">
//                         <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="mb-2 font-bold"
//                         >
//                             No of Days
//                         </Typography>
//                         <Select
//                             size="lg"
//                             labelProps={{
//                                 className: "hidden",
//                             }}
//                             name="noOfDays"
//                             onChange={(value) => handleOptionChange("noOfDays", value)}
//                             className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
//                         >
//                             <Option value="1">1</Option>
//                             <Option value="2">2</Option>
//                             <Option value="3">3</Option>
//                             <Option value="4">4</Option>
//                             <Option value="5">5</Option>
//                             <Option value="6">6</Option>
//                             <Option value="7">7</Option>
//                             <Option value="8">8</Option>
//                             <Option value="9">9</Option>
//                             <Option value="10">10</Option>
//                             <Option value="11">11</Option>
//                             <Option value="12">12</Option>
//                             <Option value="13">13</Option>
//                             <Option value="14">14</Option>
//                             <Option value="15">15</Option>
//                             <Option value="16">16</Option>
//                             <Option value="17">17</Option>
//                             <Option value="18">18</Option>
//                             <Option value="19">19</Option>
//                             <Option value="20">20</Option>
//                             <Option value="21">21</Option>
//                             <Option value="22">22</Option>
//                             <Option value="23">23</Option>
//                             <Option value="24">24</Option>
//                             <Option value="25">25</Option>
//                             <Option value="26">26</Option>
//                             <Option value="27">27</Option>
//                             <Option value="28">28</Option>
//                             <Option value="29">29</Option>
//                             <Option value="30">30</Option>
//                         </Select>
//                     </div>
//                     <div className="w-full">
//                         <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="mb-2 font-bold"
//                         >
//                             No of Nights
//                         </Typography>
//                         <Select
//                             size="lg"
//                             labelProps={{
//                                 className: "hidden",
//                             }}
//                             name="noOfNights"
//                             onChange={(value) => handleOptionChange("noOfNights", value)}
//                             className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
//                         >
//                             <Option value="1">1</Option>
//                             <Option value="2">2</Option>
//                             <Option value="3">3</Option>
//                             <Option value="4">4</Option>
//                             <Option value="5">5</Option>
//                             <Option value="6">6</Option>
//                             <Option value="7">7</Option>
//                             <Option value="8">8</Option>
//                             <Option value="9">9</Option>
//                             <Option value="10">10</Option>
//                             <Option value="11">11</Option>
//                             <Option value="12">12</Option>
//                             <Option value="13">13</Option>
//                             <Option value="14">14</Option>
//                             <Option value="15">15</Option>
//                             <Option value="16">16</Option>
//                             <Option value="17">17</Option>
//                             <Option value="18">18</Option>
//                             <Option value="19">19</Option>
//                             <Option value="20">20</Option>
//                             <Option value="21">21</Option>
//                             <Option value="22">22</Option>
//                             <Option value="23">23</Option>
//                             <Option value="24">24</Option>
//                             <Option value="25">25</Option>
//                             <Option value="26">26</Option>
//                             <Option value="27">27</Option>
//                             <Option value="28">28</Option>
//                             <Option value="29">29</Option>
//                             <Option value="30">30</Option>
//                         </Select>
//                     </div>
//                 </div>
//                 <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
//                     <div className="w-full">
//                         <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="mb-2 font-bold"
//                         >
//                             Trip Type
//                         </Typography>
//                         <Select
//                             size="lg"
//                             labelProps={{
//                                 className: "hidden",
//                             }}
//                             onChange={(value) => handleOptionChange("type", value)}
//                             className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
//                         >
//                             <Option value="Group">Group</Option>
//                             <Option value="Personal">Personal</Option>
//                         </Select>
//                     </div>
//                     <div className="w-full">
//                         <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="mb-2 font-bold"
//                         >
//                             Category
//                         </Typography>
//                         <Select
//                             size="lg"
//                             labelProps={{
//                                 className: "hidden",
//                             }}
//                             onChange={(value) => handleOptionChange("category", value)}
//                             className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
//                         >
//                             <Option value="Wildlife">Wildlife</Option>
//                             <Option value="Pilgrim">Pilgrim</Option>
//                             <Option value="Weekend">Weekend</Option>
//                             <Option value="Trek">Trek</Option>
//                             <Option value="Wildlife">Wildlife</Option>
//                         </Select>
//                     </div>
//                 </div>
//                 <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
//                     <div className="w-full">
//                         <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="mb-2 font-bold"
//                         >
//                             No of Travellers
//                         </Typography>
//                         <Input
//                             size="lg"
//                             name="noOfTravelers"
//                             placeholder="1"
//                             labelProps={{
//                                 className: "hidden",
//                             }}
//                             onChange={handleChange}
//                             className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
//                         />
//                     </div>
//                     <div className="w-full">
//                         <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="mb-2 font-bold"
//                         >
//                             Price
//                         </Typography>
//                         <Input
//                             size="lg"
//                             name="price"
//                             placeholder="1000"
//                             labelProps={{
//                                 className: "hidden",
//                             }}
//                             onChange={handleChange}
//                             className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

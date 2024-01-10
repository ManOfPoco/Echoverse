import { useState } from "react";
import DatePicker from "react-datepicker";

import Filter from "../../../components/Filter";

import { FilterStartInput, FilterEndInput } from "./FiltersInput";

import sortFilter from "../../../assets/svg/sortFilter.svg";
import SearchForm from "../../../components/SearchForm";

function HistoryFilters() {
    const [openFilter, setOpenFilter] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    function handleSetOpenFilter(filter) {
        if (openFilter === filter) {
            setOpenFilter(null);
        } else setOpenFilter(filter);
    }

    return (
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Filter
                filterImg={sortFilter}
                title="Filter by date"
                isOpen={openFilter === "Date"}
                setIsOpen={() => handleSetOpenFilter("Date")}
                filterView="date"
                placement="bottom-start"
                filtersWidth="w-80"
                key="Platform"
            >
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-5">
                        <h5 className="basis-20 md:basis-24">Start date</h5>

                        <DatePicker
                            closeOnScroll={true}
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            maxDate={new Date()}
                            placeholderText="Select filter start date"
                            customInput={
                                <FilterStartInput
                                    startDate={startDate}
                                    setStartDate={setStartDate}
                                />
                            }
                            withPortal
                            portalId="root"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <h5 className="basis-20 md:basis-24">End date</h5>

                        <DatePicker
                            closeOnScroll={true}
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            maxDate={new Date()}
                            placeholderText="Select filter end date"
                            customInput={
                                <FilterEndInput
                                    endDate={endDate}
                                    setEndDate={setEndDate}
                                />
                            }
                            withPortal
                            portalId="root"
                        />
                    </div>
                </div>
            </Filter>
            <SearchForm
                query={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
}

export default HistoryFilters;

const DepartureTravel = [
    {
        AirlineCode: "VN",
        PriceAdult: 789000,
        TotalPrice: 1414000,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-10",
    },
    {
        AirlineCode: "VN",
        PriceAdult: 969000,
        TotalPrice: 1608000,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-11",
    },
    {
        AirlineCode: "VN",
        PriceAdult: 969000,
        TotalPrice: 1608000,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-12",
    },
    {
        AirlineCode: "VU",
        PriceAdult: 728000,
        TotalPrice: 1384240,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-13",
    },
    {
        AirlineCode: "VU",
        PriceAdult: 988000,
        TotalPrice: 1665040,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-14",
    },
    {
        AirlineCode: "VU",
        PriceAdult: 728000,
        TotalPrice: 1384240,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-15",
    },
    {
        AirlineCode: "VN",
        PriceAdult: 639000,
        TotalPrice: 1252000,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-16",
    },
    {
        AirlineCode: "VN",
        PriceAdult: 439000,
        TotalPrice: 1036000,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-17",
    },
    {
        AirlineCode: "VN",
        PriceAdult: 439000,
        TotalPrice: 1036000,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-18",
    },
    {
        AirlineCode: "VN",
        PriceAdult: 439000,
        TotalPrice: 1036000,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-19",
    },
    {
        AirlineCode: "VU",
        PriceAdult: 508000,
        TotalPrice: 1146640,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-20",
    },
    {
        AirlineCode: "VN",
        PriceAdult: 639000,
        TotalPrice: 1252000,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-21",
    },
    {
        AirlineCode: "VU",
        PriceAdult: 618000,
        TotalPrice: 1265440,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-22",
    },
    {
        AirlineCode: "VU",
        PriceAdult: 298000,
        TotalPrice: 919840,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-23",
    },
    {
        AirlineCode: "VU",
        PriceAdult: 298000,
        TotalPrice: 919840,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-24",
    },
    {
        AirlineCode: "VU",
        PriceAdult: 298000,
        TotalPrice: 919840,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-25",
    },
    {
        AirlineCode: "VU",
        PriceAdult: 298000,
        TotalPrice: 919840,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-26",
    },
    {
        AirlineCode: "VU",
        PriceAdult: 198000,
        TotalPrice: 811840,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-27",
    },
    {
        AirlineCode: "VU",
        PriceAdult: 298000,
        TotalPrice: 919840,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-28",
    },
    {
        AirlineCode: "VU",
        PriceAdult: 198000,
        TotalPrice: 811840,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-29",
    },
    {
        AirlineCode: "VU",
        PriceAdult: 198000,
        TotalPrice: 811840,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-30",
    },
    {
        AirlineCode: "VU",
        PriceAdult: 198000,
        TotalPrice: 811840,
        ServiceFee: 0,
        IssueFee: 0,
        Date: "2024-01-31",
    },
];

const date = new Date();

let selectedDateCheck = null;
let selectedMonth = date.getMonth();

let inputIndex = 0;

let selectedDateCheck1;
let selectedDateCheck2;

let selectedMonth1;
let selectedMonth2;

const datepickerContainer = document.querySelector(".calendar-container");
// const datepickerInput = document.querySelector(".calendar-input");
const datepickerInputs = document.querySelectorAll(".calendar-input");
const datepicker = document.querySelector(".calendar-detail");
const closeDatepicker = document.querySelector(".calendar-close>i");

datepickerInputs.forEach((inputItem, index) => {
    if (inputItem.dataset.value.length > 0) {
        const dateString = inputItem.dataset.value;
        const parts = dateString.split("/");
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10); // Tháng không cần cộng thêm 1
        const year = parseInt(parts[2], 10);
        console.log("🚀 ~ datepickerInputs.forEach ~ day:", day);

        const dateObject = new Date(year, month - 1, day);

        if (index === 0) {
            selectedMonth1 = dateObject.getMonth() || date.getMonth();
            selectedDateCheck1 = dateObject.getDate() || null;
        } else {
            selectedMonth2 = dateObject.getMonth() || date.getMonth();
            selectedDateCheck2 = dateObject.getDate() || null;
        }

        console.log("🚀 ~ datepickerInputs.forEach ~ selectedMonth1:", selectedMonth1);
        console.log("🚀 ~ datepickerInputs.forEach ~ selectedMonth2:", selectedMonth2);
    }
});

// Hiển thị div chọn lịch khi input được focus
datepickerInputs.forEach((inputItem, index) => {
    inputItem.addEventListener("click", () => {
        inputIndex = index;
        datepicker.classList.add("active");
        renderCalendar(inputItem);
    });
});

// Ẩn div chọn lịch khi click ra ngoài div tổng
document.addEventListener("click", (event) => {
    const isClickInside = datepickerContainer.contains(event.target);
    if (!isClickInside) {
        datepicker.classList.remove("active");
    }
});

closeDatepicker.addEventListener("click", () => {
    datepicker.classList.remove("active");
});

const renderCalendar = (inputValue = null) => {
    let dateSelected = "";
    if (inputValue) {
        dateSelected = inputValue.value;
    }
    renderCalendarDate(date, ".title-first", ".calendar-days__first", dateSelected);
    // console.log("🚀 ~ renderCalendar ~ date:", date);
    const nextMonthDate = new Date(date);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    renderCalendarDate(nextMonthDate, ".title-last", ".calendar-days__last", dateSelected);
};

function renderCalendarDate(dateItem, titleContainer, containerSelector, valueSelected) {
    dateItem.setDate(1);

    const monthDays = document.querySelector(containerSelector);

    const firstDayIndex = dateItem.getDay() === 0 ? 6 : dateItem.getDay() - 1;

    const lastDay = new Date(dateItem.getFullYear(), dateItem.getMonth() + 1, 0).getDate();
    const lastDayIndex = new Date(dateItem.getFullYear(), dateItem.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;
    // console.log("🚀 ~ renderCalendar ~ nextDays:", nextDays);
    // const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];

    document.querySelector(`.calendar-header__title${titleContainer}`).innerHTML = `${months[dateItem.getMonth()]}, ${dateItem.getFullYear()}`;

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        // <div class="prev-date calendar-position" onclick="selectPrevDate(${prevLastDay - x + 1})">
        //     <span class="calendar-position__lunar">
        //         $
        //         {moment({ year: date.getMonth() - 1 < 0 ? date.getFullYear() - 1 : date.getFullYear(), month: date.getMonth() - 1 < 0 ? 11 : date.getMonth() - 1, day: prevLastDay - x + 1 })
        //             .lunar()
        //             .format("DD/MM")}
        //     </span>
        //     <span class="calendar-position__main">${prevLastDay - x + 1}</span>
        // </div>;

        days +=
            /*html*/
            `<div class="prev-date calendar-position"></div>`;
    }

    // console.log("date month", dateItem.getFullYear());
    // console.log("so sanh", new Date().getFullYear());

    for (let i = 1; i <= lastDay; i++) {
        let dayClass = "calendar-position";

        if (i === new Date().getDate() && dateItem.getMonth() === new Date().getMonth() && dateItem.getFullYear() === new Date().getFullYear() && inputIndex !== 1) {
            dayClass += i === (inputIndex === 0 ? selectedDateCheck1 : selectedDateCheck2) && dateItem.getMonth() === (inputIndex === 0 ? selectedMonth1 : selectedMonth2) ? " today selected-date" : " today";
        } else if (i === selectedDateCheck1 && dateItem.getMonth() === selectedMonth1 && inputIndex === 0) {
            dayClass += " selected-date";
        } else if (i === selectedDateCheck2 && dateItem.getMonth() === selectedMonth2 && inputIndex === 1) {
            dayClass += " selected-date";
        } else if (i === (inputIndex === 0 ? selectedDateCheck1 : selectedDateCheck2) && dateItem.getMonth() === (inputIndex === 0 ? selectedMonth1 : selectedMonth2) && dateItem.getFullYear() === new Date().getFullYear()) {
            dayClass += " selected-date";
        } else if (dateItem.getMonth() === new Date().getMonth() && i < new Date().getDate() && dateItem.getFullYear() === new Date().getFullYear()) {
            // Nếu là ngày trong tháng hiện tại và nhỏ hơn ngày hiện tại, thêm class disable
            dayClass += " disable";
        } else if (dateItem.getMonth() < new Date().getMonth() || dateItem.getFullYear() < new Date().getFullYear()) {
            // Nếu là tháng trước đó, thêm class disable
            dayClass += " disable";
        } else if (inputIndex === 1 && (dateItem.getMonth() < selectedMonth1 || (dateItem.getMonth() === selectedMonth1 && i < selectedDateCheck1))) {
            // Nếu là tháng trước đó, thêm class disable
            dayClass += " disable";
        }

        days +=
            /*html*/
            `<div class="${dayClass}" onclick="selectDate(event,${i},new Date(${dateItem.getFullYear()},${dateItem.getMonth()},${i}))">
                <span class="calendar-position__lunar">
                    ${moment({ year: dateItem.getFullYear(), month: dateItem.getMonth(), day: i }).lunar().format("DD/MM")}
                </span>
                <span class="calendar-position__main">${i}</span>
                <span class="calendar-position__money">${formatNumber(DepartureTravel.find((itemTravel) => getDayFromDate(itemTravel.Date) === i)?.TotalPrice) || ""}</span>
            </div>`;
    }

    for (let j = 1; j <= nextDays; j++) {
        // <div class="next-date calendar-position" onclick="selectNextDate(${j})">
        //     <span class="calendar-position__lunar">
        //         $
        //         {moment({ year: date.getMonth() + 1 > 11 ? date.getFullYear() + 1 : date.getFullYear(), month: date.getMonth() + 1 > 11 ? 0 : date.getMonth() + 1, day: j })
        //             .lunar()
        //             .format("DD/MM")}
        //     </span>
        //     <span class="calendar-position__main">${j}</span>
        // </div>;

        days +=
            /*html*/
            `<div class="next-date calendar-position"></div>`;
    }
    monthDays.innerHTML = days;
}

document.querySelector(".prev").addEventListener("click", () => {
    if (date > new Date()) {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    }
    checkAndTogglePrevButton();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();

    checkAndTogglePrevButton();
});

const checkAndTogglePrevButton = () => {
    const prevButton = document.querySelector(".prev");
    if (date <= new Date()) {
        prevButton.classList.add("disabled");
    } else {
        prevButton.classList.remove("disabled");
    }
};

const selectDate = (event, day, month) => {
    if (month.getMonth() === new Date().getMonth() && day < new Date().getDate()) {
        return;
    }

    if (inputIndex === 1 && (month.getMonth() < selectedMonth1 || (month.getMonth() === selectedMonth1 && day < selectedDateCheck1))) {
        return;
    }

    if (inputIndex === 0) {
        selectedDateCheck1 = day;
        selectedMonth1 = month.getMonth();
    } else {
        selectedDateCheck2 = day;
        selectedMonth2 = month.getMonth();
    }

    const numberWeek = getNumberWeek(`${date.getFullYear()}-${(month.getMonth() + 1).toString().padStart(2, "0")}-${day}`);
    const divContainerSelect = event.currentTarget.closest(".calendar-container");
    // const inputPositionDate = divContainerSelect.querySelectorAll(".calendar-input");
    const listCalendar = divContainerSelect.querySelector(".calendar-detail");

    // const selectedDay = document.getElementById("datepicker-input");
    datepickerInputs[inputIndex].value = `${numberWeek + 1 === 1 ? "CN" : `T${numberWeek + 1}`}, ${day} thg ${month.getMonth() + 1}`;

    // if (datepickerInputs.length > 1 && ((inputIndex === 1 && selectedMonth1 >= selectedMonth2) || (inputIndex === 0 && selectedMonth1 >= selectedMonth2 && selectedDateCheck1 > selectedDateCheck2))) {
    if (datepickerInputs.length > 1 && inputIndex === 0) {
        datepickerInputs[0].value = `${numberWeek + 1 === 1 ? "CN" : `T${numberWeek + 1}`}, ${day} thg ${month.getMonth() + 1}`;
        datepickerInputs[1].value = "";

        selectedDateCheck2 = null;
        selectedDateCheck1 = day;
        selectedMonth1 = month.getMonth();
    }

    document.querySelector(".selected-date")?.classList.remove("selected-date");
    event.currentTarget.classList.add("selected-date");

    listCalendar.classList.remove("active");
};

function getDayFromDate(date) {
    const dateObject = new Date(date);
    return dateObject.getDate();
}

function getNumberWeek(date) {
    const dateObject = new Date(date);
    return dateObject.getDay();
}

function formatNumber(number) {
    if (number < 1000) {
        return number.toString();
    }

    let millionPart = Math.floor(number / 1000000);
    let thousandPart = ((number % 1000000) / 1000).toFixed(0);

    let formattedNumber = millionPart > 0 ? `${millionPart}.` : "";
    formattedNumber += thousandPart > 0 ? `${thousandPart}k` : "";

    return formattedNumber;
}

function handleOverlay() {
    const btnCustomer = document.querySelector(".booking-dropdown__btn.special");
    const overlayLayout = document.querySelector(".booking-ticket__overlay");

    btnCustomer.addEventListener("click", () => {
        overlayLayout.classList.add("active");
    });

    overlayLayout.addEventListener("click", () => {
        overlayLayout.classList.remove("active");
    });
}

// const selectNextDate = (day) => {
//     if (day <= new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()) {
//         date.setMonth(date.getMonth() + 1);
//     } else {
//         // Nếu là ngày thuộc tháng cũ, cập nhật ngày và tháng mới
//         date.setMonth(date.getMonth() + 1);
//         date.setDate(day);

//         return;
//     }

//     console.log("🚀 ~ selectNextDate ~ day:", day);
//     // Kiểm tra nếu ngày được chọn thuộc tháng mới
//     selectedDateCheck = day;
//     selectedMonth = date.getMonth();
//     console.log("🚀 ~ selectNextDate ~ selectedDateCheck:", selectedDateCheck);

//     const selectedDay = document.getElementById("selected-day");
//     selectedDay.textContent = `Day: ${day}/${date.getMonth() + 1}/${date.getFullYear()}`;

//     renderCalendar();
// };

// const selectPrevDate = (day) => {
//     // Kiểm tra nếu ngày được chọn thuộc tháng mới
//     if (day <= new Date(date.getFullYear(), date.getMonth() - 1, 0).getDate()) {
//         date.setMonth(date.getMonth() - 1);
//     } else {
//         // Nếu là ngày thuộc tháng cũ, cập nhật ngày và tháng mới
//         // date.setMonth(date.getMonth() - 1);
//         // date.setDate(day);
//         return;
//     }

//     console.log("🚀 ~ selectPrevDate ~ day:", day);
//     console.log("🚀 ~ selectPrevDate ~ selectedDateCheck:", selectedDateCheck);
//     selectedDateCheck = day;

//     const selectedDay = document.getElementById("selected-day");
//     selectedDay.textContent = `Day: ${day}/${date.getMonth() - 1}/${date.getFullYear()}`;

//     renderCalendar();
// };

(() => {
    renderCalendar();
    checkAndTogglePrevButton();
    handleOverlay();
})();

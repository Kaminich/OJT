import { DatePicker, Radio } from "antd"
import dayjs from "dayjs";
import { useState } from "react"

const CustomDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        let newDate = null;

        switch (value) {
            case '7 days ago':
                newDate = dayjs().subtract(7, 'day');
                break;
            case 'Yesterday':
                newDate = dayjs().subtract(1, 'day');
                break;
            case 'Today':
                newDate = dayjs();
                break;
            case 'Tomorrow':
                newDate = dayjs().add(1, 'day');
                break;
            case '7 days later':
                newDate = dayjs().add(7, 'day');
                break;
            default:
                newDate = dayjs();
                break;
        }
        setSelectedDate(newDate);
    };

    return (
        <div style={{ display: 'grid', gap: '20px' }}>
            <DatePicker
                size="large"
                showToday={false}
                format={'DD-MM-YYYY'}
                onChange={value => setSelectedDate(value)}
                value={selectedDate}
            />
            <Radio.Group buttonStyle="solid" size="large" onChange={handleChange}>
                <Radio.Button value={'7 days ago'}>7 days ago</Radio.Button>
                <Radio.Button value={'Yesterday'}>Yesterday</Radio.Button>
                <Radio.Button value={'Today'}>Today</Radio.Button>
                <Radio.Button value={'Tomorrow'}>Tomorrow</Radio.Button>
                <Radio.Button value={'7 days later'}>7 days later</Radio.Button>
            </Radio.Group>
        </div>
    );
};

const CustomRangePicker = () => {
    const { RangePicker } = DatePicker;
    return (
        <RangePicker
            size="large"
            format={'DD-MM-YYYY'}
        />
    )
}

export { CustomDatePicker, CustomRangePicker };
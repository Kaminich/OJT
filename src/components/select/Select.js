const { Select } = require("antd")

const CustomSelect = ({ option, placeholder }) => {
    return (
        <Select
            mode="multiple"
            allowClear
            options={option}
            autoFocus={true}
            size="large"
            placeholder={placeholder}
        />
    )
}

export default CustomSelect;
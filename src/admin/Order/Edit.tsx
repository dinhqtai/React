import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, message, Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { getHistory, putHistory } from "../../api/history";
import { IHistory } from "../../model/history";
import { Status } from "../../model/history";
export const EditOrder = () => {
    const [order, setOrder] = useState();
    const navigate = useNavigate();
    const { id } = useParams()
    const FormItem = Form.Item;
    useEffect(() => {
        const getOrder = async () => {
            const { data } = await getHistory(id as string);
            setOrder(data)
        };
        getOrder()
    }, [])
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const onFinish = async (data: IHistory) => {
        try {
            const checkEdit = await putHistory(id as string, data);
            if (checkEdit) {
                message.success("Sửa trạng thái thành công!");
                setTimeout(() => {
                    navigate("/admin/order");
                }, 1000);
            } else {
                throw new Error("Sửa trạng thái  thất bại!");
            }
        } catch (error: any) {
            message.error(error.message);
        }
    };
    return (
        <div>
            <div className="flex justify-center items-center border-b-[2px]">
                <span className="text-[25px] font-bold mb-5">Sửa trạng thái Order</span>
            </div>

            <div className="mt-5">
                {order ? (
                    <Form
                        {...layout}
                        name="nest-messages"
                        initialValues={order}
                        onFinish={onFinish}
                        style={{ maxWidth: 950 }}
                    >
                        <Form.Item
                            name="status"
                            label="Status"
                        >
                            <Select
                                showSearch
                                className="w-full"
                                placeholder="Chọn status"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    ((option?.label as string) ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                            >
                                {Object.keys(Status).map((key) => (
                                    <Select.Option key={Status[key]} value={Status[key]}>
                                        {Status[key]}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            className="flex justify-center ml-72"
                            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
                        >
                            <Button type="primary" ghost htmlType="submit">
                                Sửa
                            </Button>
                        </Form.Item>
                    </Form>
                ) : (
                    <div className="flex justify-center">Đang lấy dữ liệu</div>
                )}
            </div>
        </div>
    );
};

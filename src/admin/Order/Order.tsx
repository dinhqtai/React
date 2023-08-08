import React, { useEffect, useState } from "react";
import {
    Form,
    Input,
    InputNumber,
    Popconfirm,
    Table,
    Typography,
    Select,
    message,
    Button,
    Image,
    Space,
} from "antd";

import {
    deleteIdCategory,
    getAllCategory,
    postIdcategory,
    putIdcategory,
} from "../../api/category";
import { ICategory } from "../../model/category";
import { NavLink } from "react-router-dom";
import { IHistory } from "../../model/history";
import { deleteHistory, getAllHistory } from "../../api/history";

interface Item {
    key: string;
    name: string;
    image: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: string;
    inputType: "number" | "text";
    record: Item;
    index: number;
    children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === "text" ? <Input /> : <InputNumber />;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Vui lòng nhập ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

export const AdminOrder = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState<Item[]>([]);
    const [editingKey, setEditingKey] = useState("");
    useEffect(() => {
        async function fetchOrder() {
            let { data } = await getAllHistory();
            setData(
                data.map((item: IHistory) => {
                    return {
                        key: item._id,
                        user_id: item.user_id?.name,
                        cart_id: item.cart_id._id,
                        diaChi: item.diaChi,
                        status: item.status,
                    };
                })
            );
        }

        fetchOrder();
    }, []);
    const isEditing = (record: Item) => record.key === editingKey;
    const cancel = () => {
        setEditingKey("");
    };
    const columns = [
        {
            title: "Tên Người Dùng",
            dataIndex: "user_id",
            align: "center",
            width: "25%",
            editable: true,
        },
        {
            title: "Địa Chỉ",
            dataIndex: "diaChi",
            align: "center",
            width: "25%",
            editable: true,
        },
        {
            title: "Giỏ Hàng",
            dataIndex: "cart_id",
            align: "center",
            width: "25%",
            editable: true,
        },
        {
            title: "Trạng Thái",
            dataIndex: "status",
            align: "center",
            width: "25%",
            editable: true,
        },
        {
            key: "action",
            title: "Thao tác",
            align: "center",
            width: "15%",
            render: (_: any, record: Item) => (
                <Space size="middle">
                    <NavLink to={`/admin/order/edit/${record.key}`}>
                        <Button>
                            <div className="flex ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-pencil-square"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                    />
                                </svg>
                            </div>
                        </Button>
                    </NavLink>

                    <Popconfirm
                        placement="topLeft"
                        title="Bạn muốn xóa sản phẩm?"
                        description="Xóa sẽ mất sản phẩm này trong database!"
                        onConfirm={() => {
                            deleteHistory(record.key)
                            setData(data.filter(order => order.key != record.key));
                            message.success("Xóa sản phẩm thành công!");
                        }}
                        okText="Yes"
                        cancelText="No"
                        okButtonProps={{
                            style: { backgroundColor: "#007bff", color: "white" },
                        }}
                        cancelButtonProps={{
                            style: { backgroundColor: "#dc3545", color: "white" },
                        }}
                    >
                        <Button>
                            <div className="flex ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-trash-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                </svg>
                            </div>
                        </Button>
                    </Popconfirm>
                </Space >
            ),
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: col.dataIndex === "number" ? "number" : "text",
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <Form form={form} component={false}>
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange: cancel,
                    pageSize: 10,
                }}
            />
        </Form>
    );
};
